import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[sharedSingleFileInput]'
})
export class SingleFileInputDirective {

  private _file: any;
  get file(): any {
    return this._file;
  }
  @Input() labelControl: HTMLElement;
  @HostListener('change') onFileChange() {
    let fileName = '';
    if (this.el.nativeElement.files[0]) {
      fileName = this.el.nativeElement.files[0].name;
      this._file = this.el.nativeElement.files[0];
    }
    if (this.labelControl)
      this.labelControl.innerHTML = fileName;
  }
  constructor(private el: ElementRef) { }

}
