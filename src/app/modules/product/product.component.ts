import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() categoryName;
  constructor() { }

  ngOnInit() {   
    
  }  
  ngOnChanges(){    
    // get data from @Input
    console.log(this.categoryName);
  }
}
