import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "Tutu-der-Humor-meines-Vaters/figurenbeschrieb", pathMatch: "full"},
  {
    path: 'Tutu-der-Humor-meines-Vaters',
    redirectTo: "Tutu-der-Humor-meines-Vaters/figurenbeschrieb"
  },
  {
    path: 'Tutu-der-Humor-meines-Vaters/:page',
    loadChildren: () => import('./pages/arbeit/arbeit.module').then( m => m.ArbeitPageModule),
    pathMatch: "full"
  },  
  {
    path: 'portrait',
    loadChildren: () => import('./pages/portrait/portrait.module').then( m => m.PortraitPageModule),
    pathMatch: "full"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
