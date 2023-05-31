import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: CategoryComponent },
  { path: 'detail/:id', component: CategorydetailComponent },
  { path: 'new', component: NewcategoryComponent },
  { path: 'update/:id', component: UpdatecategoryComponent },
  { path: 'delete/:id', component: DeletecategoryComponent },
  { path: '**', redirectTo: '/list' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
