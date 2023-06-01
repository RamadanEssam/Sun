import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjComponent } from './proj/proj.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home Component'},
  {path:'about',component:AboutComponent ,title:'About Component'},
  {path:'projects',component:ProjComponent ,title:'Projects Component', children:[

    {path:'web',component:WebComponent ,title:'Web Component'},
    {path:'mobile',component:MobileComponent ,title:'Mobile Component'},
  ]},
  {path:'contacts',component:ContactsComponent,title:'Contacts Component'},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
