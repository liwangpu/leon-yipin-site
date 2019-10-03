import { Directive, ElementRef, HostListener, Input } from '@angular/core';

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

  reset() {
    this._file = null;
    if (this.labelControl)
      this.labelControl.innerHTML = "";
  }//reset
}
