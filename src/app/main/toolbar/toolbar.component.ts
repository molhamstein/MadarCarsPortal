import { AppDirectionService } from './../../app-direction.service';
import { DialogService } from './../../core/services/dialog.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx'; // Angular 5

import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { FuseConfigService } from '../../core/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../core/services/main.service';
// import * as $ from "jquery";

@Component({
    selector: 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class FuseToolbarComponent {
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    userName: String;
    notitfications = [];
    unreadNot = 0;
    constructor(
        private router: Router,
        private fuseConfig: FuseConfigService,
        private translate: TranslateService,
        private mainServ: MainService,
        private dialogServ: DialogService,
        private appDirection: AppDirectionService,


    ) {
        this.userName = this.mainServ.loginServ.getuserName()
        this.getNotifications(true)
        Observable.interval(0.5 * 60000).subscribe(x => {
            this.getNotifications();
        });
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us',
                'dir': 'ltr'
            },
            {
                'id': 'ar',
                'title': 'العربية',
                'flag': 'ar',
                'dir': 'rtl'
            }
        ];
        if (this.mainServ.loginServ.getLang() == "ar") {
            this.selectedLanguage = this.languages[1];
            this.appDirection.switchDir(this.selectedLanguage.dir);

        }
        else
            this.selectedLanguage = this.languages[0];


        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

        this.fuseConfig.onSettingsChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
        });

    }

    search(value) {
        // Do your search here...
        console.log(value);
    }


    setLanguage(lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);

        this.appDirection.switchDir(lang.dir);

        this.mainServ.loginServ.setLang(lang.id);

    }

    logout() {
        this.mainServ.loginServ.logout();
    }

    getNotifications(isFirstTime: boolean = false) {
        if (this.mainServ.loginServ.isLogIn) {
            var prevunreadNot = this.unreadNot;
            this.unreadNot = 0;
            var filter = { order: 'createdAt DESC' }
            this.mainServ.APIServ.get("adminNotifications?filter=" + JSON.stringify(filter)).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.notitfications = [];
                    for (let index = data.length - 1; index >= 0; index--) {
                        const element = data[index];
                        if (element.type == "help") {
                            this.translate.get('TEXTNOTIFICATION.HELP').subscribe((res: string) => {
                                element['text'] = element['user']['name'] + " " + res
                            })
                        }
                        if (element.isSeen == false) {
                            this.unreadNot++
                            if (isFirstTime == false && prevunreadNot < this.unreadNot) {
                                var audio = new Audio('https://facebook.design/public/sounds/Notification%201.mp3');
                                audio.play();
                            }
                        }
                        this.notitfications.unshift(element);
                    }

                }
                else if (this.mainServ.APIServ.getErrorCode() != 401) {
                    this.mainServ.APIServ.setErrorCode(0);
                    this.dialogServ.someThingIsError();
                }

            })
        }
    }
    calculatDateAdv(date) {
        return this.mainServ.globalServ.calculatDateAdv(date);
    }

    goToNotification(not) {
        if (not.isSeen == false) {
            this.unreadNot--;
            not.isSeen = true
            this.mainServ.APIServ.patch("adminNotifications/" + not.id, { "isSeen": true }).subscribe((data: any) => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                }
                else if (this.mainServ.APIServ.getErrorCode() != 401) {
                    this.unreadNot++;
                    not.isSeen = false
                    this.mainServ.APIServ.setErrorCode(0);
                    this.dialogServ.someThingIsError();
                }


            })
        }
        // else {
        if (not.type == "help") {
            this.mainServ.globalServ.goTo("edit-user/" + not.userId)
        }
        this.toggleNotification()
        // }
    }

    toggleNotification(duration: number = 1000) {
        var mainduratio = duration
        console.log();
        var element = document.getElementById('listNotification');
        element.classList.toggle("hide");
    }
}
