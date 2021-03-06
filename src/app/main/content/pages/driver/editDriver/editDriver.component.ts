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
  selector: 'app-editDriver',
  templateUrl: './editDriver.component.html',
  styleUrls: ['./editDriver.component.scss']
})
export class editDriverComponent implements OnInit {
  editDriverForm;
  imageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listLanguages = [];
  driverId;
  driver;

  // trip
  filterValue = ""
  allRows = [];
  filterRows = [];
  columns = ["cost", "status", "owner.name", "location.nameEn", "car.name"]


  // car
  filterCarValue = ""
  allCarRows = [];
  filterCarsRows = [];
  carColumns = ["name", "rate", "numOfSeat", "status", "brand.nameEn", "driver.phoneNumber", "driver.username"]



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
    this.editDriverForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required),
      driverLangs: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
    });
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.driverId = id;
      mainthis.mainServ.loaderSer.display(true);

      mainthis.mainServ.APIServ.get("drivers/" + mainthis.driverId).subscribe((data: any) => {
        mainthis.mainServ.loaderSer.display(false);

        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.driver = data;
          var langId = [];
          data.driverLangs.forEach(element => {
            langId.push(element.landuageId)
          });
          mainthis.media = data.media;
          mainthis.images[0] = data.media
          mainthis.editDriverForm = new FormGroup({
            firstName: new FormControl(data.firstName, Validators.required),
            lastName: new FormControl(data.lastName, Validators.required),
            phoneNumber: new FormControl(data.phoneNumber, Validators.required),
            email: new FormControl(data.email, [Validators.required, Validators.email]),
            gender: new FormControl(data.gender, Validators.required),
            driverLangs: new FormControl(langId, Validators.required),
            username: new FormControl(data.username, Validators.required),
            birthdate: new FormControl(data.birthdate, Validators.required),
          });
          mainthis.inisilaize();

        }
        else if (mainthis.mainServ.APIServ.getErrorCode() != 401) {
          mainthis.mainServ.APIServ.setErrorCode(0);
          mainthis.dialogServ.someThingIsError();
        }
      })
    })

    this.mainServ.loaderSer.display(true);

    this.mainServ.APIServ.get("languages").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.listLanguages = data
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
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

  inisilaize() {
    this.mainServ.loaderSer.display(true);
    var filter = { "where": { "driverId": this.driverId }, "include": ['rate'] };
    // var filter = {}
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
    var carFilter = { "where": { "driverId": this.driverId } };
    // var filter = {}
    this.mainServ.APIServ.get("cars?filter=" + JSON.stringify(carFilter)).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.allCarRows = data;
        console.log("this.allCarRows")
        console.log(this.allCarRows)
        this.filterCarDatatable();
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
    if (this.editDriverForm.invalid)
      return
    var data = this.editDriverForm.value;
    data['mediaId'] = this.media.id;
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.put("drivers/" + this.driverId, data).subscribe((data: any) => {
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
    this.mainServ.globalServ.goTo('drivers')
  }



  filterCarDatatable() {
    if (this.filterCarValue == null)
      this.filterCarsRows = this.allCarRows
    else {
      let val = this.filterCarValue.toLowerCase();
      let keys = this.carColumns;
      let colsAmt = this.carColumns.length;
      this.filterCarsRows = this.allCarRows.filter(function (item) {
        for (let i = 0; i < colsAmt; i++) {
          if (keys[i] == "brand.nameEn") {
            if (item["brand"]["nameEn"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          } else if (keys[i] == "driver.phoneNumber") {
            if (item["driver"]["phoneNumber"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          } else if (keys[i] == "driver.username") {
            if (item["driver"]["username"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          }
          else if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            return true;
          }
        }
      });
    }

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
