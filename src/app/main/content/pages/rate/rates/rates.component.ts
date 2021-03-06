import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from '../../../../languageFiles/en';

import { MainService } from '../../../../../core/services/main.service';
import { DialogService } from '../../../../../core/services/dialog.service';



@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class ratesComponent implements OnInit {
  rows = [];
  count: number = 0;
  offset: number = 0;
  limit: number = 10;
  total=0;
  viewClear = false;
  filter = { "user.name": "", "car.name": "", "trip.driver.username": "", "max-value": 5, "min-value": 0 }

  disableObject = { "next": false, "prev": true, "first": true, "end": false }
  constructor(private translationLoader: FuseTranslationLoaderService
    , private translateService: TranslateService
    , private mainServ: MainService,
    private dialogServ: DialogService,
    public dialog: MatDialog) {
    this.translationLoader.loadTranslations(english);
    this.offset = 0
    this.inisilaize();
  }


  next() {
    console.log("next")
    this.setPage(this.offset, this.limit, "next");
  }

  openFilter() {
    var mainThis = this
    this.dialogServ.openFilter("rate", this.filter, function (data) {
      mainThis.filter = data
      mainThis.viewClear = true;
      mainThis.offset = 0;
      mainThis.inisilaize()
    })
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


  isEnLang() {
    if (this.mainServ.loginServ.getLang() == "ar")
      return false
    else
      return true
  }
  end() {
    console.log("end")
    this.mainServ.loaderSer.display(true);
    var filter =
    {
      "limit": this.limit,
      "$and": [
        { "user.name": { "$regex": this.filter['user.name'], "$options": "i" } },
        { "car.name": { "$regex": this.filter['car.name'], "$options": "i" } },
        { "trip.driver.username": { "$regex": this.filter['trip.driver.username'], "$options": "i" } },
        { "value": { "$gte": this.filter['min-value'] } },
        { "value": { "$lte": this.filter['max-value'] } },
      ]
    }
    this.mainServ.APIServ.get("rates/getEndByFilter?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.rows = data.data;
        // this.calcStartDateAndEnd();
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


  rate(tripId) {
    var mainThis = this
    this.dialogServ.makeRate(tripId, function () {
      mainThis.setPage(mainThis.offset - mainThis.rows.length, mainThis.limit, "refresh", mainThis.rows.length);
    });

  }
  preperFilter(limit, offset) {
    var filter = {}
    if (limit != 0) {
      filter['limit'] = limit;
    }
    if (offset != 0) {
      filter['offset'] = offset;
    }
    filter['$and'] = [];
    filter['$and'].push({ "value": { "$gte": this.filter['min-value'] } })
    filter['$and'].push({ "value": { "$lte": this.filter['max-value'] } })
    if (this.filter['user.name'] != "") {
      filter['$and'].push({ "user.name": { "$regex": this.filter['user.name'] } })
    }
    if (this.filter['car.name'] != "") {
      filter['$and'].push({ "car.name": { "$regex": this.filter['car.name'] } })
    }
    if (this.filter['user.name'] != "") {
      filter['$and'].push({ "user.name": { "$regex": this.filter['user.name'] } })
    }
  }

  setPage(offset, limit, type: string = "defult", numRows: number = 0) {
    this.mainServ.loaderSer.display(true);

    var filter =
    {
      "skip": offset,
      "limit": limit,
      "$and": [
        { "user.name": { "$regex": this.filter['user.name'], "$options": "i" } },
        { "car.name": { "$regex": this.filter['car.name'], "$options": "i" } },
        { "trip.driver.username": { "$regex": this.filter['trip.driver.username'], "$options": "i" } },
        { "value": { "$gte": this.filter['min-value'] } },
        { "value": { "$lte": this.filter['max-value'] } },
      ]
    }
    console.log(filter);
    this.mainServ.APIServ.get("rates/getByFilter?filter=" + JSON.stringify(filter)).subscribe((allData: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        var data=allData.data;
        this.total=allData.count;
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



  clearFilter() {
    this.viewClear = false;
    this.filter = { "user.name": "", "car.name": "", "trip.driver.username": "", "max-value": 5, "min-value": 0 }
    this.offset = 0;
    this.inisilaize();
  }

  inisilaize() {
    if (this.offset == 0)
      this.setPage(this.offset, this.limit);
    else
      this.setPage(this.offset - this.rows.length, this.limit, "refresh", this.rows.length);
  }

  ngOnInit() {
  }






}
