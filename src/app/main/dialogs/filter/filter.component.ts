import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { locale as english } from '../../languageFiles/en';


import { MainService } from '../../../core/services/main.service';
import { DialogService } from '../../../core/services/dialog.service';


@Component({
    selector: 'filter',
    templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.scss']
})
export class FilterComponent {
    rateFilterForm: FormGroup;
    userFilterForm: FormGroup;
    tripFilterForm: FormGroup;
    type = ""
    filter = {};
    // rate
    minRate;
    maxRate;
    // user
    isoCode = []
    statues = ['active', 'deactive', 'pending']

    tripStatues = ['pending', 'approved', 'active', 'deactive', 'finished']
    booleanStatues = [null, true, false]
    locations = []
    constructor(
        public dialogRef: MatDialogRef<FilterComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private mainServ: MainService,
        private _formBuilder: FormBuilder,
    ) {
        this.type = data['type'];
        this.filter = data['filter'];
        console.log(this.filter)
        if (this.type == "rate") {
            this.minRate = this.filter['min-value'];
            this.maxRate = this.filter['max-value'];
            this.rateFilterForm = new FormGroup({
                userName: new FormControl(this.filter['user.name']),
                carNaem: new FormControl(this.filter['car.name']),
                driverName: new FormControl(this.filter['trip.driver.username']),
            });
        }
        else if (this.type == "user") {
            this.isoCode = this.mainServ.globalServ.getIsoCode();
            this.userFilterForm = new FormGroup({
                name: new FormControl(this.filter['name']),
                ISOCode: new FormControl(this.filter['ISOCode']),
                status: new FormControl(this.filter['status']),
            });
        }
        else if (this.type == "trip") {
            this.mainServ.APIServ.get("locations").subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.locations = data;
                }
                else if (this.mainServ.APIServ.getErrorCode() != 401) {
                    this.mainServ.APIServ.setErrorCode(0);
                }
            })

            this.tripFilterForm = new FormGroup({
                isInCity: new FormControl(this.filter['isInCity']),
                isFromAirport: new FormControl(this.filter['isFromAirport']),
                isToAirport: new FormControl(this.filter['isToAirport']),
                userName: new FormControl(this.filter['user.name']),
                status: new FormControl(this.filter['status']),
                locationId: new FormControl(this.filter['locationId']),
                carName: new FormControl(this.filter['car.name']),
                driverUsername: new FormControl(this.filter['driver.username']),
                from: new FormControl(this.filter['from']),
                to: new FormControl(this.filter['to'])
            });
        }

    }
    isEnLang() {
        if (this.mainServ.loginServ.getLang() == "ar")
            return false
        else
            return true
    }


    ngOnInit() {
    }

    saveFilter() {
        if (this.type == "rate") {
            var data = this.rateFilterForm.value;
            this.filter = { "user.name": data.userName, "car.name": data.carNaem, "trip.driver.username": data.driverName, "max-value": this.maxRate, "min-value": this.minRate }
            this.dialogRef.close(this.filter);
        }
        else if (this.type == "user") {
            var data = this.userFilterForm.value;
            this.filter = { "name": data.name, "ISOCode": data.ISOCode, "status": data.status }
            this.dialogRef.close(this.filter);
        }
        else if (this.type == "trip") {

            var data = this.tripFilterForm.value;
            this.filter = {
                "isInCity": data.isInCity,
                "isFromAirport": data.isFromAirport,
                "isToAirport": data.isToAirport,
                "status": data.status,
                "user.name": data.userName,
                "car.name": data.carName,
                "driver.username": data.driverUsername,
                "locationId": data.locationId,
                "from": data.from,
                "to": data.to,
            }
            this.dialogRef.close(this.filter);
        }
    }

}
