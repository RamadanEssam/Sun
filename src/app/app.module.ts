import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjComponent } from './proj/proj.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactsComponent,
    HomeComponent,
    AboutComponent,
    ProjComponent,
    NotfoundComponent,
    WebComponent,
    MobileComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // عشان المديول بتاعي بيعتمد علي مديول تاني
    // دي اول خطوه
    FormsModule,
    // دي اول خطوه عشان اتعامل مع ال API
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
