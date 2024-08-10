import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpService: HttpClient) { }

  private apiUrl = 'https://hiring.reachinbox.xyz/api/v1/onebox'

  loginWithGoogle(): void {
    const backendLoginUrl = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinone306.web.app/#/layout';
    window.location.href = backendLoginUrl;
  }


  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'AUTHORIZATION': `Token ${token}`
    });
  }

  getMailList(): Observable<any> {
    console.log("get mail kusshdkjhsdkfjh");

    return this._httpService.get(`${this.apiUrl}/list`, { headers: this.getAuthHeaders() });
  }
}
