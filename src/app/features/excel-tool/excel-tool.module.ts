import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelToolRoutingModule } from './excel-tool-routing.module';
import { OrderExtractareaComponent } from './components/order-extractarea/order-extractarea.component';
import { SalaryWarehouseovertimeComponent } from './components/salary-warehouseovertime/salary-warehouseovertime.component';
import { SalaryPickingperfComponent } from './components/salary-pickingperf/salary-pickingperf.component';


@NgModule({
  declarations: [OrderExtractareaComponent, SalaryWarehouseovertimeComponent, SalaryPickingperfComponent],
  imports: [
    CommonModule,
    ExcelToolRoutingModule
  ]
})
export class ExcelToolModule { }
