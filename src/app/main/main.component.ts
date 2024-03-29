import { FuseTranslationLoaderService } from './../core/services/translation-loader.service';
import { Component, ElementRef, HostBinding, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FuseConfigService } from '../core/services/config.service';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { locale as english } from './languageFiles/en';
import { locale as arabic } from './languageFiles/ar';
import { MainService } from '../core/services/main.service';

@Component({
    selector: 'fuse-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnInit, OnDestroy {
    onSettingsChanged: Subscription;
    fuseSettings: any;
    @HostBinding('attr.fuse-layout-mode') layoutMode;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private fuseConfig: FuseConfigService,
        private mainServ:MainService,
        private platform: Platform,
        private translationLoader: FuseTranslationLoaderService,

        @Inject(DOCUMENT) private document: any
    ) {
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.fuseSettings = newSettings;
                        this.layoutMode = this.fuseSettings.layout.mode;
                    }
                );

        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
        this.translationLoader.loadTranslations(english,arabic);
    }

    ngOnInit() {
    }

    isEnLang() {
        if (this.mainServ.loginServ.getLang() == "ar")
          return false
        else
          return true
      }
    
    ngOnDestroy() {
        this.onSettingsChanged.unsubscribe();
    }

    addClass(className: string) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
