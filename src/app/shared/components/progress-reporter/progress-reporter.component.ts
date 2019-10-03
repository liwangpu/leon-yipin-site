import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-progress-reporter',
  templateUrl: './progress-reporter.component.html',
  styleUrls: ['./progress-reporter.component.scss']
})
export class ProgressReporterComponent implements OnInit {

  _showProgress = false;
  constructor() { }

  ngOnInit() {
  }

  showProgress() {
    this._showProgress = true;
  }//showProgress

  hideProgress() {
    this._showProgress = false;
  }//hideProgress

}
