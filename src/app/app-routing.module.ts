import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'main',
    children: [
      { path: 'dashboard', loadChildren: './main/dashboard/dashboard.module#DashboardModule' },
      { path: 'users', loadChildren: './main/users/users.module#UsersModule' },
      { path: 'contacts', loadChildren: './main/contacts/contacts.module#ContactsModule' },
      // { path: 'profile', loadChildren: './main/myprofile/myprofile.module#MyProfileModule' },
    ],
    runGuardsAndResolvers:'always'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
