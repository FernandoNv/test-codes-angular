import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorandoOFrameworkComponent } from './explorando-o-framework.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  {
    path:'',
    component: ExplorandoOFrameworkComponent,
    pathMatch:'full'
  },
  {
    path:'nova-transferencia',
    component: NovaTransferenciaComponent,
  },
  {
    path:'extrato',
    component: ExtratoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorandoOFrameworkRoutingModule { }
