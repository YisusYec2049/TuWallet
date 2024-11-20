import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  template: `
    <div class="transfer-container">
      <mat-card class="transfer-card">
        <mat-card-title>Realizar Transferencia</mat-card-title>
        <mat-card-content>
          <form [formGroup]="transferForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="fill">
              <mat-label>Monto</mat-label>
              <input matInput formControlName="amount" type="number" placeholder="Ingresa el monto">
              <mat-error *ngIf="transferForm.controls['amount'].hasError('required')">El monto es obligatorio</mat-error>
              <mat-error *ngIf="transferForm.controls['amount'].hasError('min')">El monto debe ser mayor que 0</mat-error>
            </mat-form-field>
    
            <mat-form-field appearance="fill">
              <mat-label>Cuenta de destino</mat-label>
              <input matInput formControlName="accountNumber" type="text" placeholder="Número de cuenta">
              <mat-error *ngIf="transferForm.controls['accountNumber'].hasError('required')">El número de cuenta es obligatorio</mat-error>
              <mat-error *ngIf="transferForm.controls['accountNumber'].hasError('pattern')">El número de cuenta debe ser solo números</mat-error>
            </mat-form-field>
    
            <mat-form-field appearance="fill">
              <mat-label>Descripción</mat-label>
              <input matInput formControlName="description" placeholder="Descripción (opcional)">
              <mat-error *ngIf="transferForm.controls['description'].hasError('maxlength')">La descripción no puede exceder los 100 caracteres</mat-error>
            </mat-form-field>
    
            <button mat-raised-button color="primary" type="submit" [disabled]="!transferForm.valid">Transferir</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  transferForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', [Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.transferForm.valid) {
      console.log(this.transferForm.value);
    }
  }
}
