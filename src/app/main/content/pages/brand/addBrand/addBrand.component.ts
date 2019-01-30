import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-addBrand',
  templateUrl: './addBrand.component.html',
  styleUrls: ['./addBrand.component.scss']
})
export class addBrandComponent implements OnInit {
  addBrandForm;
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
    this.addBrandForm = new FormGroup({
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl('')
    });

  }


  add() {
    var data = this.addBrandForm.value;
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.post("drivers", data).subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('brands')
  }


}
