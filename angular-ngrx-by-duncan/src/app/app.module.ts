import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {MaterialModule} from '@angular/material'


import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyService } from './company/company.service';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './reducers/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effects/company.effects';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CompanyTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    // MaterialModule,
    StoreModule.forRoot({companies:companyReducer}),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
