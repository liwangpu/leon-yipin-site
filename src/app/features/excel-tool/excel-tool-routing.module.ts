import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderExtractareaComponent } from './components/order-extractarea/order-extractarea.component';
import { SalaryWarehouseovertimeComponent } from './components/salary-warehouseovertime/salary-warehouseovertime.component';
import { SalaryPickingperfComponent } from './components/salary-pickingperf/salary-pickingperf.component';


const routes: Routes = [
  {
    path: 'Order/ExtractArea',
    component: OrderExtractareaComponent
  }
  , {
    path: 'Salary/WareHouseOvertime',
    component: SalaryWarehouseovertimeComponent
  }
  , {
    path: 'Salary/PickingPerf',
    component: SalaryPickingperfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelToolRoutingModule { }
