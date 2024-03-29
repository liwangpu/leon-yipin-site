import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderExtractareaService } from '../../services/order-extractarea.service';
import { SingleFileBrowserDirective } from '@app/shared';
import { FormGroupHelper } from '@app/core';
import { XlsxDownloaderService } from '../../services/xlsx-downloader.service';
import { UploaderBox } from '../../models/uploader-box';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'excel-tool-order-extractarea',
  templateUrl: './order-extractarea.component.html',
  styleUrls: ['./order-extractarea.component.scss']
})
export class OrderExtractareaComponent extends UploaderBox implements OnInit {

  extractForm: FormGroup;
  @ViewChild(SingleFileBrowserDirective, { static: true }) orderFileCt: SingleFileBrowserDirective;
  constructor(protected formBuilder: FormBuilder, protected extractSrv: OrderExtractareaService, protected xlsxDownloader: XlsxDownloaderService,protected snackBar: MatSnackBar) {
    super(snackBar);
    this.extractForm = this.formBuilder.group({
      _orderFile: ['', [Validators.required]]
      , orderFile: ['']
      , area: ['', []]
    });
  }//constructor

  ngOnInit() {

  }//ngOnInit

  prepareFormData() {
    let formData = FormGroupHelper.toFormData(this.extractForm);
    formData.append('orderFile', this.orderFileCt.file, this.orderFileCt.file.name);
    return formData;
  }//prepareFormData

  extractFormReset() {
    this.extractForm.reset();
    this.orderFileCt.reset();
  }//extractFormReset

  onSingleAreaExtract() {
    this._showProgress();

    this.extractSrv.extractSingleArea(this.prepareFormData()).pipe(tap(this._progressAutomate)).subscribe(fileName => this.xlsxDownloader.downloadByElsxName(fileName));
  }//onSingleAreaExtract

  onMixtureAreaExtract() {
    this._showProgress();
    this.extractSrv.extractMixtureArea(this.prepareFormData()).pipe(tap(this._progressAutomate)).subscribe(fileName => this.xlsxDownloader.downloadByElsxName(fileName));
  }//onMixtureAreaExtract

}
