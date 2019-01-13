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


@Component({
  selector: 'app-addTrip',
  templateUrl: './addTrip.component.html',
  styleUrls: ['./addTrip.component.scss']
})
export class addTripComponent implements OnInit {
  stepOneForm;
  stepSecForm;
  stepthreeForm;
  locations = [];
  allData = {};
  users = [];
  totalPrice = 0;
  subLocaationPrice = 0;
  links = [
    {
      "name": "step1",
      "view": "TRIP.STEP1.TITLE"
    },
    {
      "name": "step2",
      "view": "TRIP.STEP2.TITLE"
    },
    {
      "name": "step3",
      "view": "TRIP.STEP3.TITLE"
    },

  ];
  type = ['fromAirport', 'city', 'toAirport', 'fromAirportAndCity', 'fromAirportAndToAirport', 'cityAndToAirport', 'fromAirportAndCityAndToAirport']
  tripType = "";
  activeLink = this.links[0].name;

  isFromAirport = false;
  isToAirport = false;
  isInCity = false;
  carDate = {};
  carAvailable = [];
  tripSublocations = [];
  carsSublocations = []
  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private translationLoader: FuseTranslationLoaderService,
  ) {
    this.translationLoader.loadTranslations(english);

  }

  onSearchChange() {
    this.subLocaationPrice = 0;
    for (let index = 0; index < this.tripSublocations.length; index++) {
      const element = this.tripSublocations[index];
      this.subLocaationPrice += element.duration * this.carsSublocations[index].cost
    }
  }

  differenceInHourse(firstDate, secDate) {
    var timeDiff = Math.abs(secDate.getTime() - firstDate.getTime());
    var diffHourse = Math.ceil(timeDiff / (1000 * 3600));
    var daysNum = Math.ceil(diffHourse / 24)
    return (daysNum * 24)
  }


  doSomething(event) {
    var selectedCar = this.carAvailable.find(function (element) {
      return element.id.toString() == event.value.toString();
    });
    this.allData['driverId'] = selectedCar.driverId
    if (this.tripType == "fromAirport") {
      this.totalPrice = selectedCar.priceOneWay;
    }
    else if (this.tripType == "city") {
      this.totalPrice = selectedCar.pricePerDay * (this.differenceInHourse(this.allData['startInCityDate'], this.allData['endInCityDate']) / 24);
    }
    else if (this.tripType == "toAirport") {
      this.totalPrice = selectedCar.priceOneWay;
    }
    else if (this.tripType == "fromAirportAndCity") {
      this.totalPrice = selectedCar.priceOneWay;
      this.totalPrice = selectedCar.pricePerDay * (this.differenceInHourse(this.allData['fromAirportDate'], this.allData['endInCityDate']) / 24);
    }
    else if (this.tripType == "fromAirportAndToAirport") {
      this.totalPrice = selectedCar.priceTowWay;
    }
    else if (this.tripType == "cityAndToAirport") {
      // this.totalPrice = selectedCar.priceOneWay;
    }
    else if (this.tripType == "fromAirportAndCityAndToAirport") {
      // this.totalPrice = selectedCar.priceOneWay;
    }

  }

  addStep4() {
    if (this.links[3] == null)
      this.links.push({
        "name": "step4",
        "view": "TRIP.STEP4.TITLE"
      })
  }
  removeStep4() {
    if (this.links[3] != null)
      this.links.splice(3, 1)
  }

  ngOnInit() {

    this.stepOneForm = new FormGroup({
      locationId: new FormControl('', Validators.required),
      ownerId: new FormControl('', Validators.required)
    });
    this.stepSecForm = new FormGroup({
      first: new FormControl(''),
      seconde: new FormControl('')
    });

    this.stepthreeForm = new FormGroup({
      carId: new FormControl('', Validators.required)
    });


    var locationFilter = { "where": { "status": "active" }, "include": ['subLocations'] }

    this.mainServ.APIServ.get("locations?filter=" + JSON.stringify(locationFilter)).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.locations = data;
      }
      else
        this.dialogServ.someThingIsError();
    })
    var filter = { "where": { "status": "active" } }

    this.mainServ.APIServ.get("users?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.users = data;
      }
      else
        this.dialogServ.someThingIsError();
    })

  }


  getTypeTrip() {
    if (!this.isFromAirport && !this.isToAirport && this.isInCity) {
      console.log("inCity");
      this.addStep4()
      return this.type[1]
    } else if (!this.isFromAirport && this.isToAirport && !this.isInCity) {
      console.log("toAirport");
      this.removeStep4()
      return this.type[2]

    } else if (!this.isFromAirport && this.isToAirport && this.isInCity) {
      console.log("inCity && toAirport");
      this.addStep4()
      return this.type[5]

    } else if (this.isFromAirport && !this.isToAirport && !this.isInCity) {
      console.log("fromAirport");
      this.removeStep4()
      return this.type[0]

    } else if (this.isFromAirport && !this.isToAirport && this.isInCity) {
      console.log("isFromAirport&& inCity");
      this.addStep4()
      return this.type[3]

    } else if (this.isFromAirport && this.isToAirport && !this.isInCity) {
      console.log("isFromAirport&& toAirport");
      this.removeStep4()
      return this.type[4]

    } else if (this.isFromAirport && this.isToAirport && this.isInCity) {
      console.log("isFromAirport&& inCity && toAirport");
      this.addStep4()
      return this.type[6]

    }

  }

  converTo24(hours, meriden) {
    if (meriden == "PM" && hours < 12) hours = hours + 12;
    console.log(hours);
    return hours;
  }
  mixDateTime(date, time) {
    date.setHours(this.converTo24(time['hour'], time['meriden']))
    date.setMinutes(time['minute'])
    return date;
  }

  cheackValidateionSecStep(firstDate, secDate, firstTime, secTime) {
    this.carDate = {};
    console.log("firstDate")
    console.log(firstDate)
    console.log("secDate")
    console.log(secDate)
    console.log("firstTime")
    console.log(firstTime)
    console.log("secTime")
    console.log(secTime)
    if (this.tripType == 'fromAirport') {
      if (firstDate != "" && firstTime['userTime'] != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime['userTime']);
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'] }
        return true
      }
      else
        return false
    }
    if (this.tripType == 'city') {
      if (firstDate != "" && secDate != "") {
        this.allData['startInCityDate'] = this.mixDateTime(firstDate, { hour: 0, minute: 0, meriden: "AM", format: 12 });
        this.allData['endInCityDate'] = this.mixDateTime(secDate, { hour: 11, minute: 59, meriden: "PM", format: 12 });
        this.carDate = { "startInCityDate": this.allData['startInCityDate'], "endInCityDate": this.allData['endInCityDate'] }

        return true
      }
      else
        return false
    }

    if (this.tripType == 'toAirport') {
      if (firstDate != "" && firstTime['userTime'] != null) {
        this.allData['toAirportDate'] = this.mixDateTime(firstDate, firstTime['userTime']);
        this.carDate = { "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }

    if (this.tripType == 'fromAirportAndCity') {
      if (firstDate != "" && firstTime['userTime'] != null && secDate != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime['userTime']);
        this.allData['endInCityDate'] = this.mixDateTime(secDate, { hour: 11, minute: 59, meriden: "PM", format: 12 });
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'], "endInCityDate": this.allData['endInCityDate'] }
        return true
      }
      else
        return false
    }
    // type = ['cityAndToAirport', 'fromAirportAndCityAndToAirport']

    if (this.tripType == 'fromAirportAndToAirport') {
      if (firstDate != "" && firstTime['userTime'] != null && secDate != null && secTime['userTime'] != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime['userTime']);
        this.allData['toAirportDate'] = this.mixDateTime(secDate, secTime['userTime']);
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'], "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }

    if (this.tripType == 'cityAndToAirport') {
      if (firstDate != "" && secDate != null && secTime['userTime'] != null) {
        this.allData['startInCityDate'] = this.mixDateTime(firstDate, { hour: 0, minute: 0, meriden: "AM", format: 12 });
        this.allData['toAirportDate'] = this.mixDateTime(secDate, secTime['userTime']);
        this.carDate = { "startInCityDate": this.allData['startInCityDate'], "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }

    if (this.tripType == 'fromAirportAndCityAndToAirport') {
      if (firstDate != "" && firstTime['userTime'] != null && secDate != null && secTime['userTime'] != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime['userTime']);
        this.allData['toAirportDate'] = this.mixDateTime(secDate, secTime['userTime']);
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'], "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }


  }

  subLocationId
  back(stepNum) {
    this.activeLink = this.links[stepNum - 1].name;
  }
  private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  next(stepNum, startDate, endDate) {
    if (stepNum == 2) {
      this.tripType = this.getTypeTrip()
      this.activeLink = this.links[stepNum - 1].name;
      this.allData['locationId'] = this.stepOneForm.value.locationId
      this.allData['ownerId'] = this.stepOneForm.value.ownerId;
      this.allData['fromAirport'] = this.isFromAirport;
      this.allData['toAirport'] = this.isToAirport;
      this.allData['inCity'] = this.isInCity;
      var locationId = this.allData['locationId']
      var location = this.locations.find(function (element) {
        return element.id.toString() == locationId.toString();
      });
      console.log(location);
      this.subLocationId = [];
      location.subLocations.forEach(element => {
        if (element.status == "active")
          this.subLocationId.push(element.id)
      });
      console.log(this.subLocationId);
    }
    else if (stepNum == 3) {
      var firstDate = this.stepSecForm.value['first']
      var secDate = this.stepSecForm.value['seconde']
      if (this.cheackValidateionSecStep(firstDate, secDate, startDate, endDate)) {
        var flags = { "fromAirport": this.isFromAirport, "inCity": this.isInCity, "toAirport": this.isToAirport }
        this.mainServ.APIServ.get("cars/getAvailable?flags=" + JSON.stringify(flags) + "&dates=" + JSON.stringify(this.carDate) + "&locationId=" + this.allData['locationId']).subscribe((data: any) => {
          if (this.mainServ.APIServ.getErrorCode() == 0) {
            this.carAvailable = data;
            this.activeLink = this.links[stepNum - 1].name;
          }
          else {
            this.dialogServ.someThingIsError();
          }

        })
      } else {
        alert("error")
      }
    }
    else if (stepNum == 4) {
      this.allData['carId'] = this.stepthreeForm.value['carId']
      var filter = { "where": { "and": [{ "carId": this.allData['carId'] }, { "subLocationId": { "inq": this.subLocationId } }] } }
      console.log("carSublocations?filter=" + JSON.stringify(filter))
      this.mainServ.APIServ.get("carSublocations?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
        if (this.mainServ.APIServ.getErrorCode() == 0) {
          this.activeLink = this.links[stepNum - 1].name;
          this.carsSublocations = data;
          data.forEach(element => {
            this.tripSublocations.push({ "sublocationId": element.subLocationId, "duration": 0 })
          });
        }
        else {
          this.dialogServ.someThingIsError();
        }

      })

    }
  }

  add() {
    if (this.activeLink == "step4")
      this.allData['tripSublocations'] = this.tripSublocations
    this.allData['cost'] = this.totalPrice + this.subLocaationPrice
    this.mainServ.APIServ.post("trips", this.allData).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.backToTrips();
      }
      else {
        this.dialogServ.someThingIsError();
      }

    })
  }

  backToTrips() {
    this.mainServ.globalServ.goTo('trips')
  }


}
