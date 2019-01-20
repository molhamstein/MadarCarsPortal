import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-addLocation',
  templateUrl: './addLocation.component.html',
  styleUrls: ['./addLocation.component.scss']
})
export class addLocationComponent implements OnInit {
  addLocationForm;
  imageOnLoad = []
  listImageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listImages = [];
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
        else {
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
        else {
          this.mainServ.APIServ.setErrorCode(0);
          this.dialogServ.someThingIsError();
        }
      });
    });
    // });
  }


  ngOnInit() {
    this.addLocationForm = new FormGroup({
      descriptionEn: new FormControl('', Validators.required),
      descriptionAr: new FormControl('', Validators.required),
      descriptionTr: new FormControl(''),
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl(''),
    });
  }


  add() {
    var data = this.addLocationForm.value;
    data['mediaId'] = this.media.id;
    data['slideMedia'] = [];
    this.listImages.forEach(element => {
      data['slideMedia'].push({
        "mediaId": element.id
      })
    });
    data['color1'] = this.primaryColor.substr(1);
    data['color2'] = this.secondryColor.substr(1);
    this.mainServ.APIServ.post("locations", data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.mainServ.globalServ.goTo('locations')
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('locations')
  }

  deleteImage(i) {
    this.listImages.splice(i);
  }

}
