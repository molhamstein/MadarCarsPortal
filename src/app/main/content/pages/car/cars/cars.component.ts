import { FuseTranslationLoaderService } from './../../../../../core/services/translation-loader.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from '../../../../languageFiles/en';

import { MainService } from '../../../../../core/services/main.service';
import { DialogService } from '../../../../../core/services/dialog.service';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class carsComponent implements OnInit {
  allRows = [];
  filterRows = [];
  filterValue = "";
  columns = ["name", "rate", "numOfSeat", "status", "brand.nameEn", "driver.phoneNumber", "driver.username"]

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
    this.mainServ.APIServ.get("cars").subscribe((data: any) => {
      this.mainServ.loaderSer.display(false);
      if (this.mainServ.APIServ.getErrorCode() == 0) {
        this.allRows = data;
        this.filterDatatable();
      }
      else if (this.mainServ.APIServ.getErrorCode() == 400) {

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
      url = 'edit-car/' + id
    }
    this.mainServ.globalServ.goTo(url)
  }

  addUser() {
    this.mainServ.globalServ.goTo("add-car")
  }

  deactivate(id) {
    var mainThis = this;
    this.translateService.get('MESSAGES.DEACTIVECAR').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "cars/deactivate/" + id, {}, false, function () {
        mainThis.inisilaize()
      }, "delete")
    })
  }

  activate(id, name) {
    var mainThis = this;
    this.translateService.get('MESSAGES.ACTIVECAR').subscribe((res: string) => {
      this.dialogServ.confirmationMessage(res, "cars/activate/" + id, {}, false, function () {
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
          if (keys[i] == "brand.nameEn") {
            if (item["brand"]["nameEn"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          } else if (keys[i] == "driver.phoneNumber") {
            if (item["driver"]["phoneNumber"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          } else if (keys[i] == "driver.username") {
            if (item["driver"]["username"].toString().toLowerCase().indexOf(val) !== -1 || !val)
              return true;
          }
          else if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            return true;
          }
        }
      });
    }
  }


}
