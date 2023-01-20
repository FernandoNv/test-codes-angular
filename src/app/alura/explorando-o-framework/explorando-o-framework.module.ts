import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorandoOFrameworkRoutingModule } from './explorando-o-framework-routing.module';
import { ExplorandoOFrameworkComponent } from './explorando-o-framework.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';


@NgModule({
  declarations: [
    ExplorandoOFrameworkComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    ExplorandoOFrameworkRoutingModule,
    FormsModule,
  ]
})
export class ExplorandoOFrameworkModule { }
