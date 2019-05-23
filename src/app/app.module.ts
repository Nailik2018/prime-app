import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaviComponent } from './navi/navi.component';
import { SensorsOverviewModule } from './pages/sensors-overview/sensors-overview.module';

@NgModule({
    declarations: [
        AppComponent,
        NaviComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        BrowserAnimationsModule,
        SensorsOverviewModule,

    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
