import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../core/services/main.service';

@Component({
    selector: 'confirm-message',
    templateUrl: 'confirm-message.component.html',
    styleUrls: ['confirm-message.component.scss']
})
export class ConfirmMessageComponent {
    message = "";
    sendData = {};
    url = "";
    type = "";
    withReload = true;
    token;
    constructor(
        public dialogRef: MatDialogRef<ConfirmMessageComponent>,
        private translate: TranslateService,
        @Inject(MAT_DIALOG_DATA) public data,
        private translationLoader: FuseTranslationLoaderService,
        private mainServ: MainService) {
        this.message = data['message'];
        this.sendData = data['sendData'];
        this.url = data['url'];
        this.type = data['type'];
        this.token = data['token'];
        this.withReload = data['withReload'];

    }



    onNoClick(): void {
        this.dialogRef.close();
    }

    onYesClick() {
        if (this.type == "patch")
            this.mainServ.APIServ.patch(this.url, this.sendData, this.token).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    if (this.withReload)
                        this.mainServ.globalServ.reload();
                    else
                        this.dialogRef.close(true);

                }
                else {
                    var code = this.mainServ.APIServ.getErrorCode();
                    this.mainServ.APIServ.setErrorCode(0)
                    this.dialogRef.close({ "code": code });
                }
            })
        else if (this.type == "put")
            this.mainServ.APIServ.put(this.url, this.sendData).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    if (this.withReload)
                        this.mainServ.globalServ.reload();
                    else
                        this.dialogRef.close(true);

                }
                else {
                    var code = this.mainServ.APIServ.getErrorCode();
                    this.mainServ.APIServ.setErrorCode(0)
                    this.dialogRef.close({ "code": code });
                }
            })
        else if (this.type == "delete")
            this.mainServ.APIServ.delete(this.url).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    if (this.withReload)
                        this.mainServ.globalServ.reload();
                    else
                        this.dialogRef.close(true);

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
