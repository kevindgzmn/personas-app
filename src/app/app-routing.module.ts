import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasGenerationComponent } from './personas-generation/personas-generation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generate', component: PersonasGenerationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
