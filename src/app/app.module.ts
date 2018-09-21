import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BillingsProcessService } from './service/billings-process.service';
import { MainBillingProcessorComponent } from './main-billing-processor/main-billing-processor.component';

@NgModule({
  declarations: [AppComponent, MainBillingProcessorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [BillingsProcessService],
  bootstrap: [AppComponent],
})
export class AppModule {}
