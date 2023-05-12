import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'workoutpage',
    loadChildren: () => import('./workoutpage/workoutpage.module').then( m => m.WorkoutpagePageModule)
  },
  {
    path: 'cardiopage',
    loadChildren: () => import('./cardiopage/cardiopage.module').then( m => m.CardiopagePageModule)
  },
  {
    path: 'sleeppage',
    loadChildren: () => import('./sleeppage/sleeppage.module').then( m => m.SleeppagePageModule)
  },
  {
    path: 'foodpage',
    loadChildren: () => import('./foodpage/foodpage.module').then( m => m.FoodpagePageModule)
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then( m => m.BmiPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
