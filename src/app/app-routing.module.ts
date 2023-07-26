import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
 
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./pages/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'quran',
    loadChildren: () => import('./pages/quran/quran.module').then( m => m.QuranPageModule)
  },
  {
    path: 'mee',
    loadChildren: () => import('./pages/mee/mee.module').then( m => m.MeePageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./pages/bible/bible.module').then( m => m.BiblePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
