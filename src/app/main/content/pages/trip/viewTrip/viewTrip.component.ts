import { ActivatedRoute } from '@angular/router';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from '../../../../languageFiles/en';

import { MainService } from '../../../../../core/services/main.service';
import { DialogService } from '../../../../../core/services/dialog.service';



@Component({
  selector: 'app-viewTrip',
  templateUrl: './viewTrip.component.html',
  styleUrls: ['./viewTrip.component.scss']
})
export class viewTripComponent implements OnInit {

  tripId = "";
  trip = {};

  locationName;

  constructor(private translationLoader: FuseTranslationLoaderService
    , private translateService: TranslateService
    , private mainServ: MainService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.translationLoader.loadTranslations(english);
  }



  addHours(h, start) {
    console.log(start.toString())
    var date = new Date(start.toString());
    date.setHours(date.getHours() + h);
    console.log(date)
    return date
  }

  // calcStartDateAndEnd() {
  //   for (let index = 0; index < this.rows.length; index++) {
  //     const element = this.rows[index];
  //     if (element.type == "fromAirport") {
  //       element.start = element.fromAirportDate;
  //       element.end = this.addHours(2, element.fromAirportDate);
  //     } else if (element.type == "city") {
  //       element.start = element.startInCityDate;
  //       element.end = element.endInCityDate;
  //     } else if (element.type == "toAirport") {
  //       element.start = element.toAirportDate;
  //       element.end = this.addHours(2, element.toAirportDate);
  //     } else if (element.type == "fromAirportAndCity") {
  //       element.start = element.fromAirportDate;
  //       element.end = element.endInCityDate;
  //     } else if (element.type == "fromAirportAndToAirport") {
  //       element.start = element.fromAirportDate;
  //       element.end = element.toAirportDate;
  //     } else if (element.type == "cityAndToAirport") {
  //       element.start = element.startInCityDate;
  //       element.end = this.addHours(2, element.toAirportDate);
  //     } else if (element.type == "fromAirportAndCityAndToAirport") {
  //       element.start = element.fromAirportDate;
  //       element.end = this.addHours(2, element.toAirportDate);
  //     }
  //   }
  // }





  back() {
    this.mainServ.globalServ.goTo('trips')
  }




  getParams(name, callback) {
    this.route.paramMap.subscribe(params => {
      callback(params.get(name));
    })
  }




  ngOnInit() {
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.tripId = id;
      mainthis.mainServ.APIServ.get("trips/" + mainthis.tripId).subscribe((data: any) => {
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.trip = data;
          mainthis.locationName = data['location']['nameEn']

        }
        else {
          this.dialogServ.someThingIsError();
        }
      })
    })
  }








}
