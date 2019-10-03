import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderExtractareaService } from '../../services/order-extractarea.service';

@Component({
  selector: 'excel-tool-order-extractarea',
  templateUrl: './order-extractarea.component.html',
  styleUrls: ['./order-extractarea.component.scss']
})
export class OrderExtractareaComponent implements OnInit {

  extractForm: FormGroup;
  constructor(protected formBuilder: FormBuilder, protected extractSrv: OrderExtractareaService) {
    this.extractForm = this.formBuilder.group({
      orderFile: ['', [Validators.required]]
      , area: ['', []]
    });
  }//constructor

  ngOnInit() {

  }//ngOnInit

  onSingleAreaExtract() {
    console.log(1, this.extractForm.value);

    this.extractSrv.extractSingleArea(this.extractForm.value).subscribe(path => {
      console.log(2, path);
    });
  }//onSingleAreaExtract

  onMixtureAreaExtract() {

  }//onMixtureAreaExtract

}
