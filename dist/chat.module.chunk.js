webpackJsonp(["chat.module"],{

/***/ "../../../../../src/app/main/content/apps/chat/chat-start/chat-start.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"big-circle mat-elevation-z1 app-logo\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n         *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n\n        <mat-icon class=\"s-64 s-mat-128\">chat</mat-icon>\n\n    </div>\n\n    <span class=\"app-title my-24\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">Chat App</span>\n\n    <span fxHide fxShow.gt-md class=\"app-message\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">Select contact to start the chat!..</span>\n\n    <button mat-raised-button fxHide.gt-md class=\"\" fuseMatSidenavToggler=\"chat-left-sidenav\">\n        Select contact to start the chat!..\n    </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat-start/chat-start.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8)); }\n  :host .big-circle {\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8));\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    line-height: 300px;\n    text-align: center; }\n    @media (max-width: 959px) {\n      :host .big-circle {\n        width: 160px;\n        height: 160px;\n        line-height: 160px; } }\n    :host .big-circle mat-icon {\n      color: #039be5; }\n  :host .app-title {\n    font-weight: 500;\n    font-size: 32px; }\n  :host .secondary-text {\n    font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat-start/chat-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseChatStartComponent = (function () {
    function FuseChatStartComponent() {
    }
    FuseChatStartComponent.prototype.ngOnInit = function () {
    };
    FuseChatStartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-start',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/chat-start/chat-start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/chat-start/chat-start.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [])
    ], FuseChatStartComponent);
    return FuseChatStartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat-view/chat-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- CHAT -->\n<div class=\"chat\" fxFlex fxLayout=\"column\">\n\n    <!-- CHAT TOOLBAR -->\n    <mat-toolbar class=\"chat-toolbar\">\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <!-- RESPONSIVE CHATS BUTTON-->\n                <div mat-button fxHide.gt-md class=\"responsive-chats-button mat-icon-button mr-16\"\n                     fuseMatSidenavToggler=\"chat-left-sidenav\"\n                     aria-label=\"chats button\">\n                    <mat-icon class=\"s-36\">chat</mat-icon>\n                </div>\n                <!-- / RESPONSIVE CHATS BUTTON-->\n\n                <!-- CHAT CONTACT-->\n                <div class=\"chat-contact\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                     fuseMatSidenavToggler=\"chat-right-sidenav\" (click)=\"selectContact()\">\n\n                    <div class=\"avatar-wrapper\">\n\n                        <img [src]=\"contact.avatar\"\n                             class=\"avatar\"\n                             alt=\"{{contact.name}}\"/>\n\n                        <mat-icon class=\"s-16 status\"\n                                  [ngClass]=\"contact.status\">\n                        </mat-icon>\n                    </div>\n\n                    <div class=\"chat-contact-name\">\n                        {{contact.name}}\n                    </div>\n\n                </div>\n                <!-- / CHAT CONTACT-->\n            </div>\n\n            <div>\n                <button mat-button class=\"mat-icon-button\" [matMenuTriggerFor]=\"contactMenu\"\n                        aria-label=\"more\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #contactMenu=\"matMenu\">\n                    <button mat-menu-item fuseMatSidenavToggler=\"chat-right-sidenav\" (click)=\"selectContact()\">\n                        Contact Info\n                    </button>\n                </mat-menu>\n            </div>\n\n        </div>\n    </mat-toolbar>\n    <!-- / CHAT TOOLBAR -->\n\n    <!-- CHAT CONTENT -->\n    <div id=\"chat-content\" fxFlex fusePerfectScrollbar>\n\n        <!-- CHAT MESSAGES -->\n        <div class=\"chat-messages\">\n\n            <!-- MESSAGE -->\n            <div fxLayout=\"row\" *ngFor=\"let message of dialog\" class=\"message-row\"\n                 [ngClass]=\"{'user' :message.who === user.id}\">\n\n                <img *ngIf=\"message.who === contact.id\"\n                     src=\"{{contact.avatar}}\"\n                     class=\"avatar\"\n                     alt=\"{{contact.name}}\"/>\n\n                <img *ngIf=\"message.who ===user.id\" class=\"avatar\" src=\"{{user.avatar}}\">\n\n                <div class=\"bubble\">\n                    <div class=\"message\">{{message.message}}</div>\n                    <div class=\"time secondary-text\">{{message.time | date:'medium'}}</div>\n                </div>\n\n            </div>\n            <!-- / MESSAGE -->\n\n        </div>\n        <!-- CHAT MESSAGES -->\n\n    </div>\n    <!-- / CHAT CONTENT -->\n\n    <!-- CHAT FOOTER -->\n    <div class=\"chat-footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n        <!-- REPLY FORM -->\n        <form #replyForm=\"ngForm\"\n              (ngSubmit)=\"reply($event)\"\n              (keyup.enter)=\"reply($event)\"\n              fxFlex class=\"reply-form\"\n              fxLayout=\"row\"\n              fxLayoutAlign=\"start center\">\n\n            <mat-form-field class=\"\" fxFlex floatPlaceholder=\"never\">\n                <textarea matInput #replyInput placeholder=\"Type and hit enter to send message\"\n                          ngModel name=\"message\"></textarea>\n            </mat-form-field>\n\n            <button mat-fab class=\"\" type=\"submit\" aria-label=\"Send message\">\n                <mat-icon>send</mat-icon>\n            </button>\n\n        </form>\n        <!-- / REPLY FORM -->\n    </div>\n    <!-- / CHAT FOOTER-->\n</div>\n<!-- / CHAT -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat-view/chat-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8));\n  overflow: hidden;\n  max-width: 100%; }\n  :host .chat .chat-toolbar {\n    min-height: 64px;\n    background-color: #F3F4F5;\n    color: rgba(0, 0, 0, 0.87);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08); }\n    :host .chat .chat-toolbar .responsive-chats-button {\n      padding: 0; }\n    :host .chat .chat-toolbar .chat-contact {\n      cursor: pointer; }\n      :host .chat .chat-toolbar .chat-contact .avatar {\n        margin-right: 16px; }\n  :host .chat #chat-content {\n    background: transparent;\n    overflow: auto; }\n    :host .chat #chat-content .message-row {\n      padding: 16px; }\n      :host .chat #chat-content .message-row .bubble {\n        position: relative;\n        padding: 6px 7px 8px 9px;\n        background-color: #FFF;\n        box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n        border-radius: 6px; }\n        :host .chat #chat-content .message-row .bubble:before {\n          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADGUExURQAAAP////b29vn5+f///wAAAP///wAAAAAAAP///9ra2v////j4+PHx8fv7++Hh4fHx8f////////////////39/QAAAP////////z8/P////39/f39/fz8/P////////////z8/P////////////z8/P////////////v7+/Hx8f///9bW1vz8/K2trf////39/f39/WJiYgAAAExMTFtbWwAAAN3d3cjIyPr6+vX19QAAAO7u7vz8/NTU1Ofn5zMzM////zGPlXsAAABBdFJOUwAcm/kREh4CCDWL1SneR6TfAQffhMYK/A5nRrLWfRc5DW2ih5f+19Kn+9v4g/1LCJuXHwQUKgahcXS6DNnlDMMKKzPoTgAAAKBJREFUKM+V08USwmAQA+C/0NIWd3d3d8/7vxTMcIPkQK7f7CG7s8bQAOY/SCuwFYQU1P+eiCqIK2gpWCmoCrAgoKQgJ8CHgIqAMjg0MxxSQ3DogEMWFBZtUPAHYGB1CyDQWE6AH7BrfXzlAxGAQhECTGAmwN1Okz0Gb/LW4fEItIfrOfNELMh3tck7u+PhcT2zQ7l77/K8iY8yJwV3BeYFqpc/uSyPGdAAAAAASUVORK5CYII=);\n          content: '';\n          position: absolute;\n          left: -11px;\n          bottom: 3px;\n          width: 12px;\n          height: 19px;\n          background-position: 50% 50%;\n          background-repeat: no-repeat;\n          background-size: contain; }\n        :host .chat #chat-content .message-row .bubble .message {\n          white-space: pre-wrap; }\n        :host .chat #chat-content .message-row .bubble .time {\n          font-size: 11px;\n          margin-top: 8px;\n          text-align: right; }\n      :host .chat #chat-content .message-row.contact .avatar {\n        margin: 0 16px 0 0; }\n      :host .chat #chat-content .message-row.user {\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n        :host .chat #chat-content .message-row.user .avatar {\n          -webkit-box-ordinal-group: 3;\n              -ms-flex-order: 2;\n                  order: 2;\n          margin: 0 0 0 16px; }\n        :host .chat #chat-content .message-row.user .bubble {\n          margin-left: auto;\n          background-color: #E8F5E9;\n          border: 1px solid #DFEBE0;\n          -webkit-box-ordinal-group: 2;\n              -ms-flex-order: 1;\n                  order: 1; }\n          :host .chat #chat-content .message-row.user .bubble:before {\n            right: -11px;\n            left: auto;\n            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD2UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRsXAAAANzwzNPmxNrtyau5oIWRedDkwNntyczgwdfpyJ+/n97wzsLWtNjsytvwzczfvtPmxau6nNjqxtrtyio1KtzwzNjryAAAANzwzgAAANzwzK7Aor/Us9Lnw8vevAAAAMzevtbpxrvMrX+IdwAAAEROOi45Lr3MrZGjf9LoxX+MctnqydLkwhgYGMzfv9vuyQAAANzwzNvuy9zxy7vMu7XGqNvtzKKykwAAANruzKq6nLnMriQkGMXXuL3PsNjsySgzKAAAANLkw83fvd3vy9z4xtzwzRpFmIEAAABQdFJOUwAXChEGBAMBAgwhDvJ7k0YqMc0Zmwj6apf2kjU0+dkw/swh/CP9j2Wr2gndvaYeBRoxQg6gUPt/FaHJGdTj9A9k7XQLeE6iFcN12xkSt9r4NKizowAAAMFJREFUKM+V0sdywlAMBVDbMX7PQCihQ+iQ0HsJvfem/P/PwBIzugu0PXNnNNJVyPmhsIPhhoB2COwIGuLdhAcl3AhCBoBoHUC6BCBbA0C/EkBFB5D/FjxQwQYg1RI8UKINgDoSAPUlAPqUAMgfAEBfXsEDBV0+Hogi4Zhg4THj9YwHoqEBYOrgYTI3GVgMNn8r+Qq94k9yZNosW/3Hy9VuTjWfHkOX6367bGZUU7de66ieHZrO1OGg8Z1WTgYAFLgD5S1PCkzo1B0AAAAASUVORK5CYII=); }\n  :host .chat .chat-footer {\n    min-height: 64px;\n    max-height: 96px;\n    background-color: #F3F4F5;\n    color: rgba(0, 0, 0, 0.87);\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    padding: 8px 8px 8px 16px; }\n    :host .chat .chat-footer .reply-form mat-form-field {\n      margin: 0;\n      padding-right: 16px; }\n      :host .chat .chat-footer .reply-form mat-form-field textarea {\n        overflow: auto;\n        max-height: 80px;\n        transition: height 200ms ease; }\n        :host .chat .chat-footer .reply-form mat-form-field textarea.grow {\n          height: 80px; }\n      :host .chat .chat-footer .reply-form mat-form-field .mat-errors-spacer {\n        display: none; }\n    :host .chat .chat-footer .reply-form .mat-button {\n      margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat-view/chat-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseChatViewComponent = (function () {
    function FuseChatViewComponent(chatService) {
        this.chatService = chatService;
    }
    FuseChatViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.chatService.user;
        this.chatService.onChatSelected
            .subscribe(function (chatData) {
            if (chatData) {
                _this.selectedChat = chatData;
                _this.contact = chatData.contact;
                _this.dialog = chatData.dialog;
                _this.readyToReply();
            }
        });
    };
    FuseChatViewComponent.prototype.ngAfterViewInit = function () {
        this.replyInput = this.replyInputField.first.nativeElement;
        this.readyToReply();
    };
    FuseChatViewComponent.prototype.selectContact = function () {
        this.chatService.selectContact(this.contact);
    };
    FuseChatViewComponent.prototype.readyToReply = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyForm.reset();
            _this.focusReplyInput();
            _this.scrollToBottom();
        });
    };
    FuseChatViewComponent.prototype.focusReplyInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyInput.focus();
        });
    };
    FuseChatViewComponent.prototype.scrollToBottom = function (speed) {
        var _this = this;
        speed = speed || 400;
        if (this.directiveScroll) {
            this.directiveScroll.update();
            setTimeout(function () {
                _this.directiveScroll.scrollToBottom(0, speed);
            });
        }
    };
    FuseChatViewComponent.prototype.reply = function (event) {
        var _this = this;
        // Message
        var message = {
            who: this.user.id,
            message: this.replyForm.form.value.message,
            time: new Date().toISOString()
        };
        // Add the message to the chat
        this.dialog.push(message);
        // Update the server
        this.chatService.updateDialog(this.selectedChat.chatId, this.dialog).then(function (response) {
            _this.readyToReply();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */])
    ], FuseChatViewComponent.prototype, "directiveScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('replyInput'),
        __metadata("design:type", Object)
    ], FuseChatViewComponent.prototype, "replyInputField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('replyForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgForm */])
    ], FuseChatViewComponent.prototype, "replyForm", void 0);
    FuseChatViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-view',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/chat-view/chat-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/chat-view/chat-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], FuseChatViewComponent);
    return FuseChatViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chat\" class=\"page-layout carded fullwidth\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <mat-sidenav-container>\n\n                <!-- LEFT SIDENAV -->\n                <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                             fuseMatSidenavHelper=\"chat-left-sidenav\" mat-is-locked-open=\"gt-md\">\n                    <fuse-chat-left-sidenav></fuse-chat-left-sidenav>\n                </mat-sidenav>\n                <!-- / LEFT SIDENAV -->\n\n                <!-- CONTENT -->\n                <fuse-chat-start *ngIf=\"!selectedChat\"></fuse-chat-start>\n\n                <fuse-chat-view *ngIf=\"selectedChat\"></fuse-chat-view>\n                <!-- / CONTENT -->\n\n                <!-- RIGHT SIDENAV -->\n                <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"false\" mode=\"over\"\n                             fuseMatSidenavHelper=\"chat-right-sidenav\">\n                    <fuse-chat-right-sidenav></fuse-chat-right-sidenav>\n                </mat-sidenav>\n                <!-- / RIGHT SIDENAV -->\n\n            </mat-sidenav-container>\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n#chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  #chat .center {\n    padding: 32px !important;\n    max-width: 1400px;\n    margin: 0 auto; }\n    @media (max-width: 1279px) {\n      #chat .center {\n        padding: 0 !important; } }\n    #chat .center .content-card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      position: relative;\n      background: url(\"https://jawlatcom.com/portal/assets/images/patterns/rain-grey.png\") repeat; }\n      #chat .center .content-card .mat-sidenav-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        width: 100%;\n        background: transparent; }\n        #chat .center .content-card .mat-sidenav-container > .mat-sidenav-content,\n        #chat .center .content-card .mat-sidenav-container > .mat-drawer-content {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-flex: 1;\n              -ms-flex: 1 1 auto;\n                  flex: 1 1 auto;\n          min-height: 100%;\n          height: auto; }\n        #chat .center .content-card .mat-sidenav-container > .mat-drawer-content {\n          max-width: 100%; }\n        #chat .center .content-card .mat-sidenav-container mat-sidenav {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          width: 400px;\n          max-width: 90%;\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0.37);\n          overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
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



