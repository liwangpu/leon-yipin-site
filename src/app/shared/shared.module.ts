import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRedirectComponent } from './components/home-redirect/home-redirect.component';
import { RouterModule } from '@angular/router';
import { SingleFileInputDirective } from './directives/single-file-input.directive';
import { FileSaverService } from './services/file-saver.service';
import { ProgressReporterComponent } from './components/progress-reporter/progress-reporter.component';



@NgModule({
  declarations: [HomeRedirectComponent, SingleFileInputDirective, ProgressReporterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    FileSaverService
  ],
  exports: [
    HomeRedirectComponent,
    ProgressReporterComponent,
    SingleFileInputDirective
  ]
})
export class SharedModule { }
