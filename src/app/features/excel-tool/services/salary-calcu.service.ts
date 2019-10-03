import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '@app/core';

@Injectable()
export class SalaryCalcuService {

  private get _URI() {
    return `${this.configSrv.APIServer}/api/salaries`;
  }
  constructor(protected httpClient: HttpClient, protected configSrv: AppConfigService) {

  }//constructor

  warehouseOvertimeCalcu(data: any) {
    return this.httpClient.post(`${this._URI}/WarehouseOvertime`, data, { responseType: "text" });
  }//warehouseOvertimeCalcu

}
