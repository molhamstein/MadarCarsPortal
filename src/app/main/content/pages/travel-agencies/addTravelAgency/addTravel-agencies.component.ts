import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-addTravel-agencies',
  templateUrl: './addTravel-agencies.component.html',
  styleUrls: ['./addTravel-agencies.component.scss']
})
export class addTravelAgenciesComponent implements OnInit {
  addTravelAgenciesForm;
  imageOnLoad = []
  isoCode = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listLanguages = [];
  typeCoupon = [{ "view": "TRAVEL.FIXED", "value": "fixed" }, { "view": "TRAVEL.PERCENTAGE", "value": "percentage" }]
  public hide=true;
  public primaryColor: string = "#127bdc";
  public secondryColor: string = "#127bdc";
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
    this.addTravelAgenciesForm = new FormGroup({
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      ISOCode: new FormControl('', Validators.required)
    });
  }


  add() {
    if (this.addTravelAgenciesForm.invalid)
    return

    var data = this.addTravelAgenciesForm.value;
    if (this.media != null)
      data['mediaId'] = this.media.id;
    this.mainServ.loaderSer.display(true);

    this.mainServ.APIServ.post("travelAgencies", data).subscribe((data: any) => {
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


}
