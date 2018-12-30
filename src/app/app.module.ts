import { LoaderServicesService } from './core/services/loader-services.service';
import { GlobalService } from './core/services/global.service';
import { LoginService } from './core/services/login.service';
import { CallApiService } from './core/services/call-api.service';
import { MainService } from './core/services/main.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { ProjectModule } from './main/content/apps/dashboards/project/project.module';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { FuseMainModule } from './main/main.module';
import { PagesModule } from './main/content/pages/pages.module';
import { UIModule } from './main/content/ui/ui.module';
import { ComponentsModule } from './main/content/components/components.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { ComponentsThirdPartyModule } from './main/content/components-third-party/components-third-party.module';
import { ServicesModule } from './main/content/services/services.module';
import { FuseAngularMaterialModule } from './main/content/components/angular-material/angular-material.module';
import { MarkdownModule } from 'angular2-markdown';
import { TranslateModule } from '@ngx-translate/core';
import { SomeThingIsErrorComponent } from './main/dialogs/some-thing-is-error/some-thing-is-error.component';
import { DialogService } from './core/services/dialog.service';
import { MatDialogModule } from '@angular/material';
import { locationsComponent } from './main/content/pages/location/locations/locations.component';
import { addLocationComponent } from './main/content/pages/location/addLocation/addLocation.component';

const appRoutes: Routes = [
    {
        path: 'locations',
        component: locationsComponent
    },
    {
        path: 'add-location',
        component: addLocationComponent
    },
    {
        path: 'apps/mail',
        loadChildren: './main/content/apps/mail/mail.module#FuseMailModule'
    },
    {
        path: 'apps/chat',
        loadChildren: './main/content/apps/chat/chat.module#FuseChatModule'
    },
    {
        path: 'apps/calendar',
        loadChildren: './main/content/apps/calendar/calendar.module#FuseCalendarModule'
    },
    {
        path: 'apps/e-commerce',
        loadChildren: './main/content/apps/e-commerce/e-commerce.module#FuseEcommerceModule'
    },
    {
        path: 'apps/todo',
        loadChildren: './main/content/apps/todo/todo.module#FuseTodoModule'
    },
    {
        path: 'apps/file-manager',
        loadChildren: './main/content/apps/file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path: 'apps/contacts',
        loadChildren: './main/content/apps/contacts/contacts.module#FuseContactsModule'
    },
    {
        path: 'apps/scrumboard',
        loadChildren: './main/content/apps/scrumboard/scrumboard.module#FuseScrumboardModule'
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/project'
    }
];

@NgModule({
    declarations: [
        AppComponent, 

        // pages
        // // Location
        locationsComponent,addLocationComponent,
        // dialogs
        SomeThingIsErrorComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        MarkdownModule.forRoot(),
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        FuseMainModule,
        ProjectModule,
        PagesModule,
        UIModule,
        ServicesModule,
        ComponentsModule,
        FuseAngularMaterialModule,
        ComponentsThirdPartyModule,
        TranslateModule.forRoot(),
        MatDialogModule


    ],
    entryComponents: [SomeThingIsErrorComponent],
    providers: [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        MainService,
        LoaderServicesService,
        CallApiService,
        LoginService,
        GlobalService,
        DialogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
