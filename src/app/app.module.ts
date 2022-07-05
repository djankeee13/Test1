import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { MainChildComponent } from './main-child/main-child.component';
import { ShowcompComponent } from './showcomp/showcomp.component';
import { HidecompComponent } from './hidecomp/hidecomp.component';
import { BasketballStatsComponent } from './basketball-stats/basketball-stats.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainChildComponent,
    ShowcompComponent,
    HidecompComponent,
    BasketballStatsComponent,
    LocalstorageComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
