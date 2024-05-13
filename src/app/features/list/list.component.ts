
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatButtonModule } from '@angular/material/button'
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
  export class ListComponent {
    products: any[] = [];

    productsService = inject(ProductsService);
    router = inject(Router);

    ngOnInit() {
      this.productsService.getAll().subscribe((products: any[]) => {
        this.products = products;
      })
    }

    OnEdit() {
      this.router.navigateByUrl('/edit-product');
    }
  }
