import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: '', component: PostListComponent ,pathMatch:'full'},
  {path:'post-list', component:PostListComponent},
  {path:'authentification', component:AuthentificationComponent},
  {path: '**' ,  redirectTo :  'post-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
