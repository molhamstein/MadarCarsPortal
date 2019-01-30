import { MyResetPasswordComponent } from './../../../../dialogs/my-reset-password/my-reset-password.component';
import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from '../../../../languageFiles/en';

import { MainService } from '../../../../../core/services/main.service';
import { DialogService } from '../../../../../core/services/dialog.service';



@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class adminsComponent implements OnInit {
  allRows = [];
  filterRows = [];
  filterValue = "";
  columns = ["email", "username", 'status']

  constructor(private translationLoader: FuseTranslationLoaderService
    , private translateService: TranslateService
    , private mainServ: MainService,
    private dialogServ: DialogService,
    public dialog: MatDialog) {
    this.translationLoader.loadTranslations(english);
    this.inisilaize();
  }





  inisilaize() {
    this.mainServ.loaderSer.display(true);
    this.mainServ.APIServ.get("admins").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.allRows = data;
        this.filterDatatable();
      }
      else if (this.mainServ.APIServ.getErrorCode() != 401) {
        this.mainServ.APIServ.setErrorCode(0);
        this.dialogServ.someThingIsError();
      }

    });
  }

  ngOnInit() {
  }


  goTo(pageName, id) {
    let url = ""
    if (pageName == 'view') {
      url = 'show-form/' + id
    } else if (pageName == 'edit') {
      url = 'edit-admin/' + id
    }
    this.mainServ.globalServ.goTo(url)
  }

  addUser() {
    this.mainServ.globalServ.goTo("add-admin")
  }

  deactivate(id) {
    var mainThis = this;
    this.translateService.get('MESSAGES.DEACTIVELOCATION').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "admins/deactivate/" + id, {}, false, function () {
        mainThis.inisilaize()
      }, "delete")
    })
  }

  activate(id, name) {
    var mainThis = this;
    this.translateService.get('MESSAGES.ACTIVELOCATION').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "admins/activate/" + id, {}, false, function () {
        mainThis.inisilaize()
      }, "put")
    })
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

  isSuperAdmin() {
    return this.mainServ.loginServ.getIsSuperAdmin();
  }

  reset(userId) {
    let dialogRef = this.dialog.open(MyResetPasswordComponent, {
      width: '350px',
      data: { userId: userId, type: "admins" }
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }


}
