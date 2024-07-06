import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  submit(usuario: HTMLInputElement, password: HTMLInputElement): void {
    this.authService.login(usuario.value, password.value).subscribe(
      response => {
        const token = response.token;
        this.authService.guardarToken(token);
        this.router.navigateByUrl('/dashboard');
      },
      error => {
        console.error('Error en la autenticación', error);
      }
    );
  }
}
