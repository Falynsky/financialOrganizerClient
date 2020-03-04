import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from '../main-pages/home-page/home-page.component';
import {AboutPageComponent} from '../main-pages/about-page/about-page.component';
import {SignUpPageComponent} from '../main-pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'signup', component: SignUpPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
