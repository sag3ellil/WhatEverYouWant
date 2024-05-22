import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Check initial authentication status (e.g., from localStorage)
      const token = localStorage.getItem('authToken');
      this.isAuthenticatedSubject.next(!!token);
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(token: string) {
    if (this.isBrowser) {
      localStorage.setItem('authToken', token);
      this.isAuthenticatedSubject.next(true);
    }
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('authToken');
      this.isAuthenticatedSubject.next(false);
    }
  }

  private apiUrl = 'http://your-api-url.com/api'; // Replace with your API URL



  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/profile`);
  }

  updateUserProfile(profileData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/profile`, profileData);
  }
}
