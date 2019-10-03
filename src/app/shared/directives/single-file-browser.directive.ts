import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[sharedSingleFileBrowser]'
})
export class SingleFileBrowserDirective {

  private _name: string;
  private _file: any;
  private _fileName: string;

  get file(): any {
    return this._file;
  }
  get fileName(): string {
    return this._fileName;
  }
  get name(): string {
    return this._name;
  }
  @Output() fileSelect = new EventEmitter<string>();
  @HostListener('change') onFileChange() {

    if (this.el.nativeElement.files[0]) {
      this._fileName = this.el.nativeElement.files[0].name;
      this._file = this.el.nativeElement.files[0];
    }
    else {
      this._fileName = '';
    }
    this.fileSelect.next(this.fileName);
  }
  constructor(private el: ElementRef) {
    this._name = this.el.nativeElement.name;
  }//constructor

  reset() {
    this._file = null;
  }//reset

}
