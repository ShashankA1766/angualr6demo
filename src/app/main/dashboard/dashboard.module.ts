
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../../shared';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
    ],
})

export class DashboardModule{
}
