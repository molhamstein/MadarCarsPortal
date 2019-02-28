import { transition } from '@angular/animations';
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
  selector: 'app-editCar',
  templateUrl: './editCar.component.html',
  styleUrls: ['./editCar.component.scss']
})
export class editCarComponent implements OnInit {
  // edit
  editCarForm;
  imageOnLoad = []
  listImageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listImages = [];
  carId;
  car;
  brands = [];
  locations = []
  drivers = []
  engineType = ['manual', 'automatic']
  type = ['sport', 'ceremony']

  subLocation = [];
  carSublocations = [];
  isVip = false
  isAirportCar = false
  isCityCar = false

  years = [];

  // subLocation
  filterValue = ""
  allRows = [];
  filterRows = [];
  columns = ["nameAr", "nameEn", "nameTr", "status"]

  // trip
  filterTripValue = ""
  allTripRows = [];
  filterTripRows = [];
  tripColumns = ["cost", "status", "owner.name", "location.nameEn", "car.name"]


  private primaryColor: string = "#127bdc";
  private secondryColor: string = "#127bdc";
  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private translationLoader: FuseTranslationLoaderService,
    private route: ActivatedRoute,
  ) {
    this.translationLoader.loadTranslations(english);
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
      // this.text = reader.result;
    }
    reader.readAsDataURL(file);
  }

  onChangeList(event: any) {
    let files = [].slice.call(event.target.files);
    let allFilles = event.target.files;
    this.listImageOnLoad = Array(files.length);
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
      this.mainServ.APIServ.uploadImage("uploadFiles/image/upload", [fileElement], 1)
        .then((data: any) => {
          this.listImageOnLoad = [];
          countDelete++;
          if (this.mainServ.APIServ.getErrorCode() == 0)
            data.forEach(element => {
              this.listImages.push(element);
            });
          else if (this.mainServ.APIServ.getErrorCode() != 401) {
            this.mainServ.APIServ.setErrorCode(0);
            this.dialogServ.someThingIsError();
          }

        });
    });
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
            this.images[0] = element;
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

  getParams(name, callback) {
    this.route.paramMap.subscribe(params => {
      callback(params.get(name));
    })
  }


  changeLocation(event) {
    this.carSublocations = []
    console.log(event);
    this.subLocation = this.locations.find(x => x.id === event.value).subLocations;
    console.log(this.subLocation);
    this.subLocation.forEach(element => {
      this.carSublocations.push({
        "cost": 0,
        "subLocationId": element.id,
        "name": element.nameEn
      })
    });
    console.log(this.carSublocations);
  }


  ngOnInit() {
    for (let index = 2000; index < 2021; index++) {
      this.years.push(index);
    }
    this.editCarForm = new FormGroup({
      brandId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      numOfSeat: new FormControl('', Validators.required),

      productionDate: new FormControl('', Validators.required),

      pricePerDay: new FormControl('', Validators.required),
      priceOneWay: new FormControl('', Validators.required),
      priceTowWay: new FormControl('', Validators.required),

      locationId: new FormControl('', Validators.required),
      driverId: new FormControl('', Validators.required),


    });
    var mainthis = this

    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("brands").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.brands = data;
        this.mainServ.loaderSer.display(true);
        this.mainServ.APIServ.get("drivers").subscribe((data: any) => {
          this.mainServ.loaderSer.display(false);
          if (this.mainServ.APIServ.getErrorCode() == 0) {
            this.drivers = data;
            this.mainServ.loaderSer.display(true);
            this.mainServ.APIServ.get("locations?filter[include]=subLocations&filter[where][status]=active").subscribe((data: any) => {
              this.mainServ.loaderSer.display(false);
              if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.locations = data;
                this.getParams("id", function (id) {
                  mainthis.carId = id;
                  mainthis.mainServ.loaderSer.display(true);
                  mainthis.mainServ.APIServ.get("cars/" + mainthis.carId).subscribe((data: any) => {
                    mainthis.mainServ.loaderSer.display(false);
                    if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
                      mainthis.car = data;
                      console.log(data);
                      mainthis.media = data.media;
                      mainthis.images[0] = data.media
                      mainthis.listImages = data.carMedia;
                      mainthis.primaryColor = "#" + data.color1;
                      mainthis.secondryColor = "#" + data.color2;
                      mainthis.subLocation = mainthis.locations.find(x => x.id === data.locationId).subLocations;

                      mainthis.subLocation.forEach(element => {
                        var tempcarSub = data['carSublocations'].find(x => x.subLocationId === element.id)
                        var tempCost = 0
                        if (tempcarSub != null)
                          tempCost = tempcarSub.cost
                        mainthis.carSublocations.push({
                          "cost": tempCost,
                          "subLocationId": element.id,
                          "name": element.nameEn
                        })
                      });
                      mainthis.isAirportCar = data['isAirportCar'];
                      mainthis.isCityCar = data['isCityCar'];
                      mainthis.isVip = data['isVip'];
                      mainthis.inisilaize();
                      mainthis.editCarForm = new FormGroup({
                        brandId: new FormControl(data.brandId, Validators.required),
                        name: new FormControl(data.name, Validators.required),
                        numOfSeat: new FormControl(data.numOfSeat, Validators.required),

                        productionDate: new FormControl(data.productionDate, Validators.required),

                        pricePerDay: new FormControl(data.pricePerDay, Validators.required),
                        priceOneWay: new FormControl(data.priceOneWay, Validators.required),
                        priceTowWay: new FormControl(data.priceTowWay, Validators.required),

                        locationId: new FormControl(data.locationId, Validators.required),
                        driverId: new FormControl(data.driverId, Validators.required),
                      });
                    }
                    else if (this.mainServ.APIServ.getErrorCode() != 401) {
                      this.mainServ.APIServ.setErrorCode(0);
                      this.dialogServ.someThingIsError();
                    }
                  })
                });
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
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
    })

  }
  addVacation() {
    var mainthis = this;
    this.dialogServ.addVacation(this.carId, function () {
      mainthis.inisilaize();
    })
  }

  deactivate(id) {
    var mainThis = this;
    this.translate.get('MESSAGES.DEACTIVECAR').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "bookingCars/" + id, {}, false, function () {
        mainThis.inisilaize()
      }, "delete")
    })
  }

  edit() {
    var data = this.editCarForm.value;
    data['mediaId'] = this.media.id;
    data['carMedia'] = [];
    this.listImages.forEach(element => {
      data['carMedia'].push({
        "mediaId": element.id
      })
    });
    data['carSublocations'] = []
    this.carSublocations.forEach(element => {
      data['carSublocations'].push({
        "cost": element.cost,
        "subLocationId": element.subLocationId,
      })
    });
    data['isAirportCar'] = this.isAirportCar;
    data['isCityCar'] = this.isCityCar;
    data['isVip'] = this.isVip;
    data['color1'] = this.primaryColor.substr(1);
    data['color2'] = this.secondryColor.substr(1);
    console.log(data);
    this.mainServ.APIServ.put("cars/" + this.carId, data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back()
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('cars')
  }

  deleteImage(i) {
    this.listImages.splice(i, 1);
    console.log(this.listImages);
  }

  inisilaize() {
    this.mainServ.loaderSer.display(true);
    var filter = { "where": { "carId": this.carId, "type": "vacation" } };
    // var filter = {}
    this.mainServ.APIServ.get("/bookingCars?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {

        this.allRows = data;
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    });

    this.mainServ.loaderSer.display(true);
    var tripFilter = { "where": { "carId": this.carId }, "include": ['rate'] };
    // var filter = {}
    this.mainServ.APIServ.get("trips?filter=" + JSON.stringify(tripFilter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {

        this.allTripRows = data;
        this.calcStartDateAndEnd();
        this.filterTripDatatable();
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    });
  }


  // // sublocation
  // inisilaize() {
  //   this.mainServ.loaderSer.display(true);
  //   var filter = { "where": { "locationId": this.locationId } }
  //   this.mainServ.APIServ.get("subLocations?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
  //     if (this.mainServ.APIServ.getErrorCode() == 0) {

  //       this.mainServ.loaderSer.display(false);
  //       this.allRows = data;
  //       this.filterDatatable();
  //     }
  //     else if (this.mainServ.APIServ.getErrorCode() == 400) {

  //     }
  //     else {
  //       this.mainServ.APIServ.setErrorCode(0);
  //       this.dialogServ.someThingIsError();
  //     }

  //   });
  // }

  // addSublocation() {
  //   this.mainServ.globalServ.goTo('add-sublocation/' + this.locationId)
  // }

  // goTo(pageName, id) {
  //   let url = ""
  //   if (pageName == 'view') {
  //     url = 'show-form/' + id
  //   } else if (pageName == 'edit') {
  //     url = 'edit-sublocation/' + id
  //   }
  //   this.mainServ.globalServ.goTo(url)
  // }


  // filterDatatable() {
  //   if (this.filterValue == null)
  //     this.filterRows = this.allRows
  //   else {
  //     let val = this.filterValue.toLowerCase();
  //     let keys = this.columns;

  //     let colsAmt = this.columns.length;
  //     this.filterRows = this.allRows.filter(function (item) {
  //       for (let i = 0; i < colsAmt; i++) {
  //         if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
  //           return true;
  //         }
  //       }
  //     });
  //   }
  // }

  // deactivate(id) {
  //   var mainThis = this;
  //   this.translate.get('MESSAGES.DEACTIVESUBLOCATION').subscribe((res: string) => {
  //     this.dialogServ.confirmationMessage(res, "subLocations/deactivate/" + id, {}, false, function () {
  //       mainThis.inisilaize()
  //     }, "delete")
  //   })
  // }

  // activate(id) {
  //   var mainThis = this;
  //   this.translate.get('MESSAGES.ACTIVESUBLOCATION').subscribe((res: string) => {
  //     this.dialogServ.confirmationMessage(res, "subLocations/activate/" + id, {}, false, function () {
  //       mainThis.inisilaize()
  //     }, "put")
  //   })
  // }

  addHours(h, start) {
    console.log(start.toString())
    var date = new Date(start.toString());
    date.setHours(date.getHours() + h);
    console.log(date)
    return date
  }

  calcStartDateAndEnd() {
    for (let index = 0; index < this.allTripRows.length; index++) {
      const element = this.allTripRows[index];
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


  filterTripDatatable() {
    if (this.filterTripValue == null)
      this.filterTripRows = this.allTripRows
    else {
      let val = this.filterTripValue.toLowerCase();
      let keys = this.tripColumns;

      let colsAmt = this.tripColumns.length;
      this.filterTripRows = this.allTripRows.filter(function (item) {
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


  isEnLang() {
    if (this.mainServ.loginServ.getLang() == "ar")
      return false
    else
      return true
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

  rate(tripId) {
    var mainThis = this
    this.dialogServ.makeRate(tripId, function () {
      mainThis.inisilaize()
    });

  }

}
