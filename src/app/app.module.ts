import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {ComboChartComponent, ComboSeriesVerticalComponent} from './combo-chart'
import {GroupedBarLineChartComponent, GroupedBarLineChartSeriesVerticalComponent} from './grouped-bar-line-chart'

@NgModule({
  declarations: [
    AppComponent,
    ComboChartComponent, 
    ComboSeriesVerticalComponent,
    GroupedBarLineChartComponent,
    GroupedBarLineChartSeriesVerticalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
