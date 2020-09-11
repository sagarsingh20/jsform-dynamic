import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LognComponent } from './logn/logn.component';


const routes: Routes = [{
  path:'logn', component: LognComponent
},
{
  path:'', component:LognComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
