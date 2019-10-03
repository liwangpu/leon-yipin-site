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
import { SalaryCalcuService } from './services/salary-calcu.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';

@NgModule({
  declarations: [OrderExtractareaComponent, SalaryWarehouseovertimeComponent, SalaryPickingperfComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ExcelToolRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
    OrderExtractareaService,
    XlsxDownloaderService,
    SalaryCalcuService,
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ]
})
export class ExcelToolModule { }
