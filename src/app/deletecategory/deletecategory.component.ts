import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent implements OnInit {
   catid!:number;
  constructor(private apiser:ApiService) { }

  ngOnInit(): void {
  }
  // Delete Operation
deleteCat() {
  this.apiser.deleteCategory(this.catid).subscribe(() => {
    // Handle the successful deletion
    console.log('Category deleted successfully');
  });
}
}
