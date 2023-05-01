import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProjectListingComponent } from './components/project-listing/project-listing.component';
import { InsertProjectComponent } from './components/insert-project/insert-project.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', canActivate:[AuthGuard], component: ProjectDashboardComponent},
  {path : 'listing', component: ProjectListingComponent},
  {path : 'insert', component : InsertProjectComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
