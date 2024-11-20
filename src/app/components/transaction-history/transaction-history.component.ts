import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    DatePipe
  ],
  templateUrl: './transaction-history.component.html',
  styles: [`
    mat-card { margin: 2em auto; max-width: 800px; }
    table { width: 100%; }
  `]
})
export class TransactionHistoryComponent implements OnInit {
  transactions: any[] = [];
  displayedColumns: string[] = ['id', 'type', 'amount', 'description', 'date'];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTransactions().subscribe(
      response => {
        this.transactions = response;
      },
      error => {
        console.error('Error al obtener transacciones:', error);
      }
    );
  }
}