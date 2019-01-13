import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../core/services/main.service';

@Component({
    selector: 'error-message',
    templateUrl: 'error-message.component.html',
    styleUrls: ['error-message.component.scss']
})
export class ErrorMessageComponent {
    errorCode
    message
    constructor(
        public dialogRef: MatDialogRef<ErrorMessageComponent>,
        private translate: TranslateService,
        @Inject(MAT_DIALOG_DATA) public data,
        private translationLoader: FuseTranslationLoaderService,
        private mainServ: MainService) {
        this.errorCode = data['errorCode'];
        this.translate.get('ERROR.' + this.errorCode).subscribe((res: string) => {
            this.message = res;
        })

    }



    onNoClick(): void {
        this.mainServ.APIServ.setErrorCode(0);

        this.dialogRef.close();
    }

    ngOnInit() {
        // this.translate.use('en');
    }
}
