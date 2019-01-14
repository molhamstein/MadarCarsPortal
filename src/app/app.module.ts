import { ConfirmMessageComponent } from './main/dialogs/confirm-message/confirm-message.component';
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
import { editLocationComponent } from './main/content/pages/location/editLocation/editLocation.component';
import { addSubLocationComponent } from './main/content/pages/sublocation/addSubLocation/addSubLocation.component';
import { editSubLocationComponent } from './main/content/pages/sublocation/editSubLocation/editSubLocation.component';
import { driversComponent } from './main/content/pages/driver/drivers/drivers.component';
import { addDriverComponent } from './main/content/pages/driver/addDriver/addDriver.component';
import { editDriverComponent } from './main/content/pages/driver/editDriver/editDriver.component';
import { brandsComponent } from './main/content/pages/brand/brands/brands.component';
import { addBrandComponent } from './main/content/pages/brand/addBrand/addBrand.component';
import { editBrandComponent } from './main/content/pages/brand/editBrand/editBrand.component';
import { carsComponent } from './main/content/pages/car/cars/cars.component';
import { addCarComponent } from './main/content/pages/car/addCar/addCar.component';
import { editCarComponent } from './main/content/pages/car/editCar/editCar.component';
import { usersComponent } from './main/content/pages/user/users/users.component';
import { addUserComponent } from './main/content/pages/user/addUser/addUser.component';
import { editUserComponent } from './main/content/pages/user/editUser/editUser.component';
import { ErrorMessageComponent } from './main/dialogs/error-message/error-message.component';
import { tripsComponent } from './main/content/pages/trip/trips/trips.component';
import { addTripComponent } from './main/content/pages/trip/addTrip/addTrip.component';
import { Angular5TimePickerModule } from 'angular5-time-picker';
import { viewTripComponent } from './main/content/pages/trip/viewTrip/viewTrip.component';

const appRoutes: Routes = [

    {
        path: 'trips',
        component: tripsComponent
    },
    {
        path: 'add-trip',
        component: addTripComponent
    },
    {
        path: 'view-trip/:id',
        component: viewTripComponent
    },
    {
        path: 'cars',
        component: carsComponent
    },
    {
        path: 'add-car',
        component: addCarComponent
    },
    {
        path: 'edit-car/:id',
        component: editCarComponent
    },
    {
        path: 'drivers',
        component: driversComponent
    },
    {
        path: 'add-driver',
        component: addDriverComponent
    },
    {
        path: 'edit-driver/:id',
        component: editDriverComponent
    },
    {
        path: 'brands',
        component: brandsComponent
    },
    {
        path: 'add-brand',
        component: addBrandComponent
    },
    {
        path: 'edit-brand/:id',
        component: editBrandComponent
    },
    {
        path: 'users',
        component: usersComponent
    },
    {
        path: 'add-user',
        component: addUserComponent
    },
    {
        path: 'edit-user/:id',
        component: editUserComponent
    },
    {
        path: 'locations',
        component: locationsComponent
    },
    {
        path: 'add-location',
        component: addLocationComponent
    },
    {
        path: 'edit-location/:id',
        component: editLocationComponent
    },
    {
        path: 'add-sublocation/:id',
        component: addSubLocationComponent
    },
    {
        path: 'edit-sublocation/:id',
        component: editSubLocationComponent
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
        redirectTo: 'users'
    }
];

@NgModule({
    declarations: [
        AppComponent,

        // pages
        // // Location
        locationsComponent, addLocationComponent, editLocationComponent,
        // // Sub Location
        addSubLocationComponent, editSubLocationComponent,
        // // Drivers
        driversComponent, addDriverComponent, editDriverComponent,
        // // Brands
        brandsComponent, addBrandComponent, editBrandComponent,
        // // Cars
        carsComponent, addCarComponent, editCarComponent,
        // // Users
        usersComponent, addUserComponent, editUserComponent,
        // // Trips
        tripsComponent, addTripComponent, viewTripComponent,
        // dialogs
        SomeThingIsErrorComponent, ConfirmMessageComponent, ErrorMessageComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true }),
        SharedModule,
        MarkdownModule.forRoot(),
        Angular5TimePickerModule,
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
    entryComponents: [SomeThingIsErrorComponent, ConfirmMessageComponent, ErrorMessageComponent],
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
