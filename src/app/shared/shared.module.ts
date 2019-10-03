import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRedirectComponent } from './components/home-redirect/home-redirect.component';
import { RouterModule } from '@angular/router';
import { SingleFileInputDirective } from './directives/single-file-input.directive';



@NgModule({
  declarations: [HomeRedirectComponent, SingleFileInputDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeRedirectComponent,
    SingleFileInputDirective
  ]
})
export class SharedModule { }
