import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;  /* @Input decorator helps to gets data from parent component : catalog (product-attribute)*/
  @Output() buy = new EventEmitter(); /* @Output decorator helps to give the event to be done to parent component : buy*/

  getImageUrl(product: IProduct){
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClass(product: IProduct) {
    if (product.discount > 0) return ['strike'];     
  /* class binding - only the satified condition values the 
  classes(that's why mentioned in array, can declare multiple classes) will be applied to them */
    else return [];
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit();   /* triggering the event (EventEmitter) */
  } 
}
