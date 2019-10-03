import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class FileSaverService {

  private _lastDownloadUrl: string;
  private renderer: Renderer2;
  constructor(@Inject(DOCUMENT) private document: Document, protected rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }//constructor

  downloadByUrl(url: string) {
    let innerDownloadFlagId = "app_inner_download_flag_id";
    let downloadLinkNode = this.document.getElementById(innerDownloadFlagId);

    if (!downloadLinkNode) {
      downloadLinkNode = this.renderer.createElement("a");
      this.renderer.setAttribute(downloadLinkNode, 'id', innerDownloadFlagId);
      this.renderer.setStyle(downloadLinkNode, "display", "none");
      this.renderer.setAttribute(downloadLinkNode, "download", '');
      this.renderer.appendChild(this.document.body, downloadLinkNode);
    }

    if (url != this._lastDownloadUrl)
      this.renderer.setAttribute(downloadLinkNode, 'href', url);
    downloadLinkNode.click();
    this._lastDownloadUrl = url;
  }//downloadByUrl
}
