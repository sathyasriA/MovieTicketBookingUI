import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'movieList', component: MovieListComponent },
      { path: 'register', component: RegisterComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MovieListComponent,
    RegisterComponent,
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
