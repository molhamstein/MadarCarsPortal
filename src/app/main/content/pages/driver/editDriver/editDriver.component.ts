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
      this.mainServ.APIServ.uploadImage("uploadFiles/image/upload", [fileElement], 1).subscribe((data: any) => {
        this.imageOnLoad = [];
        countDelete++;
        if (this.mainServ.APIServ.getErrorCode() == 0)
          data.forEach(element => {
            this.images[0] = element
            this.media = element;
          });
        else {
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
    });
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.driverId = id;
      mainthis.mainServ.APIServ.get("drivers/" + mainthis.driverId).subscribe((data: any) => {
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
          });

        }
      })
    })


    this.mainServ.APIServ.get("languages").subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.listLanguages = data
      }
    })

  }


  edit() {
    var data = this.editDriverForm.value;
    data['mediaId'] = this.media.id;
    this.mainServ.APIServ.put("drivers/" + this.driverId, data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('drivers')
  }


}
