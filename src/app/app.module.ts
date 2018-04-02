import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Obs1Component } from './obs1/obs1.component';
import { Obs2Component } from './obs2/obs2.component';
import {FormsModule} from '@angular/forms'
import { Child1Module } from './obs1/child1.component';

const routes: Routes = [
{path: '',
 redirectTo : '/dashboard',
 pathMatch : 'full'
},
{path: 'dashboard', component : DashboardComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Obs1Component,
    Obs2Component
  ],
  imports: [
  RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Child1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
