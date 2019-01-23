import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from '../../../../languageFiles/en';

import { MainService } from '../../../../../core/services/main.service';
import { DialogService } from '../../../../../core/services/dialog.service';



@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class tripsComponent implements OnInit {
  rows = [];
  count: number = 0;
  offset: number = 0;
  limit: number = 10;


  disableObject = { "next": false, "prev": true, "first": true, "end": false }
  constructor(private translationLoader: FuseTranslationLoaderService
    , private translateService: TranslateService
    , private mainServ: MainService,
    private dialogServ: DialogService,
    public dialog: MatDialog) {
    this.translationLoader.loadTranslations(english);
    this.inisilaize();
  }


  next() {
    console.log("next")
    this.setPage(this.offset, this.limit, "next");
  }

  prev() {
    console.log("prev")
    if (this.offset - (this.limit * 2) >= 0)
      this.setPage(this.offset - (this.limit * 2), this.limit, "prev");
    else
      this.setPage(0, this.limit, "prev");

  }

  first() {
    console.log("first")
    this.setPage(0, this.limit, "first");

  }

  addHours(h, start) {
    console.log(start.toString())
    var date = new Date(start.toString());
    date.setHours(date.getHours() + h);
    console.log(date)
    return date
  }

  calcStartDateAndEnd() {
    for (let index = 0; index < this.rows.length; index++) {
      const element = this.rows[index];
      if (element.type == "fromAirport") {
        element.start = element.fromAirportDate;
        element.end = this.addHours(2, element.fromAirportDate);
      } else if (element.type == "city") {
        element.start = element.startInCityDate;
        element.end = element.endInCityDate;
      } else if (element.type == "toAirport") {
        element.start = element.toAirportDate;
        element.end = this.addHours(2, element.toAirportDate);
      } else if (element.type == "fromAirportAndCity") {
        element.start = element.fromAirportDate;
        element.end = element.endInCityDate;
      } else if (element.type == "fromAirportAndToAirport") {
        element.start = element.fromAirportDate;
        element.end = element.toAirportDate;
      } else if (element.type == "cityAndToAirport") {
        element.start = element.startInCityDate;
        element.end = this.addHours(2, element.toAirportDate);
      } else if (element.type == "fromAirportAndCityAndToAirport") {
        element.start = element.fromAirportDate;
        element.end = this.addHours(2, element.toAirportDate);
      }
    }
  }
  end() {
    console.log("end")
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("trips/getEnd?limit=" + this.limit).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.mainServ.loaderSer.display(false);
        this.rows = data.data;
        this.calcStartDateAndEnd();
        console.log(this.rows);
        this.offset = data.count
        // if (data.length < limit) {
        this.disableObject = { "next": true, "prev": false, "first": false, "end": true }
        // }

      }
      else if (this.mainServ.APIServ.getErrorCode() == 400) {

      }
      else {
      }

    });
  }


  setPage(offset, limit, type: string = "defult", numRows: number = 0) {
    this.mainServ.loaderSer.display(true);
    var filter = { "limit": limit, "skip": offset }
    this.mainServ.APIServ.get("trips?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.mainServ.loaderSer.display(false);
        if (data.length > 0)
          this.rows = data;
        console.log(this.rows);
        this.calcStartDateAndEnd();

        if (type == "defult") {
          this.offset += data.length
          if (data.length < limit) {
            this.disableObject = { "next": true, "prev": true, "first": true, "end": true }
          }
        }
        if (type == "refresh") {
          this.offset += data.length - numRows
          if (data.length < limit) {
            this.disableObject = { "next": true, "prev": true, "first": true, "end": true }
          }
        }

        else if (type == "next") {
          this.offset += data.length
          if (data.length < limit) {
            this.disableObject = { "next": true, "prev": false, "first": false, "end": true }
          }
          else if (data.length == limit) {
            this.disableObject = { "next": false, "prev": false, "first": false, "end": false }
          }
        }
        else if (type == "prev") {
          this.offset = offset + data.length
          if (offset == 0) {
            this.disableObject = { "next": false, "prev": true, "first": true, "end": false }
          } else if (data.length == limit) {
            this.disableObject = { "next": false, "prev": false, "first": false, "end": false }
          }
        }
        else if (type == "first") {
          this.offset = data.length
          this.disableObject = { "next": false, "prev": true, "first": true, "end": false }

        }
      }
      else if (this.mainServ.APIServ.getErrorCode() == 400) {

      }
      else {
      }

    });
  }





  inisilaize() {
    if (this.offset == 0)
      this.setPage(this.offset, this.limit);
    else
      this.setPage(this.offset - this.rows.length, this.limit, "refresh", this.rows.length);
  }

  ngOnInit() {
  }


  goTo(pageName, id) {
    let url = ""
    if (pageName == 'view') {
      url = 'view-trip/' + id
    } else if (pageName == 'edit') {
      url = 'edit-trip/' + id
    }else if (pageName == 'bills') {
      url = 'bill/' + id
    }
    
    this.mainServ.globalServ.goTo(url)
  }

  addUser() {
    this.mainServ.globalServ.goTo("add-trip")
  }


  changeStatus(newStatus, id) {
    var mainThis = this;
    this.translateService.get('MESSAGES.CHANGESTATUS').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "trips/changeStatus/" + id, { "newStatus": newStatus }, false, function () {
        mainThis.inisilaize()
      }, "put")
    })
  }



}
