import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface IUserInformation
{
  img:string;
    id:number;
    username:string;
    rank:string;
    mission:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _route:ActivatedRoute,private _router:Router) { }

    userInformation: IUserInformation[] = [
    {
        img:'https://i.idefix.com/cache/600x600-0/originals/0000000261563-1.jpg',
        id: 10001, 
        username: "PlaneTravel",
        rank:"Gold",
        mission:"Editör",
  
    },
];
ngOnInit(): void {


  
}



}