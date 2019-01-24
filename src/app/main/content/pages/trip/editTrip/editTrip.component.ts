import { duration } from 'moment';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-editTrip',
  templateUrl: './editTrip.component.html',
  styleUrls: ['./editTrip.component.scss']
})
export class editTripComponent implements OnInit {
  trip;
  tripId;

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
  carsSublocations = [];

  mainTripdays = 0;
  tripdays = 0;
  subLocationDays = 0;
  pricePerDay = 0;
  airportPrice = 0;
  location;
  subLocationId


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


  addDuration(index) {
    if (this.subLocationDays == this.mainTripdays) {
      alert("Error")
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


  differenceInHourse(firstDate, secDate,isJustTime:boolean=false) {
    secDate=new Date(secDate);
    firstDate=new Date(firstDate);
    var timeDiff = secDate.getTime() - firstDate.getTime();
    if(isJustTime)
      return timeDiff
    var diffHourse = Math.ceil(timeDiff / (1000 * 3600));
    var daysNum = Math.ceil(diffHourse / 24)
    this.mainTripdays = daysNum;
    this.tripdays = daysNum;
    return (daysNum * 24)
  }

  getParams(name, callback) {
    this.route.paramMap.subscribe(params => {
      callback(params.get(name));
    })
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

    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.tripId = id;
      mainthis.mainServ.APIServ.get("trips/" + mainthis.tripId).subscribe((data: any) => {
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.trip = data;
          mainthis.prerperData(data);
        }
        else {
          mainthis.dialogServ.someThingIsError();
        }
      })
    })
  }

  converdateToObject(date) {
    console.log("date")
    console.log(date)
    var newDate = new Date(date)
    console.log("newDate")
    console.log(newDate.getHours())
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();
    var meriden = "AM"
    if (hour > 12) {
      hour -= 12;
      meriden = "PM"
    }
    return { "hour": hour, "minute": minute, "meriden": meriden, "format": 12 }

  }

  prerperData(data) {
    // firstStep
    this.stepOneForm = new FormGroup({
      locationId: new FormControl(data.locationId, Validators.required),
      ownerId: new FormControl(data.ownerId, Validators.required)
    });

    this.isFromAirport = data.fromAirport;
    this.isInCity = data.inCity;
    this.isToAirport = data.toAirport;
    this.tripType = data.type
    this.carsSublocations=data.car.carSublocations;
    this.tripSublocations=data.tripSublocations;
    this.getTypeTrip()

    this.allData['locationId'] = this.stepOneForm.value.locationId
    this.allData['ownerId'] = this.stepOneForm.value.ownerId;
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

    //end firstStep

    // secStep
    if (this.tripType == this.type[0]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.fromAirportDate)
      });
      this.startTime = this.converdateToObject(data.fromAirportDate)
      console.log("startTime")
      console.log(this.startTime)
    } else if (this.tripType == this.type[1]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.startInCityDate),
        seconde: new FormControl(data.endInCityDate)
      });
    } else if (this.tripType == this.type[2]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.toAirportDate)
      });
      this.startTime = this.converdateToObject(data.toAirportDate)
    } else if (this.tripType == this.type[3]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.fromAirportDate),
        seconde: new FormControl(data.endInCityDate)
      });
      this.startTime = this.converdateToObject(data.fromAirportDate)

    } else if (this.tripType == this.type[4]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.fromAirportDate),
        seconde: new FormControl(data.toAirportDate)
      });
      this.startTime = this.converdateToObject(data.fromAirportDate)
      this.endTime = this.converdateToObject(data.toAirportDate)

    } else if (this.tripType == this.type[5]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.startInCityDate),
        seconde: new FormControl(data.toAirportDate)
      });
      this.endTime = this.converdateToObject(data.toAirportDate)

    } else if (this.tripType == this.type[6]) {
      this.stepSecForm = new FormGroup({
        first: new FormControl(data.fromAirportDate),
        seconde: new FormControl(data.toAirportDate)
      });
      this.startTime = this.converdateToObject(data.fromAirportDate)
      this.endTime = this.converdateToObject(data.toAirportDate)
    }

    // end secStep

    // thierdStep

    this.stepthreeForm = new FormGroup({
      carId: new FormControl(data.carId, Validators.required)
    });

    // end thierdStep




  }

  doSomething(event) {
    var carId="";
    if(event.value==null)
      carId=event
    else
      carId=event.value
    var selectedCar = this.carAvailable.find(function (element) {
      return element.id.toString() == carId.toString();
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
    date=new Date(date);
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

  checkChangeDates(firstDate,secDate) {

    if (this.tripType == this.type[0]){
        var from =this.mixDateTime(firstDate, this.startTime);
        console.log("from")
        console.log(from)
        console.log("new Date(this.trip.fromAirportDate)")
        console.log(new Date(this.trip.fromAirportDate))
        console.log("diffffffffff")
        console.log(this.differenceInHourse(from,new Date(this.trip.fromAirportDate),true))
        if(this.differenceInHourse(from,new Date(this.trip.fromAirportDate),true)==0){
          return false;
        }
        else
         return true
    }
    else if (this.tripType == this.type[1]){
      var from = this.mixDateTime(firstDate, { hour: 0, minute: 0, meriden: "AM", format: 12 });
      var to = this.mixDateTime(secDate, { hour: 11, minute: 59, meriden: "PM", format: 12 });
      if(this.differenceInHourse(from,new Date(this.trip.startInCityDate),true)==0 && this.differenceInHourse(to,new Date(this.trip.endInCityDate),true)==0){
        return false;
      }
      else
       return true
    }
    else if (this.tripType == this.type[2]){
      var from = this.mixDateTime(firstDate, this.startTime);
      if(this.differenceInHourse(from,new Date(this.trip.toAirportDate),true)==0){
        return false;
      }
      else
       return true
    }
    else if (this.tripType == this.type[3]){
      var from = this.mixDateTime(firstDate, this.startTime);
      var to = this.mixDateTime(secDate, { hour: 11, minute: 59, meriden: "PM", format: 12 });
      if(this.differenceInHourse(from,new Date(this.trip.fromAirportDate),true)==0 && this.differenceInHourse(to,new Date(this.trip.endInCityDate),true)==0){
        return false;
      }
      else
       return true
    }
    else if (this.tripType == this.type[4]){
      var from = this.mixDateTime(firstDate, this.startTime);
      var to = this.mixDateTime(secDate, this.endTime);
      if(this.differenceInHourse(from,new Date(this.trip.fromAirportDate),true)==0 && this.differenceInHourse(to,new Date(this.trip.toAirportDate),true)==0){
        return false;
      }
      else
       return true
    }
    else if (this.tripType == this.type[5]){
      var from = this.mixDateTime(firstDate,  { hour: 0, minute: 0, meriden: "AM", format: 12 });
      var to = this.mixDateTime(secDate, this.endTime);
      if(this.differenceInHourse(from,new Date(this.trip.startInCityDate),true)==0 && this.differenceInHourse(to,new Date(this.trip.toAirportDate),true)==0){
        return false;
      }
      else
       return true
    }
    else if (this.tripType == this.type[6]){
      var from = this.mixDateTime(firstDate, this.startTime);
      var to = this.mixDateTime(secDate, this.endTime);
      if(this.differenceInHourse(from,new Date(this.trip.fromAirportDate),true)==0 && this.differenceInHourse(to,new Date(this.trip.toAirportDate),true)==0){
        return false;
      }
      else
       return true
    }

  }

  anyChange(stepNum) {
    if (stepNum == 1) {
      if (this.stepOneForm.value.locationId == this.trip['locationId'] &&
        this.isFromAirport == this.trip['fromAirport'] &&
        this.isToAirport == this.trip['toAirport'] &&
        this.isInCity == this.trip['inCity']
      ) {
        return false;
      } else {
        return true;
      }
    }
    else if (stepNum == 2) {
      console.log("Start AnyChange");
      var firstDate = new Date(this.stepSecForm.value['first'])
      var secDate = new Date(this.stepSecForm.value['seconde'])

      return this.checkChangeDates(firstDate,secDate) 
    }
    else if (stepNum == 3) {
      if(this.stepthreeForm.value.carId == this.trip['carId'])
        return false;
      else 
        return true
    }
  }

  newData = false;


  next(stepNum) {
    if (stepNum == 2) {
      if (this.anyChange(1) == true) {
        this.newData = true;
        this.tripType = this.getTypeTrip()
        this.stepSecForm = new FormGroup({
          first: new FormControl(""),
          seconde: new FormControl("")
        });
        this.startTime = this.converdateToObject(new Date())
        this.endTime = this.converdateToObject(new Date())

        this.activeLink = this.links[stepNum - 1].name;
        this.allData['locationId'] = this.stepOneForm.value.locationId
        this.allData['ownerId'] = this.stepOneForm.value.ownerId;
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
        console.log(this.subLocationId);
      } else {
        this.activeLink = this.links[stepNum - 1].name;
      }
    }
    else if (stepNum == 3) {
      if (this.newData == true || this.anyChange(2) == true) {
        this.stepthreeForm = new FormGroup({
          carId: new FormControl('', Validators.required)
        });
        this.newData == true
      }
        this.totalPrice = 0;
        var firstDate = this.stepSecForm.value['first']
        var secDate = this.stepSecForm.value['seconde']
        if (this.cheackValidateionSecStep(firstDate, secDate, this.startTime,this.endTime)) {
          if (secDate) {
            if (this.differenceInHourse(firstDate, secDate) > 0) {
              var flags = { "fromAirport": this.isFromAirport, "inCity": this.isInCity, "toAirport": this.isToAirport }
              this.mainServ.APIServ.get("cars/getAvailable?flags=" + JSON.stringify(flags) + "&dates=" + JSON.stringify(this.carDate) + "&locationId=" + this.allData['locationId']+"&tripId="+this.tripId).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                  this.carAvailable = data;
                  this.activeLink = this.links[stepNum - 1].name;
                }
                else {
                  this.dialogServ.someThingIsError();
                }

              })
            }
            else {
              alert("error")
            }
          }
          else {
            var flags = { "fromAirport": this.isFromAirport, "inCity": this.isInCity, "toAirport": this.isToAirport }
            this.mainServ.APIServ.get("cars/getAvailable?flags=" + JSON.stringify(flags) + "&dates=" + JSON.stringify(this.carDate) + "&locationId=" + this.allData['locationId']+"&tripId="+this.tripId).subscribe((data: any) => {
              if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.carAvailable = data;
                this.activeLink = this.links[stepNum - 1].name;
              }
              else {
                this.dialogServ.someThingIsError();
              }

            })

          }
        } else {
          alert("error")

        }
      
    }
    else if (stepNum == 4) {
      if (this.newData == true || this.anyChange(3) == true) {
        this.allData['carId'] = this.stepthreeForm.value['carId']
        var filter = { "where": { "and": [{ "carId": this.allData['carId'] }, { "subLocationId": { "inq": this.subLocationId } }] } }
        console.log("carSublocations?filter=" + JSON.stringify(filter))
        this.mainServ.APIServ.get("carSublocations?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
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
          else {
            this.dialogServ.someThingIsError();
          }

        })
      }else{
        this.doSomething(this.trip['carId']);
        var daysInSub=0;
        for (let index = 0; index < this.tripSublocations.length; index++) {
          const element = this.tripSublocations[index];
          this.subLocaationPrice+=(element.duration*element.cost)
          this.subLocationDays+=element.duration;
          this.totalPrice -= (this.pricePerDay*element.duration);
          this.tripdays-=element.duration;
    
        }
        this.activeLink = this.links[stepNum - 1].name;
      }
    }
  }


  edit() {
    // var data = this.editTripForm.value;
    // this.mainServ.APIServ.put("users/" + this.userId, data).subscribe((data: any) => {
    //   if (this.mainServ.APIServ.getErrorCode() == 0) {
    //     this.back();
    //   }
    //   else if (this.mainServ.APIServ.getErrorCode() == 451) {
    //     this.dialogServ.errorMessage(451);
    //   }
    //   else {
    //     this.dialogServ.someThingIsError();
    //   }
    // })
  }

  back() {
    this.mainServ.globalServ.goTo('users')
  }

  startTime;
  endTime;
  formatStartTime(object) {
    if (object == null) {
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
      if (this.endTime == null)
        return;
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
