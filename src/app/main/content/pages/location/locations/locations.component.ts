import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from '../../../../languageFiles/en';

import { MainService } from '../../../../../core/services/main.service';



@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class locationsComponent implements OnInit {
  rows = [];
  count: number = 0;
  offset: number = 0;
  limit: number = 5;

  constructor(private translationLoader: FuseTranslationLoaderService
    , private translateService: TranslateService
    , private mainServ: MainService,
    public dialog: MatDialog) {
    this.translationLoader.loadTranslations(english);
  }





  inisilaize() {
    this.mainServ.loaderSer.display(true);

    this.mainServ.APIServ.get("locations").subscribe((data: any) => {
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.mainServ.loaderSer.display(false);
        this.rows = data;
      }
      else if (this.mainServ.APIServ.getErrorCode() == 400) {

      }
      else {
        this.mainServ.globalServ.somthingError();
      }

    });
  }

  ngOnInit() {
    this.inisilaize();
  }


  goTo(pageName, id) {
    // let url = ""
    // if (pageName == 'view') {
    //   url = 'show-form/' + id
    // } else if (pageName == 'edit') {
    //   url = 'editUser/' + id

    // }
    // this.mainServ.globalServ.goTo(url)
  }

  addUser() {
    this.mainServ.globalServ.goTo("add-location")
  }

  changeStatus(newStatus, id, name) {
    // var mainThis = this;
    // this.dialogServ.confirmationMessage('Do you want to change ' + name + ' user to ' + newStatus, "stafflocations/" + id, { 'status': newStatus }, false, function () {
    //   mainThis.inisilaize()
    // })

  }
}
