import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

import { User } from '../user';
import { NewsService } from '../news.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit ,OnDestroy {
aboutNews:any=[];
errorMessage:string='';
subescription:Subscription =new Subscription();
constructor(private _NewsService:NewsService ) {

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.subescription = this._NewsService.getNews().subscribe({
// بتاخد الفنكشن  الي عاوزها تحصل لما الداتا تيجي
  next:(response)=> this.aboutNews=response.articles,
  error:(error)=> this.errorMessage=error.message,
    complete:()=> console.log("complete")

 });

}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.subescription.unsubscribe();

}
}
