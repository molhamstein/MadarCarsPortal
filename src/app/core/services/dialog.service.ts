import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe } from '@angular/common';
import { SomeThingIsErrorComponent } from '../../main/dialogs/some-thing-is-error/some-thing-is-error.component';
import { ConfirmMessageComponent } from '../../main/dialogs/confirm-message/confirm-message.component';
import { ErrorMessageComponent } from '../../main/dialogs/error-message/error-message.component';
import { TimeComponent } from '../../main/dialogs/time/time.component';



@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {
  }

  confirmationMessage(message, url, data, withReload, callback, type: string = "patch", token: string = "patch") {
    // console.log(message + url + data + withReload, type)
    let dialogRef = this.dialog.open(ConfirmMessageComponent, {
      width: '350px',
      data: { message: message, url: url, sendData: data, type: type, withReload: withReload, token: token }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        callback();
      } else if (result.code == 453 || result.code == 454) {
        this.errorMessage(result.code);
      }

    });
  }


  someThingIsError() {
    let dialogRef = this.dialog.open(SomeThingIsErrorComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  errorMessage(errorCode) {
    let dialogRef = this.dialog.open(ErrorMessageComponent, {
      width: '350px',
      data: { "errorCode": errorCode }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  openTimeDialog(callback) {
    let dialogRef = this.dialog.open(TimeComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        callback();
      } else
        callback();
    });
  }

}