var FuseChatComponent = (function () {
    function FuseChatComponent(chatService) {
        this.chatService = chatService;
    }
    FuseChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.onChatSelected
            .subscribe(function (chatData) {
            _this.selectedChat = chatData;
        });
    };
    FuseChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/chat.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], FuseChatComponent);
    return FuseChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseChatModule", function() { return FuseChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_view_chat_view_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat-view/chat-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_start_chat_start_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat-start/chat-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidenavs_left_chats_chats_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/chats/chats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidenavs_left_user_user_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidenavs_left_left_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidenavs_right_right_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/right/right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidenavs_right_contact_contact_component__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/right/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__chat_component__["a" /* FuseChatComponent */],
        children: [],
        resolve: {
            chat: __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]
        }
    }
];
var FuseChatModule = (function () {
    function FuseChatModule() {
    }
    FuseChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__chat_component__["a" /* FuseChatComponent */],
                __WEBPACK_IMPORTED_MODULE_5__chat_view_chat_view_component__["a" /* FuseChatViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chat_start_chat_start_component__["a" /* FuseChatStartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidenavs_left_chats_chats_component__["a" /* FuseChatChatsSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sidenavs_left_user_user_component__["a" /* FuseChatUserSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sidenavs_left_left_component__["a" /* FuseChatLeftSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sidenavs_right_right_component__["a" /* FuseChatRightSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sidenavs_right_contact_contact_component__["a" /* FuseChatContactSidenavComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]
            ]
        })
    ], FuseChatModule);
    return FuseChatModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
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





var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
        this.onChatSelected = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.onContactSelected = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.onChatsUpdated = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.onUserUpdated = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.onLeftSidenavViewChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.onRightSidenavViewChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
    }
    /**
     * Get chat
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChat = function (contactId) {
        var _this = this;
        var chatItem = this.user.chatList.find(function (item) {
            return item.contactId === contactId;
        });
        /**
         * Create new chat, if it's not created yet.
         */
        if (!chatItem) {
            this.createNewChat(contactId).then(function (newChats) {
                _this.getChat(contactId);
            });
            return;
        }
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-chats/' + chatItem.id)
                .subscribe(function (response) {
                var chat = response;
                var chatContact = _this.contacts.find(function (contact) {
                    return contact.id === contactId;
                });
                var chatData = {
                    chatId: chat.id,
                    dialog: chat.dialog,
                    contact: chatContact
                };
                _this.onChatSelected.next(__assign({}, chatData));
            }, reject);
        });
    };
    /**
     * Create New Chat
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.createNewChat = function (contactId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contact = _this.contacts.find(function (item) {
                return item.id === contactId;
            });
            var chatId = __WEBPACK_IMPORTED_MODULE_4__core_fuseUtils__["a" /* FuseUtils */].generateGUID();
            var chat = {
                id: chatId,
                dialog: []
            };
            var chatListItem = {
                contactId: contactId,
                id: chatId,
                lastMessageTime: '2017-02-18T10:30:18.931Z',
                name: contact.name,
                unread: null
            };
            /**
             * Add new chat list item to the user's chat list
             */
            _this.user.chatList.push(chatListItem);
            /**
             * Post the created chat
             */
            _this.http.post('api/chat-chats', __assign({}, chat))
                .subscribe(function (response) {
                /**
                 * Post the new the user data
                 */
                _this.http.post('api/chat-user/' + _this.user.id, _this.user)
                    .subscribe(function (newUserData) {
                    /**
                     * Update the user data from server
                     */
                    _this.getUser().then(function (updatedUser) {
                        _this.onUserUpdated.next(updatedUser);
                        resolve(updatedUser);
                    });
                });
            }, reject);
        });
    };
    /**
     * Select Contact
     * @param contact
     */
    ChatService.prototype.selectContact = function (contact) {
        this.onContactSelected.next(contact);
    };
    /**
     * Set user status
     * @param status
     */
    ChatService.prototype.setUserStatus = function (status) {
        this.user.status = status;
    };
    /**
     * Update user data
     * @param userData
     */
    ChatService.prototype.updateUserData = function (userData) {
        var _this = this;
        this.http.post('api/chat-user/' + this.user.id, userData)
            .subscribe(function (response) {
            _this.user = userData;
        });
    };
    /**
     * Update the chat dialog
     * @param chatId
     * @param dialog
     * @returns {Promise<any>}
     */
    ChatService.prototype.updateDialog = function (chatId, dialog) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newData = {
                id: chatId,
                dialog: dialog
            };
            _this.http.post('api/chat-chats/' + chatId, newData)
                .subscribe(function (updatedChat) {
                resolve(updatedChat);
            }, reject);
        });
    };
    /**
     * The Chat App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ChatService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getChats(),
                _this.getUser()
            ]).then(function (_a) {
                var contacts = _a[0], chats = _a[1], user = _a[2];
                _this.contacts = contacts;
                _this.chats = chats;
                _this.user = user;
                resolve();
            }, reject);
        });
    };
    /**
     * Get Contacts
     * @returns {Promise<any>}
     */
    ChatService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-contacts')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get Chats
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-chats')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get User
     * @returns {Promise<any>}
     */
    ChatService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-user')
                .subscribe(function (response) {
                resolve(response[0]);
            }, reject);
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/chats/chats.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"sidenav-header\">\n    <!-- CHATS TOOLBAR -->\n    <mat-toolbar>\n\n        <!-- TOOLBAR TOP -->\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <!-- USER AVATAR WRAPPER -->\n            <div class=\"avatar-wrapper\">\n\n                <!-- USER AVATAR -->\n                <img (click)=\"changeLeftSidenavView('user')\"\n                     src=\"{{user.avatar}}\"\n                     class=\"mat-avatar avatar\"\n                     alt=\"{{user.name}}\"/>\n                <!-- / USER AVATAR -->\n\n                <mat-icon class=\"s-16 status\" [ngClass]=\"user.status\"\n                          [matMenuTriggerFor]=\"userStatusMenu\"></mat-icon>\n\n                <!-- USER STATUS -->\n                <mat-menu id=\"user-status-menu\" #userStatusMenu=\"matMenu\">\n\n                    <button mat-menu-item (click)=\"setUserStatus('online')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status online\"></mat-icon>\n                            <span>Online</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"setUserStatus('away')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status away\"></mat-icon>\n                            <span>Away</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"setUserStatus('do-not-disturb')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status do-not-disturb\"></mat-icon>\n                            <span>Do not disturb</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"setUserStatus('offline')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status offline\"></mat-icon>\n                            <span>Offline</span>\n                        </div>\n                    </button>\n                </mat-menu>\n                <!-- / USER STATUS -->\n\n            </div>\n            <!-- / USER AVATAR -->\n\n            <div>\n                <button mat-button class=\"mat-icon-button\"\n                        [matMenuTriggerFor]=\"userMenu\"\n                        aria-label=\"more\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #userMenu=\"matMenu\">\n                    <button mat-menu-item (click)=\"changeLeftSidenavView('user')\">\n                        Profile\n                    </button>\n                    <button mat-menu-item (click)=\"logout()\">\n                        Logout\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR TOP -->\n\n        <!-- TOOLBAR BOTTOM -->\n        <mat-toolbar-row>\n\n            <!-- SEARCH -->\n            <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"search\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <mat-icon>search</mat-icon>\n\n                    <input [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search or start new chat\" fxFlex>\n\n                </div>\n            </div>\n            <!-- / SEARCH -->\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR BOTTOM -->\n\n    </mat-toolbar>\n    <!-- / CHATS TOOLBAR -->\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"sidenav-content\" fusePerfectScrollbar fxFlex>\n\n    <!-- CHATS CONTENT -->\n    <div *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n\n        <!-- CHATS LIST-->\n        <div class=\"chat-list\" fxLayout=\"column\">\n\n            <div matSubheader *ngIf=\"(user.chatList | filter: searchText).length > 0\">\n                Chats\n            </div>\n\n            <button mat-button class=\"contact\"\n                    *ngFor=\"let chat of user.chatList | filter: searchText\"\n                    (click)=\"getChat(chat.contactId)\" ngClass=\"{'unread':contact.unread}\"\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\" fxLayoutAlign=\"center center\">\n                        <img [src]=\"contacts |getById:chat.contactId:'avatar'\"\n                             class=\"avatar\"\n                             alt=\"{{contacts |getById:chat.contactId:'name'}}\"/>\n                        <mat-icon class=\"s-16 status\" [ngClass]=\"contacts |getById:chat.contactId:'status'\"></mat-icon>\n                    </div>\n\n                    <div fxLayout=\"row\" fxFlex>\n\n                        <div class=\"\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                            <div class=\"contact-name\">{{contacts |getById:chat.contactId:'name'}}</div>\n                        </div>\n\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center end\">\n                            <div class=\"contact-last-message-time\">\n                                {{chat.lastMessageTime | date}}\n                            </div>\n                            <div *ngIf=\"chat.unread\" class=\"unread-message-count\">{{chat.unread}}</div>\n                        </div>\n                    </div>\n                </div>\n            </button>\n\n        </div>\n        <!-- / CHATS LIST-->\n\n        <!-- CONTACTS LIST-->\n        <div class=\"contact-list\" fxLayout=\"column\">\n\n            <div matSubheader *ngIf=\"(contacts| filter: searchText).length > 0\">\n                Contacts\n            </div>\n\n            <button mat-button class=\"contact\"\n                    *ngFor=\"let contact of contacts| filter: searchText\"\n                    (click)=\"getChat(contact.id)\"\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\">\n                        <img src=\"{{contact.avatar}}\" class=\"mat-avatar avatar\" alt=\"{{contact.name}}\"/>\n                        <mat-icon class=\"s-16 status\" [ngClass]=\"contact.status\"></mat-icon>\n                    </div>\n\n                    <div class=\"\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                        <div class=\"contact-name\">{{contact.name}}</div>\n                        <p class=\"contact-mood\">{{contact.mood}}</p>\n                    </div>\n                </div>\n            </button>\n        </div>\n        <!-- / CONTACTS LIST-->\n\n        <!-- NO RESULTS MESSAGE -->\n        <div *ngIf=\"(contacts| filter: searchText).length === 0\" class=\"no-results-message\">\n            No results..\n        </div>\n        <!-- NO RESULTS MESSAGE-->\n\n    </div>\n    <!-- / CHATS CONTENT -->\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/chats/chats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host .sidenav-header mat-toolbar {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08); }\n    :host .sidenav-header mat-toolbar .avatar-wrapper .avatar, :host .sidenav-header mat-toolbar .avatar-wrapper .status {\n      cursor: pointer; }\n    :host .sidenav-header mat-toolbar .search {\n      height: 36px;\n      line-height: 36px;\n      padding: 8px;\n      background: #FFFFFF;\n      font-size: 13px;\n      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n      :host .sidenav-header mat-toolbar .search .icon {\n        margin: 0;\n        color: rgba(0, 0, 0, 0.54); }\n      :host .sidenav-header mat-toolbar .search input {\n        padding-left: 12px;\n        height: 36px;\n        color: rgba(0, 0, 0, 0.54);\n        border: none; }\n  :host .sidenav-content {\n    overflow: auto; }\n    :host .sidenav-content .contact-list .mat-subheader, :host .sidenav-content .chat-list .mat-subheader {\n      padding-left: 16px;\n      font-size: 20px;\n      font-weight: 300;\n      height: 88px;\n      line-height: 88px;\n      color: #039be5; }\n    :host .sidenav-content .contact-list .contact, :host .sidenav-content .chat-list .contact {\n      white-space: normal;\n      text-align: left;\n      letter-spacing: .010em;\n      min-height: 88px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 16px;\n      font-weight: 400; }\n      :host .sidenav-content .contact-list .contact .avatar-wrapper .avatar, :host .sidenav-content .chat-list .contact .avatar-wrapper .avatar {\n        margin-right: 16px; }\n      :host .sidenav-content .contact-list .contact .contact-name, :host .sidenav-content .chat-list .contact .contact-name {\n        font-size: 16px;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      :host .sidenav-content .contact-list .contact .contact-last-message, :host .sidenav-content .chat-list .contact .contact-last-message {\n        line-height: 1.6em;\n        margin: 0;\n        font-weight: 500;\n        color: rgba(0, 0, 0, 0.54); }\n      :host .sidenav-content .contact-list .contact .contact-mood, :host .sidenav-content .chat-list .contact .contact-mood {\n        line-height: normal;\n        margin-top: 0; }\n      :host .sidenav-content .contact-list .contact .unread-message-count, :host .sidenav-content .chat-list .contact .unread-message-count {\n        border-radius: 50%;\n        text-align: center;\n        width: 24px;\n        height: 24px;\n        line-height: 24px;\n        background-color: #039be5;\n        color: white; }\n    :host .sidenav-content .no-results-message {\n      position: absolute;\n      width: 100%;\n      height: 88px;\n      padding: 16px;\n      background: #FFFFFF;\n      font-size: 15px;\n      font-weight: 400; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/chats/chats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatChatsSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_service__ = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseChatChatsSidenavComponent = (function () {
    function FuseChatChatsSidenavComponent(chatService, fuseMatSidenavService, media) {
        this.chatService = chatService;
        this.fuseMatSidenavService = fuseMatSidenavService;
        this.media = media;
        this.searchText = '';
        this.chatSearch = {
            name: ''
        };
    }
    FuseChatChatsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.chatService.user;
        this.chats = this.chatService.chats;
        this.contacts = this.chatService.contacts;
        this.chatService.onChatsUpdated.subscribe(function (updatedChats) {
            _this.chats = updatedChats;
        });
        this.chatService.onUserUpdated.subscribe(function (updatedUser) {
            _this.user = updatedUser;
        });
    };
    FuseChatChatsSidenavComponent.prototype.getChat = function (contact) {
        this.chatService.getChat(contact);
        if (!this.media.isActive('gt-md')) {
            this.fuseMatSidenavService.getSidenav('chat-left-sidenav').toggle();
        }
    };
    FuseChatChatsSidenavComponent.prototype.setUserStatus = function (status) {
        this.chatService.setUserStatus(status);
    };
    FuseChatChatsSidenavComponent.prototype.changeLeftSidenavView = function (view) {
        this.chatService.onLeftSidenavViewChanged.next(view);
    };
    FuseChatChatsSidenavComponent.prototype.logout = function () {
        console.log('logout triggered');
    };
    FuseChatChatsSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-chats-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/chats/chats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/chats/chats.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4__core_directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_service__["a" /* FuseMatSidenavHelperService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]])
    ], FuseChatChatsSidenavComponent);
    return FuseChatChatsSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/left.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\">\n    <fuse-chat-chats-sidenav class=\"view\"\n                             *ngSwitchCase=\"'chats'\"\n                             [@slideInRight]>\n    </fuse-chat-chats-sidenav>\n\n    <fuse-chat-user-sidenav class=\"view\"\n                            *ngSwitchCase=\"'user'\"\n                            [@slideInLeft]>\n    </fuse-chat-user-sidenav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/left.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%; }\n    :host .views .view {\n      position: absolute;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatLeftSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseChatLeftSidenavComponent = (function () {
    function FuseChatLeftSidenavComponent(chatService) {
        this.chatService = chatService;
        this.view = 'chats';
    }
    FuseChatLeftSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.onLeftSidenavViewChanged.subscribe(function (view) {
            _this.view = view;
        });
    };
    FuseChatLeftSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-left-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/left.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/left.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]])
    ], FuseChatLeftSidenavComponent);
    return FuseChatLeftSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"sidenav-header\">\n\n    <!-- USER TOOLBAR -->\n    <mat-toolbar>\n\n        <!-- TOOLBAR TOP -->\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"changeLeftSidenavView('chats')\" aria-label=\"back\">\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR TOP -->\n\n        <!-- TOOLBAR BOTTOM -->\n        <mat-toolbar-row class=\"toolbar-bottom\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n            <img [src]=\"user.avatar\" class=\"avatar user-avatar huge\" alt=\"{{user.name}}\"/>\n            <div class=\"user-name my-8\">{{user.name}}</div>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR BOTTOM -->\n\n    </mat-toolbar>\n    <!-- / USER TOOLBAR -->\n</div>\n\n<!-- SIDENAV CONTENT -->\n<div class=\"sidenav-content p-16\" fusePerfectScrollbar fxFlex>\n\n    <!-- USER MOOD -->\n    <mat-card>\n\n        <form [formGroup]=\"userForm\" fxLayout=\"column\">\n\n            <mat-form-field class=\"mb-24\" fxFlex=\"0 1 auto\">\n                <textarea matInput placeholder=\"Mood\" name=\"mood\"\n                          formControlName=\"mood\" rows=\"3\"></textarea>\n            </mat-form-field>\n\n            <mat-radio-group formControlName=\"status\" fxLayout=\"column\">\n\n                <mat-radio-button value=\"online\" class=\"py-8\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"status online mr-8\"></mat-icon>\n                        <span class=\"mat-h4 m-0\">Online</span>\n                    </div>\n                </mat-radio-button>\n\n                <mat-radio-button value=\"away\" class=\"py-8\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"status away mr-8\"></mat-icon>\n                        <span class=\"mat-h4 m-0\">Away</span>\n                    </div>\n                </mat-radio-button>\n\n                <mat-radio-button value=\"do-not-disturb\" class=\"py-8\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"status do-not-disturb mr-8\"></mat-icon>\n                        <span class=\"mat-h4 m-0\">Do not disturb</span>\n                    </div>\n                </mat-radio-button>\n\n                <mat-radio-button value=\"offline\" class=\"py-8\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"status offline mr-8\"></mat-icon>\n                        <span class=\"mat-h4 m-0\">Offline</span>\n                    </div>\n                </mat-radio-button>\n            </mat-radio-group>\n\n        </form>\n    </mat-card>\n    <!-- / USER MOOD -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host mat-toolbar {\n    background-color: #039be5;\n    color: white; }\n    :host mat-toolbar .toolbar-bottom {\n      height: 240px; }\n      @media (max-width: 1279px) {\n        :host mat-toolbar .toolbar-bottom {\n          height: 180px; } }\n  :host .sidenav-content {\n    background: whitesmoke; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/left/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatUserSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseChatUserSidenavComponent = (function () {
    function FuseChatUserSidenavComponent(chatService) {
        this.chatService = chatService;
        this.user = this.chatService.user;
        this.userForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            mood: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.user.mood),
            status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.user.status)
        });
    }
    FuseChatUserSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onFormChange = this.userForm.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (data) {
            _this.user.mood = data.mood;
            _this.user.status = data.status;
            _this.chatService.updateUserData(_this.user);
        });
    };
    FuseChatUserSidenavComponent.prototype.changeLeftSidenavView = function (view) {
        this.chatService.onLeftSidenavViewChanged.next(view);
    };
    FuseChatUserSidenavComponent.prototype.ngOnDestroy = function () {
        this.onFormChange.unsubscribe();
    };
    FuseChatUserSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-user-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/left/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], FuseChatUserSidenavComponent);
    return FuseChatUserSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/right/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"sidenav-header\" *ngIf=\"contact\">\n\n    <!-- CONTACT TOOLBAR -->\n    <mat-toolbar>\n\n        <!-- TOOLBAR TOP -->\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <div>Contact Info</div>\n\n            <button mat-button class=\"mat-icon-button\" fuseMatSidenavToggler=\"chat-right-sidenav\" aria-label=\"close\">\n                <mat-icon>close</mat-icon>\n            </button>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR TOP -->\n\n        <!-- TOOLBAR BOTTOM -->\n        <mat-toolbar-row class=\"toolbar-bottom\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n            <img [src]=\"contact.avatar\" class=\"avatar contact-avatar huge\" alt=\"{{contact.name}}\"/>\n\n            <div class=\"contact-name my-8\">{{contact.name}}</div>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR BOTTOM -->\n\n    </mat-toolbar>\n    <!-- / CONTACT TOOLBAR -->\n</div>\n\n<!-- SIDENAV CONTENT -->\n<div class=\"sidenav-content p-16\" fusePerfectScrollbar fxFlex *ngIf=\"contact\">\n\n    <!-- CONTACT MOOD -->\n    <mat-card>\n\n        <mat-form-field fxFlex>\n            <textarea matInput placeholder=\"Mood\" name=\"mood\"\n                      [value]=\"contact.mood\" rows=\"3\" disabled>\n            </textarea>\n        </mat-form-field>\n\n    </mat-card>\n    <!-- / CONTACT MOOD -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/right/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host mat-toolbar {\n    background-color: #039be5;\n    color: white; }\n    :host mat-toolbar .toolbar-bottom {\n      height: 240px; }\n      @media (max-width: 1279px) {\n        :host mat-toolbar .toolbar-bottom {\n          height: 180px; } }\n  :host .sidenav-content {\n    background: whitesmoke; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/right/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatContactSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseChatContactSidenavComponent = (function () {
    function FuseChatContactSidenavComponent(chatService) {
        this.chatService = chatService;
    }
    FuseChatContactSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.onContactSelected.subscribe(function (contact) {
            _this.contact = contact;
        });
    };
    FuseChatContactSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-contact-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/right/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/right/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], FuseChatContactSidenavComponent);
    return FuseChatContactSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/right/right.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\">\n\n    <fuse-chat-contact-sidenav class=\"view\"\n                               *ngSwitchCase=\"'contact'\"\n                               [@slideInRight]>\n    </fuse-chat-contact-sidenav>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/right/right.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%; }\n    :host .views .view {\n      position: absolute;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/chat/sidenavs/right/right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseChatRightSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/main/content/apps/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseChatRightSidenavComponent = (function () {
    function FuseChatRightSidenavComponent(chatService) {
        this.chatService = chatService;
        this.view = 'contact';
    }
    FuseChatRightSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.onRightSidenavViewChanged.subscribe(function (view) {
            _this.view = view;
        });
    };
    FuseChatRightSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-chat-right-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/right/right.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/chat/sidenavs/right/right.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]])
    ], FuseChatRightSidenavComponent);
    return FuseChatRightSidenavComponent;
}());



/***/ })

});
//# sourceMappingURL=chat.module.chunk.js.map