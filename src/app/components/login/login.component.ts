import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    this.apiService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Error de inicio de sesión:', error);
      }
    );
  }
}
