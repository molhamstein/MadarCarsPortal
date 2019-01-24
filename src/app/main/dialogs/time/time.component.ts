import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FuseTranslationLoaderService } from './../../../core/services/translation-loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../core/services/main.service';


@Component({
    selector: 'time',
    templateUrl: 'time.component.html',
    styleUrls: ['time.component.scss']
})
export class TimeComponent {
    constructor(
        public dialogRef: MatDialogRef<TimeComponent>,
        private translate: TranslateService,
        @Inject(MAT_DIALOG_DATA) public data,
        private translationLoader: FuseTranslationLoaderService,
        private mainServ: MainService) {
    }

    exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 12 };


    cancel(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        // this.translate.use('en');
    }
}
