import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderExtractareaService } from '../../services/order-extractarea.service';
import { SingleFileInputDirective } from '@app/shared';
import { FormGroupHelper } from '@app/core';

@Component({
  selector: 'excel-tool-order-extractarea',
  templateUrl: './order-extractarea.component.html',
  styleUrls: ['./order-extractarea.component.scss']
})
export class OrderExtractareaComponent implements OnInit {

  extractForm: FormGroup;
  @ViewChild(SingleFileInputDirective, { static: true }) orderFileCt: SingleFileInputDirective;
  constructor(protected formBuilder: FormBuilder, protected extractSrv: OrderExtractareaService) {
    this.extractForm = this.formBuilder.group({
      orderFile: ['', [Validators.required]]
      , area: ['', []]
    });
  }//constructor

  ngOnInit() {

  }//ngOnInit

  onSingleAreaExtract() {
    let formData = FormGroupHelper.toFormData(this.extractForm);
    formData.append('orderFile', this.orderFileCt.file, this.orderFileCt.file.name);

    this.extractSrv.extractSingleArea(formData).subscribe(path => {
      console.log(2, path);
    });
  }//onSingleAreaExtract

  onMixtureAreaExtract() {

  }//onMixtureAreaExtract

}
