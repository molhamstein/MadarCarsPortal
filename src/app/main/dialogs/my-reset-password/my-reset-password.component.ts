import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../core/services/main.service';

@Component({
    selector: 'my-reset-password',
    templateUrl: 'my-reset-password.component.html',
    styleUrls: ['my-reset-password.component.scss']
})
export class MyResetPasswordComponent {
    userId = "";
    type = "";
    resetPassForm
    constructor(
        public dialogRef: MatDialogRef<MyResetPasswordComponent>,
        private translate: TranslateService,
        @Inject(MAT_DIALOG_DATA) public data,
        private translationLoader: FuseTranslationLoaderService,
        private mainServ: MainService) {
        this.userId = data['userId']
        this.type = data['type']
        this.resetPassForm = new FormGroup({
            newPassword: new FormControl('', Validators.required),
        })
    }



    cancel(): void {
        this.dialogRef.close();
    }

    reset() {
        var data = this.resetPassForm.value;
        data['userId'] = this.userId;
        this.mainServ.APIServ.put(this.type + "/resetPassword", data).subscribe((data: any) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.dialogRef.close();
            }
            else {
                var code = this.mainServ.APIServ.getErrorCode();
                this.mainServ.APIServ.setErrorCode(0)
                this.dialogRef.close({ "code": code });
            }
        })
    }
    ngOnInit() {
        // this.translate.use('en');
    }
}
