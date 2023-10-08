import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProgramComponent } from './program/program.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { CalculatepageComponent } from './calculatepage/calculatepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'homepage',component: HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'program',component:ProgramComponent},
  {path:'detailpage',component:DetailpageComponent},
  {path:'calculatepage',component:CalculatepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
