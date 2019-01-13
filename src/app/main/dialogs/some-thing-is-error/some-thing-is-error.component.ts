import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale as english } from '../../languageFiles/en';
import { MainService } from '../../../core/services/main.service';

@Component({
    selector: 'some-thing-is-error',
    templateUrl: 'some-thing-is-error.component.html',
    styleUrls: ['some-thing-is-error.component.scss']
})
export class SomeThingIsErrorComponent {
    constructor(
        public dialogRef: MatDialogRef<SomeThingIsErrorComponent>,
        private translate: TranslateService,
        private mainServ: MainService,
        private translationLoader: FuseTranslationLoaderService) {
        // ) {
        this.translationLoader.loadTranslations(english);

    }



    onNoClick(): void {
        this.mainServ.APIServ.setErrorCode(0)
        this.dialogRef.close();
    }
    ngOnInit() {
        this.translate.use('en');
    }
}
