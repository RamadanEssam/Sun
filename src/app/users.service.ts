import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  // معناها كدا انه شير علي مستوي الابليكشن كله
  providedIn: 'root'
// مرتبطه ب lezyloding
 // providedIn: 'any'
})
export class UsersService {

  constructor() { }

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

    {
      name: 'sara',
      age: 32,
      gender: 'femail',
      salary: 566,
    },
    {
      name: 'asmaa',
      age: 65,
      gender: 'female',
      salary: 96456,
    },
  ];
  hello():void{
    console.log("hello servise user")
  }
}
