import { HttpClient } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: any[] = [];

  // httpClient = Inject(HttpClient);

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get<any>('/api/products').subscribe((products) => {
      this.products = this.products;
    });
  }
}
