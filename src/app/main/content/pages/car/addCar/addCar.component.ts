import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-addCar',
  templateUrl: './addCar.component.html',
  styleUrls: ['./addCar.component.scss']
})
export class addCarComponent implements OnInit {
  addCarForm;
  imageOnLoad = []
  listImageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listImages = [];
  brands = [];
  locations = []
  drivers = []
  engineType = ['manual', 'automatic']
  type = ['sport', 'ceremony']

  subLocation = [];
  carSublocations = [];
  isVip = false
  isAirportCar = true
  isCityCar = true



  years = [];
  private primaryColor: string = "#127bdc";
  private secondryColor: string = "#127bdc";
  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private translationLoader: FuseTranslationLoaderService,
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
      this.mainServ.APIServ.uploadImage("uploadFiles/image/upload", [fileElement], 1).subscribe((data: any) => {
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
      this.mainServ.APIServ.uploadImage("uploadFiles/image/upload", [fileElement], 1).subscribe((data: any) => {
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
    for (let index = 2010; index < 2021; index++) {
      this.years.push(index);
    }
    this.addCarForm = new FormGroup({
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
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("brands").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.brands = data;
        var mercidesObject = this.brands.find(function (element) {
          return element.isDefult == true
        });
        this.addCarForm = new FormGroup({
          brandId: new FormControl(mercidesObject.id, Validators.required),
          name: new FormControl('', Validators.required),
          numOfSeat: new FormControl('', Validators.required),

          productionDate: new FormControl('', Validators.required),

          pricePerDay: new FormControl('', Validators.required),
          priceOneWay: new FormControl('', Validators.required),
          priceTowWay: new FormControl('', Validators.required),

          locationId: new FormControl('', Validators.required),
          driverId: new FormControl('', Validators.required),


        });
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
    })

    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("drivers").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.drivers = data;
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
    })

    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("locations?filter[include]=subLocations&filter[where][status]=active").subscribe((data: any) => {
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


  add() {
    var data = this.addCarForm.value;
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
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.post("cars", data).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back()
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
    })
  }


  changeLocation(event) {
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

  back() {
    this.mainServ.globalServ.goTo('cars')
  }

  deleteImage(i) {
    this.listImages.splice(i);
  }

}
