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
  coupon = {};
  verifyCoupon;
  couponCode = null
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
  carsSublocations = [];

  mainTripdays = 0;
  tripdays = 0;
  subLocationDays = 0;
  pricePerDay = 0;
  airportPrice = 0;
  location;
  subLocationId

  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };


  startPicker = { "userTimeChange": { "_isScalar": false, "observers": [], "closed": false, "isStopped": false, "hasError": false, "thrownError": null, "__isAsync": false }, "onRevert": { "_isScalar": false, "observers": [], "closed": false, "isStopped": false, "hasError": false, "thrownError": null, "__isAsync": false }, "onSubmit": { "_isScalar": false, "observers": [], "closed": false, "isStopped": false, "hasError": false, "thrownError": null, "__isAsync": false }, "VIEW_HOURS": 1, "VIEW_MINUTES": 2, "currentView": 1, "_inputSubscription": { "closed": true, "_parent": null, "_parents": null, "_subscriptions": null }, "color": "primary", "revertLabel": "Cancel", "submitLabel": "OK", "userTime": { "hour": 3, "minute": 15, "meriden": "PM", "format": 12 } };
  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private translationLoader: FuseTranslationLoaderService,
  ) {
    this.translationLoader.loadTranslations(english);

  }

  addDuration(index) {
    if (this.subLocationDays == this.mainTripdays) {
      this.mainServ.globalServ.openSnackBar(0);
    }
    else {
      this.subLocaationPrice += this.tripSublocations[index].cost
      this.subLocationDays++;
      this.tripSublocations[index].duration++;
      this.totalPrice -= this.pricePerDay;
      this.tripdays--;
    }
  }

  minDuration(index) {
    if (this.tripSublocations[index].duration == 0)
      return
    this.subLocaationPrice -= this.tripSublocations[index].cost
    this.subLocationDays--;
    this.tripSublocations[index].duration--;
    this.totalPrice += this.pricePerDay;
    this.tripdays++;
  }


  differenceInHourse(firstDate, secDate) {
    var timeDiff = secDate.getTime() - firstDate.getTime();
    var diffHourse = Math.ceil(timeDiff / (1000 * 3600));
    var daysNum = Math.ceil(diffHourse / 24)
    this.mainTripdays = daysNum;
    this.tripdays = daysNum;
    return (daysNum * 24)
  }


  doSomething(event) {
    var selectedCar = this.carAvailable.find(function (element) {
      return element.id.toString() == event.value.toString();
    });
    this.allData['driverId'] = selectedCar.driverId
    this.allData['pricePerDay'] = selectedCar.pricePerDay
    this.allData['priceOneWay'] = selectedCar.priceOneWay
    this.allData['priceTowWay'] = selectedCar.priceTowWay
    this.pricePerDay = selectedCar.pricePerDay;
    if (this.tripType == "fromAirport") {
      this.airportPrice = selectedCar.priceOneWay;
    }
    else if (this.tripType == "city") {
      this.totalPrice = selectedCar.pricePerDay * (this.differenceInHourse(this.allData['startInCityDate'], this.allData['endInCityDate']) / 24);
    }
    else if (this.tripType == "toAirport") {
      this.airportPrice = selectedCar.priceOneWay;
    }
    else if (this.tripType == "fromAirportAndCity") {
      this.airportPrice = selectedCar.priceOneWay;
      this.totalPrice = selectedCar.pricePerDay * (this.differenceInHourse(this.allData['fromAirportDate'], this.allData['endInCityDate']) / 24);
    }
    else if (this.tripType == "fromAirportAndToAirport") {
      this.airportPrice = selectedCar.priceTowWay;
    }
    else if (this.tripType == "cityAndToAirport") {
      this.airportPrice = selectedCar.priceOneWay;
      this.totalPrice = selectedCar.pricePerDay * (this.differenceInHourse(this.allData['startInCityDate'], this.allData['toAirportDate']) / 24);
    }
    else if (this.tripType == "fromAirportAndCityAndToAirport") {
      this.airportPrice = selectedCar.priceTowWay;
      this.totalPrice = selectedCar.pricePerDay * (this.differenceInHourse(this.allData['fromAirportDate'], this.allData['toAirportDate']) / 24);
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
      ownerId: new FormControl('', Validators.required),
      testTime: new FormControl(''),
      note: new FormControl(''),
    });
    this.stepSecForm = new FormGroup({
      first: new FormControl(''),
      seconde: new FormControl('')
    });

    this.stepthreeForm = new FormGroup({
      carId: new FormControl('', Validators.required)
    });


    var locationFilter = { "where": { "status": "active" }, "include": ['subLocations'] }

    var filter = { "where": { "status": "active" } }

    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("users?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.users = data;
        this.mainServ.loaderSer.display(true);
        this.mainServ.APIServ.get("locations?filter=" + JSON.stringify(locationFilter)).subscribe((data: any) => {
          this.mainServ.loaderSer.display(false);
          if (this.mainServ.APIServ.getErrorCode() == 0) {
            this.locations = data;
          }
          else if (this.mainServ.APIServ.getErrorCode() != 401) {
            this.mainServ.APIServ.setErrorCode(0);
            this.dialogServ.someThingIsError();
          }
        })
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
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
      if (firstDate != "" && firstTime != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime);
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
      if (firstDate != "" && firstTime != null) {
        this.allData['toAirportDate'] = this.mixDateTime(firstDate, firstTime);
        this.carDate = { "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }

    if (this.tripType == 'fromAirportAndCity') {
      if (firstDate != "" && firstTime != null && secDate != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime);
        this.allData['endInCityDate'] = this.mixDateTime(secDate, { hour: 11, minute: 59, meriden: "PM", format: 12 });
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'], "endInCityDate": this.allData['endInCityDate'] }
        return true
      }
      else
        return false
    }
    // type = ['cityAndToAirport', 'fromAirportAndCityAndToAirport']

    if (this.tripType == 'fromAirportAndToAirport') {
      if (firstDate != "" && firstTime != null && secDate != null && secTime != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime);
        this.allData['toAirportDate'] = this.mixDateTime(secDate, secTime);
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'], "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }

    if (this.tripType == 'cityAndToAirport') {
      if (firstDate != "" && secDate != null && secTime != null) {
        this.allData['startInCityDate'] = this.mixDateTime(firstDate, { hour: 0, minute: 0, meriden: "AM", format: 12 });
        this.allData['toAirportDate'] = this.mixDateTime(secDate, secTime);
        this.carDate = { "startInCityDate": this.allData['startInCityDate'], "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }

    if (this.tripType == 'fromAirportAndCityAndToAirport') {
      if (firstDate != "" && firstTime != null && secDate != null && secTime != null) {
        this.allData['fromAirportDate'] = this.mixDateTime(firstDate, firstTime);
        this.allData['toAirportDate'] = this.mixDateTime(secDate, secTime);
        this.carDate = { "fromAirportDate": this.allData['fromAirportDate'], "toAirportDate": this.allData['toAirportDate'] }
        return true
      }
      else
        return false
    }


  }

  back(stepNum) {
    this.activeLink = this.links[stepNum - 1].name;
    if (stepNum == 2) {
      this.totalPrice = 0;
      this.airportPrice = 0;
      this.subLocaationPrice = 0
    } if (stepNum == 3) {
      this.carsSublocations = [];
      this.tripSublocations = [];

    }
  }
  private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  checkCoupon() {
    this.coupon = {}
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("coupons/" + this.couponCode + "/checkCoupon").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.coupon = data;
        this.verifyCoupon = true;
      }
      else if (this.mainServ.APIServ.getErrorCode() == 462) {
        this.dialogServ.errorMessage(462);
        this.verifyCoupon = false;
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    })

  }

  next(stepNum) {
    if (stepNum == 2) {
      this.tripType = this.getTypeTrip()
      this.activeLink = this.links[stepNum - 1].name;
      this.allData['locationId'] = this.stepOneForm.value.locationId
      this.allData['ownerId'] = this.stepOneForm.value.ownerId;
      this.allData['note'] = this.stepOneForm.value.note;
      this.allData['fromAirport'] = this.isFromAirport;
      this.allData['toAirport'] = this.isToAirport;
      this.allData['inCity'] = this.isInCity;
      var locationId = this.allData['locationId']
      this.location = this.locations.find(function (element) {
        return element.id.toString() == locationId.toString();
      });
      console.log(this.location);
      this.subLocationId = [];
      this.location.subLocations.forEach(element => {
        if (element.status == "active")
          this.subLocationId.push(element.id)
      });
    }
    else if (stepNum == 3) {
      this.stepthreeForm = new FormGroup({
        carId: new FormControl('', Validators.required)
      });
      this.totalPrice = 0;
      var firstDate = this.stepSecForm.value['first']
      var secDate = this.stepSecForm.value['seconde']
      if (this.cheackValidateionSecStep(firstDate, secDate, this.startTime, this.endTime)) {
        if (secDate) {
          if (this.differenceInHourse(firstDate, secDate) > 0) {

            var flags = { "fromAirport": this.isFromAirport, "inCity": this.isInCity, "toAirport": this.isToAirport }
            this.mainServ.loaderSer.display(true);
            this.mainServ.APIServ.get("cars/getAvailable?flags=" + JSON.stringify(flags) + "&dates=" + JSON.stringify(this.carDate) + "&locationId=" + this.allData['locationId']).subscribe((data: any) => {
              this.mainServ.loaderSer.display(false);
              if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.carAvailable = data;
                this.activeLink = this.links[stepNum - 1].name;
              }
              else if (this.mainServ.APIServ.getErrorCode() != 401) {
                this.mainServ.APIServ.setErrorCode(0);
                this.dialogServ.someThingIsError();
              }

            })
          }
          else {
            this.mainServ.globalServ.openSnackBar(1);
          }
        }
        else {
          this.mainServ.loaderSer.display(true);
          var flags = { "fromAirport": this.isFromAirport, "inCity": this.isInCity, "toAirport": this.isToAirport }
          this.mainServ.APIServ.get("cars/getAvailable?flags=" + JSON.stringify(flags) + "&dates=" + JSON.stringify(this.carDate) + "&locationId=" + this.allData['locationId']).subscribe((data: any) => {
            this.mainServ.loaderSer.display(false);
            if (this.mainServ.APIServ.getErrorCode() == 0) {
              this.carAvailable = data;
              this.activeLink = this.links[stepNum - 1].name;
            }
            else if (this.mainServ.APIServ.getErrorCode() != 401) {
              this.mainServ.APIServ.setErrorCode(0);
              this.dialogServ.someThingIsError();
            }

          })

        }
      } else {
        this.mainServ.globalServ.openSnackBar(2);
      }
    }
    else if (stepNum == 4) {

      this.allData['carId'] = this.stepthreeForm.value['carId']
      var filter = { "where": { "and": [{ "carId": this.allData['carId'] }, { "subLocationId": { "inq": this.subLocationId } }] } }
      console.log("carSublocations?filter=" + JSON.stringify(filter))
      this.mainServ.loaderSer.display(true);
      this.mainServ.APIServ.get("carSublocations?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
        this.mainServ.loaderSer.display(false);
        if (this.mainServ.APIServ.getErrorCode() == 0) {
          this.activeLink = this.links[stepNum - 1].name;
          this.carsSublocations = data;
          data.forEach(element => {
            var tempCarSub = this.carsSublocations.find(x => x.subLocationId === element.subLocationId)
            var tempCost = 0
            if (tempCarSub != null)
              tempCost = tempCarSub.cost
            this.tripSublocations.push({ "sublocationId": element.subLocationId, "duration": 0, "cost": tempCost })
          });
        }
        else if (this.mainServ.APIServ.getErrorCode() != 401) {
          this.mainServ.APIServ.setErrorCode(0);
          this.dialogServ.someThingIsError();
        }

      })

    }
  }

  add() {
    if (this.activeLink == "step4")
      this.allData['tripSublocations'] = this.tripSublocations
    if (this.coupon['value'] != undefined) {
      this.allData['travelAgencyId'] = this.coupon['travelAgencyId']
      this.allData['couponId'] = this.coupon['id']
    }
    this.allData['carId'] = this.stepthreeForm.value['carId']

    this.allData['costBeforCoupon'] = this.totalPrice + this.subLocaationPrice + this.airportPrice
    this.allData['cost'] = this.calcPrice(this.totalPrice + this.subLocaationPrice + this.airportPrice)
    this.allData['daysInCity'] = this.tripdays;
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.post("trips", this.allData).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.backToTrips();
      }
      else if (this.mainServ.APIServ.getErrorCode() == 455) {
        this.dialogServ.errorMessage(455);
      }
      else if (this.mainServ.APIServ.getErrorCode() == 456) {
        this.dialogServ.errorMessage(456);
      }
      else if (this.mainServ.APIServ.getErrorCode() == 457) {
        this.dialogServ.errorMessage(457);
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    })
  }

  backToTrips() {
    this.mainServ.globalServ.goTo('trips')
  }

  calcPrice(price) {
    if (this.coupon['value'] == null)
      return price;
    if (this.coupon['type'] == "fixed")
      return price - this.coupon['value']
    else if (this.coupon['type'] == "percentage")
      return price - (price * this.coupon['value'] / 100)

  }
  startTime
  endTime;
  formatStartTime(object) {
    if (object == null) {
      if (this.startTime == null) {
        this.startTime = { "hour": 3, "minute": 15, "meriden": "PM", "format": 12 };
      }
      var minute = this.startTime.minute;
      var hour = this.startTime.hour;
      if (this.startTime.hour < 10)
        hour = 0 + "" + this.startTime.hour
      if (this.startTime.minute < 10)
        minute = 0 + "" + this.startTime.minute
      return hour + " : " + minute + " " + this.startTime.meriden
    } else {
      this.startTime = object
      var minute = object.minute;
      var hour = object.hour;
      if (object.hour < 10)
        hour = 0 + "" + object.hour
      if (object.minute < 10)
        minute = 0 + "" + object.minute
      return hour + " : " + minute + " " + object.meriden
    }
  }

  formatEndTime(object) {
    if (object == null) {
      if (this.endTime == null) {
        this.endTime = { "hour": 3, "minute": 15, "meriden": "PM", "format": 12 };
      }
      var minute = this.endTime.minute;
      var hour = this.endTime.hour;
      if (this.endTime.hour < 10)
        hour = 0 + "" + this.endTime.hour
      if (this.endTime.minute < 10)
        minute = 0 + "" + this.endTime.minute
      return hour + " : " + minute + " " + this.endTime.meriden
    } else {
      this.endTime = object
      var minute = object.minute;
      var hour = object.hour;
      if (object.hour < 10)
        hour = 0 + "" + object.hour
      if (object.minute < 10)
        minute = 0 + "" + object.minute
      return hour + " : " + minute + " " + object.meriden
    }
  }


}
