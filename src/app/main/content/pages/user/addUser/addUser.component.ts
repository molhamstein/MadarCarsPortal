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
    this.mainServ.APIServ.post("users", data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
      else if (this.mainServ.APIServ.getErrorCode() == 451) {
        this.dialogServ.errorMessage(451);
      }
      else{
        this.dialogServ.someThingIsError();
      }

    })
  }

  back() {
    this.mainServ.globalServ.goTo('users')
  }


}
