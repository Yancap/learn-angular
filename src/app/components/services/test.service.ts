import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  get(){
    return [
      {name: "Yan Gabriel", age: 20 },
      {name: "João", age: 19 },
      {name: "Ana", age: 23 },
      {name: "Jorge", age: 31 },
      {name: "Joaquim", age: 10 },
      {name: "Catarina", age: 20 },
      {name: "Mario", age: 45 }
    ]
  }
}
