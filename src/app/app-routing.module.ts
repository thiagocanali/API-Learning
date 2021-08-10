import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepComponent } from './pages/cep/cep.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent},
  { path: 'cep', component: CepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
