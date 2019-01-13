webpackJsonp(["scrumboard.module"],{

/***/ "../../../../../src/app/main/content/apps/scrumboard/board.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");

var sampleLabels = [
    {
        'id': '56027e4119ad3a5dc28b36cd',
        'name': 'Design',
        'color': 'mat-red-500-bg'
    },
    {
        'id': '5640635e19ad3a5dc21416b2',
        'name': 'App',
        'color': 'mat-blue-500-bg'
    },
    {
        'id': '6540635g19ad3s5dc31412b2',
        'name': 'Feature',
        'color': 'mat-green-400-bg'
    }
];
var sampleMembers = [
    {
        id: '56027c1930450d8bf7b10758',
        name: 'Alice Freeman',
        avatar: 'assets/images/avatars/alice.jpg'
    },
    {
        id: '26027s1930450d8bf7b10828',
        name: 'Danielle Obrien',
        avatar: 'assets/images/avatars/danielle.jpg'
    },
    {
        id: '76027g1930450d8bf7b10958',
        name: 'James Lewis',
        avatar: 'assets/images/avatars/james.jpg'
    },
    {
        id: '36027j1930450d8bf7b10158',
        name: 'Vincent Munoz',
        avatar: 'assets/images/avatars/vincent.jpg'
    }
];
var Board = (function () {
    function Board(board) {
        this.name = board.name || 'Untitled Board';
        this.uri = board.uri || 'untitled-board';
        this.id = board.id || __WEBPACK_IMPORTED_MODULE_0__core_fuseUtils__["a" /* FuseUtils */].generateGUID();
        this.settings = board.settings || {
            color: '',
            subscribed: true,
            cardCoverImages: true
        };
        this.lists = [];
        this.cards = [];
        this.members = board.members || sampleMembers;
        this.labels = board.labels || sampleLabels;
    }
    return Board;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list new-list mat-elevation-z1\">\n\n    <button *ngIf=\"!formActive\" mat-button class=\"new-list-form-button\" (click)=\"openForm()\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mat-red-bg\">add</mat-icon>\n            <span>Add a list</span>\n        </div>\n    </button>\n\n    <form *ngIf=\"formActive\" class=\"new-list-form\" [formGroup]=\"form\" (submit)=\"onFormSubmit()\"\n          fxFlex=\"1 0 auto\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n        <input formControlName=\"name\" #nameInput fxFlex placeholder=\"Write a list Name\">\n\n        <button mat-icon-button fxFlex=\"0 1 auto\">\n            <mat-icon>check</mat-icon>\n        </button>\n        <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/add-list/add-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .new-list {\n  border-radius: 2px;\n  background-color: #EEF0F2; }\n  :host .new-list .new-list-form-button {\n    text-transform: none;\n    font-size: 15px;\n    padding: 0 16px;\n    height: 64px;\n    margin: 0;\n    width: 100%; }\n    :host .new-list .new-list-form-button mat-icon {\n      border-radius: 50%;\n      height: 40px;\n      width: 40px;\n      line-height: 40px;\n      margin-right: 16px; }\n  :host .new-list .new-list-form {\n    padding: 16px;\n    height: 64px; }\n    :host .new-list .new-list-form > input {\n      height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardAddListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseScrumboardBoardAddListComponent = (function () {
    function FuseScrumboardBoardAddListComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onlistAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardBoardAddListComponent.prototype.ngOnInit = function () {
    };
    FuseScrumboardBoardAddListComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: ['']
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardBoardAddListComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardBoardAddListComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardBoardAddListComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.onlistAdd.next(this.form.getRawValue().name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddListComponent.prototype, "onlistAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddListComponent.prototype, "nameInputField", void 0);
    FuseScrumboardBoardAddListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-add-list',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/add-list/add-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/add-list/add-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardBoardAddListComponent);
    return FuseScrumboardBoardAddListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <div id=\"board\">\n\n        <!-- HEADER -->\n        <div class=\"header mat-accent-bg p-16 p-mat-24\" [ngClass]=\"'mat-'+board.settings.color+'-bg'\" fxLayout=\"column\">\n\n            <div class=\"header-content\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxFlex=\"1 0 auto\" fxLayoutWrap>\n\n                <!-- BOARD SELECTION BUTTON -->\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlexOrder=\"2\" fxFlexOrder.gt-xs=\"1\">\n                    <button mat-raised-button class=\"mat-accent header-boards-button\"\n                            [ngClass]=\"'mat-'+board.settings.color+'-700-bg'\"\n                            routerLink=\"/apps/scrumboard/boards\"\n                            aria-label=\"boards button\">\n                        <mat-icon>assessment</mat-icon>\n                        <span>BOARDS</span>\n                    </button>\n                </div>\n                <!-- / BOARD SELECTION BUTTON -->\n\n                <!-- BOARD NAME -->\n                <div class=\"header-board-name mb-8 mb-mat-0\"\n                     fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                     fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"center center\"\n                     fxFlex=\"1 0 100%\" fxFlex.gt-xs=\"1 0 auto\"\n                     fxFlexOrder=\"1\" fxFlexOrder.gt-xs=\"2\">\n                    <mat-icon *ngIf=\"board.settings.subscribed\" class=\"board-subscribe s-16\">remove_red_eye</mat-icon>\n                    <fuse-scrumboard-edit-board-name\n                        [board]=\"board\"\n                        (onNameChanged)=\"onBoardNameChanged($event)\">\n                    </fuse-scrumboard-edit-board-name>\n                </div>\n                <!-- / BOARD NAME -->\n\n                <!-- TOOLBAR -->\n                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlexOrder=\"3\">\n\n                    <!-- BOARD SETTINGS BUTTON -->\n                    <button mat-icon-button (click)=\"settingsSidenav.toggle()\"\n                            aria-label=\"Settings\" matTooltip=\"Settings\">\n                        <mat-icon>settings</mat-icon>\n                    </button>\n                    <!-- / BOARD SETTINGS BUTTON -->\n                </div>\n                <!-- / TOOLBAR -->\n\n            </div>\n\n        </div>\n        <!-- / HEADER -->\n\n        <div fxFlex class=\"board-content-wrapper p-16 p-mat-24\" [ngClass]=\"board.settings.color+'-100-bg'\">\n\n            <!-- BOARD -->\n            <div class=\"board-content ngx-dnd-container p-16 p-mat-24\" fxLayout=\"row\"\n                 ngxDroppable=\"list\" [model]=\"board.lists\" (out)=\"onDrop($event)\"\n                 *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n\n                <!-- LIST -->\n                <fuse-scrumboard-board-list\n                    class=\"scrumboard-board-list list-wrapper ngx-dnd-item\"\n                    ngxDraggable\n                    *ngFor=\"let list of board.lists\"\n                    [model]=\"list\"\n                    [list]=\"list\"\n                    [@animate]=\"{value:'*',params:{duration:'350ms',x:'100%'}}\">\n                </fuse-scrumboard-board-list>\n                <!-- / LIST -->\n\n                <!-- NEW LIST BUTTON-->\n                <fuse-scrumboard-board-add-list class=\"new-list-wrapper\" (onlistAdd)=\"onListAdd($event)\"\n                                                [@animate]=\"{value:'*',params:{duration:'350ms',x:'100%'}}\">\n                </fuse-scrumboard-board-add-list>\n                <!-- / NEW LIST BUTTON-->\n\n            </div>\n            <!-- / BOARD -->\n        </div>\n        <!-- primary content -->\n    </div>\n\n    <mat-sidenav #settingsSidenav align=\"end\">\n        <fuse-scrumboard-board-settings></fuse-scrumboard-board-settings>\n    </mat-sidenav>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/board.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host mat-sidenav-container {\n  width: 100%;\n  height: 100%; }\n  :host mat-sidenav-container mat-sidenav {\n    width: 320px !important;\n    min-width: 320px !important;\n    max-width: 320px !important; }\n  :host mat-sidenav-container #board {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    height: 100%; }\n    :host mat-sidenav-container #board > .header {\n      position: relative;\n      min-height: 96px;\n      background-image: none;\n      z-index: 49; }\n      :host mat-sidenav-container #board > .header .header-content .header-boards-button {\n        margin: 0; }\n      :host mat-sidenav-container #board > .header .header-content .header-board-name {\n        font-size: 16px; }\n        :host mat-sidenav-container #board > .header .header-content .header-board-name .board-subscribe {\n          margin-right: 8px; }\n        :host mat-sidenav-container #board > .header .header-content .header-board-name .editable-buttons mat-icon {\n          color: #FFFFFF !important; }\n      :host mat-sidenav-container #board > .header .header-content .right-side > .mat-button:last-child {\n        margin-right: 0; }\n    :host mat-sidenav-container #board #board-selector {\n      position: absolute;\n      top: 96px;\n      right: 0;\n      left: 0;\n      height: 192px;\n      z-index: 48;\n      padding: 24px;\n      opacity: 1; }\n      :host mat-sidenav-container #board #board-selector .board-list-item {\n        width: 128px;\n        height: 192px;\n        padding: 16px;\n        cursor: pointer;\n        position: relative; }\n        :host mat-sidenav-container #board #board-selector .board-list-item .board-name {\n          text-align: center;\n          padding: 16px 0; }\n        :host mat-sidenav-container #board #board-selector .board-list-item .selected-icon {\n          position: absolute;\n          top: 0;\n          left: 50%;\n          width: 32px;\n          height: 32px;\n          margin-left: -16px;\n          border-radius: 50%;\n          text-align: center;\n          color: white; }\n          :host mat-sidenav-container #board #board-selector .board-list-item .selected-icon i {\n            line-height: 32px !important; }\n        :host mat-sidenav-container #board #board-selector .board-list-item.add-new-board {\n          opacity: 0.6; }\n    :host mat-sidenav-container #board .board-content-wrapper {\n      position: relative;\n      background: #E5E7E8; }\n      :host mat-sidenav-container #board .board-content-wrapper .board-content {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: 100%;\n        overflow-y: hidden;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch; }\n        :host mat-sidenav-container #board .board-content-wrapper .board-content .list-sortable-placeholder {\n          background: rgba(0, 0, 0, 0.06);\n          margin-right: 24px; }\n        :host mat-sidenav-container #board .board-content-wrapper .board-content .new-list-wrapper {\n          width: 344px;\n          min-width: 344px;\n          max-width: 344px;\n          padding-right: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_model__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/list.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseScrumboardBoardComponent = (function () {
    function FuseScrumboardBoardComponent(route, location, scrumboardService) {
        this.route = route;
        this.location = location;
        this.scrumboardService = scrumboardService;
    }
    FuseScrumboardBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardComponent.prototype.onListAdd = function (newListName) {
        if (newListName === '') {
            return;
        }
        this.scrumboardService.addList(new __WEBPACK_IMPORTED_MODULE_4__list_model__["a" /* List */]({ name: newListName }));
    };
    FuseScrumboardBoardComponent.prototype.onBoardNameChanged = function (newName) {
        this.scrumboardService.updateBoard();
        this.location.go('/apps/scrumboard/boards/' + this.board.id + '/' + this.board.uri);
    };
    FuseScrumboardBoardComponent.prototype.onDrop = function (ev) {
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/board.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_5__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardComponent);
    return FuseScrumboardBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar *ngIf=\"card\" matDialogTitle class=\"mat-accent-bg m-0\">\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <!-- DUE DATE -->\n                <div class=\"due-date\" fxFlex=\"0 1 auto\">\n\n                    <button *ngIf=\"card.due\" mat-icon-button class=\"\" [matMenuTriggerFor]=\"dueDateMenu\">\n                        <mat-icon>today</mat-icon>\n                    </button>\n\n                    <mat-menu #dueDateMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <button mat-menu-item (click)=\"removeDueDate()\">Remove Due Date</button>\n                    </mat-menu>\n\n                    <mat-form-field *ngIf=\"!card.due\">\n                        <input matInput [matDatepicker]=\"menuPicker\" [(ngModel)]=\"card.due\">\n                        <mat-datepicker-toggle matSuffix [for]=\"menuPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #menuPicker></mat-datepicker>\n                    </mat-form-field>\n\n                </div>\n                <!-- / DUE DATE -->\n\n                <!-- LABELS -->\n                <div class=\"labels\" fxFlex=\"0 1 auto\">\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"labelsMenu\">\n                        <mat-icon>label</mat-icon>\n                    </button>\n\n                    <mat-menu #labelsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"scrumboard-labels-menu\">\n\n                        <fuse-scrumboard-label-selector [card]=\"card\" (onCardLabelsChange)=\"updateCard()\"></fuse-scrumboard-label-selector>\n\n                    </mat-menu>\n                </div>\n                <!-- / LABELS -->\n\n                <!-- MEMBERS -->\n                <div class=\"members\" fxFlex=\"0 1 auto\">\n\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"membersMenu\">\n                        <mat-icon>account_circle</mat-icon>\n                    </button>\n\n                    <mat-menu #membersMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <div fxFlex fxLayout=\"column\" class=\"scrumboard-members-menu\" (click)=\"$event.stopPropagation()\">\n                            <mat-checkbox class=\"member px-12\" [checked]=\"card.idMembers.indexOf(member.id) > -1\"\n                                          *ngFor=\"let member of board.members\"\n                                          (change)=\"toggleInArray(member.id, card.idMembers);updateCard()\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <img [alt]=\"member.name\" [src]=\" member.avatar\" class=\"avatar\"/>\n                                    <p class=\"member-name\">{{ member.name }}</p>\n                                </div>\n                            </mat-checkbox>\n                        </div>\n                    </mat-menu>\n                </div>\n                <!-- / MEMBERS -->\n\n                <!-- ATTACHMENT -->\n                <button mat-icon-button aria-label=\"Attachment\">\n                    <mat-icon>attachment</mat-icon>\n                </button>\n                <!-- / ATTACHMENT -->\n\n                <!-- CHECKLIST -->\n                <div class=\"due-date \" fxFlex=\"0 1 auto\">\n\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"checklistMenu\" #checklistMenuTrigger=\"matMenuTrigger\" (menuOpened)=\"onChecklistMenuOpen()\">\n                        <mat-icon>check_box</mat-icon>\n                    </button>\n\n                    <mat-menu #checklistMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n                        <form class=\"px-16 py-8\" #newChecklistForm=\"ngForm\" (submit)=\"addChecklist(newChecklistForm)\" (click)=\"$event.stopPropagation()\"\n                              fxLayout=\"column\" fxLayoutAlign=\"start end\">\n\n                            <mat-form-field floatPlaceholder=\"never\" (click)=\"$event.stopPropagation()\" fxFlex>\n                                <input #newCheckListTitleField matInput ngModel #checklistTitle=\"ngModel\" name=\"checklistTitle\" placeholder=\"Checklist title\" required>\n                            </mat-form-field>\n\n                            <button mat-raised-button class=\"mat-accent\" aria-label=\"Add Checklist\" [disabled]=\"!newChecklistForm.valid\">Add Checklist</button>\n                        </form>\n\n                    </mat-menu>\n                </div>\n                <!-- / CHECKLIST -->\n\n                <!-- SUBSCRIBE -->\n                <div class=\"subscribe \" fxFlex=\"0 1 auto\">\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"subscribeMenu\">\n                        <mat-icon>remove_red_eye</mat-icon>\n                    </button>\n                    <mat-menu #subscribeMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <button *ngIf=\"card.subscribed\" mat-menu-item (click)=\"toggleSubscribe()\">\n                            Unsubscribe\n                        </button>\n                        <button *ngIf=\"!card.subscribed\" mat-menu-item (click)=\"toggleSubscribe()\">\n                            Subscribe\n                        </button>\n                    </mat-menu>\n                </div>\n                <!-- / SUBSCRIBE -->\n\n                <!-- OPTIONS -->\n                <div class=\"options \" fxFlex=\"0 1 auto\">\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"optionsMenu\">\n                        <mat-icon>more_horiz</mat-icon>\n                    </button>\n                    <mat-menu #optionsMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <button mat-menu-item (click)=\"removeCard()\">\n                            Remove Card\n                        </button>\n                    </mat-menu>\n                </div>\n                <!-- / OPTIONS -->\n            </div>\n\n            <!-- CLOSE DIALOG BUTTON -->\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close Dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n            <!-- / CLOSE DIALOG BUTTON -->\n        </div>\n    </mat-toolbar>\n\n    <div *ngIf=\"card\" mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <div fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\"\n             fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n\n            <!-- BREADCRUMB -->\n            <div class=\"card-breadcrumb mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <span>{{board.name}}</span>\n                <mat-icon class=\"s-20\">chevron_right</mat-icon>\n                <span>{{list.name}}</span>\n            </div>\n            <!-- / BREADCRUMB -->\n\n            <!-- DUE DATE -->\n            <div *ngIf=\"card.due\" class=\"due-date\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <mat-form-field floatPlaceholder=\"never\">\n                    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"card.due\" placeholder=\"Choose a due date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n\n                <button mat-icon-button class=\"remove-due-date\" (click)=\"removeDueDate()\">\n                    <mat-icon class=\"s-16\">close</mat-icon>\n                </button>\n            </div>\n            <!-- / DUE DATE -->\n\n        </div>\n\n        <!-- NAME -->\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon *ngIf=\"card.subscribed\" class=\"card-subscribe s-20 mr-12\">remove_red_eye</mat-icon>\n            <div class=\"card-name\">\n                <mat-form-field floatPlaceholder=\"never\" fxFlex>\n                    <input matInput [(ngModel)]=\"card.name\" placeholder=\"Title\" required (change)=\"updateCard()\">\n                </mat-form-field>\n            </div>\n        </div>\n        <!-- / NAME -->\n\n        <!-- DESCRIPTION -->\n        <div class=\"description\">\n            <mat-form-field fxFlex>\n                <textarea matInput [(ngModel)]=\"card.description\" placeholder=\"Description\" columns=\"1\" mat-maxlength=\"150\" max-rows=\"4\" (change)=\"updateCard()\"></textarea>\n            </mat-form-field>\n        </div>\n        <!-- / DESCRIPTION -->\n\n        <!-- SECTIONS -->\n        <div class=\"sections\">\n\n            <!-- LABELS SECTION -->\n            <div *ngIf=\"card.idLabels[0] || card.idMembers[0]\" class=\"section\"\n                 fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n                <div *ngIf=\"card.idLabels[0]\" fxFlex class=\"labels\">\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">label</mat-icon>\n                        <span class=\"section-title\">Labels</span>\n                    </div>\n                    <div class=\"section-content\">\n                        <mat-chip-list class=\"label-chips\">\n                            <mat-chip class=\"label-chip mb-4\"\n                                      *ngFor=\"let labelId of card.idLabels\"\n                                      [ngClass]=\"board.labels | getById:labelId:'color'\"\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <span>{{board.labels|getById:labelId:'name'}}</span>\n                                <mat-icon class=\"ml-8 s-16 chip-remove\" (click)=\"toggleInArray(labelId, card.idLabels);updateCard()\">close</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n                </div>\n\n                <div *ngIf=\"card.idMembers[0]\" fxFlex class=\"members\">\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">supervisor_account</mat-icon>\n                        <span class=\"section-title\">Members</span>\n                    </div>\n                    <div class=\"section-content\">\n                        <mat-chip-list class=\"member-chips\">\n                            <mat-chip class=\"member-chip mb-4\" *ngFor=\"let memberId of card.idMembers\"\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <img class=\"member-chip-avatar\" [src]=\"board.members | getById:memberId:'avatar'\"\n                                     [matTooltip]=\"board.members | getById:memberId:'name'\">\n                                <mat-icon class=\"ml-8 s-16 chip-remove\" (click)=\"toggleInArray(memberId, card.idMembers);updateCard()\">close</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n                </div>\n            </div>\n            <!-- / LABELS SECTION -->\n\n            <!-- ATTACHMENTS SECTION -->\n            <div *ngIf=\"card.attachments[0]\" class=\"section\">\n\n                <div class=\"attachments\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">attachment</mat-icon>\n                        <span class=\"section-title\">Attachments</span>\n                    </div>\n\n                    <div class=\"section-content\">\n\n                        <div class=\"attachment\" *ngFor=\"let item of card.attachments\" [ngSwitch]=\"item.type\">\n\n                            <div *ngSwitchCase=\"'image'\"\n                                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"start center\"\n                                 fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n                                <div class=\"attachment-preview mat-elevation-z2\"\n                                     [ngStyle]=\"{'background-image': 'url('+item.src+')'}\">\n                                </div>\n\n                                <div class=\"attachment-content\" fxLayout=\"column\">\n\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <span class=\"attachment-name\">{{item.name}}</span>\n                                        <mat-icon *ngIf=\"card.idAttachmentCover === item.id\"\n                                                  class=\"yellow-700-fg attachment-is-cover s-20\">star\n                                        </mat-icon>\n                                    </div>\n\n                                    <span class=\"attachment-time\">{{item.time}}</span>\n\n                                    <div>\n                                        <button mat-raised-button class=\"attachment-actions-button\" [matMenuTriggerFor]=\"attachmentActionsMenu\">\n                                            <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                                <span>Actions</span>\n                                                <mat-icon class=\"s-20\">arrow_drop_down</mat-icon>\n                                            </span>\n                                        </button>\n                                        <mat-menu #attachmentActionsMenu=\"matMenu\">\n                                            <button mat-menu-item (click)=\"toggleCoverImage(item.id)\">\n                                                <span *ngIf=\"card.idAttachmentCover !== item.id\">Make Cover</span>\n                                                <span *ngIf=\"card.idAttachmentCover === item.id\">Remove Cover</span>\n                                            </button>\n                                            <button mat-menu-item (click)=\"removeAttachment(item)\">\n                                                Remove Attachment\n                                            </button>\n                                        </mat-menu>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <div *ngSwitchCase=\"'link'\" fxLayout=\"row\">\n                                <div class=\"attachment-preview mat-elevation-z2\" fxLayout=\"column\"\n                                     fxLayoutAlign=\"center center\">\n                                    <span>LINK</span>\n                                </div>\n                                <div class=\"attachment-content\" fxLayout=\"column\">\n                                    <span class=\"attachment-url\">{{item.url}}</span>\n                                    <span class=\"attachment-time\">{{item.time}}</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <button mat-button class=\"add-attachment-button\" aria-label=\"add attachment\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon class=\"s-20\">add</mat-icon>\n                                <span>Add an attachment</span>\n                            </div>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <!-- / ATTACHMENTS SECTION -->\n\n            <!-- CHECKLISTS SECTION -->\n            <div class=\"section\" *ngFor=\"let checklist of card.checklists\">\n\n                <div class=\"checklist\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <mat-icon class=\"s-20\">check_box</mat-icon>\n\n                        <span fxFlex class=\"section-title\">{{checklist.name}}</span>\n\n\n                        <div>\n                            <button mat-icon-button class=\"checklist-actions-button\" [matMenuTriggerFor]=\"checklistActionsMenu\">\n                                <mat-icon class=\"s-20\">more_vert</mat-icon>\n                            </button>\n                            <mat-menu #checklistActionsMenu=\"matMenu\">\n                                <button mat-menu-item (click)=\"removeChecklist(checklist)\">\n                                    <mat-icon>delete</mat-icon>\n                                    <span>Remove Checklist</span>\n                                </button>\n                            </mat-menu>\n                        </div>\n\n                    </div>\n\n                    <div class=\"section-content\">\n\n                        <div class=\"checklist-progress\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                            <span class=\"checklist-progress-value\">\n                                {{checklist.checkItemsChecked}} / {{checklist.checkItems.length}}\n                            </span>\n\n                            <mat-progress-bar class=\"mat-accent checklist-progressbar\" mode=\"determinate\"\n                                              value=\"{{100 * checklist.checkItemsChecked / checklist.checkItems.length}}\">\n                            </mat-progress-bar>\n                        </div>\n\n                        <div class=\"check-items\">\n\n                            <div class=\"check-item\" *ngFor=\"let checkItem of checklist.checkItems\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                                <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-checkbox [(ngModel)]=\"checkItem.checked\"\n                                                  (change)=\"updateCheckedCount(checklist)\"\n                                                  aria-label=\"{{checkItem.name}}\">\n                                    </mat-checkbox>\n                                    <mat-form-field fxFlex class=\"mx-12\">\n                                        <input matInput [(ngModel)]=\"checkItem.name\">\n                                    </mat-form-field>\n                                </div>\n\n                                <button mat-icon-button class=\"checklist-actions-button\" (click)=\"removeChecklistItem(checkItem, checklist)\">\n                                    <mat-icon class=\"s-20\">delete</mat-icon>\n                                </button>\n\n                            </div>\n                        </div>\n\n                        <form #newCheckItemForm=\"ngForm\" (submit)=\"addCheckItem(newCheckItemForm,checklist)\" name=\"newCheckItemForm\" class=\"new-check-item-form\"\n                              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                                <mat-icon class=\"s-20\">add</mat-icon>\n\n                                <mat-form-field class=\"no-errors-spacer mx-12\" fxFlex>\n                                    <input matInput ngModel #checkItem=\"ngModel\" name=\"checkItem\" placeholder=\"Add an item\" autocomplete=\"off\">\n                                </mat-form-field>\n                            </div>\n\n                            <button mat-raised-button\n                                    [disabled]=\"!newCheckItemForm.valid || newCheckItemForm.pristine\"\n                                    class=\"mat-accent\" aria-label=\"Add\">\n                                <span>Add</span>\n                            </button>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n            <!-- / CHECKLISTS SECTION -->\n\n            <!-- COMMENTS SECTION -->\n            <div class=\"section\">\n\n                <div class=\"comments\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">comment</mat-icon>\n                        <span class=\"section-title\">Comments</span>\n                    </div>\n\n                    <div class=\"section-content\">\n                        <form name=\"cardCommentForm\"\n                              #newCommentForm=\"ngForm\" (submit)=\"addNewComment(newCommentForm)\"\n                              class=\"comment new-comment\" fxLayout=\"column\" fxLayoutAlign=\"start\" no-validate>\n\n                            <div fxLayout=\"row\">\n                                <img class=\"comment-member-avatar\" src=\"assets/images/avatars/profile.jpg\">\n                                <mat-form-field fxFlex>\n                                    <input matInput name=\"newComment\" ngModel #newComment=\"ngModel\"\n                                           placeholder=\"Write a comment..\" required>\n                                </mat-form-field>\n                            </div>\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                <button mat-raised-button class=\"mat-accent\"\n                                        [disabled]=\"!newCommentForm.valid || newCommentForm.pristine\"\n                                        aria-label=\"Add\">\n                                    <span>Add</span>\n                                </button>\n                            </div>\n                        </form>\n\n                        <div class=\"comment\" fxLayout=\"row\" *ngFor=\"let comment of card.comments\">\n\n                            <img class=\"comment-member-avatar\"\n                                 [src]=\"board.members | getById: comment.idMember:'avatar'\">\n\n                            <div fxLayout=\"column\">\n                                <div class=\"comment-member-name\">\n                                    {{board.members | getById: comment.idMember:'name'}}\n                                </div>\n                                <div class=\"comment-bubble\">{{comment.message}}</div>\n                                <div class=\"comment-time secondary-text\">{{comment.time}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- / COMMENTS SECTION -->\n\n            <!-- ACTIVITIES SECTION -->\n            <div *ngIf=\"card.activities[0]\" class=\"section\">\n\n                <div class=\"activities\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">list</mat-icon>\n                        <span class=\"section-title\">Activity</span>\n                    </div>\n\n                    <div class=\"section-content\">\n                        <div class=\"activity\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let activity of card.activities\">\n                            <img class=\"activity-member-avatar\"\n                                 [src]=\"board.members| getById:activity.idMember:'avatar'\">\n                            <div class=\"activity-member-name\">{{board.members| getById:activity.idMember:'name'}}</div>\n                            <div class=\"activity-message\">{{activity.message}}</div>\n                            <div class=\"activity-time secondary-text\">{{activity.time}}</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <!-- / ACTIVITIES SECTION -->\n\n        </div>\n        <!-- / SECTIONS -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.scrumboard-card-dialog .mat-dialog-container {\n  padding: 0;\n  width: 720px; }\n  .scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field {\n    width: auto;\n    margin: 0 8px; }\n    .scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper {\n      padding: 0; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n          display: none; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-input-element {\n          display: none; }\n  .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content {\n    position: relative;\n    background-color: #F5F5F5; }\n    .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-breadcrumb {\n      font-weight: 500;\n      font-size: 14px; }\n    .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-subscribe {\n      margin-right: 8px;\n      color: rgba(0, 0, 0, 0.6); }\n    .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .picker {\n      width: 140px;\n      min-width: 140px; }\n    .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-name {\n      width: 100%;\n      font-size: 22px; }\n      @media screen and (max-width: 599px) {\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-name {\n          font-size: 14px; } }\n    .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .description {\n      padding-bottom: 16px; }\n    .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      margin-bottom: 32px; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section:last-child {\n        border-bottom: none;\n        margin-bottom: 0; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section:last-child .section-content {\n          padding-bottom: 0; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header {\n        font-size: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header mat-icon {\n          margin-right: 8px;\n          color: rgba(0, 0, 0, 0.6); }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header .section-title {\n          font-weight: 500; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-content {\n        padding: 24px 0 32px 0; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .section-content {\n        padding: 8px 0 32px 0; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips {\n        box-shadow: none;\n        padding: 0; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips .label-chip {\n          display: block; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips .label-chip .chip-remove {\n            cursor: pointer; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .section-content {\n        padding: 8px 0 32px 0; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips {\n        box-shadow: none;\n        padding: 0; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip {\n          padding: 4px 12px 4px 4px; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip .member-chip-avatar {\n            width: 32px;\n            border-radius: 50%; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip .chip-remove {\n            cursor: pointer; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment {\n        margin-bottom: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-preview {\n          background-color: #EEF0F2;\n          width: 160px;\n          height: 128px;\n          background-size: contain;\n          background-position: 50% 50%;\n          background-repeat: no-repeat;\n          margin-right: 24px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.6); }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-url,\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-name {\n          font-weight: 500;\n          font-size: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-is-cover {\n          margin-left: 6px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-time {\n          color: rgba(0, 0, 0, 0.6); }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-actions-button {\n          background-color: white;\n          text-transform: capitalize;\n          margin: 12px 0 0 0;\n          padding-left: 12px; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-actions-button mat-icon {\n            margin-left: 8px;\n            color: rgba(0, 0, 0, 0.6); }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button {\n        margin: 0; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button mat-icon {\n          color: rgba(0, 0, 0, 0.6);\n          margin-right: 8px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button span {\n          font-weight: 500;\n          text-transform: capitalize; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .checklist-progress {\n        margin-bottom: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .checklist-progress .checklist-progress-value {\n          margin-right: 12px;\n          font-weight: 500;\n          white-space: nowrap;\n          font-size: 14px; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .editable-wrap {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox {\n        margin-bottom: 0; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox .mat-label {\n          font-size: 14px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox.mat-checked .mat-label {\n          text-decoration: line-through;\n          color: rgba(0, 0, 0, 0.6); }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form {\n        padding-top: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form mat-form-field {\n          margin: 0; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form .mat-button {\n          margin: 0 0 0 16px; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment {\n        margin-bottom: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-member-avatar {\n          width: 32px;\n          height: 32px;\n          border-radius: 50%;\n          margin-right: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-member-name {\n          font-size: 14px;\n          font-weight: 500; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-time {\n          font-size: 12px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble {\n          position: relative;\n          padding: 8px;\n          background-color: white;\n          border: 1px solid #dcdfe1;\n          font-size: 14px;\n          margin: 4px 0; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:after, .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:before {\n            content: ' ';\n            position: absolute;\n            width: 0;\n            height: 0; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:after {\n            left: -7px;\n            right: auto;\n            top: 0px;\n            bottom: auto;\n            border: 11px solid;\n            border-color: white transparent transparent transparent; }\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:before {\n            left: -9px;\n            right: auto;\n            top: -1px;\n            bottom: auto;\n            border: 8px solid;\n            border-color: #dcdfe1 transparent transparent transparent; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment.new-comment mat-form-field {\n          margin: 0; }\n      .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity {\n        margin-bottom: 12px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-member-avatar {\n          width: 24px;\n          height: 24px;\n          border-radius: 50%;\n          margin-right: 16px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-member-name {\n          font-size: 14px;\n          font-weight: 500;\n          margin-right: 8px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-message {\n          font-size: 14px;\n          margin-right: 8px; }\n        .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-time {\n          font-size: 12px; }\n\n.scrumboard-card-dialog .dialog-content-wrapper {\n  max-height: 85vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.scrumboard-members-menu {\n  width: 240px; }\n  .scrumboard-members-menu .mat-checkbox-layout,\n  .scrumboard-members-menu .mat-checkbox-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.scrumboard-labels-menu .mat-menu-content {\n  padding-bottom: 0; }\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-layout,\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .scrumboard-labels-menu .mat-menu-content .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    width: 240px;\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 240px; }\n    .scrumboard-labels-menu .mat-menu-content .views .view {\n      position: absolute;\n      width: 240px;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n      .scrumboard-labels-menu .mat-menu-content .views .view > .header {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardCardDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
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





var FuseScrumboardCardDialogComponent = (function () {
    function FuseScrumboardCardDialogComponent(dialogRef, data, dialog, scrumboardService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.scrumboardService = scrumboardService;
        this.toggleInArray = __WEBPACK_IMPORTED_MODULE_3__core_fuseUtils__["a" /* FuseUtils */].toggleInArray;
    }
    FuseScrumboardCardDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
                _this.card = _this.board.cards.find(function (_card) {
                    return _this.data.cardId === _card.id;
                });
                _this.list = _this.board.lists.find(function (_list) {
                    return _this.data.listId === _list.id;
                });
            });
    };
    /**
     * Remove Due date
     */
    FuseScrumboardCardDialogComponent.prototype.removeDueDate = function () {
        this.card.due = '';
        this.updateCard();
    };
    /**
     * Toggle Subscribe
     */
    FuseScrumboardCardDialogComponent.prototype.toggleSubscribe = function () {
        this.card.subscribed = !this.card.subscribed;
        this.updateCard();
    };
    /**
     * Toggle Cover Image
     * @param attachmentId
     */
    FuseScrumboardCardDialogComponent.prototype.toggleCoverImage = function (attachmentId) {
        if (this.card.idAttachmentCover === attachmentId) {
            this.card.idAttachmentCover = '';
        }
        else {
            this.card.idAttachmentCover = attachmentId;
        }
        this.updateCard();
    };
    /**
     * Remove Attachment
     * @param attachment
     */
    FuseScrumboardCardDialogComponent.prototype.removeAttachment = function (attachment) {
        if (attachment.id === this.card.idAttachmentCover) {
            this.card.idAttachmentCover = '';
        }
        this.card.attachments.splice(this.card.attachments.indexOf(attachment), 1);
        this.updateCard();
    };
    /**
     * Remove Checklist
     * @param checklist
     */
    FuseScrumboardCardDialogComponent.prototype.removeChecklist = function (checklist) {
        this.card.checklists.splice(this.card.checklists.indexOf(checklist), 1);
        this.updateCard();
    };
    /**
     * Update Checked Count
     * @param list
     */
    FuseScrumboardCardDialogComponent.prototype.updateCheckedCount = function (list) {
        var checkItems = list.checkItems;
        var checkedItems = 0;
        var allCheckedItems = 0;
        var allCheckItems = 0;
        for (var _i = 0, checkItems_1 = checkItems; _i < checkItems_1.length; _i++) {
            var checkItem = checkItems_1[_i];
            if (checkItem.checked) {
                checkedItems++;
            }
        }
        list.checkItemsChecked = checkedItems;
        for (var _a = 0, _b = this.card.checklists; _a < _b.length; _a++) {
            var item = _b[_a];
            allCheckItems += item.checkItems.length;
            allCheckedItems += item.checkItemsChecked;
        }
        this.card.checkItems = allCheckItems;
        this.card.checkItemsChecked = allCheckedItems;
        this.updateCard();
    };
    /**
     * Remove Checklist Item
     * @param checkItem
     * @param checklist
     */
    FuseScrumboardCardDialogComponent.prototype.removeChecklistItem = function (checkItem, checklist) {
        checklist.checkItems.splice(checklist.checkItems.indexOf(checkItem), 1);
        this.updateCheckedCount(checklist);
        this.updateCard();
    };
    /**
     * Add Check Item
     * @param {NgForm} form
     * @param checkList
     */
    FuseScrumboardCardDialogComponent.prototype.addCheckItem = function (form, checkList) {
        var checkItemVal = form.value.checkItem;
        if (!checkItemVal || checkItemVal === '') {
            return;
        }
        var newCheckItem = {
            'name': checkItemVal,
            'checked': false
        };
        checkList.checkItems.push(newCheckItem);
        this.updateCheckedCount(checkList);
        form.setValue({ checkItem: '' });
        this.updateCard();
    };
    /**
     * Add Checklist
     * @param {NgForm} form
     */
    FuseScrumboardCardDialogComponent.prototype.addChecklist = function (form) {
        this.card.checklists.push({
            id: __WEBPACK_IMPORTED_MODULE_3__core_fuseUtils__["a" /* FuseUtils */].generateGUID(),
            name: form.value.checklistTitle,
            checkItemsChecked: 0,
            checkItems: []
        });
        form.setValue({ checklistTitle: '' });
        form.resetForm();
        this.checklistMenu.closeMenu();
        this.updateCard();
    };
    /**
     * On Checklist Menu Open
     */
    FuseScrumboardCardDialogComponent.prototype.onChecklistMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.newCheckListTitleField.nativeElement.focus();
        });
    };
    /**
     * Add New Comment
     * @param {NgForm} form
     */
    FuseScrumboardCardDialogComponent.prototype.addNewComment = function (form) {
        var newCommentText = form.value.newComment;
        var newComment = {
            idMember: '36027j1930450d8bf7b10158',
            message: newCommentText,
            time: 'now'
        };
        this.card.comments.unshift(newComment);
        form.setValue({ newComment: '' });
        this.updateCard();
    };
    /**
     * Remove Card
     */
    FuseScrumboardCardDialogComponent.prototype.removeCard = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__core_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the card?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close();
                _this.scrumboardService.removeCard(_this.card.id, _this.list.id);
            }
        });
    };
    /**
     * Update Card
     */
    FuseScrumboardCardDialogComponent.prototype.updateCard = function () {
        this.scrumboardService.updateCard(this.card);
    };
    FuseScrumboardCardDialogComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checklistMenuTrigger'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatMenuTrigger */])
    ], FuseScrumboardCardDialogComponent.prototype, "checklistMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newCheckListTitleField'),
        __metadata("design:type", Object)
    ], FuseScrumboardCardDialogComponent.prototype, "newCheckListTitleField", void 0);
    FuseScrumboardCardDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-card-dialog',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardCardDialogComponent);
    return FuseScrumboardCardDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"labelsMenuView\" class=\"views\" (click)=\"$event.stopPropagation()\">\n\n    <div class=\"view\" *ngSwitchCase=\"'labels'\" fxFlex fxLayout=\"column\">\n\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div>Labels</div>\n            <button mat-button (click)=\"labelsMenuView ='add'\">\n                <mat-icon class=\"s-16\">add</mat-icon>\n                <span>Add</span>\n            </button>\n        </div>\n\n        <div fxFlex fxLayout=\"column\" fusePerfectScrollbar>\n\n            <div class=\"label\" *ngFor=\"let label of board.labels\" fxFlex=\"0 0 auto\" fxLayout=\"row\" fxFlexAlign=\"space-between center\"\n                 [ngClass]=\"label.color\">\n\n                <mat-checkbox fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" [checked]=\"card.idLabels.indexOf(label.id) > -1\"\n                              (change)=\"toggleInArray(label.id, card.idLabels);cardLabelsChanged()\">\n                    {{label.name}}\n                </mat-checkbox>\n\n                <button mat-icon-button>\n                    <mat-icon class=\"s-16\" (click)=\"labelsMenuView ='edit';selectedLabel = label\">mode_edit</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"view edit\" *ngSwitchCase=\"'edit'\" fxFlex fxLayout=\"column\">\n\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-icon-button (click)=\"labelsMenuView ='labels'\">\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\n            </button>\n            <div>Edit Label</div>\n        </div>\n\n        <div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"selectedLabel.name\" (change)=\"onLabelChange()\">\n            </mat-form-field>\n\n            <fuse-material-color-picker [(selectedClass)]=\"selectedLabel.color\" class=\"ml-8\" (change)=\"$event.preventDefault;onLabelChange()\"></fuse-material-color-picker>\n        </div>\n\n    </div>\n\n    <div class=\"view add\" *ngSwitchCase=\"'add'\" fxFlex fxLayout=\"column\">\n\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-icon-button (click)=\"labelsMenuView ='labels'\">\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\n            </button>\n            <div>Add Label</div>\n        </div>\n\n        <form (submit)=\"addNewLabel()\" #newLabelForm=\"ngForm\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"start end\">\n\n            <div fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <mat-form-field fxFlex>\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"newLabel.name\" name=\"labelName\" required>\n                </mat-form-field>\n\n                <fuse-material-color-picker class=\"ml-8\" [(selectedClass)]=\"newLabel.color\" name=\"labelColor\"></fuse-material-color-picker>\n            </div>\n\n            <button mat-raised-button class=\"mat-accent mt-16\" [disabled]=\"!newLabelForm.valid\">ADD NEW LABEL</button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrumboard-labels-menu .mat-menu-content {\n  padding-bottom: 0; }\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-layout,\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .scrumboard-labels-menu .mat-menu-content .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    width: 240px;\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 240px; }\n    .scrumboard-labels-menu .mat-menu-content .views .view {\n      position: absolute;\n      width: 240px;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n      .scrumboard-labels-menu .mat-menu-content .views .view > .header {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        padding: 4px 8px 8px 16px;\n        margin-bottom: 8px; }\n      .scrumboard-labels-menu .mat-menu-content .views .view .label {\n        margin: 0 8px 8px 8px;\n        padding: 4px 4px 4px 16px; }\n      .scrumboard-labels-menu .mat-menu-content .views .view.edit > .header, .scrumboard-labels-menu .mat-menu-content .views .view.add > .header {\n        padding: 0 8px 8px 0; }\n      .scrumboard-labels-menu .mat-menu-content .views .view.edit form, .scrumboard-labels-menu .mat-menu-content .views .view.add form {\n        padding: 0 16px 8px 16px; }\n        .scrumboard-labels-menu .mat-menu-content .views .view.edit form .mat-form-field-infix, .scrumboard-labels-menu .mat-menu-content .views .view.add form .mat-form-field-infix {\n          width: auto !important; }\n      .scrumboard-labels-menu .mat-menu-content .views .view.edit .content, .scrumboard-labels-menu .mat-menu-content .views .view.add .content {\n        padding: 8px 16px 8px 16px; }\n        .scrumboard-labels-menu .mat-menu-content .views .view.edit .content .mat-form-field-infix, .scrumboard-labels-menu .mat-menu-content .views .view.add .content .mat-form-field-infix {\n          width: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardLabelSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseScrumboardLabelSelectorComponent = (function () {
    function FuseScrumboardLabelSelectorComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        this.onCardLabelsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.labelsMenuView = 'labels';
        this.newLabel = {
            'id': '',
            'name': '',
            'color': 'mat-blue-400-bg'
        };
        this.toggleInArray = __WEBPACK_IMPORTED_MODULE_2__core_fuseUtils__["a" /* FuseUtils */].toggleInArray;
    }
    FuseScrumboardLabelSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardLabelSelectorComponent.prototype.cardLabelsChanged = function () {
        this.onCardLabelsChange.next();
    };
    FuseScrumboardLabelSelectorComponent.prototype.onLabelChange = function () {
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardLabelSelectorComponent.prototype.addNewLabel = function () {
        this.newLabel.id = __WEBPACK_IMPORTED_MODULE_2__core_fuseUtils__["a" /* FuseUtils */].generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    };
    FuseScrumboardLabelSelectorComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('card'),
        __metadata("design:type", Object)
    ], FuseScrumboardLabelSelectorComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardLabelSelectorComponent.prototype, "onCardLabelsChange", void 0);
    FuseScrumboardLabelSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-label-selector',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_3__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardLabelSelectorComponent);
    return FuseScrumboardLabelSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formActive\" class=\"board-name\" fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span>{{board.name}}</span>\n    <button mat-icon-button (click)=\"openForm()\">\n        <mat-icon class=\"s-16\">edit_mode</mat-icon>\n    </button>\n</div>\n\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\"\n      class=\"board-name-form\" fxFlex=\"1 0 auto\"\n      *ngIf=\"formActive\" fxFlex=\"row\">\n\n    <input formControlName=\"name\" #nameInput fxFlex=\"1 0 auto\" placeholder=\"Write a board name\">\n\n    <button mat-icon-button fxFlex=\"0 1 auto\">\n        <mat-icon>check</mat-icon>\n    </button>\n    <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\" type=\"button\">\n        <mat-icon>close</mat-icon>\n    </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block !important; }\n  :host .board-name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 15px;\n    font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardEditBoardNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseScrumboardEditBoardNameComponent = (function () {
    function FuseScrumboardEditBoardNameComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onNameChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardEditBoardNameComponent.prototype.ngOnInit = function () {
    };
    FuseScrumboardEditBoardNameComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: [this.board.name]
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardEditBoardNameComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardEditBoardNameComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardEditBoardNameComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.board.name = this.form.getRawValue().name;
            this.board.uri = encodeURIComponent(this.board.name).replace(/%20/g, '-').toLowerCase();
            this.onNameChanged.next(this.board.name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardEditBoardNameComponent.prototype, "board", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardEditBoardNameComponent.prototype, "onNameChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardEditBoardNameComponent.prototype, "nameInputField", void 0);
    FuseScrumboardEditBoardNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-edit-board-name',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardEditBoardNameComponent);
    return FuseScrumboardEditBoardNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formActive\" class=\"add-card-button\"\n     (click)=\"openForm()\"\n     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <div>\n        <mat-icon class=\"s-20\">add</mat-icon>\n    </div>\n    <span>Add a card</span>\n</div>\n\n<div *ngIf=\"formActive\" class=\"add-card-form-wrapper\">\n\n    <form [formGroup]=\"form\" (submit)=\"onFormSubmit()\" class=\"add-card-form\" fxLayout=\"column\">\n\n        <mat-form-field fxFlex floatPlaceholder=\"never\">\n            <input #nameInput matInput formControlName=\"name\" placeholder=\"Card title\" autocomplete=\"off\" required>\n        </mat-form-field>\n\n        <div class=\"pl-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <button mat-raised-button class=\"add-button mat-accent\" aria-label=\"add\"\n                    [disabled]=\"form.invalid\">\n                <span>Add</span>\n            </button>\n\n            <button mat-icon-button (click)=\"closeForm()\" class=\"cancel-button\" aria-label=\"cancel\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .add-card-button {\n  position: relative;\n  height: 48px;\n  min-height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-transform: none;\n  font-weight: 500;\n  font-size: 14px;\n  background-color: #DCDFE2;\n  cursor: pointer;\n  border-radius: 2px; }\n  :host .add-card-button mat-icon {\n    margin-right: 8px;\n    color: rgba(0, 0, 0, 0.6); }\n\n:host .add-card-form-wrapper {\n  background-color: #DCDFE2; }\n  :host .add-card-form-wrapper .add-card-form {\n    z-index: 999;\n    background: white;\n    display: block;\n    position: relative;\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .add-card-form-wrapper .add-card-form mat-form-field {\n      width: 100%;\n      margin: 0;\n      padding: 12px 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardAddCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseScrumboardBoardAddCardComponent = (function () {
    function FuseScrumboardBoardAddCardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onCardAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardBoardAddCardComponent.prototype.ngOnInit = function () {
    };
    FuseScrumboardBoardAddCardComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: ''
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardBoardAddCardComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardBoardAddCardComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardBoardAddCardComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            var cardName = this.form.getRawValue().name;
            this.onCardAdd.next(cardName);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddCardComponent.prototype, "onCardAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddCardComponent.prototype, "nameInputField", void 0);
    FuseScrumboardBoardAddCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-add-card',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardBoardAddCardComponent);
    return FuseScrumboardBoardAddCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- CARD COVER -->\n<div *ngIf=\"board.settings.cardCoverImages && card.idAttachmentCover\"\n     class=\"list-card-cover\">\n    <img [src]=\"card.attachments | getById:card.idAttachmentCover:'src'\">\n</div>\n<!-- / CARD COVER -->\n\n<!-- CARD DETAILS -->\n<div class=\"list-card-details\">\n\n    <!-- CARD SORT HANDLE -->\n    <div class=\"list-card-sort-handle\">\n        <mat-icon mat-font-icon=\"icon-cursor-move\" class=\"icon s16\"></mat-icon>\n    </div>\n    <!-- /CARD SORT HANDLE -->\n\n    <!-- CARD LABELS -->\n    <div *ngIf=\"card.idLabels.length > 0\"\n         class=\"list-card-labels\"\n         fxLayout=\"row\" layout-wrap>\n\n        <span class=\"list-card-label\"\n              [ngClass]=\"board.labels | getById:labelId:'color'\"\n              *ngFor=\"let labelId of card.idLabels\"\n              [matTooltip]=\"board.labels | getById:labelId:'name'\">\n        </span>\n\n    </div>\n    <!-- / CARD LABELS -->\n\n    <!-- CARD NAME -->\n    <div class=\"list-card-name\">{{card.name}}</div>\n    <!-- / CARD NAME -->\n\n    <div *ngIf=\"card.due || card.checkItems\"\n         class=\"list-card-badges\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <!-- CARD DUE -->\n        <span class=\"badge due-date\"\n              [ngClass]=\"{'overdue': isOverdue(card.due)}\"\n              *ngIf=\"card.due\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-16\">access_time</mat-icon>\n            <span>{{card.due | date:'mediumDate'}}</span>\n\n        </span>\n        <!-- / CARD DUE -->\n\n        <!-- CARD CHECK ITEMS STATUS -->\n        <span *ngIf=\"card.checkItems\"\n              class=\"badge check-items\"\n              [ngClass]=\"{'completed': card.checkItemsChecked === card.checkItems}\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-16\">check_circle</mat-icon>\n            <span>{{card.checkItemsChecked}}</span>\n            <span>/</span>\n            <span>{{card.checkItems}}</span>\n        </span>\n        <!-- / CARD CHECK ITEMS STATUS -->\n\n    </div>\n\n    <!-- CARD MEMBERS -->\n    <div *ngIf=\"card.idMembers.length > 0\"\n         class=\"list-card-members\"\n         fxLayout=\"row\">\n\n        <div class=\"list-card-member\"\n             *ngFor=\"let memberId of card.idMembers\">\n\n            <img class=\"list-card-member-avatar\"\n                 [src]=\"board.members | getById:memberId:'avatar'\"\n                 [matTooltip]=\"board.members | getById:memberId:'name'\">\n        </div>\n\n    </div>\n    <!-- / CARD MEMBERS -->\n\n</div>\n<!-- / CARD DETAILS -->\n\n<!-- CARD FOOTER -->\n<div class=\"list-card-footer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <!-- CARD SUBSCRIBE -->\n        <span *ngIf=\"card.subscribed\" class=\"list-card-footer-item\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">remove_red_eye</mat-icon>\n        </span>\n        <!-- / CARD SUBSCRIBE -->\n\n        <!-- CARD DETAILS -->\n        <span *ngIf=\"card.description !== ''\"\n              class=\"list-card-footer-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">description</mat-icon>\n        </span>\n        <!-- / CARD DETAILS -->\n\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\n        <!-- CARD ATTACHMENT -->\n        <span *ngIf=\"card.attachments\"\n              class=\"list-card-footer-item\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">attachment</mat-icon>\n            <span class=\"value\">{{card.attachments.length}}</span>\n        </span>\n        <!-- / CARD ATTACHMENT -->\n\n        <!-- CARD COMMENTS -->\n        <span *ngIf=\"card.comments\"\n              class=\"list-card-footer-item\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">comment</mat-icon>\n            <span class=\"value\">{{card.comments.length}}</span>\n        </span>\n        <!-- / CARD COMMENTS -->\n\n    </div>\n</div>\n<!-- CARD FOOTER -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.scrumboard-board-card {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 16px 0;\n  background-color: white;\n  color: #000;\n  border-radius: 2px;\n  transition: box-shadow 150ms ease;\n  cursor: pointer; }\n  .scrumboard-board-card .list-card-sort-handle {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 4px;\n    background: rgba(255, 255, 255, 0.8); }\n  .scrumboard-board-card .list-card-details {\n    padding: 16px 16px 0 16px; }\n    .scrumboard-board-card .list-card-details .list-card-labels {\n      margin-bottom: 6px; }\n      .scrumboard-board-card .list-card-details .list-card-labels .list-card-label {\n        width: 32px;\n        height: 6px;\n        border-radius: 6px;\n        margin: 0 6px 6px 0; }\n    .scrumboard-board-card .list-card-details .list-card-name {\n      font-size: 14px;\n      font-weight: 500;\n      margin-bottom: 12px; }\n    .scrumboard-board-card .list-card-details .list-card-badges {\n      margin-bottom: 12px; }\n      .scrumboard-board-card .list-card-details .list-card-badges .badge {\n        margin-right: 8px;\n        padding: 4px 8px;\n        border-radius: 2px;\n        background-color: rgba(0, 0, 0, 0.4);\n        color: #FFFFFF; }\n        .scrumboard-board-card .list-card-details .list-card-badges .badge mat-icon {\n          margin-right: 4px; }\n        .scrumboard-board-card .list-card-details .list-card-badges .badge.due-date {\n          background-color: #4caf50; }\n          .scrumboard-board-card .list-card-details .list-card-badges .badge.due-date.overdue {\n            background-color: #f44336; }\n        .scrumboard-board-card .list-card-details .list-card-badges .badge.check-items.completed {\n          background-color: #4caf50; }\n    .scrumboard-board-card .list-card-details .list-card-members {\n      margin-bottom: 12px; }\n      .scrumboard-board-card .list-card-details .list-card-members .list-card-member {\n        margin-right: 8px; }\n        .scrumboard-board-card .list-card-details .list-card-members .list-card-member .list-card-member-avatar {\n          border-radius: 50%;\n          width: 32px;\n          height: 32px; }\n  .scrumboard-board-card .list-card-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 0 16px; }\n    .scrumboard-board-card .list-card-footer .list-card-footer-item {\n      height: 48px;\n      margin-right: 12px;\n      color: rgba(0, 0, 0, 0.66); }\n      .scrumboard-board-card .list-card-footer .list-card-footer-item .value {\n        padding-left: 8px; }\n      .scrumboard-board-card .list-card-footer .list-card-footer-item:last-of-type {\n        margin-right: 0; }\n  .scrumboard-board-card .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .scrumboard-board-card.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n  .scrumboard-board-card.gu-hide {\n    display: none !important; }\n  .scrumboard-board-card.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\n  .scrumboard-board-card.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseScrumboardBoardCardComponent = (function () {
    function FuseScrumboardBoardCardComponent(route, scrumboardService) {
        this.route = route;
        this.scrumboardService = scrumboardService;
    }
    FuseScrumboardBoardCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.board = this.route.snapshot.data.board;
        this.card = this.board.cards.filter(function (card) {
            return _this.cardId === card.id;
        })[0];
    };
    /**
     * Is the card overdue?
     *
     * @param cardDate
     * @returns {boolean}
     */
    FuseScrumboardBoardCardComponent.prototype.isOverdue = function (cardDate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__() > __WEBPACK_IMPORTED_MODULE_3_moment__(new Date(cardDate));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardCardComponent.prototype, "cardId", void 0);
    FuseScrumboardBoardCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-card',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/card/card.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardCardComponent);
    return FuseScrumboardBoardCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"1 0 auto\" *ngIf=\"!formActive\" class=\"list-header-name\" (click)=\"openForm()\">\n    {{list.name}}\n</div>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\"\n      class=\"list-header-name-form\" fxFlex=\"1 0 auto\"\n      *ngIf=\"formActive\" fxFlex=\"row\">\n\n    <input formControlName=\"name\" #nameInput fxFlex placeholder=\"Write a list Name\">\n\n    <button mat-icon-button fxFlex=\"0 1 auto\">\n        <mat-icon>check</mat-icon>\n    </button>\n    <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\" type=\"button\">\n        <mat-icon>close</mat-icon>\n    </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .list-header-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardEditListNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseScrumboardBoardEditListNameComponent = (function () {
    function FuseScrumboardBoardEditListNameComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onNameChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardBoardEditListNameComponent.prototype.ngOnInit = function () {
    };
    FuseScrumboardBoardEditListNameComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: [this.list.name]
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardBoardEditListNameComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardBoardEditListNameComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardBoardEditListNameComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.list.name = this.form.getRawValue().name;
            this.onNameChanged.next(this.list.name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardEditListNameComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardEditListNameComponent.prototype, "onNameChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardEditListNameComponent.prototype, "nameInputField", void 0);
    FuseScrumboardBoardEditListNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-edit-list-name',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardBoardEditListNameComponent);
    return FuseScrumboardBoardEditListNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list mat-elevation-z1\" fxLayout=\"column\">\n\n    <!-- LIST HEADER -->\n    <div class=\"list-header\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <fuse-scrumboard-board-edit-list-name\n            fxFlex=\"1 0 auto\"\n            [list]=\"list\"\n            (onNameChanged)=\"onListNameChanged($event)\">\n        </fuse-scrumboard-board-edit-list-name>\n\n        <div fxFlex=\"0 1 auto\">\n            <button mat-icon-button class=\"list-header-option-button\" [matMenuTriggerFor]=\"listMenu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #listMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"removeList(list.id)\">Remove List</button>\n            </mat-menu>\n        </div>\n\n    </div>\n    <!-- / LIST HEADER -->\n\n    <!-- LIST CONTENT -->\n    <div class=\"list-content\" fxLayout=\"column\">\n\n        <div class=\"list-cards ngx-dnd-container\"\n             [model]=\"list.idCards\" ngxDroppable=\"card\" (out)=\"onDrop($event)\"\n             fusePerfectScrollbar #listScroll>\n            <fuse-scrumboard-board-card ngxDraggable\n                                        (click)=\"openCardDialog(cardId)\"\n                                        class=\"scrumboard-board-card mat-elevation-z2 ngx-dnd-item\"\n                                        *ngFor=\"let cardId of list.idCards\"\n                                        [model]=\"cardId\"\n                                        [cardId]=\"cardId\">\n            </fuse-scrumboard-board-card>\n        </div>\n    </div>\n    <!-- / LIST CONTENT -->\n\n    <!-- NEW CARD BUTTON-->\n    <div class=\"list-footer\">\n        <fuse-scrumboard-board-add-card (onCardAdd)=\"onCardAdd($event)\">\n        </fuse-scrumboard-board-add-card>\n    </div>\n    <!-- / NEW CARD BUTTON-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.scrumboard-board-list {\n  width: 344px;\n  min-width: 344px;\n  max-width: 344px;\n  padding-right: 24px;\n  height: 100%; }\n  .scrumboard-board-list .list {\n    max-height: 100%;\n    background-color: #EEF0F2;\n    color: #000;\n    border-radius: 2px;\n    transition: box-shadow 150ms ease; }\n    .scrumboard-board-list .list .list-header {\n      height: 64px;\n      min-height: 64px;\n      padding: 0 8px 0 16px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n      @media (max-width: 959px) {\n        .scrumboard-board-list .list .list-header {\n          height: 48px;\n          min-height: 48px; } }\n    .scrumboard-board-list .list .list-content {\n      position: relative;\n      overflow: hidden;\n      overflow-y: auto;\n      min-height: 0; }\n      .scrumboard-board-list .list .list-content .list-cards {\n        position: relative;\n        min-height: 32px;\n        padding: 0 16px; }\n    .scrumboard-board-list .list .list-footer {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      min-height: 48px; }\n  .scrumboard-board-list .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .scrumboard-board-list.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80); }\n    .scrumboard-board-list.gu-mirror > .list {\n      box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n  .scrumboard-board-list.gu-hide {\n    display: none !important; }\n  .scrumboard-board-list.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\n  .scrumboard-board-list.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_main_content_apps_scrumboard_scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_card_card_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_model__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FuseScrumboardBoardListComponent = (function () {
    function FuseScrumboardBoardListComponent(route, scrumboardService, dialog) {
        this.route = route;
        this.scrumboardService = scrumboardService;
        this.dialog = dialog;
    }
    FuseScrumboardBoardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardListComponent.prototype.onListNameChanged = function (newListName) {
        this.list.name = newListName;
    };
    FuseScrumboardBoardListComponent.prototype.onCardAdd = function (newCardName) {
        var _this = this;
        if (newCardName === '') {
            return;
        }
        this.scrumboardService.addCard(this.list.id, new __WEBPACK_IMPORTED_MODULE_6__card_model__["a" /* Card */]({ name: newCardName }));
        setTimeout(function () {
            _this.listScroll.scrollToBottom(0, 400);
        });
    };
    FuseScrumboardBoardListComponent.prototype.removeList = function (listId) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__core_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.scrumboardService.removeList(listId);
            }
        });
    };
    FuseScrumboardBoardListComponent.prototype.openCardDialog = function (cardId) {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_card_card_component__["a" /* FuseScrumboardCardDialogComponent */], {
            panelClass: 'scrumboard-card-dialog',
            data: {
                cardId: cardId,
                listId: this.list.id
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
        });
    };
    FuseScrumboardBoardListComponent.prototype.onDrop = function (ev) {
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardListComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */])
    ], FuseScrumboardBoardListComponent.prototype, "listScroll", void 0);
    FuseScrumboardBoardListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-list',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1_app_main_content_apps_scrumboard_scrumboard_service__["b" /* ScrumboardService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDialog */]])
    ], FuseScrumboardBoardListComponent);
    return FuseScrumboardBoardListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"colors\">\n    <!-- COLORS -->\n    <mat-list-item class=\"color m-8 mat-elevation-z1\"\n                   [ngClass]=\"'mat-'+color.key+'-bg'\"\n                   *ngFor=\"let color of (colors | keys)\"\n                   (click)=\"setColor(color.key)\"\n                   matRipple>\n        <p fxFlex>{{color.key}}</p>\n        <mat-icon class=\"s-16\" *ngIf=\"color.key === board.settings.color\">check</mat-icon>\n        <button mat-icon-button *ngIf=\"color.key === board.settings.color\" (click)=\"$event.stopPropagation();setColor('')\">\n            <mat-icon class=\"s-16\">delete</mat-icon>\n        </button>\n    </mat-list-item>\n    <!-- / COLORS -->\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .colors .color {\n  position: relative;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardColorSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_matColors__ = __webpack_require__("../../../../../src/app/core/matColors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseScrumboardBoardColorSelectorComponent = (function () {
    function FuseScrumboardBoardColorSelectorComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        this.colors = __WEBPACK_IMPORTED_MODULE_1__core_matColors__["a" /* MatColors */].all;
    }
    FuseScrumboardBoardColorSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardColorSelectorComponent.prototype.setColor = function (color) {
        this.board.settings.color = color;
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardColorSelectorComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardColorSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-color-selector',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardColorSelectorComponent);
    return FuseScrumboardBoardColorSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\" (click)=\"$event.stopPropagation()\">\n\n    <div class=\"view\" *ngSwitchCase=\"'main'\" [@slideInLeft]>\n\n        <!-- SIDENAV HEADER -->\n        <div class=\"header mat-accent-bg px-24\" [ngClass]=\"'mat-'+board.settings.color+'-bg'\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div>Settings</div>\n        </div>\n        <!-- / SIDENAV HEADER -->\n\n        <!-- SIDENAV CONTENT -->\n        <div class=\"content py-16\" fusePerfectScrollbar>\n\n            <div class=\"nav\">\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple (click)=\"view = 'board-color'\">\n                        <mat-icon class=\"nav-link-icon\">format_color_fill</mat-icon>\n                        <p class=\"title\">Board Color</p>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple (click)=\"toggleCardCover()\">\n                        <mat-icon class=\"nav-link-icon\">photo</mat-icon>\n                        <p fxFlex class=\"title\">Card Cover Images</p>\n                        <mat-icon *ngIf=\"board.settings.cardCoverImages\" class=\"s-18\">check</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple (click)=\"toggleSubcription()\">\n                        <mat-icon class=\"nav-link-icon\">remove_red_eye</mat-icon>\n                        <p fxFlex class=\"title\">Subscribe</p>\n                        <mat-icon *ngIf=\"board.settings.subscribed\" class=\"s-18\">check</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple>\n                        <mat-icon class=\"nav-link-icon\">content_copy</mat-icon>\n                        <p class=\"title\">Copy Board</p>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple>\n                        <mat-icon class=\"nav-link-icon\">delete</mat-icon>\n                        <p class=\"title\">Delete Board</p>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n            </div>\n        </div>\n        <!-- / SIDENAV CONTENT -->\n    </div>\n\n    <div class=\"view\" *ngSwitchCase=\"'board-color'\" [@slideInRight]>\n\n        <!-- SIDENAV HEADER -->\n        <div class=\"header mat-accent-bg px-24\" [ngClass]=\"'mat-'+board.settings.color+'-bg'\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div>Background Color</div>\n            <button mat-icon-button (click)=\"view ='main'\">\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\n            </button>\n        </div>\n        <!-- / SIDENAV HEADER -->\n\n        <!-- SIDENAV CONTENT -->\n        <div class=\"content p-8\" fusePerfectScrollbar>\n            <fuse-scrumboard-board-color-selector></fuse-scrumboard-board-color-selector>\n        </div>\n        <!-- / SIDENAV CONTENT -->\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%; }\n  :host .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    height: 100%; }\n    :host .views .view {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      :host .views .view > .header {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto;\n        height: 64px;\n        min-height: 64px;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n      :host .views .view > .content {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto;\n        overflow-y: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardSettingsSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
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



var FuseScrumboardBoardSettingsSidenavComponent = (function () {
    function FuseScrumboardBoardSettingsSidenavComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        this.view = 'main';
    }
    FuseScrumboardBoardSettingsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardSettingsSidenavComponent.prototype.toggleCardCover = function () {
        this.board.settings.cardCoverImages = !this.board.settings.cardCoverImages;
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardSettingsSidenavComponent.prototype.toggleSubcription = function () {
        this.board.settings.subscribed = !this.board.settings.subscribed;
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardSettingsSidenavComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardSettingsSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-settings',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardSettingsSidenavComponent);
    return FuseScrumboardBoardSettingsSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/card.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");

var Card = (function () {
    function Card(card) {
        this.id = card.id || __WEBPACK_IMPORTED_MODULE_0__core_fuseUtils__["a" /* FuseUtils */].generateGUID();
        this.name = card.name || '';
        this.description = card.description || '';
        this.idAttachmentCover = card.idAttachmentCover || '';
        this.idMembers = card.idMembers || [];
        this.idLabels = card.idLabels || [];
        this.attachments = card.attachments || [];
        this.subscribed = card.subscribed || true;
        this.checklists = card.checklists || [];
        this.checkItems = card.checkItems || 0;
        this.checkItemsChecked = card.checkItemsChecked || 0;
        this.comments = card.comments || [];
        this.activities = card.activities || [];
        this.due = card.due || '';
    }
    return Card;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");

var List = (function () {
    function List(list) {
        this.id = list.id || __WEBPACK_IMPORTED_MODULE_0__core_fuseUtils__["a" /* FuseUtils */].generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
    return List;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/scrumboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BOARDS -->\n<div id=\"boards\" class=\"mat-primary-400-bg\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex fusePerfectScrollbar>\n\n    <div class=\"header pt-44 pt-mat-88\" fxFlex=\"0 0 auto\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms'}}\">\n        <h1>Scrumboard App</h1>\n    </div>\n\n    <!-- BOARD LIST -->\n    <div class=\"board-list\" fxFlex=\"0 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutWrap\n         *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n\n        <!-- BOARD -->\n        <div class=\"board-list-item\" *ngFor=\"let board of boards\"\n             [routerLink]=\"'/apps/scrumboard/boards/'+board.id+'/'+board.uri\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n            <mat-icon class=\"s-64\">assessment</mat-icon>\n            <div class=\"board-name\">{{board.name}}</div>\n        </div>\n        <!-- / BOARD -->\n\n        <!-- NEW BOARD BUTTON -->\n        <div class=\"board-list-item add-new-board\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             (click)=\"newBoard()\"\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n            <mat-icon class=\"s-64\">add_circle</mat-icon>\n            <div class=\"board-name\">Add new board</div>\n        </div>\n        <!-- / NEW BOARD BUTTON -->\n\n    </div>\n    <!-- / BOARD LIST -->\n</div>\n<!-- / BOARDS -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/scrumboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  min-height: 100%; }\n  :host #boards {\n    width: 100%;\n    overflow: auto; }\n    :host #boards .board-list {\n      padding: 32px 0;\n      max-height: none !important; }\n      :host #boards .board-list .board-list-item {\n        min-width: 210px;\n        width: 210px;\n        padding: 24px 0;\n        margin: 16px;\n        border-radius: 2px;\n        background: rgba(0, 0, 0, 0.12);\n        cursor: pointer; }\n        :host #boards .board-list .board-list-item:hover {\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n        :host #boards .board-list .board-list-item .board-name {\n          padding-top: 16px;\n          font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/scrumboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_model__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board.model.ts");
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





var FuseScrumboardComponent = (function () {
    function FuseScrumboardComponent(router, scrumboardService) {
        this.router = router;
        this.scrumboardService = scrumboardService;
    }
    FuseScrumboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardsChanged =
            this.scrumboardService.onBoardsChanged
                .subscribe(function (boards) {
                _this.boards = boards;
            });
    };
    FuseScrumboardComponent.prototype.newBoard = function () {
        var _this = this;
        var newBoard = new __WEBPACK_IMPORTED_MODULE_3__board_model__["a" /* Board */]({});
        this.scrumboardService.createNewBoard(newBoard).then(function () {
            _this.router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
        });
    };
    FuseScrumboardComponent.prototype.ngOnDestroy = function () {
        this.onBoardsChanged.unsubscribe();
    };
    FuseScrumboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard',
            template: __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_4__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardComponent);
    return FuseScrumboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/scrumboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseScrumboardModule", function() { return FuseScrumboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scrumboard_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__board_list_list_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__board_list_card_card_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__board_list_edit_list_name_edit_list_name_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__board_list_add_card_add_card_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__board_add_list_add_list_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__board_dialogs_card_card_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__board_dialogs_card_label_selector_label_selector_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__board_edit_board_name_edit_board_name_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__board_sidenavs_settings_settings_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__board_sidenavs_settings_board_color_selector_board_color_selector_component__ = __webpack_require__("../../../../../src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: 'boards',
        component: __WEBPACK_IMPORTED_MODULE_3__scrumboard_component__["a" /* FuseScrumboardComponent */],
        resolve: {
            scrumboard: __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__["b" /* ScrumboardService */]
        }
    },
    {
        path: 'boards/:boardId/:boardUri',
        component: __WEBPACK_IMPORTED_MODULE_5__board_board_component__["a" /* FuseScrumboardBoardComponent */],
        resolve: {
            board: __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__["a" /* BoardResolve */]
        }
    },
    {
        path: '**',
        redirectTo: 'boards'
    }
];
var FuseScrumboardModule = (function () {
    function FuseScrumboardModule() {
    }
    FuseScrumboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__scrumboard_component__["a" /* FuseScrumboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__board_board_component__["a" /* FuseScrumboardBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__board_list_list_component__["a" /* FuseScrumboardBoardListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__board_list_card_card_component__["a" /* FuseScrumboardBoardCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__board_list_edit_list_name_edit_list_name_component__["a" /* FuseScrumboardBoardEditListNameComponent */],
                __WEBPACK_IMPORTED_MODULE_9__board_list_add_card_add_card_component__["a" /* FuseScrumboardBoardAddCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__board_add_list_add_list_component__["a" /* FuseScrumboardBoardAddListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__board_dialogs_card_card_component__["a" /* FuseScrumboardCardDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__board_dialogs_card_label_selector_label_selector_component__["a" /* FuseScrumboardLabelSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__board_edit_board_name_edit_board_name_component__["a" /* FuseScrumboardEditBoardNameComponent */],
                __WEBPACK_IMPORTED_MODULE_14__board_sidenavs_settings_settings_component__["a" /* FuseScrumboardBoardSettingsSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__board_sidenavs_settings_board_color_selector_board_color_selector_component__["a" /* FuseScrumboardBoardColorSelectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__["b" /* ScrumboardService */],
                __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__["a" /* BoardResolve */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__board_dialogs_card_card_component__["a" /* FuseScrumboardCardDialogComponent */]]
        })
    ], FuseScrumboardModule);
    return FuseScrumboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/scrumboard/scrumboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrumboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrumboardService = (function () {
    function ScrumboardService(http) {
        this.http = http;
        this.onBoardsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onBoardChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ScrumboardService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getBoards()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    ScrumboardService.prototype.getBoards = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/scrumboard-boards')
                .subscribe(function (response) {
                _this.boards = response;
                _this.onBoardsChanged.next(_this.boards);
                resolve(_this.boards);
            }, reject);
        });
    };
    ScrumboardService.prototype.getBoard = function (boardId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/scrumboard-boards/' + boardId)
                .subscribe(function (response) {
                _this.board = response;
                _this.onBoardChanged.next(_this.board);
                resolve(_this.board);
            }, reject);
        });
    };
    ScrumboardService.prototype.addCard = function (listId, newCard) {
        this.board.lists.map(function (list) {
            if (list.id === listId) {
                return list.idCards.push(newCard.id);
            }
        });
        this.board.cards.push(newCard);
        return this.updateBoard();
    };
    ScrumboardService.prototype.addList = function (newList) {
        this.board.lists.push(newList);
        return this.updateBoard();
    };
    ScrumboardService.prototype.removeList = function (listId) {
        var list = this.board.lists.find(function (_list) {
            return _list.id === listId;
        });
        for (var _i = 0, _a = list.idCards; _i < _a.length; _i++) {
            var cardId = _a[_i];
            this.removeCard(cardId);
        }
        var index = this.board.lists.indexOf(list);
        this.board.lists.splice(index, 1);
        return this.updateBoard();
    };
    ScrumboardService.prototype.removeCard = function (cardId, listId) {
        var card = this.board.cards.find(function (_card) {
            return _card.id === cardId;
        });
        if (listId) {
            var list = this.board.lists.find(function (_list) {
                return listId === _list.id;
            });
            list.idCards.splice(list.idCards.indexOf(cardId), 1);
        }
        this.board.cards.splice(this.board.cards.indexOf(card), 1);
        this.updateBoard();
    };
    ScrumboardService.prototype.updateBoard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/scrumboard-boards/' + _this.board.id, _this.board)
                .subscribe(function (response) {
                _this.onBoardChanged.next(_this.board);
                resolve(_this.board);
            }, reject);
        });
    };
    ScrumboardService.prototype.updateCard = function (newCard) {
        this.board.cards.map(function (_card) {
            if (_card.id === newCard.id) {
                return newCard;
            }
        });
        this.updateBoard();
    };
    ScrumboardService.prototype.createNewBoard = function (board) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/scrumboard-boards/' + board.id, board)
                .subscribe(function (response) {
                resolve(board);
            }, reject);
        });
    };
    ScrumboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScrumboardService);
    return ScrumboardService;
}());

var BoardResolve = (function () {
    function BoardResolve(scrumboardService) {
        this.scrumboardService = scrumboardService;
    }
    BoardResolve.prototype.resolve = function (route) {
        return this.scrumboardService.getBoard(route.paramMap.get('boardId'));
    };
    BoardResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [ScrumboardService])
    ], BoardResolve);
    return BoardResolve;
}());



/***/ })

});
//# sourceMappingURL=scrumboard.module.chunk.js.map