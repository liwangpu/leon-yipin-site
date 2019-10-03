import { ViewChild } from '@angular/core';
import { ProgressReporterComponent } from '@app/shared';
import { MatSnackBar } from '@angular/material/snack-bar';

export class UploaderBox {

    protected _progressAutomate = {
        error: err => {
            if (this._progress) this._progress.hideProgress();
            this.snackBar.open(`操作异常：请检查是否选中相应的表格文件，如果确认无误，请告知管理员检查异常。`, null, { duration: 5000 });
        },
        complete: () => {
            if (this._progress) this._progress.hideProgress();
            this.snackBar.open("操作成功!");
        }
    };
    @ViewChild(ProgressReporterComponent, { static: true }) _progress: ProgressReporterComponent;
    constructor(protected snackBar: MatSnackBar) {

    }//constructor

    _showProgress() {
        if (this._progress) this._progress.showProgress();
    }//_showProgress

}
