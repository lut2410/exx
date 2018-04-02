import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './service/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-menory-data.service';
import { Obs1Component } from './obs1/obs1.component';
import { Obs2Component } from './obs2/obs2.component';
import { ShareService } from './service/share.service';
import {FormsModule} from '@angular/forms'

const routes: Routes = [
{path: '',
 redirectTo : '/dashboard',
 pathMatch : 'full'
},
{path: 'dashboard', component : DashboardComponent},
{path: 'heroes', component: HeroesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    Obs1Component,
    Obs2Component
  ],
  imports: [
  RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule
  ],
  providers: [HeroService,
  ShareService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
