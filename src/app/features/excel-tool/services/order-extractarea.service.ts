import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '@app/core';

@Injectable()
export class OrderExtractareaService {

  private get _URI() {
    return `${this.configSrv.APIServer}/api/orders`;
  }
  private get _header() {
    return new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
  }
  constructor(protected httpClient: HttpClient, protected configSrv: AppConfigService) {

  }

  extractSingleArea(data: any) {
    return this.httpClient.post<string>(`${this._URI}/ExtractSingleArea`, data, { headers: this._header });
  }//extractSingleArea

}