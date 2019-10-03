import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'excel-tool-order-extractarea',
  templateUrl: './order-extractarea.component.html',
  styleUrls: ['./order-extractarea.component.scss']
})
export class OrderExtractareaComponent implements OnInit {

  extractForm: FormGroup;
  constructor(protected formBuilder: FormBuilder) {
    this.extractForm = this.formBuilder.group({
      orderFile: ['', [Validators.required]]
      , area: ['', []]
    });
  }//constructor

  ngOnInit() {

  }//ngOnInit

  onSingleAreaExtract() {
    console.log(1, this.extractForm.value);
  }//onSingleAreaExtract

  onMixtureAreaExtract(){

  }//onMixtureAreaExtract

}
