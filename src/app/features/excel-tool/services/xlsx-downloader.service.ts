import { Injectable } from '@angular/core';
import { FileSaverService } from '@app/shared';
import { AppConfigService } from '@app/core';

@Injectable()
export class XlsxDownloaderService {

  constructor(protected fileSaver: FileSaverService, protected config: AppConfigService) {

  }//constructor

  downloadByElsxName(fileName: string) {
    let url = `${this.config.APIServer}/api/files/xlsx/${fileName}`;
    this.fileSaver.downloadByUrl(url);
  }//downloadByElsxName

}
