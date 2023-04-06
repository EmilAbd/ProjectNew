import { Component, OnInit } from '@angular/core';
import { products as data } from './data/product';
import { IProduct } from './interface/product';
import { ProductsService } from './data/products.service';
import { persons as data1 } from './data/person';
import { IPerson } from './interface/person';
import { PersonsService } from './data/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-work';
  products: IProduct[] = []
  constructor(private _productService: ProductsService) {}
  ngOnInit(): void {
    this._productService.getList()
    .subscribe(response => {
        this.products = response.data
    })
  }
}



