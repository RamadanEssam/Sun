import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../user';

interface user {
  name: string;
  age: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit ,OnChanges,OnDestroy{
  constructor() {

    console.log("Home Conestructor")
  }
  ngOnInit(): void {
    console.log(" ngOnInit")

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")

  }
ngOnDestroy(): void {
    console.log("ngOnDestroy home componant")
}

   // one way binding
   userName: string = 'Ramadan Essam';
   // الصح هنا اني اعملها interface
   user: user = { name: 'Ramadan Interface', age: 25 };
   imgSource: string = '../../assets/images/photo1.jpeg';
   // style & class Binding
   @Input() productPrice: number = 1200;

   hello() {
     alert('hello Ramadan');
   }
   users: User[] = [
     {
       name: 'Ramadan',
       age: 5,
       gender: 'male',
       salary: 3500,
     },
     {
       name: 'syed',
       age: 22,
       gender: 'male',
       salary: 210,
     },
     {
       name: 'ahmed',
       age: 32,
       gender: 'male',
       salary: 452,
     },
   ];

}
