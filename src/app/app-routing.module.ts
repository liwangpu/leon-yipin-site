import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "App",
    loadChildren: './features/main/main.module#MainModule'
  }
  , {
    path: 'ExcelTool',
    loadChildren: './features/excel-tool/excel-tool.module#ExcelToolModule'
  }
  , { path: '**', redirectTo: 'App' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
