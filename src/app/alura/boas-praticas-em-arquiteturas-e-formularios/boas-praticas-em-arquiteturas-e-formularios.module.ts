import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasPraticasEmArquiteturasEFormulariosRoutingModule } from './boas-praticas-em-arquiteturas-e-formularios-routing.module';
import { BoasPraticasEmArquiteturasEFormulariosComponent } from './boas-praticas-em-arquiteturas-e-formularios.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';

@NgModule({
  declarations: [BoasPraticasEmArquiteturasEFormulariosComponent],
  imports: [
    CommonModule,
    BoasPraticasEmArquiteturasEFormulariosRoutingModule,
    CabecalhoModule,
    RodapeModule,
  ],
})
export class BoasPraticasEmArquiteturasEFormulariosModule {}
