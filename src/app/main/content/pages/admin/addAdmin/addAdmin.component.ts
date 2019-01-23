import { DialogService } from './../../../../../core/services/dialog.service';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../../core/services/main.service';

import { locale as english } from '../../../../languageFiles/en';


@Component({
  selector: 'app-addAdmin',
  templateUrl: './addAdmin.component.html',
  styleUrls: ['./addAdmin.component.scss']
})
export class addAdminComponent implements OnInit {
  addAdminForm;
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
    this.addAdminForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      
    });

  }


  add() {
    var data = this.addAdminForm.value;
    this.mainServ.APIServ.post("admins", data).subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.back();
      }
    })
  }

  back() {
    this.mainServ.globalServ.goTo('admins')
  }


}
