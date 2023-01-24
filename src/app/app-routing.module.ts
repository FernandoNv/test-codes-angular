import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'explorando-o-framework',
    loadChildren: () => import('./alura/explorando-o-framework/explorando-o-framework.module').then(m => m.ExplorandoOFrameworkModule)
  },
  {
    path: 'boas-praticas-em-arquiteturas-e-formularios',
    loadChildren: () => import('./alura/boas-praticas-em-arquiteturas-e-formularios/boas-praticas-em-arquiteturas-e-formularios.module').then(m => m.BoasPraticasEmArquiteturasEFormulariosModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
