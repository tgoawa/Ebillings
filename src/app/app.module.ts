import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BillingsProcessService } from './service/billings-process.service';
import { MainBillingProcessorComponent } from './main-billing-processor/main-billing-processor.component';
import { HeaderComponent } from './header/header.component';
import { BillingsCountComponent } from './main-billing-processor/billings-count/billings-count.component';
import { BillingAccountComponent } from './main-billing-processor/billing-account/billing-account.component';

@NgModule({
  declarations: [AppComponent, MainBillingProcessorComponent, HeaderComponent, BillingsCountComponent, BillingAccountComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [BillingsProcessService],
  bootstrap: [AppComponent],
})
export class AppModule {}
