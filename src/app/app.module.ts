import { AddVacationComponent } from './main/dialogs/add-vacation/add-vacation.component';
import { AppDirectionService } from './app-direction.service';
import { MyResetPasswordComponent } from './main/dialogs/my-reset-password/my-reset-password.component';
import { AuthGuardService } from './core/services/auth-guard-service.service';
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
import { predefindTripsComponent } from './main/content/pages/predefindTrip/predefindTrips/predefindTrips.component';
import { addPredefindTripComponent } from './main/content/pages/predefindTrip/addPredefindTrip/addPredefindTrip.component';
import { editPredefindTripComponent } from './main/content/pages/predefindTrip/editPredefindTrip/editPredefindTrip.component';
import { billComponent } from './main/content/pages/trip/bill/bill.component';
import { adminsComponent } from './main/content/pages/admin/admin/admins.component';
import { addAdminComponent } from './main/content/pages/admin/addAdmin/addAdmin.component';
import { editTripComponent } from './main/content/pages/trip/editTrip/editTrip.component';
import { TimeComponent } from './main/dialogs/time/time.component';
import { editAdminComponent } from './main/content/pages/admin/editAdmin/editAdmin.component';
import { ratesComponent } from './main/content/pages/rate/rates/rates.component';
import { MakeRateComponent } from './main/dialogs/make-rate/make-rate.component';
import { agenciesComponent } from './main/content/pages/agency/agency/agencies.component';
import { addAgencyComponent } from './main/content/pages/agency/addAgency/addAgency.component';
import { editAgencyComponent } from './main/content/pages/agency/editAgency/editAgency.component';
import { FilterComponent } from './main/dialogs/filter/filter.component';



const appRoutes: Routes = [

    {
        path: 'agency',
        component: agenciesComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-agency',
        component: addAgencyComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-agency/:id',
        component: editAgencyComponent,
        canActivate: [AuthGuardService]

    },


    {
        path: 'rate',
        component: ratesComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'predefineds',
        component: predefindTripsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-predefined',
        component: addPredefindTripComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-predefined/:id',
        component: editPredefindTripComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'trips',
        component: tripsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'bill/:id',
        component: billComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-trip',
        component: addTripComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-trip/:id',
        component: editTripComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'view-trip/:id',
        component: viewTripComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'cars',
        component: carsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-car',
        component: addCarComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-car/:id',
        component: editCarComponent,
        canActivate: [AuthGuardService]

    },

    {
        path: 'admins',
        component: adminsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-admin',
        component: addAdminComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-admin/:id',
        component: editAdminComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'drivers',
        component: driversComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-driver',
        component: addDriverComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-driver/:id',
        component: editDriverComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'brands',
        component: brandsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-brand',
        component: addBrandComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-brand/:id',
        component: editBrandComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'users',
        component: usersComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-user',
        component: addUserComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-user/:id',
        component: editUserComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'locations',
        component: locationsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-location',
        component: addLocationComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-location/:id',
        component: editLocationComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'add-sublocation/:id',
        component: addSubLocationComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'edit-sublocation/:id',
        component: editSubLocationComponent,
        canActivate: [AuthGuardService]

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
        tripsComponent, addTripComponent, viewTripComponent, billComponent, editTripComponent,
        // // Predefind Trips
        predefindTripsComponent, addPredefindTripComponent, editPredefindTripComponent,
        // // Admins
        adminsComponent, addAdminComponent, editAdminComponent,
        // // Rates
        ratesComponent,
        // // Agency
        agenciesComponent, addAgencyComponent, editAgencyComponent,

        // dialogs
        SomeThingIsErrorComponent, FilterComponent, AddVacationComponent, MakeRateComponent, ConfirmMessageComponent, ErrorMessageComponent, MyResetPasswordComponent, TimeComponent
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
    entryComponents: [SomeThingIsErrorComponent, FilterComponent, AddVacationComponent, MakeRateComponent, TimeComponent, ConfirmMessageComponent, ErrorMessageComponent, MyResetPasswordComponent],
    providers: [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        MainService,
        AppDirectionService,
        LoaderServicesService,
        CallApiService,
        LoginService,
        GlobalService,
        AuthGuardService,
        DialogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
