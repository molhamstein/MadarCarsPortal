webpackJsonp(["todo.module"],{

/***/ "../../../../../src/app/main/content/apps/todo/sidenavs/main/main-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header p-24 pb-4\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">check_box</mat-icon>\n        <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">To-do</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms'}}\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatPlaceholder=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Todo Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"content\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{y:'50px'}}\">\n\n    <div class=\"p-24\">\n        <button mat-raised-button fxFlex\n                class=\"mat-accent add-todo-button\"\n                (click)=\"newTodo()\"\n                aria-label=\"ADD TASK\">\n            ADD TASK\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-item\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/todo/all'\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\">view_headline</mat-icon>\n                <span>All</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">FILTERS</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of filters\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/todo/filter/' + filter.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">TAGS</div>\n\n        <div class=\"nav-item\" *ngFor=\"let tag of tags\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/todo/tag/' + tag.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':tag.color}\">label</mat-icon>\n                <span>{{tag.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/sidenavs/main/main-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  :host .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  :host .header .account {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/sidenavs/main/main-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTodoMainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var FuseTodoMainSidenavComponent = (function () {
    function FuseTodoMainSidenavComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        // Data
        this.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
    }
    FuseTodoMainSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onFiltersChanged =
            this.todoService.onFiltersChanged
                .subscribe(function (filters) {
                _this.filters = filters;
            });
        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(function (tags) {
                _this.tags = tags;
            });
    };
    FuseTodoMainSidenavComponent.prototype.ngOnDestroy = function () {
        this.onFiltersChanged.unsubscribe();
        this.onTagsChanged.unsubscribe();
    };
    FuseTodoMainSidenavComponent.prototype.newTodo = function () {
        var _this = this;
        this.router.navigate(['/apps/todo/all']).then(function () {
            setTimeout(function () {
                _this.todoService.onNewTodoClicked.next('');
            });
        });
    };
    FuseTodoMainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-todo-main-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/todo/sidenavs/main/main-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/todo/sidenavs/main/main-sidenav.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], FuseTodoMainSidenavComponent);
    return FuseTodoMainSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-details/todo-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!todo\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-120 mb-12 select-todo-icon\" *fuseIfOnDom\n              [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">check_box\n    </mat-icon>\n    <span class=\"hint-text mat-h1 select-todo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'400ms'}}\">Select\n        a todo\n    </span>\n</div>\n\n<div *ngIf=\"todo\">\n\n    <div class=\"todo-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button mat-button class=\"toggle-complete-button p-0\" (click)=\"toggleCompleted($event)\"\n                aria-label=\"Toggle completed\" fxFlex=\"0 1 auto\">\n            <mat-icon *ngIf=\"todo.completed\">check_box</mat-icon>\n            <mat-icon *ngIf=\"!todo.completed\">check_box_outline_blank</mat-icon>\n            <span>Mark as Done</span>\n        </button>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleDeleted($event)\" aria-label=\"Toggle delete\">\n                <mat-icon *ngIf=\"todo.deleted\">delete_forever</mat-icon>\n                <mat-icon *ngIf=\"!todo.deleted\">delete</mat-icon>\n            </button>\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon *ngIf=\"todo.important\">error</mat-icon>\n                <mat-icon *ngIf=\"!todo.important\">error_outline</mat-icon>\n            </button>\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon *ngIf=\"todo.starred\">star</mat-icon>\n                <mat-icon *ngIf=\"!todo.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" fxFlex=\"0 1 auto\">\n                <mat-icon>label</mat-icon>\n            </button>\n\n            <mat-menu #labelMenu=\"matMenu\">\n                <button mat-menu-item *ngFor=\"let tag of tags\"\n                        (click)=\"toggleTagOnTodo(tag.id)\">\n                    {{tag.title}}\n                </button>\n            </mat-menu>\n\n        </div>\n    </div>\n\n    <div class=\"todo-content\">\n\n        <form [formGroup]=\"todoForm\" (submit)=\"addTodo()\">\n\n            <mat-form-field class=\"title mt-8\" floatPlaceholder=\"never\" fxFill>\n                <textarea matInput\n                          #titleInput\n                          name=\"title\"\n                          formControlName=\"title\"\n                          placeholder=\"Title\"\n                          required>\n                </textarea>\n            </mat-form-field>\n\n            <div class=\"tags mb-24\" fxFlexFill fxLayout=\"row\" fxLayoutWrap>\n                <div class=\"tag\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let tagId of todo.tags\">\n\n                    <div class=\"tag-color\" [ngStyle]=\"{'background-color': tags | getById:tagId:'color'}\"></div>\n\n                    <div class=\"tag-label\">{{tags | getById:tagId:'title'}}</div>\n                </div>\n            </div>\n\n            <div class=\"dates\" fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\n                    <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #startDatePicker></mat-datepicker>\n                </mat-form-field>\n\n                <mat-form-field fxFlex>\n                    <input matInput [matDatepicker]=\"dueDatePicker\" placeholder=\"Due Date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #dueDatePicker></mat-datepicker>\n                </mat-form-field>\n\n            </div>\n\n            <mat-form-field class=\"\" fxFill>\n                <textarea matInput #notes\n                          name=\"notes\"\n                          formControlName=\"notes\"\n                          placeholder=\"Notes\"\n                          maxlength=\"500\">\n                </textarea>\n                <mat-hint align=\"end\">{{notes.value.length}} / 500</mat-hint>\n            </mat-form-field>\n\n            <button *ngIf=\"formType === 'new'\"\n                    mat-raised-button class=\"mat-accent\"\n                    [disabled]=\"todoForm.invalid\">SAVE\n            </button>\n        </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-details/todo-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: auto; }\n  :host .todo-header {\n    padding: 24px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    background: rgba(0, 0, 0, 0.06); }\n    :host .todo-header .actions {\n      min-width: 88px; }\n  :host .todo-content {\n    padding: 24px; }\n    :host .todo-content .title {\n      font-size: 17px;\n      font-weight: 500; }\n    :host .todo-content .tag {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 8px 4px 0 0;\n      padding: 3px 8px;\n      background-color: rgba(0, 0, 0, 0.08); }\n      :host .todo-content .tag .tag-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\n    :host .todo-content .dates .mat-form-field {\n      width: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-details/todo-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTodoDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_model__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuseTodoDetailsComponent = (function () {
    function FuseTodoDetailsComponent(todoService, formBuilder) {
        this.todoService = todoService;
        this.formBuilder = formBuilder;
    }
    FuseTodoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update the current todo
        this.onCurrentTodoChanged =
            this.todoService.onCurrentTodoChanged
                .subscribe(function (_a) {
                var todo = _a[0], formType = _a[1];
                if (todo && formType === 'edit') {
                    _this.formType = 'edit';
                    _this.todo = todo;
                    _this.todoForm = _this.createTodoForm();
                    _this.onFormChange =
                        _this.todoForm.valueChanges
                            .debounceTime(500)
                            .distinctUntilChanged()
                            .subscribe(function (data) {
                            _this.todoService.updateTodo(data);
                        });
                }
            });
        // Subscribe to update on tag change
        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(function (labels) {
                _this.tags = labels;
            });
        // Subscribe to update on tag change
        this.onNewTodoClicked =
            this.todoService.onNewTodoClicked
                .subscribe(function () {
                _this.todo = new __WEBPACK_IMPORTED_MODULE_2__todo_model__["a" /* Todo */]({});
                _this.todo.id = __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__["a" /* FuseUtils */].generateGUID();
                _this.formType = 'new';
                _this.todoForm = _this.createTodoForm();
                _this.focusTitleField();
                _this.todoService.onCurrentTodoChanged.next([_this.todo, 'new']);
            });
    };
    FuseTodoDetailsComponent.prototype.focusTitleField = function () {
        var _this = this;
        setTimeout(function () {
            _this.titleInputField.nativeElement.focus();
        });
    };
    FuseTodoDetailsComponent.prototype.createTodoForm = function () {
        return this.formBuilder.group({
            'id': [this.todo.id],
            'title': [this.todo.title],
            'notes': [this.todo.notes],
            'startDate': [this.todo.startDate],
            'dueDate': [this.todo.dueDate],
            'completed': [this.todo.completed],
            'starred': [this.todo.starred],
            'important': [this.todo.important],
            'deleted': [this.todo.deleted],
            'tags': [this.todo.tags]
        });
    };
    FuseTodoDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.todo.toggleStar();
        this.todoService.updateTodo(this.todo);
    };
    FuseTodoDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.todo.toggleImportant();
        this.todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Completed
     * @param event
     */
    FuseTodoDetailsComponent.prototype.toggleCompleted = function (event) {
        event.stopPropagation();
        this.todo.toggleCompleted();
        this.todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Deleted
     * @param event
     */
    FuseTodoDetailsComponent.prototype.toggleDeleted = function (event) {
        event.stopPropagation();
        this.todo.toggleDeleted();
        this.todoService.updateTodo(this.todo);
    };
    FuseTodoDetailsComponent.prototype.toggleTagOnTodo = function (tagId) {
        this.todoService.toggleTagOnTodo(tagId, this.todo);
    };
    FuseTodoDetailsComponent.prototype.addTodo = function () {
        this.todoService.updateTodo(this.todoForm.getRawValue());
    };
    FuseTodoDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.onFormChange) {
            this.onFormChange.unsubscribe();
        }
        this.onCurrentTodoChanged.unsubscribe();
        this.onNewTodoClicked.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('titleInput'),
        __metadata("design:type", Object)
    ], FuseTodoDetailsComponent.prototype, "titleInputField", void 0);
    FuseTodoDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-todo-details',
            template: __webpack_require__("../../../../../src/app/main/content/apps/todo/todo-details/todo-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/todo/todo-details/todo-details.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_5__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], FuseTodoDetailsComponent);
    return FuseTodoDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-list/todo-list-item/todo-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-icon class=\"handle mr-16\" ngxDragHandle fxFlex=\"0 1 auto\" fxHide.xs>\n        drag_handle\n    </mat-icon>\n\n    <mat-checkbox [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectedChange()\"\n                  class=\"mr-16\" fxFlex=\"0 1 auto\" (click)=\"$event.stopPropagation()\">\n    </mat-checkbox>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n\n        <div class=\"info\" fxFlex fxFlexLayout=\"column\">\n\n            <div class=\"title\">\n                {{todo.title}}\n            </div>\n\n            <div class=\"notes\">\n                {{todo.notes}}\n            </div>\n\n            <div class=\"tags\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutWrap>\n\n                <div class=\"tag\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let tagId of todo.tags\">\n                    <div class=\"tag-color\" [ngStyle]=\"{'background-color': tags | getById:tagId:'color'}\"></div>\n                    <div class=\"tag-label\">{{tags | getById:tagId:'title'}}</div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleImportant($event)\"\n                    aria-label=\"Toggle important\" fxHide.xs>\n                <mat-icon *ngIf=\"todo.important\">error</mat-icon>\n                <mat-icon *ngIf=\"!todo.important\">error_outline</mat-icon>\n            </button>\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleStar($event)\"\n                    aria-label=\"Toggle star\" fxHide.xs>\n                <mat-icon *ngIf=\"todo.starred\">star</mat-icon>\n                <mat-icon *ngIf=\"!todo.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" class=\"mat-icon-button\"\n                    (click)=\"$event.stopPropagation();\" fxHide.xs>\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"toggle done\" (click)=\"toggleCompleted($event)\">\n                    <ng-container *ngIf=\"todo.completed\">\n                        <mat-icon>check_box</mat-icon>\n                        <span>Mark as undone</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!todo.completed\">\n                        <mat-icon>check_box_outline_blank</mat-icon>\n                        <span>Mark as done</span>\n                    </ng-container>\n                </button>\n\n                <button mat-menu-item aria-label=\"toggle important\" (click)=\"toggleImportant($event)\">\n                    <ng-container *ngIf=\"todo.important\">\n                        <mat-icon>error</mat-icon>\n                        <span>Remove important</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!todo.important\">\n                        <mat-icon>error_outline</mat-icon>\n                        <span>Mark as important</span>\n                    </ng-container>\n                </button>\n\n                <button mat-menu-item aria-label=\"toggle star\" (click)=\"toggleStar($event)\">\n                    <ng-container *ngIf=\"todo.starred\">\n                        <mat-icon>star</mat-icon>\n                        <span>Remove star</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!todo.starred\">\n                        <mat-icon>star_outline</mat-icon>\n                        <span>Add star</span>\n                    </ng-container>\n                </button>\n            </mat-menu>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-list/todo-list-item/todo-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.todo-list-item {\n  display: block;\n  position: relative;\n  padding: 16px 16px 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  text-transform: none;\n  cursor: pointer;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background: #FFFFFF; }\n  .todo-list-item.todo-item-placeholder {\n    background: rgba(0, 0, 0, 0.12); }\n    .todo-list-item.todo-item-placeholder * {\n      opacity: 0; }\n  .todo-list-item .handle {\n    height: 48px;\n    line-height: 48px;\n    cursor: move;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .todo-list-item.move-disabled .handle {\n    display: none; }\n  .todo-list-item .tags .tag {\n    font-size: 11px;\n    border-radius: 2px;\n    margin: 8px 4px 0 0;\n    padding: 3px 8px;\n    background-color: rgba(0, 0, 0, 0.08); }\n    .todo-list-item .tags .tag .tag-color {\n      width: 8px;\n      height: 8px;\n      margin-right: 8px;\n      border-radius: 50%; }\n  .todo-list-item.completed {\n    background: #EEEEEE; }\n    .todo-list-item.completed .title,\n    .todo-list-item.completed .notes {\n      color: rgba(0, 0, 0, 0.54);\n      text-decoration: line-through; }\n  .todo-list-item.selected {\n    background: #FFF8E1; }\n  .todo-list-item .info {\n    margin: 0 16px 0 8px; }\n    .todo-list-item .info .title {\n      font-size: 15px;\n      font-weight: 500; }\n    .todo-list-item .info .notes {\n      margin-top: 4px; }\n  .todo-list-item .buttons .is-starred {\n    margin: 0 0 0 16px; }\n  .todo-list-item .buttons .is-important {\n    margin: 0; }\n  .todo-list-item:not(.has-handle):not(.move-disabled),\n  .todo-list-item.has-handle [ngxdraghandle],\n  .todo-list-item.has-handle [ngxDragHandle] {\n    cursor: move; }\n  .todo-list-item .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .todo-list-item.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n  .todo-list-item.gu-hide {\n    display: none !important; }\n  .todo-list-item.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\n  .todo-list-item.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-list/todo-list-item/todo-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTodoListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_model__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseTodoListItemComponent = (function () {
    function FuseTodoListItemComponent(todoService, route) {
        this.todoService = todoService;
        this.route = route;
        // Disable move if path is not /all
        if (route.snapshot.url[0].path !== 'all') {
            this.moveDisabled = true;
        }
    }
    FuseTodoListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.todo = new __WEBPACK_IMPORTED_MODULE_1__todo_model__["a" /* Todo */](this.todo);
        this.completed = this.todo.completed;
        // Subscribe to update on selected todo change
        this.onSelectedTodosChanged =
            this.todoService.onSelectedTodosChanged
                .subscribe(function (selectedTodos) {
                _this.selected = false;
                if (selectedTodos.length > 0) {
                    for (var _i = 0, selectedTodos_1 = selectedTodos; _i < selectedTodos_1.length; _i++) {
                        var todo = selectedTodos_1[_i];
                        if (todo.id === _this.todo.id) {
                            _this.selected = true;
                            break;
                        }
                    }
                }
            });
        // Subscribe to update on tag change
        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(function (tags) {
                _this.tags = tags;
            });
    };
    FuseTodoListItemComponent.prototype.ngOnDestroy = function () {
        this.onSelectedTodosChanged.unsubscribe();
    };
    FuseTodoListItemComponent.prototype.onSelectedChange = function () {
        this.todoService.toggleSelectedTodo(this.todo.id);
    };
    /**
     * Toggle star
     */
    FuseTodoListItemComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.todo.toggleStar();
        this.todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Important
     */
    FuseTodoListItemComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.todo.toggleImportant();
        this.todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Completed
     */
    FuseTodoListItemComponent.prototype.toggleCompleted = function (event) {
        event.stopPropagation();
        this.todo.toggleCompleted();
        this.todoService.updateTodo(this.todo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__todo_model__["a" /* Todo */])
    ], FuseTodoListItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.selected'),
        __metadata("design:type", Boolean)
    ], FuseTodoListItemComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.completed'),
        __metadata("design:type", Boolean)
    ], FuseTodoListItemComponent.prototype, "completed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.move-disabled'),
        __metadata("design:type", Boolean)
    ], FuseTodoListItemComponent.prototype, "moveDisabled", void 0);
    FuseTodoListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-todo-list-item',
            template: __webpack_require__("../../../../../src/app/main/content/apps/todo/todo-list/todo-list-item/todo-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/todo/todo-list/todo-list-item/todo-list-item.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], FuseTodoListItemComponent);
    return FuseTodoListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"todos.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-todos-text  hint-text\">There are no todos!</span>\n</div>\n<div class=\"todo-list\" ngxDroppable [model]=\"todos\" (out)=\"onDrop($event)\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n    <fuse-todo-list-item class=\"todo-list-item has-handle\"\n                         *ngFor=\"let todo of todos\" [todo]=\"todo\"\n                         ngxDraggable\n                         [model]=\"todo\"\n                         (click)=\"readTodo(todo.id)\"\n                         [ngClass]=\"{'current-todo':todo?.id == currentTodo?.id}\"\n                         matRipple\n                         [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </fuse-todo-list-item>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-list/todo-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: auto;\n  position: relative;\n  padding: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n  :host .no-todos-text {\n    font-size: 24px;\n    font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.service.ts");
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





