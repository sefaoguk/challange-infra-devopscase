import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { AllbookComponent } from './allbook/allbook.component' ;
import {AddbookComponent} from './addbook/addbook.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {BookdescriptionComponent} from './bookdescription/bookdescription.component'

const route:Routes=[
  {path:'home',component:AllbookComponent},
  {path:'',component:AllbookComponent},
  {path:'add',component:AddbookComponent},
  {path:'description/:id',component:BookdescriptionComponent},
  {path:'**',component:NotfoundComponent},
]

@NgModule({

  exports:[RouterModule],
  imports: [RouterModule.forRoot(route)]
})
export class AppRoutingModule { }
