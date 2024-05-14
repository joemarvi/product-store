import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  product = input<Product | null>(null);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }
}
