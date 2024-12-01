import { Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeComponent } from './home/home.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';

export const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path:'', component: HomeComponent},
  { path: 'watch/:id', component: WatchVideoComponent }
];
