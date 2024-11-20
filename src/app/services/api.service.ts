import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000'; // Ajusta esto a la URL de tu backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, { email, password });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, { username, email, password });
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions`);
  }

  createTransaction(userId: number, type: string, amount: number, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/transactions`, { user_id: userId, type, amount, description });
  }
}