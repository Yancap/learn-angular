import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaginaComponent } from './pages/pagina/pagina.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pagina', component: PaginaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
