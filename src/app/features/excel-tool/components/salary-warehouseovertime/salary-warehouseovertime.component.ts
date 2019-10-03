import { Component, OnInit, ViewChild } from '@angular/core';
import { UploaderBox } from '../../models/uploader-box';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SingleFileBrowserDirective } from '@app/shared';
import { SalaryCalcuService } from '../../services/salary-calcu.service';
import { XlsxDownloaderService } from '../../services/xlsx-downloader.service';
import { FormGroupHelper } from '@app/core';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'excel-tool-salary-warehouseovertime',
  templateUrl: './salary-warehouseovertime.component.html',
  styleUrls: ['./salary-warehouseovertime.component.scss']
})
export class SalaryWarehouseovertimeComponent extends UploaderBox implements OnInit {

  overtimeForm: FormGroup;
  @ViewChild(SingleFileBrowserDirective, { static: true }) signinFileCt: SingleFileBrowserDirective;
  constructor(protected formBuilder: FormBuilder, protected salarySrv: SalaryCalcuService, protected xlsxDownloader: XlsxDownloaderService, protected snackBar: MatSnackBar) {
    super(snackBar);
    let month = new Date().getMonth();
    this.overtimeForm = this.formBuilder.group({
      _signinFile: ['', [Validators.required]]
      , signinFile: ['', []]
      , month: [month >= 1 ? month : 1, [Validators.required, Validators.min(1), Validators.max(12), Validators.pattern("\\d+")]]
    });
  }//constructor

  ngOnInit() {
  }//ngOnInit

  overtimeCalcu() {
    let formData = FormGroupHelper.toFormData(this.overtimeForm);
    formData.append('signinFile', this.signinFileCt.file, this.signinFileCt.file.name);
    this._showProgress();
    this.salarySrv.calcuWarehouseOvertime(formData).pipe(tap(this._progressAutomate)).subscribe(fileName => this.xlsxDownloader.downloadByElsxName(fileName));
  }//overtimeCalcu

}
