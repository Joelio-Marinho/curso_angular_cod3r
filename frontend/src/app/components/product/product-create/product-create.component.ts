import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product={
    name:'',
    price:0
  }

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMenssage("operação concluida com sucesso!")
    });
  } 
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
