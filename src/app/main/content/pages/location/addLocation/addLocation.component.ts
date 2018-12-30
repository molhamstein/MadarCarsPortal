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

  imaageUrl=this.mainServ.getDefultImage();

  private primaryColor: string = "#127bdc";
  private secondryColor: string = "#127bdc";
  constructor(
    private mainServ: MainService,
    private _formBuilder: FormBuilder,
    private translate: TranslateService,
    private translationLoader: FuseTranslationLoaderService,
  ) {
    this.translationLoader.loadTranslations(english);
  }


  ngOnInit() {
    this.addLocationForm = new FormGroup({
      descriptionEn: new FormControl('', Validators.required),
      descriptionAr: new FormControl('', Validators.required),
      descriptionTr: new FormControl('', Validators.required),
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl('', Validators.required),
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
    });
  }


  add() {
    var data = this.addLocationForm.value;
    if (data['type'] == 'consultant') {
      data['primarycolor'] = this.primaryColor;
      data['secondarycolor'] = this.secondryColor;
    }
    this.mainServ.APIServ.post("staffusers", data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.mainServ.globalServ.goTo('users')
      }
    })
  }

}
