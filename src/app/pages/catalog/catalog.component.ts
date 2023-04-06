import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/data/products.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  products: IProduct[] = []

  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this._productService.getList()
    .subscribe(response => {
        this.products = response.data
    })
  }
}
