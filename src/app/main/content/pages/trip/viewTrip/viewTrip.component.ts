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

  calcStartDateAndEnd() {
    // for (let index = 0; index < this.rows.length; index++) {
    // var this.trip = this.trip;
    if (this.trip['type'] == "fromAirport") {
      this.trip['start'] = this.trip['fromAirportDate'];
      this.trip['end'] = this.addHours(2, this.trip['fromAirportDate']);
    } else if (this.trip['type'] == "city") {
      this.trip['start'] = this.trip['startInCityDate'];
      this.trip['end'] = this.trip['endInCityDate'];
    } else if (this.trip['type'] == "toAirport") {
      this.trip['start'] = this.trip['toAirportDate'];
      this.trip['end'] = this.addHours(2, this.trip['toAirportDate']);
    } else if (this.trip['type'] == "fromAirportAndCity") {
      this.trip['start'] = this.trip['fromAirportDate'];
      this.trip['end'] = this.trip['endInCityDate'];
    } else if (this.trip['type'] == "fromAirportAndToAirport") {
      this.trip['start'] = this.trip['fromAirportDate'];
      this.trip['end'] = this.trip['toAirportDate'];
    } else if (this.trip['type'] == "cityAndToAirport") {
      this.trip['start'] = this.trip['startInCityDate'];
      this.trip['end'] = this.addHours(2, this.trip['toAirportDate']);
    } else if (this.trip['type'] == "fromAirportAndCityAndToAirport") {
      this.trip['start'] = this.trip['fromAirportDate'];
      this.trip['end'] = this.addHours(2, this.trip['toAirportDate']);
    }
    // }
  }





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
          mainthis.calcStartDateAndEnd()
        }
        else {
          this.dialogServ.someThingIsError();
        }
      })
    })
  }








}
