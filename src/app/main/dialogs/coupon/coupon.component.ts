import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { locale as english } from '../../languageFiles/en';

import * as moment from 'moment'; // add this 1 of 4

import { MainService } from '../../../core/services/main.service';
import { DialogService } from '../../../core/services/dialog.service';


@Component({
    selector: 'coupon',
    templateUrl: 'coupon.component.html',
    styleUrls: ['coupon.component.scss']
})
export class CouponComponent {
    couponForm: FormGroup;
    isNew;
    coupon;
    typeCoupon = [{ "view": "COUPON.FIXED", "value": "fixed" }, { "view": "COUPON.PERCENTAGE", "value": "percentage" }]
    constructor(
        public dialogRef: MatDialogRef<CouponComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private mainServ: MainService,
        private _formBuilder: FormBuilder,
        private translate: TranslateService,
        private dialogServ: DialogService,
        private translationLoader: FuseTranslationLoaderService,

    ) {
        this.isNew = data["isNew"];
        if (this.isNew == true)
            this.couponForm = new FormGroup({
                from: new FormControl('', Validators.required),
                to: new FormControl('', Validators.required),
                value: new FormControl(data.value, Validators.required),
                type: new FormControl(data.type, Validators.required),
                code: new FormControl('', Validators.required),
                numberOfUses: new FormControl(Number.MAX_VALUE, Validators.required),
                numberOfUsed: new FormControl(0, Validators.required),
                travelAgencyId: new FormControl(data['travelAgencyId'], Validators.required)
            });
        else {
            this.coupon = data['coupon']
            this.couponForm = new FormGroup({
                from: new FormControl(new Date(this.coupon.from), Validators.required),
                to: new FormControl(new Date(this.coupon.to), Validators.required),
                value: new FormControl(data.value, Validators.required),
                type: new FormControl(data.type, Validators.required),
                code: new FormControl({ value: this.coupon.code, disabled: true }, Validators.required),
                numberOfUses: new FormControl(this.coupon.numberOfUses, Validators.required),
                numberOfUsed: new FormControl(this.coupon.numberOfUsed, Validators.required),
                travelAgencyId: new FormControl(data['travelAgencyId'], Validators.required)
            });

        }
    }

    convertTo24(str) {
        str = String(str).toLowerCase().replace(/\s/g, '');
        var has_am = str.indexOf('am') >= 0;
        var has_pm = str.indexOf('pm') >= 0;
        // first strip off the am/pm, leave it either hour or hour:minute
        str = str.replace('am', '').replace('pm', '');
        // if hour, convert to hour:00
        if (str.indexOf(':') < 0) str = str + ':00';
        // now it's hour:minute
        // we add am/pm back if striped out before 
        if (has_am) str += ' am';
        if (has_pm) str += ' pm';
        // now its either hour:minute, or hour:minute am/pm
        // put it in a date object, it will convert to 24 hours format for us 
        var d = new Date("1/1/2011 " + str);
        // make hours and minutes double digits
        var doubleDigits = function (n) {
            return (parseInt(n) < 10) ? "0" + n : String(n);
        };
        return { 'hours': doubleDigits(d.getHours()), 'minutes': doubleDigits(d.getMinutes()) }
    }

    ngOnInit() {
    }

    save() {
        let data = this.couponForm.value;

        data['from'].setHours(0);
        data['from'].setMinutes(0);

        data['to'].setHours(23);
        data['to'].setMinutes(59);
        if (this.isNew)
            this.mainServ.APIServ.post("coupons", data).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.dialogRef.close(true);
                }
                else if (this.mainServ.APIServ.getErrorCode() == 461) {
                    this.dialogServ.errorMessage(461);
                }
                else if (this.mainServ.APIServ.getErrorCode() != 401) {
                    this.mainServ.APIServ.setErrorCode(0);
                }
            });
        else {
            this.mainServ.APIServ.put("coupons/" + this.coupon.id, data).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.dialogRef.close(true);
                }
                else if (this.mainServ.APIServ.getErrorCode() != 401) {
                    this.mainServ.APIServ.setErrorCode(0);
                }
            });

        }
    }

}
