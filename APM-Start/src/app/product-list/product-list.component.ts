import { ProductsService } from './products.service';
import { IProduct } from './product';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  _filterBy: string;
  get filterBy(): string{
    return this._filterBy;
  }
  set filterBy(value: string) {
      this._filterBy = value;
      this.filteredProducts = this.filterBy ? this.performFilter(this.filterBy) : this.products;
  }

  filteredProducts: Array<IProduct> = [];
  products: Array<IProduct> = [];


  constructor(private _prodService: ProductsService) { }

  ngOnInit() {
    this.products = this._prodService.getProducts();
    this.filteredProducts = this.products;
  }

  showImageClick() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Array<IProduct> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {
      this.pageTitle = '' + message;
  }
}
