webpackJsonp(["mail.module"],{

/***/ "../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">New Message</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form name=\"composeForm\" [formGroup]=\"composeForm\" class=\"compose-form\" fxLayout=\"column\" fxFlex>\n\n            <mat-form-field>\n                <input matInput name=\"from\"\n                       placeholder=\"From\"\n                       formControlName=\"from\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"to\"\n                       placeholder=\"To\"\n                       formControlName=\"to\"\n                       type=\"email\" required>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"cc\"\n                       placeholder=\"Cc\"\n                       formControlName=\"cc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"bcc\"\n                       placeholder=\"Bcc\"\n                       formControlName=\"bcc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"subject\"\n                       placeholder=\"Subject\"\n                       formControlName=\"subject\">\n            </mat-form-field>\n\n            <mat-form-field>\n            <textarea matInput name=\"message\"\n                      placeholder=\"Message\"\n                      formControlName=\"message\"\n                      rows=\"6\">\n            </textarea>\n            </mat-form-field>\n\n            <div class=\"attachment-list\">\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-2.doc</span>\n                        <span class=\"size\">(12 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-1.jpg</span>\n                        <span class=\"size\">(350 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>\n            <button mat-raised-button\n                    (click)=\"dialogRef.close(['send',composeForm])\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"composeForm.invalid\"\n                    aria-label=\"SAVE\">\n                SEND\n            </button>\n\n            <button mat-icon-button matTooltip=\"Attach a file\">\n                <mat-icon>attach_file</mat-icon>\n            </button>\n        </div>\n\n        <button mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',composeForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mail-compose-dialog .mat-dialog-container {\n  padding: 0;\n  width: 720px; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .mat-form-field {\n    width: 100%; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list {\n    font-size: 13px;\n    padding-top: 16px; }\n    .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment {\n      background-color: rgba(0, 0, 0, 0.08);\n      border: 1px solid rgba(0, 0, 0, 0.16);\n      padding-left: 16px;\n      margin-top: 8px;\n      border-radius: 2px; }\n      .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename {\n        font-weight: 500; }\n      .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child {\n        margin-bottom: 0; }\n\n.mail-compose-dialog .dialog-content-wrapper {\n  max-height: 85vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailComposeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FuseMailComposeDialogComponent = (function () {
    function FuseMailComposeDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.composeForm = this.createComposeForm();
    }
    FuseMailComposeDialogComponent.prototype.ngOnInit = function () {
    };
    FuseMailComposeDialogComponent.prototype.createComposeForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            from: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]({
                value: 'johndoe@creapond.com',
                disabled: true
            }),
            to: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](''),
            cc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](''),
            bcc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](''),
            subject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](''),
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('')
        });
    };
    FuseMailComposeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-compose',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */], Object])
    ], FuseMailComposeDialogComponent);
    return FuseMailComposeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/i18n/en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'en',
    data: {
        'MAIL': {
            'COMPOSE': 'COMPOSE',
            'FOLDERS': 'FOLDERS',
            'FILTERS': 'FILTERS',
            'LABELS': 'LABELS',
            'NO_MESSAGES': 'There are no messages!',
            'SELECT_A_MESSAGE_TO_READ': 'Select a message to read',
            'SEARCH_PLACEHOLDER': 'Search for an e-mail or contact'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/i18n/tr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'tr',
    data: {
        'MAIL': {
            'COMPOSE': 'YENİ E-POSTA',
            'FOLDERS': 'KLASÖRLER',
            'FILTERS': 'FİLTRELER',
            'LABELS': 'ETİKETLER',
            'NO_MESSAGES': 'Mesajiniz bulunmamakta!',
            'SELECT_A_MESSAGE_TO_READ': 'Okumak için bir mesaj seçin',
            'SEARCH_PLACEHOLDER': 'E-mail yada bir kişi arayın'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-details/mail-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!mail\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-128 mb-16 select-message-icon\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\n        email\n    </mat-icon>\n    <span class=\"select-message-text hint-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'400ms'}}\">\n        <span>{{ 'MAIL.SELECT_A_MESSAGE_TO_READ' | translate }}</span>\n    </span>\n</div>\n\n<div *ngIf=\"mail\">\n\n    <div class=\"mail-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <div>\n            <div class=\"subject\" flex>{{mail.subject}}</div>\n\n            <div class=\"labels\" fxLayout=\"row\" fxLayoutWrap>\n                <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"label-color\" [ngStyle]=\"{'background-color': labels | getById:labelId:'color'}\"></div>\n                    <div class=\"label-title\">{{labels | getById:labelId:'title'}}</div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon *ngIf=\"mail.starred\">star</mat-icon>\n                <mat-icon *ngIf=\"!mail.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon *ngIf=\"mail.important\">label</mat-icon>\n                <mat-icon *ngIf=\"!mail.important\">label_outline</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"mail-content\">\n\n        <div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div>\n                        <img *ngIf=\"mail.from.avatar\" alt=\"{{mail.from.name}}\"\n                             src=\"{{mail.from.avatar}}\" class=\"avatar\"/>\n\n                        <div *ngIf=\"!mail.from.avatar\" class=\"avatar\" ms-random-class=\"vm.colors\">\n                            {{mail.from.name[0]}}\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                        <div class=\"name\">\n                            {{mail.from.name}}\n                        </div>\n\n                        <div class=\"to\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"to-text\">to</div>\n                            <div>{{mail.to[0].name}}</div>\n                        </div>\n                    </div>\n                </div>\n\n                <a class=\"toggle-details\" (click)=\"showDetails = !showDetails\">\n                    <span *ngIf=\"!showDetails\">Show Details</span>\n                    <span *ngIf=\"showDetails\">Hide Details</span>\n                </a>\n\n                <div *ngIf=\"showDetails\" class=\"details\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div fxLayout=\"column\">\n                        <span class=\"title\">From:</span>\n                        <span class=\"title\">To:</span>\n                        <span class=\"title\">Date:</span>\n                    </div>\n\n                    <div fxLayout=\"column\">\n                        <span class=\"detail\">{{mail.from.email}}</span>\n                        <span class=\"detail\">{{mail.to[0].email}}</span>\n                        <span class=\"detail\">{{mail.time}}</span>\n                    </div>\n                </div>\n            </div>\n\n            <button mat-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" class=\"mat-icon-button\"\n                    (click)=\"$event.stopPropagation()\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"Reply\">\n                    <mat-icon>reply</mat-icon>\n                    <span>Reply</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Forward\">\n                    <mat-icon>forward</mat-icon>\n                    <span>Forward</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Print\">\n                    <mat-icon>print</mat-icon>\n                    <span>Print</span>\n                </button>\n            </mat-menu>\n        </div>\n\n        <div [innerHTML]=\"mail.message\"></div>\n\n    </div>\n\n    <div *ngIf=\"mail.attachments\" class=\"mail-attachments\">\n\n        <div class=\"title\">\n            <span>Attachments</span>\n            ({{mail.attachments.length}})\n        </div>\n\n        <div class=\"attachment-list\" fxLayout=\"row\" fxLayoutWrap>\n\n            <div class=\"attachment\" fxLayout=\"column\"\n                 *ngFor=\"let attachment of mail.attachments\">\n\n                <img class=\"preview\" src=\"{{attachment.preview}}\">\n\n                <div fxLayout=\"column\">\n                    <a href=\"#\" onclick=\"event.preventDefault()\">View</a>\n                    <a href=\"#\" onclick=\"event.preventDefault()\">Download</a>\n                    <div class=\"size\">({{attachment.size}})</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-details/mail-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 24px; }\n  :host .select-message-text {\n    font-size: 24px;\n    font-weight: 300; }\n  :host .mail-header {\n    padding-bottom: 16px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .mail-header .actions {\n      min-width: 88px; }\n    :host .mail-header .subject {\n      font-size: 17px;\n      font-weight: 500; }\n    :host .mail-header .label {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 4px 4px 4px 0;\n      padding: 3px 8px;\n      background-color: rgba(0, 0, 0, 0.08); }\n      :host .mail-header .label .label-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\n  :host .mail-content {\n    padding: 24px 0; }\n    :host .mail-content .to {\n      color: rgba(0, 0, 0, 0.54); }\n      :host .mail-content .to .to-text {\n        margin-right: 4px;\n        text-transform: lowercase; }\n    :host .mail-content .info {\n      padding-bottom: 16px; }\n      :host .mail-content .info .avatar {\n        margin-right: 16px;\n        background-color: #039be5; }\n      :host .mail-content .info .name {\n        margin-right: 8px;\n        font-weight: 500; }\n      :host .mail-content .info .toggle-details {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        text-decoration: underline;\n        padding-top: 16px;\n        cursor: pointer;\n        font-weight: 500; }\n      :host .mail-content .info .details {\n        padding-top: 8px; }\n        :host .mail-content .info .details .title {\n          font-weight: 500;\n          margin-right: 6px; }\n        :host .mail-content .info .details .detail {\n          color: rgba(0, 0, 0, 0.54); }\n  :host .mail-attachments {\n    padding: 24px 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .mail-attachments .title {\n      margin-bottom: 16px;\n      font-weight: 500; }\n    :host .mail-attachments .attachment .preview {\n      width: 100px;\n      margin: 0 16px 8px 0; }\n    :host .mail-attachments .attachment .link {\n      margin-bottom: 2px; }\n    :host .mail-attachments .attachment .size {\n      font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-details/mail-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_service__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMailDetailsComponent = (function () {
    function FuseMailDetailsComponent(mailService) {
        this.mailService = mailService;
        this.showDetails = false;
    }
    FuseMailDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update the current mail
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(function (currentMail) {
                _this.mail = currentMail;
            });
        // Subscribe to update on label change
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe(function (labels) {
                _this.labels = labels;
            });
    };
    FuseMailDetailsComponent.prototype.ngOnDestroy = function () {
        this.onCurrentMailChanged.unsubscribe();
    };
    FuseMailDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this.mailService.updateMail(this.mail);
    };
    FuseMailDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this.mailService.updateMail(this.mail);
    };
    FuseMailDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-details',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail/mail-details/mail-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail/mail-details/mail-details.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mail_service__["a" /* MailService */]])
    ], FuseMailDetailsComponent);
    return FuseMailDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-list/mail-list-item/mail-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-checkbox [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectedChange()\"\n                  (click)=\"$event.stopPropagation();\"></mat-checkbox>\n\n    <div class=\"info\" fxFlex FlexLayout=\"column\">\n\n        <div class=\"row-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"name\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                <img class=\"avatar\" *ngIf=\"mail.from?.avatar\" alt=\"{{mail.from?.name}}\" src=\"{{mail.from?.avatar}}\"/>\n                <div class=\"avatar\" *ngIf=\"!mail.from?.avatar\">{{mail.from?.name[0]}}</div>\n                <span class=\"text-truncate\" *ngIf=\"mail?.from\">{{mail.from?.name}}</span>\n                <mat-icon *ngIf=\"mail.hasAttachments\">attachment</mat-icon>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"time\">{{mail.time}}</div>\n\n                <!--<div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.gt-sm>\n\n                    <button mat-button class=\"mat-icon-button\" (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                        <mat-icon *ngIf=\"mail.starred\">star</mat-icon>\n                        <mat-icon *ngIf=\"!mail.starred\">star_outline</mat-icon>\n                    </button>\n\n                    <button mat-button class=\"mat-icon-button\" (click)=\"toggleImportant($event)\"\n                            aria-label=\"Toggle important\">\n                        <mat-icon *ngIf=\"mail.important\">label</mat-icon>\n                        <mat-icon *ngIf=\"!mail.important\">label_outline</mat-icon>\n                    </button>\n\n                </div>-->\n\n            </div>\n\n        </div>\n\n        <div class=\"row-2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div class=\"subject text-truncate\">\n                    {{mail.subject}}\n                </div>\n\n                <div class=\"message text-truncate\" *ngIf=\"mail?.message\">\n                    {{mail.message | htmlToPlaintext | slice:0:180}}{{mail.message.length > 180 ? '...' : ''}}\n                </div>\n\n                <div class=\"labels\" fxLayout=\"row\" fxLayoutWrap fxHide fxShow.gt-sm>\n                    <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                         fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"label-color\"\n                             [ngStyle]=\"{'background-color': labels | getById:labelId:'color'}\"></div>\n                        <div class=\"label-title\">{{labels | getById:labelId:'title'}}</div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-list/mail-list-item/mail-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: pointer; }\n  :host.unread {\n    background: #FFFFFF; }\n    :host.unread .info .name {\n      font-weight: 700; }\n    :host.unread .info .row-2 .subject {\n      font-weight: 700; }\n    :host.unread .info .row-2 .labels {\n      background: #FFFFFF; }\n  :host.selected {\n    background: #FFF8E1; }\n    :host.selected .info .row-2 .labels {\n      background: #FFF8E1; }\n  :host.current-mail {\n    background: #E3F2FD; }\n    :host.current-mail .info .row-2 .labels {\n      background: #E3F2FD; }\n  :host .info {\n    overflow: hidden;\n    width: 0;\n    margin-left: 16px;\n    position: relative; }\n    :host .info .row-1 {\n      margin-bottom: 8px; }\n      :host .info .row-1 .name {\n        font-size: 15px;\n        font-weight: 500; }\n        :host .info .row-1 .name .avatar {\n          min-width: 32px;\n          width: 32px;\n          height: 32px;\n          line-height: 32px;\n          background-color: #039be5; }\n      :host .info .row-1 .actions {\n        margin-left: 4px; }\n        :host .info .row-1 .actions .mat-icon-button {\n          width: 32px;\n          height: 32px;\n          line-height: 1; }\n    :host .info .row-2 .subject,\n    :host .info .row-2 .message {\n      width: 100%; }\n    :host .info .row-2 .message {\n      position: relative;\n      color: rgba(0, 0, 0, 0.54); }\n    :host .info .row-2 .labels {\n      position: absolute;\n      background: #FFFFFF;\n      bottom: 0;\n      right: 0;\n      padding-left: 6px; }\n      :host .info .row-2 .labels .label {\n        font-size: 11px;\n        border-radius: 2px;\n        margin: 0 4px 0 0;\n        padding: 3px 8px;\n        background-color: rgba(0, 0, 0, 0.08); }\n        :host .info .row-2 .labels .label .label-color {\n          width: 8px;\n          height: 8px;\n          margin-right: 8px;\n          border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-list/mail-list-item/mail-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_model__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_service__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMailListItemComponent = (function () {
    function FuseMailListItemComponent(mailService) {
        this.mailService = mailService;
    }
    FuseMailListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.mail = new __WEBPACK_IMPORTED_MODULE_1__mail_model__["a" /* Mail */](this.mail);
        // Subscribe to update on selected mail change
        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(function (selectedMails) {
                _this.selected = false;
                if (selectedMails.length > 0) {
                    for (var _i = 0, selectedMails_1 = selectedMails; _i < selectedMails_1.length; _i++) {
                        var mail = selectedMails_1[_i];
                        if (mail.id === _this.mail.id) {
                            _this.selected = true;
                            break;
                        }
                    }
                }
            });
        // Subscribe to update on label change
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe(function (labels) {
                _this.labels = labels;
            });
    };
    FuseMailListItemComponent.prototype.ngOnDestroy = function () {
        this.onSelectedMailsChanged.unsubscribe();
    };
    FuseMailListItemComponent.prototype.onSelectedChange = function () {
        this.mailService.toggleSelectedMail(this.mail.id);
    };
    /**
     * Toggle star
     * @param event
     */
    FuseMailListItemComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this.mailService.updateMail(this.mail);
    };
    /**
     * Toggle Important
     * @param event
     */
    FuseMailListItemComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this.mailService.updateMail(this.mail);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__mail_model__["a" /* Mail */])
    ], FuseMailListItemComponent.prototype, "mail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.selected'),
        __metadata("design:type", Boolean)
    ], FuseMailListItemComponent.prototype, "selected", void 0);
    FuseMailListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-list-item',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail/mail-list/mail-list-item/mail-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail/mail-list/mail-list-item/mail-list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mail_service__["a" /* MailService */]])
    ], FuseMailListItemComponent);
    return FuseMailListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-list/mail-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mails.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-messages-text hint-text\">{{ 'MAIL.NO_MESSAGES' | translate }}</span>\n</div>\n\n<div class=\"mail-list\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n    <fuse-mail-list-item matRipple *ngFor=\"let mail of mails\" [mail]=\"mail\" (click)=\"readMail(mail.id)\"\n                         [ngClass]=\"{'current-mail':mail?.id == currentMail?.id}\"\n                         [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </fuse-mail-list-item>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-list/mail-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n  :host .no-messages-text {\n    font-size: 24px;\n    font-weight: 300; }\n  :host .mail-list {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail-list/mail-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_service__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseMailListComponent = (function () {
    function FuseMailListComponent(route, mailService, location) {
        this.route = route;
        this.mailService = mailService;
        this.location = location;
    }
    FuseMailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update mails on changes
        this.onMailsChanged =
            this.mailService.onMailsChanged
                .subscribe(function (mails) {
                _this.mails = mails;
            });
        // Subscribe to update current mail on changes
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(function (currentMail) {
                if (!currentMail) {
                    // Set the current mail id to null to deselect the current mail
                    _this.currentMail = null;
                    // Handle the location changes
                    var labelHandle = _this.route.snapshot.params.labelHandle, filterHandle = _this.route.snapshot.params.filterHandle, folderHandle = _this.route.snapshot.params.folderHandle;
                    if (labelHandle) {
                        _this.location.go('apps/mail/label/' + labelHandle);
                    }
                    else if (filterHandle) {
                        _this.location.go('apps/mail/filter/' + filterHandle);
                    }
                    else {
                        _this.location.go('apps/mail/' + folderHandle);
                    }
                }
                else {
                    _this.currentMail = currentMail;
                }
            });
    };
    FuseMailListComponent.prototype.ngOnDestroy = function () {
        this.onMailsChanged.unsubscribe();
        this.onCurrentMailChanged.unsubscribe();
    };
    /**
     * Read mail
     * @param mailId
     */
    FuseMailListComponent.prototype.readMail = function (mailId) {
        var labelHandle = this.route.snapshot.params.labelHandle, filterHandle = this.route.snapshot.params.filterHandle, folderHandle = this.route.snapshot.params.folderHandle;
        if (labelHandle) {
            this.location.go('apps/mail/label/' + labelHandle + '/' + mailId);
        }
        else if (filterHandle) {
            this.location.go('apps/mail/filter/' + filterHandle + '/' + mailId);
        }
        else {
            this.location.go('apps/mail/' + folderHandle + '/' + mailId);
        }
        // Set current mail
        this.mailService.setCurrentMail(mailId);
    };
    FuseMailListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-list',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail/mail-list/mail-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail/mail-list/mail-list.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_4__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], FuseMailListComponent);
    return FuseMailListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mail\" class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" mode=\"side\" opened=\"true\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n            <fuse-mail-main-sidenav></fuse-mail-main-sidenav>\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md aria-label=\"Toggle Sidenav\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <div class=\"search mat-white-bg\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon>search</mat-icon>\n                        <input [formControl]=\"searchInput\" [placeholder]=\"'MAIL.SEARCH_PLACEHOLDER' | translate\" fxFlex>\n                    </div>\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\" [ngClass]=\"{'current-mail-selected':currentMail}\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-checkbox (click)=\"toggleSelectAll()\" [checked]=\"hasSelectedMails\"\n                                      [indeterminate]=\"isIndeterminate\"></mat-checkbox>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                            <mat-icon>arrow_drop_down</mat-icon>\n                        </button>\n                        <mat-menu #selectMenu=\"matMenu\">\n                            <button mat-menu-item (click)=\"selectMails()\">All</button>\n                            <button mat-menu-item (click)=\"deselectMails()\">None</button>\n                            <button mat-menu-item (click)=\"selectMails('read', true)\">Read</button>\n                            <button mat-menu-item (click)=\"selectMails('read', false)\">Unread</button>\n                            <button mat-menu-item (click)=\"selectMails('starred', true)\">Starred</button>\n                            <button mat-menu-item (click)=\"selectMails('starred', false)\">Unstarred</button>\n                            <button mat-menu-item (click)=\"selectMails('important', true)\">Important</button>\n                            <button mat-menu-item (click)=\"selectMails('important', false)\">Unimportant</button>\n                        </mat-menu>\n\n                        <div class=\"toolbar-separator\" *ngIf=\"hasSelectedMails\"></div>\n\n                        <button mat-icon-button (click)=\"setFolderOnSelectedMails(4)\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"folderMenu\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>folder</mat-icon>\n                        </button>\n                        <mat-menu #folderMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let folder of folders\"\n                                    (click)=\"setFolderOnSelectedMails(folder.id)\">{{folder.title}}\n                            </button>\n                        </mat-menu>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>label</mat-icon>\n                        </button>\n                        <mat-menu #labelMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let label of labels\"\n                                    (click)=\"toggleLabelOnSelectedMails(label.id)\">{{label.title}}\n                            </button>\n                        </mat-menu>\n                    </div>\n\n                    <div *ngIf=\"currentMail\" fxHide.gt-lg>\n                        <button mat-icon-button (click)=\"deSelectCurrentMail()\">\n                            <mat-icon>arrow_back</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content\" fxLayoutAlign=\"row\">\n\n                    <fuse-mail-list fusePerfectScrollbar fxFlex></fuse-mail-list>\n\n                    <fuse-mail-details fusePerfectScrollbar fxFlex></fuse-mail-details>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  width: 100%; }\n  :host .center .header .search-wrapper {\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n    :host .center .header .search-wrapper .sidenav-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      background: #FFF;\n      border-radius: 0;\n      border-right: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\n      :host .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        color: rgba(0, 0, 0, 0.54);\n        border: none;\n        outline: none; }\n  @media screen and (max-width: 599px) {\n    :host .center .content-card fuse-mail-list {\n      border-right: none; }\n    :host .center .content-card fuse-mail-list,\n    :host .center .content-card fuse-mail-details {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 100%;\n              flex: 1 0 100%; }\n    :host .center .content-card fuse-mail-details {\n      display: none !important; }\n    :host .center .content-card.current-mail-selected .toolbar {\n      padding-left: 16px !important; }\n      :host .center .content-card.current-mail-selected .toolbar .mail-selection {\n        display: none !important; }\n    :host .center .content-card.current-mail-selected .content fuse-mail-list {\n      display: none !important; }\n    :host .center .content-card.current-mail-selected .content fuse-mail-details {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_service__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_translation_loader_service__ = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_en__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/i18n/en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__i18n_tr__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/i18n/tr.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseMailComponent = (function () {
    function FuseMailComponent(mailService, translationLoader) {
        this.mailService = mailService;
        this.translationLoader = translationLoader;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('');
        this.translationLoader.loadTranslations(__WEBPACK_IMPORTED_MODULE_4__i18n_en__["a" /* locale */], __WEBPACK_IMPORTED_MODULE_5__i18n_tr__["a" /* locale */]);
    }
    FuseMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(function (selectedMails) {
                setTimeout(function () {
                    _this.hasSelectedMails = selectedMails.length > 0;
                    _this.isIndeterminate = (selectedMails.length !== _this.mailService.mails.length && selectedMails.length > 0);
                }, 0);
            });
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe(function (folders) {
                _this.folders = _this.mailService.folders;
            });
        this.onFiltersChanged =
            this.mailService.onFiltersChanged
                .subscribe(function (folders) {
                _this.filters = _this.mailService.filters;
            });
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe(function (labels) {
                _this.labels = _this.mailService.labels;
            });
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(function (currentMail) {
                if (!currentMail) {
                    _this.currentMail = null;
                }
                else {
                    _this.currentMail = currentMail;
                }
            });
        /*this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                this.mailService.onSearchTextChanged.next(searchText);
            });*/
    };
    FuseMailComponent.prototype.ngOnDestroy = function () {
        this.onSelectedMailsChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
        this.onCurrentMailChanged.unsubscribe();
    };
    FuseMailComponent.prototype.toggleSelectAll = function () {
        this.mailService.toggleSelectAll();
    };
    FuseMailComponent.prototype.selectMails = function (filterParameter, filterValue) {
        this.mailService.selectMails(filterParameter, filterValue);
    };
    FuseMailComponent.prototype.deselectMails = function () {
        this.mailService.deselectMails();
    };
    FuseMailComponent.prototype.deSelectCurrentMail = function () {
        this.mailService.onCurrentMailChanged.next(null);
    };
    FuseMailComponent.prototype.toggleLabelOnSelectedMails = function (labelId) {
        this.mailService.toggleLabelOnSelectedMails(labelId);
    };
    FuseMailComponent.prototype.setFolderOnSelectedMails = function (folderId) {
        this.mailService.setFolderOnSelectedMails(folderId);
    };
    FuseMailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail/mail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_translation_loader_service__["a" /* FuseTranslationLoaderService */]])
    ], FuseMailComponent);
    return FuseMailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
