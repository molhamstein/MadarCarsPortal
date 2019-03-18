import { ActivatedRoute } from '@angular/router';
import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';
import { CouponComponent } from '../../../../dialogs/coupon/coupon.component';


@Component({
  selector: 'app-editTravel-agencies',
  templateUrl: './editTravel-agencies.component.html',
  styleUrls: ['./editTravel-agencies.component.scss']
})
export class editTravelAgenciesComponent implements OnInit {
  editTravelAgenciesForm;
  imageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  travelAgencyId;
  travelAgency;
  isoCode = [];
  // trip
  filterValue = ""
  allRows = [];
  filterRows = [];
  columns = ["cost", "status", "owner.name", "location.nameEn", "car.name"]

  // coupon
  filterCouponValue = ""
  allCouponRows = [];
  filterCouponRows = [];
  couponColumns = ["code", "status"]



  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private translationLoader: FuseTranslationLoaderService,
  ) {
    this.translationLoader.loadTranslations(english);
  }

  getParams(name, callback) {
    this.route.paramMap.subscribe(params => {
      callback(params.get(name));
    })
  }


  openSelectImage() {
    document.getElementById('files').click();
  }
  openSelectListImage() {
    document.getElementById('listFiles').click();
  }

  releadImage(innerIndex, file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var id = 'uploadImage' + innerIndex;
      document.getElementById(id).setAttribute('src', reader.result);
    }
    reader.readAsDataURL(file);
  }


  onChange(event: any) {
    let files = [].slice.call(event.target.files);
    let allFilles = event.target.files;
    let images: any = [];
    this.images = []

    this.imageOnLoad = Array(files.length);
    var innerIndex = 0;
    for (var i = 0; i < allFilles.length; i++) {
      var file = allFilles[i];
      var x;
      console.log("fromOut");
      console.log(i);
      this.releadImage(i, file);
    }
    let files2 = Array.from(event.target.files);
    files.forEach((fileElement, index) => {
      let countDelete = 0
      // this.ng2ImgMaxService.compress([fileElement], 0.5, true, true).subscribe((result) => {
      this.mainServ.APIServ.uploadImage("uploadFiles/image/upload", [fileElement], 1).then((data: any) => {
        this.imageOnLoad = [];
        countDelete++;
        if (this.mainServ.APIServ.getErrorCode() == 0)
          data.forEach(element => {
            this.images[0] = element
            this.media = element;
          });
        else if (this.mainServ.APIServ.getErrorCode() != 401) {
          this.mainServ.APIServ.setErrorCode(0);
          this.dialogServ.someThingIsError();
        }
      });
    });
    // });
  }


  ngOnInit() {
    this.isoCode = this.mainServ.globalServ.getIsoCode();
    this.editTravelAgenciesForm = new FormGroup({
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      ISOCode: new FormControl('', Validators.required)
    });
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.travelAgencyId = id;
      mainthis.mainServ.loaderSer.display(true);

      mainthis.mainServ.APIServ.get("travelAgencies/" + mainthis.travelAgencyId).subscribe((data: any) => {
        mainthis.mainServ.loaderSer.display(false);

        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.travelAgency = data;
          var langId = [];
          if (data.media) {
            mainthis.media = data.media;
            mainthis.images[0] = data.media
          }
          mainthis.editTravelAgenciesForm = new FormGroup({
            nameEn: new FormControl(data.nameEn, Validators.required),
            nameAr: new FormControl(data.nameAr, Validators.required),
            nameTr: new FormControl(data.nameTr),
            phoneNumber: new FormControl(data.phoneNumber, Validators.required),
            email: new FormControl(data.email, [Validators.required, Validators.email]),
            ISOCode: new FormControl(data.ISOCode, Validators.required)
          });
          mainthis.inisilaize();
          mainthis.couponInisilaize();

        }
        else if (mainthis.mainServ.APIServ.getErrorCode() != 401) {
          mainthis.mainServ.APIServ.setErrorCode(0);
          mainthis.dialogServ.someThingIsError();
        }
      })
    })

  }


  addHours(h, start) {
    console.log(start.toString())
    var date = new Date(start.toString());
    date.setHours(date.getHours() + h);
    console.log(date)
    return date
  }

  calcStartDateAndEnd() {
    for (let index = 0; index < this.allRows.length; index++) {
      const element = this.allRows[index];
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


  couponInisilaize() {
    this.mainServ.loaderSer.display(true);
    var filter = { "where": { "travelAgencyId": this.travelAgencyId } };
    this.mainServ.APIServ.get("coupons?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {

        this.allCouponRows = data;
        this.filterCouponDatatable();
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    });
  }
  inisilaize() {
    this.mainServ.loaderSer.display(true);
    var filter = { "where": { "travelAgencyId": this.travelAgencyId }, "include": ['rate'] };
    this.mainServ.APIServ.get("trips?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {

        this.allRows = data;
        this.calcStartDateAndEnd();
        this.filterDatatable();
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    });
  }

  isEnLang() {
    if (this.mainServ.loginServ.getLang() == "ar")
      return false
    else
      return true
  }


  rate(tripId) {
    var mainThis = this
    this.dialogServ.makeRate(tripId, function () {
      mainThis.inisilaize()
    });

  }


  edit() {
    if (this.editTravelAgenciesForm.invalid)
      return
    var data = this.editTravelAgenciesForm.value;
    if (this.media != null)
      data['mediaId'] = this.media.id;
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.put("travelAgencies/" + this.travelAgencyId, data).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
      else if (this.mainServ.APIServ.getErrorCode() == 422) {
        this.dialogServ.errorMessage(422);
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('travel-agencies')
  }


  filterDatatable() {
    if (this.filterValue == null)
      this.filterRows = this.allRows
    else {
      let val = this.filterValue.toLowerCase();
      let keys = this.columns;

      let colsAmt = this.columns.length;
      this.filterRows = this.allRows.filter(function (item) {
        for (let i = 0; i < colsAmt; i++) {
          if (keys[i] == "owner.name") {
            if (item["owner"]["name"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          }
          else if (keys[i] == "location.nameEn") {
            if (item["location"]["nameEn"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          }
          else if (keys[i] == "car.name") {
            if (item["car"]["name"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          }
          else if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            return true;
          }
        }
      });
    }
  }

  filterCouponDatatable() {
    if (this.filterCouponValue == null)
      this.filterCouponRows = this.allCouponRows
    else {
      let val = this.filterCouponValue.toLowerCase();
      let keys = this.couponColumns;

      let colsAmt = this.couponColumns.length;
      this.filterCouponRows = this.allCouponRows.filter(function (item) {
        for (let i = 0; i < colsAmt; i++) {
          if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            return true;
          }
        }
      });
    }
  }

  openCoupon(coupon: any = {}) {
    var isNew = false
    if (coupon["id"] == null)
      isNew = true
    console.log(coupon)
    let dialogRef = this.dialog.open(CouponComponent, {
      width: '550px',
      data: { "isNew": isNew, "coupon": coupon, "travelAgencyId": this.travelAgencyId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.couponInisilaize();
      }
    });
  }

  goTo(pageName, id) {
    let url = ""
    if (pageName == 'view') {
      url = 'view-trip/' + id
    } else if (pageName == 'edit') {
      url = 'edit-user/' + id
    } else if (pageName == 'bills') {
      url = 'bill/' + id
    }
    this.mainServ.globalServ.goTo(url)

  }

  changeStatus(newStatus, id) {
    var mainThis = this;
    this.translate.get('MESSAGES.CHANGESTATUS').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "trips/changeStatus/" + id, { "newStatus": newStatus }, false, function () {
        mainThis.inisilaize()
      }, "put")
    })
  }


}