import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {
  id!:number
  category?:Category
  constructor(private apiser:ApiService) { }

  ngOnInit(): void {
  }
  Getbyid()
  {
    return this.apiser.getCategoryById(this.id)
    .subscribe(data => this.category=data)
  }
}
