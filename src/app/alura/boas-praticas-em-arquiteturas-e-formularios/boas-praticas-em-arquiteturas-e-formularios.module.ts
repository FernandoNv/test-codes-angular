import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasPraticasEmArquiteturasEFormulariosRoutingModule } from './boas-praticas-em-arquiteturas-e-formularios-routing.module';
import { BoasPraticasEmArquiteturasEFormulariosComponent } from './boas-praticas-em-arquiteturas-e-formularios.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';

@NgModule({
  declarations: [BoasPraticasEmArquiteturasEFormulariosComponent],
  imports: [
    CommonModule,
    BoasPraticasEmArquiteturasEFormulariosRoutingModule,
    CabecalhoModule,
    RodapeModule,
  ],
  bootstrap: [BoasPraticasEmArquiteturasEFormulariosComponent],
})
export class BoasPraticasEmArquiteturasEFormulariosModule {}
