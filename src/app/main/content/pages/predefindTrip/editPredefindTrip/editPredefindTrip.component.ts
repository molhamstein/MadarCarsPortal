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
  selector: 'app-editPredefindTrip',
  templateUrl: './editPredefindTrip.component.html',
  styleUrls: ['./editPredefindTrip.component.scss']
})
export class editPredefindTripComponent implements OnInit {
  // edit
  editPredefindTripForm;
  imageOnLoad = []
  listImageOnLoad = []
  media;
  imaageUrl = this.mainServ.getDefultImage();
  images = [];
  listImages = [];
  predefindTripId;
  predefindTrip;
  locations = [];
  subLocation = [];
  stillDays = 0;
  predefinedTripsSublocations = [];
  sublocationDuration = 0;
  location;



  public primaryColor: string = "#127bdc";
  public secondryColor: string = "#127bdc";
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
      this.mainServ.APIServ.uploadImage("uploadFiles/image/upload", [fileElement], 1).then((data: any) => {
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


  ngOnInit() {
    this.editPredefindTripForm = new FormGroup({
      descriptionEn: new FormControl('', Validators.required),
      descriptionAr: new FormControl('', Validators.required),
      descriptionTr: new FormControl(''),
      titleEn: new FormControl('', Validators.required),
      titleTr: new FormControl(''),
      titleAr: new FormControl('', Validators.required),
      duration: new FormControl(0, Validators.required),
      locationId: new FormControl('', Validators.required)
    });
    var mainthis = this
    this.getParams("id", function (id) {
      mainthis.predefindTripId = id;
      var locationFilter = { "where": { "status": "active" }, "include": ['subLocations'] }
      mainthis.mainServ.loaderSer.display(true);

      mainthis.mainServ.APIServ.get("locations?filter=" + JSON.stringify(locationFilter)).subscribe((data: any) => {
        mainthis.mainServ.loaderSer.display(false);
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.locations = data;
          mainthis.mainServ.loaderSer.display(true);
          mainthis.mainServ.APIServ.get("predefinedTrips/" + mainthis.predefindTripId).subscribe((data: any) => {
            mainthis.mainServ.loaderSer.display(false);
            if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
              mainthis.predefindTrip = data;
              console.log(data);
              mainthis.media = data.media;
              mainthis.images[0] = data.media
              mainthis.listImages = data.slideMedia;
              mainthis.primaryColor = "#" + data.color1;
              mainthis.secondryColor = "#" + data.color2;
              mainthis.editPredefindTripForm = new FormGroup({
                descriptionEn: new FormControl(data.descriptionEn, Validators.required),
                descriptionAr: new FormControl(data.descriptionAr, Validators.required),
                descriptionTr: new FormControl(''),
                titleEn: new FormControl(data.titleEn, Validators.required),
                titleTr: new FormControl(''),
                titleAr: new FormControl(data.titleAr, Validators.required),
                duration: new FormControl(data.duration, Validators.required),
                locationId: new FormControl(data.locationId, Validators.required)
              });
              mainthis.location = mainthis.locations.find(x => x.id === data.locationId);
              mainthis.subLocation = mainthis.location.subLocations;
              mainthis.subLocation.forEach(element => {
                var tempproSub = data['predefinedTripsSublocations'].find(x => x.subLocationId === element.id)
                var tempDuration = 0
                if (tempproSub != null)
                  tempDuration = tempproSub.duration
                mainthis.sublocationDuration += tempDuration
                mainthis.predefinedTripsSublocations.push({
                  "duration": tempDuration,
                  "subLocationId": element.id,
                  "name": element.nameEn
                })
              });

            }
            else if (this.mainServ.APIServ.getErrorCode() != 401) {
              this.mainServ.APIServ.setErrorCode(0);
              this.dialogServ.someThingIsError();
            }
          })
        }

        else if (mainthis.mainServ.APIServ.getErrorCode() != 401) {
          mainthis.mainServ.APIServ.setErrorCode(0);
          mainthis.dialogServ.someThingIsError();
        }
      })

    });


  }


  addDuration(index) {
    if (this.sublocationDuration == this.editPredefindTripForm.value.duration) {
      this.mainServ.globalServ.openSnackBar(0);
    }
    else {
      this.sublocationDuration++;
      this.predefinedTripsSublocations[index].duration++;

    }
  }

  minDuration(index) {
    if (this.predefinedTripsSublocations[index].duration == 0)
      return
    this.sublocationDuration--;
    this.predefinedTripsSublocations[index].duration--;

  }


  edit() {
    if (this.editPredefindTripForm.invalid)
      return
    var data = this.editPredefindTripForm.value;
    data['mediaId'] = this.media.id;
    data['predefinedTripsMedias'] = [];
    // this.listImages.forEach(element => {
    //   data['predefinedTripsMedia'].push({
    //     "mediaId": element.id
    //   })
    // });
    data['predefinedTripsSublocations'] = this.predefinedTripsSublocations;
    data['color1'] = this.primaryColor.substr(1);
    data['color2'] = this.secondryColor.substr(1);
    this.mainServ.loaderSer.display(true);

    this.mainServ.APIServ.put("predefinedTrips/" + this.predefindTripId, data).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.mainServ.globalServ.goTo('predefined-trips')
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    })

  }

  changeLocation(event) {
    console.log(event);
    this.location = this.locations.find(x => x.id === event.value);
    this.subLocation = this.location.subLocations;
    console.log(this.subLocation);
    this.subLocation.forEach(element => {
      this.predefinedTripsSublocations.push({
        "duration": 0,
        "subLocationId": element.id,
        "name": element.nameEn
      })
    });
    console.log(this.predefinedTripsSublocations);
  }


  back() {
    this.mainServ.globalServ.goTo('predefineds')
  }

  deleteImage(i) {
    this.listImages.splice(i);
    console.log(this.listImages);
  }

}
