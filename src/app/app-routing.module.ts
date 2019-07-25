import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#homePageModule'},
  { path: 'student', loadChildren: './student/student.module#StudentPageModule' },
  { path: 'student-list', loadChildren: './student-list/student-list.module#StudentListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
