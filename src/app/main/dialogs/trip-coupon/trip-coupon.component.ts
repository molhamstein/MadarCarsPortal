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
    selector: 'trip-coupon',
    templateUrl: 'trip-coupon.component.html',
    styleUrls: ['trip-coupon.component.scss']
})
export class tripCouponComponent {
    tripCouponForm: FormGroup;
    trip
    coupon
    verifyCoupon
    mainCode;
    constructor(
        public dialogRef: MatDialogRef<tripCouponComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private mainServ: MainService,
        private _formBuilder: FormBuilder,
        private translate: TranslateService,
        private dialogServ: DialogService,
        private translationLoader: FuseTranslationLoaderService,

    ) {
        this.trip = data['trip'];
        if (this.trip['coupon'] != undefined) {
            this.coupon = this.trip['coupon'];
            this.coupon["id"] = this.trip['couponId']
            this.mainCode = this.trip['coupon'].code;
            this.tripCouponForm = new FormGroup({
                code: new FormControl(this.trip['coupon'].code),
            });
        }
        else
            this.tripCouponForm = new FormGroup({
                code: new FormControl(""),
            });
    }


    checkCoupon() {
        this.coupon = {}
        this.mainServ.loaderSer.display(true);
        this.mainServ.APIServ.get("coupons/" + this.tripCouponForm.value['code'] + "/checkCoupon").subscribe((data: any) => {
            this.mainServ.loaderSer.display(false);
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.coupon = data;
                this.verifyCoupon = true;
            }
            else if (this.mainServ.APIServ.getErrorCode() == 462) {
                this.dialogServ.errorMessage(462);
                this.verifyCoupon = false;
            }
            else if (this.mainServ.APIServ.getErrorCode() != 401) {
                this.mainServ.APIServ.setErrorCode(0);
                this.dialogServ.someThingIsError();
            }

        })

    }


    ngOnInit() {
    }

    save() {
        var data = {}
        if (this.tripCouponForm.value['code'] == "") {
            data = {}
        }
        else if (this.coupon != undefined && this.coupon.id != null)
            data = { "couponId": this.coupon.id }

        this.mainServ.APIServ.put("trips/" + this.trip.id + "/editTripCoupon", data).subscribe((data: any) => {
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
    }

}
