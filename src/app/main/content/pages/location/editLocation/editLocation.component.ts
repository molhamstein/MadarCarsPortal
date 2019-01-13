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
  selector: 'app-editLocation',
  templateUrl: './editLocation.component.html',
  styleUrls: ['./editLocation.component.scss']
})
export class editLocationComponent implements OnInit {
  // edit
  editLocationForm;
  imageOnLoad = []
  listImageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listImages = [];
  locationId;
  location;

  // subLocation
  filterValue = ""
  allRows = [];
  filterRows = [];
  columns = ["nameAr", "nameEn", "nameTr", "status"]

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
    alert("ssss");
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
            this.images[0] = element;
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

  getParams(name, callback) {
    this.route.paramMap.subscribe(params => {
      callback(params.get(name));
    })
  }


  ngOnInit() {
    this.editLocationForm = new FormGroup({
      descriptionEn: new FormControl('', Validators.required),
      descriptionAr: new FormControl('', Validators.required),
      descriptionTr: new FormControl('', Validators.required),
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl('', Validators.required),
    });
    var mainthis = this
    this.getParams("id", function (id) {
      mainthis.locationId = id;
      mainthis.mainServ.APIServ.get("locations/" + mainthis.locationId).subscribe((data: any) => {
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.inisilaize();
          mainthis.location = data;
          console.log(data);
          mainthis.media = data.media;
          mainthis.images[0] = data.media
          mainthis.listImages = data.slideMedia;
          mainthis.primaryColor = data.color1;
          mainthis.secondryColor = data.color2;
          mainthis.editLocationForm = new FormGroup({
            descriptionEn: new FormControl(data.descriptionEn, Validators.required),
            descriptionAr: new FormControl(data.descriptionAr, Validators.required),
            descriptionTr: new FormControl(data.descriptionTr, Validators.required),
            nameEn: new FormControl(data.nameEn, Validators.required),
            nameAr: new FormControl(data.nameAr, Validators.required),
            nameTr: new FormControl(data.nameTr, Validators.required),
          });
        }
      })
    });


  }


  edit() {
    var data = this.editLocationForm.value;
    data['mediaId'] = this.media.id;
    data['slideMedia'] = [];
    this.listImages.forEach(element => {
      data['slideMedia'].push({
        "mediaId": element.id
      })
    });
    data['color1'] = this.primaryColor;
    data['color2'] = this.secondryColor;
    this.mainServ.APIServ.put("locations/" + this.locationId, data).subscribe((data: any) => {
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
    console.log(this.listImages);
  }


  // sublocation
  inisilaize() {
    this.mainServ.loaderSer.display(true);
    var filter = { "where": { "locationId": this.locationId } }
    this.mainServ.APIServ.get("subLocations?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {

        this.mainServ.loaderSer.display(false);
        this.allRows = data;
        this.filterDatatable();
      }
      else if (this.mainServ.APIServ.getErrorCode() == 400) {

      }
      else {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    });
  }

  addSublocation() {
    this.mainServ.globalServ.goTo('add-sublocation/' + this.locationId)
  }

  goTo(pageName, id) {
    let url = ""
    if (pageName == 'view') {
      url = 'show-form/' + id
    } else if (pageName == 'edit') {
      url = 'edit-sublocation/' + id
    }
    this.mainServ.globalServ.goTo(url)
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
          if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            return true;
          }
        }
      });
    }
  }

  deactivate(id) {
    var mainThis = this;
    this.translate.get('MESSAGES.DEACTIVESUBLOCATION').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "subLocations/deactivate/" + id, {}, false, function () {
        mainThis.inisilaize()
      }, "delete")
    })
  }

  activate(id) {
    var mainThis = this;
    this.translate.get('MESSAGES.ACTIVESUBLOCATION').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "subLocations/activate/" + id, {}, false, function () {
        mainThis.inisilaize()
      }, "put")
    })
  }

}
