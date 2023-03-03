import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'pages',
    loadChildren : () => import("./pages/pages.module").then((p) =>p.PagesModule) // c quoi ? // dans google lordque je met /pages on observce pages works
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
