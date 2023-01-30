import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';
import { BoasPraticasEmArquiteturasEFormulariosComponent } from './boas-praticas-em-arquiteturas-e-formularios.component';

const routes: Routes = [
  {
    path: '',
    component: BoasPraticasEmArquiteturasEFormulariosComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        canLoad: [LoginGuard],
      },
      {
        path: 'animais',
        loadChildren: () =>
          import('./animais/animais.module').then((m) => m.AnimaisModule),
        canLoad: [AutenticacaoGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoasPraticasEmArquiteturasEFormulariosRoutingModule {}
