import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InsertProjectComponent } from './components/insert-project/insert-project.component';
import { ProjectListingComponent } from './components/project-listing/project-listing.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLineModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsertProjectComponent,
    ProjectListingComponent,
    ProjectDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatLineModule,
    MatButtonModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule,    
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
