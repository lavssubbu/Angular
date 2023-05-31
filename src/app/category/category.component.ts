import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories?:Category[]
 
  constructor(private apiser:ApiService) { }

  ngOnInit(): void {
  }
   GetAll()
   {
    return this.apiser.getData().subscribe(data=>this.categories=data)
   }
  
}