var FuseTodoListComponent = (function () {
    function FuseTodoListComponent(route, todoService, location) {
        this.route = route;
        this.todoService = todoService;
        this.location = location;
    }
    FuseTodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update todos on changes
        this.onTodosChanged =
            this.todoService.onTodosChanged
                .subscribe(function (todos) {
                _this.todos = todos;
            });
        // Subscribe to update current todo on changes
        this.onCurrentTodoChanged =
            this.todoService.onCurrentTodoChanged
                .subscribe(function (currentTodo) {
                if (!currentTodo) {
                    // Set the current todo id to null to deselect the current todo
                    _this.currentTodo = null;
                    // Handle the location changes
                    var tagHandle = _this.route.snapshot.params.tagHandle, filterHandle = _this.route.snapshot.params.filterHandle;
                    if (tagHandle) {
                        _this.location.go('apps/todo/tag/' + tagHandle);
                    }
                    else if (filterHandle) {
                        _this.location.go('apps/todo/filter/' + filterHandle);
                    }
                    else {
                        _this.location.go('apps/todo/all');
                    }
                }
                else {
                    _this.currentTodo = currentTodo;
                }
            });
    };
    FuseTodoListComponent.prototype.ngOnDestroy = function () {
        this.onTodosChanged.unsubscribe();
        this.onCurrentTodoChanged.unsubscribe();
    };
    /**
     * Read todo
     * @param todoId
     */
    FuseTodoListComponent.prototype.readTodo = function (todoId) {
        // Set current todo
        this.todoService.setCurrentTodo(todoId);
    };
    FuseTodoListComponent.prototype.onDrop = function (ev) {
        this.todoService.updateTodos(this.todos);
    };
    FuseTodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-todo-list',
            template: __webpack_require__("../../../../../src/app/main/content/apps/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/todo/todo-list/todo-list.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_4__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], FuseTodoListComponent);
    return FuseTodoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"todo\" class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n            <fuse-todo-main-sidenav></fuse-todo-main-sidenav>\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"search-wrapper mat-white-bg\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md aria-label=\"Toggle Sidenav\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <div class=\"search\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon>search</mat-icon>\n                        <input [formControl]=\"searchInput\" placeholder=\"Search for an todo\" fxFlex>\n                    </div>\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\" [ngClass]=\"{'current-todo-selected':currentTodo}\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <div class=\"todo-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-checkbox (click)=\"toggleSelectAll()\" [checked]=\"hasSelectedTodos\"\n                                      [indeterminate]=\"isIndeterminate\"></mat-checkbox>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                            <mat-icon>arrow_drop_down</mat-icon>\n                        </button>\n                        <mat-menu #selectMenu=\"matMenu\">\n                            <button mat-menu-item (click)=\"selectTodos()\">All</button>\n                            <button mat-menu-item (click)=\"deselectTodos()\">None</button>\n                            <button mat-menu-item (click)=\"selectTodos('read', true)\">Read</button>\n                            <button mat-menu-item (click)=\"selectTodos('read', false)\">Unread</button>\n                            <button mat-menu-item (click)=\"selectTodos('starred', true)\">Starred</button>\n                            <button mat-menu-item (click)=\"selectTodos('starred', false)\">Unstarred</button>\n                            <button mat-menu-item (click)=\"selectTodos('important', true)\">Important</button>\n                            <button mat-menu-item (click)=\"selectTodos('important', false)\">Unimportant</button>\n                        </mat-menu>\n\n                        <div class=\"toolbar-separator\" *ngIf=\"hasSelectedTodos\"></div>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedTodos\">\n                            <mat-icon>label</mat-icon>\n                        </button>\n                        <mat-menu #labelMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let tag of tags\" (click)=\"toggleTagOnSelectedTodos(tag.id)\">\n                                {{tag.title}}\n                            </button>\n                        </mat-menu>\n                    </div>\n\n                    <div *ngIf=\"currentTodo\" fxHide.gt-lg>\n                        <button mat-icon-button (click)=\"deSelectCurrentTodo()\">\n                            <mat-icon>arrow_back</mat-icon>\n                        </button>\n                    </div>\n\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content\" fxFlexAlign=\"row\">\n\n                    <fuse-todo-list fusePerfectScrollbar fxFlex></fuse-todo-list>\n\n                    <fuse-todo-details fusePerfectScrollbar fxFlex></fuse-todo-details>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  width: 100%; }\n  :host .center .header .search-wrapper {\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n    :host .center .header .search-wrapper .sidenav-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      border-radius: 0;\n      border-right: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\n      :host .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        color: rgba(0, 0, 0, 0.54);\n        border: none;\n        outline: none; }\n  @media (max-width: 1919px) {\n    :host .center .content-card fuse-todo-list {\n      border-right: 0; }\n    :host .center .content-card fuse-todo-list,\n    :host .center .content-card fuse-todo-details {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 100%;\n              flex: 1 0 100%; }\n    :host .center .content-card fuse-todo-details {\n      display: none !important; }\n    :host .center .content-card.current-todo-selected .toolbar {\n      padding-left: 16px !important; }\n      :host .center .content-card.current-todo-selected .toolbar .todo-selection {\n        display: none !important; }\n    :host .center .content-card.current-todo-selected .content fuse-todo-list {\n      display: none !important; }\n    :host .center .content-card.current-todo-selected .content fuse-todo-details {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseTodoComponent = (function () {
    function FuseTodoComponent(todoService) {
        this.todoService = todoService;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('');
    }
    FuseTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedTodosChanged =
            this.todoService.onSelectedTodosChanged
                .subscribe(function (selectedTodos) {
                setTimeout(function () {
                    _this.hasSelectedTodos = selectedTodos.length > 0;
                    _this.isIndeterminate = (selectedTodos.length !== _this.todoService.todos.length && selectedTodos.length > 0);
                }, 0);
            });
        this.onFiltersChanged =
            this.todoService.onFiltersChanged
                .subscribe(function (folders) {
                _this.filters = _this.todoService.filters;
            });
        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(function (tags) {
                _this.tags = _this.todoService.tags;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.todoService.onSearchTextChanged.next(searchText);
        });
        this.onCurrentTodoChanged =
            this.todoService.onCurrentTodoChanged
                .subscribe(function (_a) {
                var currentTodo = _a[0], formType = _a[1];
                if (!currentTodo) {
                    _this.currentTodo = null;
                }
                else {
                    _this.currentTodo = currentTodo;
                }
            });
    };
    FuseTodoComponent.prototype.deSelectCurrentTodo = function () {
        this.todoService.onCurrentTodoChanged.next([null, null]);
    };
    FuseTodoComponent.prototype.ngOnDestroy = function () {
        this.onSelectedTodosChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onTagsChanged.unsubscribe();
        this.onCurrentTodoChanged.unsubscribe();
    };
    FuseTodoComponent.prototype.toggleSelectAll = function () {
        this.todoService.toggleSelectAll();
    };
    FuseTodoComponent.prototype.selectTodos = function (filterParameter, filterValue) {
        this.todoService.selectTodos(filterParameter, filterValue);
    };
    FuseTodoComponent.prototype.deselectTodos = function () {
        this.todoService.deselectTodos();
    };
    FuseTodoComponent.prototype.toggleTagOnSelectedTodos = function (tagId) {
        this.todoService.toggleTagOnSelectedTodos(tagId);
    };
    FuseTodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-todo',
            template: __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/todo/todo.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]])
    ], FuseTodoComponent);
    return FuseTodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(todo) {
        {
            this.id = todo.id;
            this.title = todo.title;
            this.notes = todo.notes;
            this.startDate = todo.startDate;
            this.dueDate = todo.dueDate;
            this.completed = todo.completed;
            this.starred = todo.starred;
            this.important = todo.important;
            this.deleted = todo.deleted;
            this.tags = todo.tags;
        }
    }
    Todo.prototype.toggleStar = function () {
        this.starred = !this.starred;
    };
    Todo.prototype.toggleImportant = function () {
        this.important = !this.important;
    };
    Todo.prototype.toggleCompleted = function () {
        this.completed = !this.completed;
    };
    Todo.prototype.toggleDeleted = function () {
        this.deleted = !this.deleted;
    };
    return Todo;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseTodoModule", function() { return FuseTodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_component__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_service__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidenavs_main_main_sidenav_component__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/sidenavs/main/main-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_item_todo_list_item_component__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo-list/todo-list-item/todo-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_details_todo_details_component__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo-details/todo-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'all',
        component: __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
        resolve: {
            todo: __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
        }
    },
    {
        path: 'all/:todoId',
        component: __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
        resolve: {
            todo: __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
        }
    },
    {
        path: 'tag/:tagHandle',
        component: __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
        resolve: {
            todo: __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
        }
    },
    {
        path: 'tag/:tagHandle/:todoId',
        component: __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
        resolve: {
            todo: __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
        }
    },
    {
        path: 'filter/:filterHandle',
        component: __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
        resolve: {
            todo: __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
        }
    },
    {
        path: 'filter/:filterHandle/:todoId',
        component: __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
        resolve: {
            todo: __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
        }
    },
    {
        path: '**',
        redirectTo: 'all'
    }
];
var FuseTodoModule = (function () {
    function FuseTodoModule() {
    }
    FuseTodoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* FuseTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidenavs_main_main_sidenav_component__["a" /* FuseTodoMainSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_item_todo_list_item_component__["a" /* FuseTodoListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_list_todo_list_component__["a" /* FuseTodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__todo_details_todo_details_component__["a" /* FuseTodoDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]
            ]
        })
    ], FuseTodoModule);
    return FuseTodoModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_model__ = __webpack_require__("../../../../../src/app/main/content/apps/todo/todo.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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







var TodoService = (function () {
    function TodoService(http, location // Set current todo
    ) {
        this.http = http;
        this.location = location; // Set current todo
        this.searchText = '';
        this.onTodosChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onSelectedTodosChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onCurrentTodoChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onFiltersChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onTagsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.onNewTodoClicked = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["b" /* Subject */]();
        this.selectedTodos = [];
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    TodoService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFilters(),
                _this.getTags(),
                _this.getTodos()
            ]).then(function () {
                if (_this.routeParams.todoId) {
                    _this.setCurrentTodo(_this.routeParams.todoId);
                }
                else {
                    _this.setCurrentTodo(null);
                }
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    if (searchText !== '') {
                        _this.searchText = searchText;
                        _this.getTodos();
                    }
                    else {
                        _this.searchText = searchText;
                        _this.getTodos();
                    }
                });
                resolve();
            }, reject);
        });
    };
    /**
     * Get all filters
     * @returns {Promise<any>}
     */
    TodoService.prototype.getFilters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/todo-filters')
                .subscribe(function (response) {
                _this.filters = response;
                _this.onFiltersChanged.next(_this.filters);
                resolve(_this.filters);
            }, reject);
        });
    };
    /**
     * Get all tags
     * @returns {Promise<any>}
     */
    TodoService.prototype.getTags = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/todo-tags')
                .subscribe(function (response) {
                _this.tags = response;
                _this.onTagsChanged.next(_this.tags);
                resolve(_this.tags);
            }, reject);
        });
    };
    /**
     * Get todos
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodos = function () {
        if (this.routeParams.tagHandle) {
            return this.getTodosByTag(this.routeParams.tagHandle);
        }
        if (this.routeParams.filterHandle) {
            return this.getTodosByFilter(this.routeParams.filterHandle);
        }
        return this.getTodosByParams(this.routeParams);
    };
    /**
     * Get todos by params
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodosByParams = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/todo-todos')
                .subscribe(function (todos) {
                _this.todos = todos.map(function (todo) {
                    return new __WEBPACK_IMPORTED_MODULE_2__todo_model__["a" /* Todo */](todo);
                });
                _this.todos = __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__["a" /* FuseUtils */].filterArrayByString(_this.todos, _this.searchText);
                _this.onTodosChanged.next(_this.todos);
                resolve(_this.todos);
            });
        });
    };
    /**
     * Get todos by filter
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodosByFilter = function (handle) {
        var _this = this;
        var param = handle + '=true';
        if (handle === 'dueDate') {
            param = handle + '=^$|\\s+';
        }
        return new Promise(function (resolve, reject) {
            _this.http.get('api/todo-todos?' + param)
                .subscribe(function (todos) {
                _this.todos = todos.map(function (todo) {
                    return new __WEBPACK_IMPORTED_MODULE_2__todo_model__["a" /* Todo */](todo);
                });
                _this.todos = __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__["a" /* FuseUtils */].filterArrayByString(_this.todos, _this.searchText);
                _this.onTodosChanged.next(_this.todos);
                resolve(_this.todos);
            }, reject);
        });
    };
    /**
     * Get todos by tag
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodosByTag = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/todo-tags?handle=' + handle)
                .subscribe(function (tags) {
                var tagId = tags[0].id;
                _this.http.get('api/todo-todos?tags=' + tagId)
                    .subscribe(function (todos) {
                    _this.todos = todos.map(function (todo) {
                        return new __WEBPACK_IMPORTED_MODULE_2__todo_model__["a" /* Todo */](todo);
                    });
                    _this.todos = __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__["a" /* FuseUtils */].filterArrayByString(_this.todos, _this.searchText);
                    _this.onTodosChanged.next(_this.todos);
                    resolve(_this.todos);
                }, reject);
            });
        });
    };
    /**
     * Toggle selected todo by id
     * @param id
     */
    TodoService.prototype.toggleSelectedTodo = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedTodos.length > 0) {
            for (var _i = 0, _a = this.selectedTodos; _i < _a.length; _i++) {
                var todo = _a[_i];
                // ...delete the selected todo
                if (todo.id === id) {
                    var index = this.selectedTodos.indexOf(todo);
                    if (index !== -1) {
                        this.selectedTodos.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedTodosChanged.next(this.selectedTodos);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedTodos.push(this.todos.find(function (todo) {
            return todo.id === id;
        }));
        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    };
    /**
     * Toggle select all
     */
    TodoService.prototype.toggleSelectAll = function () {
        if (this.selectedTodos.length > 0) {
            this.deselectTodos();
        }
        else {
            this.selectTodos();
        }
    };
    TodoService.prototype.selectTodos = function (filterParameter, filterValue) {
        this.selectedTodos = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedTodos = this.todos;
        }
        else {
            (_a = this.selectedTodos).push.apply(_a, this.todos.filter(function (todo) {
                return todo[filterParameter] === filterValue;
            }));
        }
        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
        var _a;
    };
    TodoService.prototype.deselectTodos = function () {
        this.selectedTodos = [];
        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    };
    /**
     * Set current todo by id
     * @param id
     */
    TodoService.prototype.setCurrentTodo = function (id) {
        this.currentTodo = this.todos.find(function (todo) {
            return todo.id === id;
        });
        this.onCurrentTodoChanged.next([this.currentTodo, 'edit']);
        var tagHandle = this.routeParams.tagHandle, filterHandle = this.routeParams.filterHandle;
        if (tagHandle) {
            this.location.go('apps/todo/tag/' + tagHandle + '/' + id);
        }
        else if (filterHandle) {
            this.location.go('apps/todo/filter/' + filterHandle + '/' + id);
        }
        else {
            this.location.go('apps/todo/all/' + id);
        }
    };
    /**
     * Toggle tag on selected todos
     * @param tagId
     */
    TodoService.prototype.toggleTagOnSelectedTodos = function (tagId) {
        var _this = this;
        this.selectedTodos.map(function (todo) {
            _this.toggleTagOnTodo(tagId, todo);
        });
    };
    TodoService.prototype.toggleTagOnTodo = function (tagId, todo) {
        var index = todo.tags.indexOf(tagId);
        if (index !== -1) {
            todo.tags.splice(index, 1);
        }
        else {
            todo.tags.push(tagId);
        }
        this.updateTodo(todo);
    };
    /**
     * Update the todo
     * @param todo
     * @returns {Promise<any>}
     */
    TodoService.prototype.updateTodo = function (todo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/todo-todos/' + todo.id, __assign({}, todo))
                .subscribe(function (response) {
                _this.getTodos().then(function (todos) {
                    resolve(todos);
                }, reject);
            });
        });
    };
    /**
     * Update the todo
     * @param todos
     * @returns {Promise<any>}
     */
    TodoService.prototype.updateTodos = function (todos) {
        /*  return new Promise((resolve, reject) => {

              this.http.post('api/todo-todos/', {...todos})

                  .subscribe(response => {

                      this.getTodos().then(_todos => {
                          console.log(response);
                          resolve(_todos);
                      }, reject);
                  });
          });*/
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] // Set current todo
        ])
    ], TodoService);
    return TodoService;
}());



/***/ })

});
//# sourceMappingURL=todo.module.chunk.js.map