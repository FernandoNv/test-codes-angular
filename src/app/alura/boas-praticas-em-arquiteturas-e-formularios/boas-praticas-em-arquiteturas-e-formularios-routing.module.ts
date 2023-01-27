import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      },
      {
        path: 'animais',
        loadChildren: () =>
          import('./animais/animais.module').then((m) => m.AnimaisModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoasPraticasEmArquiteturasEFormulariosRoutingModule {}
