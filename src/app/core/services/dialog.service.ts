import { LoginService } from './login.service';
import { CallApiService } from './call-api.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe } from '@angular/common';
import { SomeThingIsErrorComponent } from '../../main/dialogs/some-thing-is-error/some-thing-is-error.component';



@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {
  }

  someThingIsError() {
    let dialogRef = this.dialog.open(SomeThingIsErrorComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }



}
