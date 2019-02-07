import { Subscription } from 'rxjs/Subscription';
import { Direction } from '@angular/cdk/bidi';
import { AppDirectionService } from './app-direction.service';
import { Component } from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from './core/services/main.service';

@Component({
    selector: 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appDirection: Direction;

    private _dirChangeSubscription = Subscription.EMPTY;


    constructor(
        private fuseSplashScreen: FuseSplashScreenService,
        private dir: AppDirectionService,
        private translate: TranslateService,
        private mainSer: MainService
    ) {
        this.appDirection = dir.getDir();

        this._dirChangeSubscription = dir.change.subscribe(() => {
            // this.flipDirection();
            // 
            // this.appDirection = dir.value;
            this.appDirection = dir.getDir();
            console.log('dir changed');
        });


        // Add languages
        this.translate.addLangs(['en', 'ar']);

        // Set the default language
        this.translate.setDefaultLang('en');

        var lang = ""
        lang = this.mainSer.loginServ.getLang();
        if (lang == null || lang == "")
            this.translate.use('en');
        else
            this.translate.use(lang);

        // Use a language
    }
}
