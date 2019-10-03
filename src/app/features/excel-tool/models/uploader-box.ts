import { ViewChild } from '@angular/core';
import { ProgressReporterComponent } from '@app/shared';

export class UploaderBox {

    protected _progressAutomate = {
        error: err => {
            if (this._progress) this._progress.hideProgress();
        },
        complete: () => {
            if (this._progress) this._progress.hideProgress();
        }
    };
    @ViewChild(ProgressReporterComponent, { static: true }) _progress: ProgressReporterComponent;
    constructor() {

    }//constructor

    _showProgress() {
        if (this._progress) this._progress.showProgress();
    }//_showProgress

}