var Mail = (function () {
    function Mail(mail) {
        this.id = mail.id;
        this.from = mail.from;
        this.to = mail.to;
        this.subject = mail.subject;
        this.message = mail.message;
        this.time = mail.time;
        this.read = mail.read;
        this.starred = mail.starred;
        this.important = mail.important;
        this.hasAttachments = mail.hasAttachments;
        this.attachments = mail.attachments;
        this.labels = mail.labels;
        this.folder = mail.folder;
    }
    Mail.prototype.toggleStar = function () {
        this.starred = !this.starred;
    };
    Mail.prototype.toggleImportant = function () {
        this.important = !this.important;
    };
    return Mail;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseMailModule", function() { return FuseMailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidenavs_main_main_sidenav_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/sidenavs/main/main-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_list_mail_list_item_mail_list_item_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail-list/mail-list-item/mail-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mail_list_mail_list_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail-list/mail-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mail_details_mail_details_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail-details/mail-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mail_service__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogs_compose_compose_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'label/:labelHandle',
        component: __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
        resolve: {
            mail: __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
        }
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
        resolve: {
            mail: __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
        }
    },
    {
        path: 'filter/:filterHandle',
        component: __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
        resolve: {
            mail: __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
        }
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
        resolve: {
            mail: __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
        }
    },
    {
        path: ':folderHandle',
        component: __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
        resolve: {
            mail: __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
        }
    },
    {
        path: ':folderHandle/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
        resolve: {
            mail: __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
        }
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
var FuseMailModule = (function () {
    function FuseMailModule() {
    }
    FuseMailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* FuseMailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mail_list_mail_list_component__["a" /* FuseMailListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__mail_list_mail_list_item_mail_list_item_component__["a" /* FuseMailListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mail_details_mail_details_component__["a" /* FuseMailDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sidenavs_main_main_sidenav_component__["a" /* FuseMailMainSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dialogs_compose_compose_component__["a" /* FuseMailComposeDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__dialogs_compose_compose_component__["a" /* FuseMailComposeDialogComponent */]]
        })
    ], FuseMailModule);
    return FuseMailModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_model__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = (function () {
    function MailService(http) {
        this.http = http;
        this.searchText = '';
        this.onMailsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onSelectedMailsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onCurrentMailChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onFoldersChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onFiltersChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onLabelsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.selectedMails = [];
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    MailService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFolders(),
                _this.getFilters(),
                _this.getLabels(),
                _this.getMails()
            ]).then(function () {
                if (_this.routeParams.mailId) {
                    _this.setCurrentMail(_this.routeParams.mailId);
                }
                else {
                    _this.setCurrentMail(null);
                }
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    if (searchText !== '') {
                        _this.searchText = searchText;
                        _this.getMails();
                    }
                    else {
                        _this.searchText = searchText;
                        _this.getMails();
                    }
                });
                resolve();
            }, reject);
        });
    };
    /**
     * Get all folders
     * @returns {Promise<any>}
     */
    MailService.prototype.getFolders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/mail-folders')
                .subscribe(function (response) {
                _this.folders = response;
                _this.onFoldersChanged.next(_this.folders);
                resolve(_this.folders);
            }, reject);
        });
    };
    /**
     * Get all filters
     * @returns {Promise<any>}
     */
    MailService.prototype.getFilters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/mail-filters')
                .subscribe(function (response) {
                _this.filters = response;
                _this.onFiltersChanged.next(_this.filters);
                resolve(_this.filters);
            }, reject);
        });
    };
    /**
     * Get all labels
     * @returns {Promise<any>}
     */
    MailService.prototype.getLabels = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/mail-labels')
                .subscribe(function (response) {
                _this.labels = response;
                _this.onLabelsChanged.next(_this.labels);
                resolve(_this.labels);
            }, reject);
        });
    };
    /**
     * Get all mails
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMails = function () {
        if (this.routeParams.labelHandle) {
            return this.getMailsByLabel(this.routeParams.labelHandle);
        }
        if (this.routeParams.filterHandle) {
            return this.getMailsByFilter(this.routeParams.filterHandle);
        }
        return this.getMailsByFolder(this.routeParams.folderHandle);
    };
    /**
     * Get mails by folder
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMailsByFolder = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/mail-folders?handle=' + handle)
                .subscribe(function (folders) {
                var folderId = folders[0].id;
                _this.http.get('api/mail-mails?folder=' + folderId)
                    .subscribe(function (mails) {
                    _this.mails = mails.map(function (mail) {
                        return new __WEBPACK_IMPORTED_MODULE_2__mail_model__["a" /* Mail */](mail);
                    });
                    _this.mails = __WEBPACK_IMPORTED_MODULE_4_app_core_fuseUtils__["a" /* FuseUtils */].filterArrayByString(_this.mails, _this.searchText);
                    _this.onMailsChanged.next(_this.mails);
                    resolve(_this.mails);
                }, reject);
            });
        });
    };
    /**
     * Get mails by filter
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMailsByFilter = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/mail-mails?' + handle + '=true')
                .subscribe(function (mails) {
                _this.mails = mails.map(function (mail) {
                    return new __WEBPACK_IMPORTED_MODULE_2__mail_model__["a" /* Mail */](mail);
                });
                _this.mails = __WEBPACK_IMPORTED_MODULE_4_app_core_fuseUtils__["a" /* FuseUtils */].filterArrayByString(_this.mails, _this.searchText);
                _this.onMailsChanged.next(_this.mails);
                resolve(_this.mails);
            }, reject);
        });
    };
    /**
     * Get mails by label
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMailsByLabel = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/mail-labels?handle=' + handle)
                .subscribe(function (labels) {
                var labelId = labels[0].id;
                _this.http.get('api/mail-mails?labels=' + labelId)
                    .subscribe(function (mails) {
                    _this.mails = mails.map(function (mail) {
                        return new __WEBPACK_IMPORTED_MODULE_2__mail_model__["a" /* Mail */](mail);
                    });
                    _this.mails = __WEBPACK_IMPORTED_MODULE_4_app_core_fuseUtils__["a" /* FuseUtils */].filterArrayByString(_this.mails, _this.searchText);
                    _this.onMailsChanged.next(_this.mails);
                    resolve(_this.mails);
                }, reject);
            });
        });
    };
    /**
     * Toggle selected mail by id
     * @param id
     */
    MailService.prototype.toggleSelectedMail = function (id) {
        // First, check if we already have that mail as selected...
        if (this.selectedMails.length > 0) {
            for (var _i = 0, _a = this.selectedMails; _i < _a.length; _i++) {
                var mail = _a[_i];
                // ...delete the selected mail
                if (mail.id === id) {
                    var index = this.selectedMails.indexOf(mail);
                    if (index !== -1) {
                        this.selectedMails.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedMailsChanged.next(this.selectedMails);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedMails.push(this.mails.find(function (mail) {
            return mail.id === id;
        }));
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    };
    /**
     * Toggle select all
     */
    MailService.prototype.toggleSelectAll = function () {
        if (this.selectedMails.length > 0) {
            this.deselectMails();
        }
        else {
            this.selectMails();
        }
    };
    MailService.prototype.selectMails = function (filterParameter, filterValue) {
        this.selectedMails = [];
        // If there is no filter, select all mails
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedMails = this.mails;
        }
        else {
            (_a = this.selectedMails).push.apply(_a, this.mails.filter(function (mail) {
                return mail[filterParameter] === filterValue;
            }));
        }
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
        var _a;
    };
    MailService.prototype.deselectMails = function () {
        this.selectedMails = [];
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    };
    /**
     * Set current mail by id
     * @param id
     */
    MailService.prototype.setCurrentMail = function (id) {
        this.currentMail = this.mails.find(function (mail) {
            return mail.id === id;
        });
        this.onCurrentMailChanged.next(this.currentMail);
    };
    /**
     * Toggle label on selected mails
     * @param labelId
     */
    MailService.prototype.toggleLabelOnSelectedMails = function (labelId) {
        var _this = this;
        this.selectedMails.map(function (mail) {
            var index = mail.labels.indexOf(labelId);
            if (index !== -1) {
                mail.labels.splice(index, 1);
            }
            else {
                mail.labels.push(labelId);
            }
            _this.updateMail(mail);
        });
    };
    /**
     * Set folder on selected mails
     * @param folderId
     */
    MailService.prototype.setFolderOnSelectedMails = function (folderId) {
        var _this = this;
        this.selectedMails.map(function (mail) {
            mail.folder = folderId;
            _this.updateMail(mail);
        });
        this.deselectMails();
    };
    /**
     * Update the mail
     * @param mail
     * @returns {Promise<any>}
     */
    MailService.prototype.updateMail = function (mail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/mail-mails/' + mail.id, __assign({}, mail))
                .subscribe(function (response) {
                _this.getMails().then(function (mails) {
                    if (mails && _this.currentMail) {
                        _this.setCurrentMail(_this.currentMail.id);
                    }
                    resolve(mails);
                }, reject);
            });
        });
    };
    MailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/sidenavs/main/main-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header p-24 pb-4\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">mail</mat-icon>\n        <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Mailbox</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms'}}\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatPlaceholder=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Mail Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"content\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{y:'50px'}}\">\n\n    <div class=\"p-24\">\n        <button mat-raised-button fxFlex\n                class=\"mat-accent compose-dialog-button\"\n                (click)=\"composeDialog()\"\n                aria-label=\"Compose\">\n            {{ 'MAIL.COMPOSE' | translate }}\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FOLDERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let folder of folders\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail/' + folder.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"folder.icon\">{{folder.icon}}</mat-icon>\n                <span>{{folder.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FILTERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of filters\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail/filter/' + filter.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.LABELS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let label of labels\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail/label/' + label.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':label.color}\">label</mat-icon>\n                <span>{{label.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/sidenavs/main/main-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  :host .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  :host .header .account {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail/sidenavs/main/main-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailMainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_service__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_compose_compose_component__ = __webpack_require__("../../../../../src/app/main/content/apps/mail/dialogs/compose/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseMailMainSidenavComponent = (function () {
    function FuseMailMainSidenavComponent(mailService, dialog) {
        this.mailService = mailService;
        this.dialog = dialog;
        // Data
        this.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
    }
    FuseMailMainSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe(function (folders) {
                _this.folders = folders;
            });
        this.onFiltersChanged =
            this.mailService.onFiltersChanged
                .subscribe(function (filters) {
                _this.filters = filters;
            });
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe(function (labels) {
                _this.labels = labels;
            });
    };
    FuseMailMainSidenavComponent.prototype.composeDialog = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_compose_compose_component__["a" /* FuseMailComposeDialogComponent */], {
            panelClass: 'mail-compose-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Send
                 */
                case 'send':
                    console.log('new Mail', formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    console.log('delete Mail');
                    break;
            }
        });
    };
    FuseMailMainSidenavComponent.prototype.ngOnDestroy = function () {
        this.onFoldersChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
    };
    FuseMailMainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-main-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail/sidenavs/main/main-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail/sidenavs/main/main-sidenav.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_4__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDialog */]])
    ], FuseMailMainSidenavComponent);
    return FuseMailMainSidenavComponent;
}());



/***/ })

});
//# sourceMappingURL=mail.module.chunk.js.map