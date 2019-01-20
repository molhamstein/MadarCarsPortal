import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';
import { forEach } from '@angular/router/src/utils/collection';
import { duration } from 'moment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class billComponent implements OnInit {
  typeBills = [];

  tripId;
  trip;

  hasOuterBill
  hasInnerBill


  outerBill = []
  innerBill = []

  outer;
  inner;


  outerBillStatus = "notBilled"
  innerBillStatus = "notBilled"


  outerDisabled = true;
  innerDisabled = true;

  outerBillId = "";
  innerBillId = "";
  statusBill = [
    {
      "value": "billed",
      "view": "Billed"
    },
    {
      "value": "notBilled",
      "view": "Not Billed"
    }
  ]
  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private route: ActivatedRoute,
    private translationLoader: FuseTranslationLoaderService,
  ) {
    this.translationLoader.loadTranslations(english);

  }

  ngOnInit() {
    var mainthis = this
    this.getParams("id", function (id) {
      mainthis.tripId = id;
      mainthis.mainServ.APIServ.get("typeBills").subscribe((data: any) => {
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.typeBills = data;

          mainthis.mainServ.APIServ.get("trips/" + mainthis.tripId).subscribe((data: any) => {
            if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
              mainthis.trip = data;
              mainthis.initOuterBill(mainthis.trip.hasOuterBill)
            } else {

            }
          })
        } else {

        }
      })

    })
  }


  changeStaus(type) {
    var url = ""
    var newStatus = ""
    if (type == "outer") {
      url = "outerBills/" + this.outerBillId;
      newStatus = this.outerBillStatus;
    }
    this.mainServ.APIServ.put(url, { "status": newStatus }).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
      }
    })

  }

  initOuterBill(hasOuterTrip) {
    if (hasOuterTrip == false) {
      if (this.trip.inCity) {
        var typeBill = this.typeBills.find(function (element) {
          return element.type == "city"
        });
        this.outerBill.push(
          {
            "quantity": this.trip['daysInCity'],
            "pricePerUnit": this.trip['pricePerDay'],
            "typeBillId": typeBill.id,
            "name": ""
          }
        )
        var filter = { "where": { "tripId": this.tripId } }
        this.mainServ.APIServ.get("tripSublocations?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
          if (this.mainServ.APIServ.getErrorCode() == 0) {
            var typeBill = this.typeBills.find(function (element) {
              return element.type == "nearbyCity"
            });
            data.forEach(element => {
              this.outerBill.push(
                {
                  "quantity": element['duration'],
                  "pricePerUnit": element['cost'],
                  "typeBillId": typeBill.id,
                  "name": ""
                }
              )
            });
          } else {

          }
        })
      }
      if (this.trip.toAirport && this.trip.fromAirport) {
        var typeBill = this.typeBills.find(function (element) {
          return element.type == "airport"
        });
        this.outerBill.push(
          {
            "quantity": 1,
            "pricePerUnit": this.trip['priceTowWay'],
            "typeBillId": typeBill.id,
            "name": ""
          }
        )

      } else if (this.trip.toAirport || this.trip.fromAirport) {
        var typeBill = this.typeBills.find(function (element) {
          return element.type == "airport"
        });
        this.outerBill.push(
          {
            "quantity": 1,
            "pricePerUnit": this.trip['priceOneWay'],
            "typeBillId": typeBill.id,
            "name": ""
          }
        )

      }
    }
    else {
      this.outerDisabled = false;
      this.mainServ.APIServ.get("outerBills/getouterBill/" + this.tripId).subscribe((data: any) => {
        if (this.mainServ.APIServ.getErrorCode() == 0) {
          this.outerBillStatus = data['status']
          this.outerBillId = data['id']
          this.hasOuterBill = hasOuterTrip
          data.bills.forEach(element => {
            this.outerBill.push(
              {
                "quantity": element['quantity'],
                "pricePerUnit": element['pricePerUnit'],
                "typeBillId": element['typeBillId'],
                "name": element['titleEn'],
                "id": element['id']
              }
            )
          });

          this.outer = data;
        } else {

        }
      })

    }
  }

  addNewBill(type) {
    var bills = [];
    var type;
    if (type == "outer") {
      bills = this.outerBill;
      type = "outer"
    }
    bills.push({
      "quantity": 1,
      "pricePerUnit": 0,
      "typeBillId": this.typeBills[0].id,
      "name": ""
    }
    )
  }

  addBill(index, type) {
    var bills = [];
    var type;
    var url
    if (type == "outer") {
      bills = this.outerBill;
      type = "outer"
      url = "bills"
    }
    var oneBill = bills[index];
    if (oneBill.pricePerUnit == '' || oneBill.quantity == '' || oneBill.name == '')
      return;
    var tempObject = {};
    tempObject['titleEn'] = oneBill['name']
    tempObject['titleAr'] = oneBill['name']
    tempObject['titleTr'] = oneBill['name']
    tempObject['quantity'] = oneBill['quantity']
    tempObject['pricePerUnit'] = oneBill['pricePerUnit']
    tempObject['totalPrice'] = tempObject['pricePerUnit'] * tempObject['quantity']
    tempObject['typeBillId'] = oneBill['typeBillId']
    tempObject['ownerId'] = this.trip['ownerId']
    tempObject['tripId'] = this.tripId;
    tempObject['type'] = type;
    console.log(tempObject);
    this.mainServ.APIServ.post(url, tempObject).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        bills[index]['id'] = data['id']
        if (type == "outer") {
          this.outerBillId = data['outerBillId'];
          this.outerDisabled = false;
        }
      }
    })

  }

  deleteBill(index, type) {
    var bills = [];
    var type;
    var url
    if (type == "outer") {
      bills = this.outerBill;
      type = "outer"
      url = "bills"
    }
    var oneBill = bills[index];
    if (oneBill['id'] == null) {
      bills.splice(index, 1)
    }
    else {
      this.mainServ.APIServ.delete(url + "/" + oneBill['id']).subscribe((data: any) => {
        if (this.mainServ.APIServ.getErrorCode() == 0) {
          bills.splice(index, 1)
        }
      })
    }

  }

  editBill(index, type) {
    var bills = [];
    var type;
    var url
    if (type == "outer") {
      bills = this.outerBill;
      type = "outer"
      url = "bills"
    }
    var oneBill = bills[index];
    if (oneBill.pricePerUnit == '' || oneBill.quantity == '' || oneBill.name == '')
      return;
    var tempObject = {};
    tempObject['titleEn'] = oneBill['name']
    tempObject['titleAr'] = oneBill['name']
    tempObject['titleTr'] = oneBill['name']
    tempObject['quantity'] = oneBill['quantity']
    tempObject['pricePerUnit'] = oneBill['pricePerUnit']
    tempObject['totalPrice'] = tempObject['pricePerUnit'] * tempObject['quantity']
    tempObject['typeBillId'] = oneBill['typeBillId']
    this.mainServ.APIServ.put(url + "/" + oneBill['id'], tempObject).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
      }
    })

  }

  getParams(name, callback) {
    this.route.paramMap.subscribe(params => {
      callback(params.get(name));
    })
  }

  getCreatedDate(type) {
    if (type == "outer" && this.hasOuterBill) {
      if (this.outer)
        return this.outer['createdAt']
      else
        return
    }
    else if (type == "inner" && this.hasInnerBill) {

    }
    else {
      return new Date();
    }

  }


  getType(type) {
    if (type == "outer" && this.hasOuterBill) {
      if (this.outer && this.outer['status'] == "notBilled")
        return "Not Billed"
      else
        return
    }
    else if (type == "inner" && this.hasInnerBill) {

    }
    else {
      return "Not Billed"
    }
  }

}