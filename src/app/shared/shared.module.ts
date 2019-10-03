import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRedirectComponent } from './components/home-redirect/home-redirect.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeRedirectComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeRedirectComponent
  ]
})
export class SharedModule { }
