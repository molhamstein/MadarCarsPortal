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
  selector: 'app-editAdmin',
  templateUrl: './editAdmin.component.html',
  styleUrls: ['./editAdmin.component.scss']
})
export class editAdminComponent implements OnInit {
  editAdminForm;
  adminId;
  admin;


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
    this.editAdminForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
    });
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.adminId = id;
      mainthis.mainServ.loaderSer.display(true);
      mainthis.mainServ.APIServ.get("admins/" + mainthis.adminId).subscribe((data: any) => {
        mainthis.mainServ.loaderSer.display(false);
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.admin = data;
          mainthis.editAdminForm = new FormGroup({
            email: new FormControl(data.email, [Validators.required, Validators.email]),
            username: new FormControl(data.username, Validators.required),
          });
        }
        else if (mainthis.mainServ.APIServ.getErrorCode() != 401) {
          mainthis.mainServ.APIServ.setErrorCode(0);
          mainthis.dialogServ.someThingIsError();
        }
      })
    })
  }




  edit() {
    var data = this.editAdminForm.value;
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.put("admins/" + this.adminId, data).subscribe((data: any) => {
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
    this.mainServ.globalServ.goTo('admins')
  }



}
