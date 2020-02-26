import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {HomePageComponent} from './home-page/home-page.component';


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
