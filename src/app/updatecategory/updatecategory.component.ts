import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  category: Category = {
    catName: '',    
  };
  
    catid!: number    
  constructor(private apiser:ApiService) { }

  ngOnInit(): void {
  }
  updateCat()
  {
    this.apiser.updateCategory(this.catid,this.category)
    .subscribe(updatedCategory => {
      // Handle the updated category as needed
      console.log('Updated category:', updatedCategory);
    });
  }

}
