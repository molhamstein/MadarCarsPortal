import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class addUserComponent implements OnInit {
  addUserForm;
  isoCode = [];
  imageOnLoad = []
  images = [];
  media;
  imaageUrl = this.mainServ.getDefultImage();

  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private dialogServ: DialogService,
    private translationLoader: FuseTranslationLoaderService,
  ) {
    this.translationLoader.loadTranslations(english);

  }



  ngOnInit() {
    this.isoCode = this.mainServ.globalServ.getIsoCode();
    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      ISOCode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }


  add() {
    var data = this.addUserForm.value;
    data['mediaId'] = this.media.id;
    this.mainServ.APIServ.post("users", data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
      else if (this.mainServ.APIServ.getErrorCode() == 451) {
        this.dialogServ.errorMessage(451);
      }
      else {
        this.dialogServ.someThingIsError();
      }

    })
  }

  back() {
    this.mainServ.globalServ.goTo('users')
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

  openSelectImage() {
    document.getElementById('files').click();
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


}
