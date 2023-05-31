import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  newCategory: Category = {
    catName: '',
    products: [
      {
        proName: '',
        price: 0
      }
    ]
  };
  constructor(private apiser:ApiService) { }

  ngOnInit(): void {
  }
   createcat()
   {
    this.apiser.createCategory(this.newCategory)
    .subscribe(category=>
      {
        console.log('Created Category',category)

      })
    
   }
}
