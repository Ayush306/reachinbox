import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reachaone';
  constructor(private router:Router){}


  ngOnInit(): void {
    // After redirection, extract the token from the URL
    const token = this.getTokenFromUrl();
    if (token) {
      // Save the token to local storage or another secure place
      localStorage.setItem('authToken', token);
      console.log('Token saved:', token);
      // Navigate to a different page, e.g., dashboard
      this.router.navigate(['/layout']);
    }
  }
  private getTokenFromUrl(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('token');
  }
}
