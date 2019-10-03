import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { ExcelToolRoutingModule } from './excel-tool-routing.module';
import { OrderExtractareaComponent } from './components/order-extractarea/order-extractarea.component';
import { SalaryWarehouseovertimeComponent } from './components/salary-warehouseovertime/salary-warehouseovertime.component';
import { SalaryPickingperfComponent } from './components/salary-pickingperf/salary-pickingperf.component';
import { SharedModule } from '@app/shared';
import { OrderExtractareaService } from './services/order-extractarea.service';
import { XlsxDownloaderService } from './services/xlsx-downloader.service';


@NgModule({
  declarations: [OrderExtractareaComponent, SalaryWarehouseovertimeComponent, SalaryPickingperfComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ExcelToolRoutingModule
  ],
  providers: [
    OrderExtractareaService,
    XlsxDownloaderService
  ]
})
export class ExcelToolModule { }
