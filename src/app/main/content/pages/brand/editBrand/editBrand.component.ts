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
  selector: 'app-editBrand',
  templateUrl: './editBrand.component.html',
  styleUrls: ['./editBrand.component.scss']
})
export class editBrandComponent implements OnInit {
  editBrandForm;
  brandId;
  brand;
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




  ngOnInit() {
    this.editBrandForm = new FormGroup({
      nameEn: new FormControl('', Validators.required),
      nameAr: new FormControl('', Validators.required),
      nameTr: new FormControl('', Validators.required)
    });
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.brandId = id;
      mainthis.mainServ.APIServ.get("brands/" + mainthis.brandId).subscribe((data: any) => {
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.brand = data;
          mainthis.editBrandForm = new FormGroup({
            nameEn: new FormControl(data.nameEn, Validators.required),
            nameAr: new FormControl(data.nameAr, Validators.required),
            nameTr: new FormControl(data.nameTr, Validators.required),
          });

        }
      })
    })
  }


  edit() {
    var data = this.editBrandForm.value;
    this.mainServ.APIServ.put("brands/" + this.brandId, data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('brands')
  }


}
