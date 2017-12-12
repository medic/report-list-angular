import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportService } from './report.service';
import { DatesComponent } from './dates/dates.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    DatesComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [ReportService]
})
export class AppModule { }
