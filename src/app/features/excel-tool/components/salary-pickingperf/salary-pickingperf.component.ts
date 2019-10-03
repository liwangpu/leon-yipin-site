import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { UploaderBox } from '../../models/uploader-box';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalaryCalcuService } from '../../services/salary-calcu.service';
import { XlsxDownloaderService } from '../../services/xlsx-downloader.service';
import { SingleFileBrowserDirective } from '@app/shared';
import { FormGroupHelper } from '@app/core';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'excel-tool-salary-pickingperf',
  templateUrl: './salary-pickingperf.component.html',
  styleUrls: ['./salary-pickingperf.component.scss']
})
export class SalaryPickingperfComponent extends UploaderBox implements OnInit {

  get monthlyWorkingHoursFileCt() {
    return this.filesCt.find(x => x.name == "monthlyWorkingHoursFile");
  }
  monthlyWorkingHoursForm: FormGroup;
  dailyPerfForm: FormGroup;
  @ViewChildren(SingleFileBrowserDirective) filesCt!: QueryList<SingleFileBrowserDirective>;
  constructor(protected formBuilder: FormBuilder, protected salarySrv: SalaryCalcuService, protected xlsxDownloader: XlsxDownloaderService, protected snackBar: MatSnackBar) {
    super(snackBar);
    let month = new Date().getMonth();
    this.monthlyWorkingHoursForm = this.formBuilder.group({
      _monthlyWorkingHoursFile: ['', [Validators.required]]
      , monthlyWorkingHoursFile: ['', []]
      , month: [month >= 1 ? month : 1, [Validators.required, Validators.min(1), Validators.max(12), Validators.pattern("\\d+")]]
    });

    this.dailyPerfForm = this.formBuilder.group({
      pickingDate: ['', []]
      , paperAmount: [208, [Validators.required]]
      , paperRate: [0.75, [Validators.required]]
      , pickingAmount: [1186, [Validators.required]]
      , pickingRate: [0.25, [Validators.required]]
    });
  }//constructor

  ngOnInit() {
  }//ngOnInit


  uploadMonthlyWorkingHours() {
    let formData = FormGroupHelper.toFormData(this.monthlyWorkingHoursForm);
    formData.append('monthlyWorkingHoursFile', this.monthlyWorkingHoursFileCt.file, this.monthlyWorkingHoursFileCt.file.name);
    this._showProgress();
    this.salarySrv.uploadMonthlyWorkingHours(formData).pipe(tap(this._progressAutomate)).subscribe();
  }//uploadMonthlyWorkingHours

}
