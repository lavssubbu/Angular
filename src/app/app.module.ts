import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategorydetailComponent,
    NewcategoryComponent,
    UpdatecategoryComponent,
    DeletecategoryComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
