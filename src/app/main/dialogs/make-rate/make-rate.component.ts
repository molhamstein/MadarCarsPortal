import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../core/services/main.service';

@Component({
    selector: 'make-rate',
    templateUrl: 'make-rate.component.html',
    styleUrls: ['make-rate.component.scss']
})
export class MakeRateComponent {
    trip;
    rateForm
    constructor(
        public dialogRef: MatDialogRef<MakeRateComponent>,
        private translate: TranslateService,
        @Inject(MAT_DIALOG_DATA) public data,
        private translationLoader: FuseTranslationLoaderService,
        private mainServ: MainService) {
        this.trip = data['trip']
        var value;
        if (this.trip.rate == null)
            value = 0
        else
            value = this.trip.rate.value

        this.rateForm = new FormGroup({
            tripId: new FormControl(this.trip.id, Validators.required),
            carId: new FormControl(this.trip.carId, Validators.required),
            value: new FormControl(value, Validators.required),
            ownerId: new FormControl(this.trip.ownerId, Validators.required),
        })
    }



    cancel(): void {
        this.dialogRef.close();
    }

    rate() {
        var data;
        if (this.trip.rateId == null) {
            data = this.rateForm.value;
            this.mainServ.APIServ.post("rates/makeRate", data).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.dialogRef.close(true);
                }
                else {
                    var code = this.mainServ.APIServ.getErrorCode();
                    this.mainServ.APIServ.setErrorCode(0)
                    this.dialogRef.close({ "code": code });
                }
            })
        }
        else {
            data = { "carId": this.rateForm.value['carId'], "value": this.rateForm.value['value'] };
            this.mainServ.APIServ.put("rates/" + this.trip.rateId + "/updateRate", data).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.dialogRef.close(true);
                }
                else {
                    var code = this.mainServ.APIServ.getErrorCode();
                    this.mainServ.APIServ.setErrorCode(0)
                    this.dialogRef.close({ "code": code });
                }
            })

        }
    }
    ngOnInit() {
        // this.translate.use('en');
    }
}
