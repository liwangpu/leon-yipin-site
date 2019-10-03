import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRedirectComponent } from './components/home-redirect/home-redirect.component';
import { RouterModule } from '@angular/router';
import { SingleFileInputDirective } from './directives/single-file-input.directive';
import { FileSaverService } from './services/file-saver.service';
import { ProgressReporterComponent } from './components/progress-reporter/progress-reporter.component';
import { SingleFileBrowserDirective } from './directives/single-file-browser.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [HomeRedirectComponent, SingleFileInputDirective, ProgressReporterComponent, SingleFileBrowserDirective],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule
  ],
  providers: [
    FileSaverService
  ],
  exports: [
    HomeRedirectComponent,
    ProgressReporterComponent,
    SingleFileInputDirective,
    SingleFileBrowserDirective
  ]
})
export class SharedModule { }
