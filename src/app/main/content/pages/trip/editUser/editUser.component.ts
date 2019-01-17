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
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.scss']
})
export class editUserComponent implements OnInit {
  editUserForm;
  isoCode
  userId;
  user;
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
    this.editUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      ISOCode: new FormControl('', Validators.required)
    });
    this.isoCode = this.mainServ.globalServ.getIsoCode();
    var mainthis = this;
    this.getParams("id", function (id) {
      mainthis.userId = id;
      mainthis.mainServ.APIServ.get("users/" + mainthis.userId).subscribe((data: any) => {
        if (mainthis.mainServ.APIServ.getErrorCode() == 0) {
          mainthis.user = data;
          mainthis.editUserForm = new FormGroup({
            name: new FormControl(data.name, Validators.required),
            phoneNumber: new FormControl(data.phoneNumber, Validators.required),
            ISOCode: new FormControl(data.ISOCode, Validators.required)
          });

        }
        else {
          this.dialogServ.someThingIsError();
        }
      })
    })
  }


  edit() {
    var data = this.editUserForm.value;
    this.mainServ.APIServ.put("users/" + this.userId, data).subscribe((data: any) => {
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


}
