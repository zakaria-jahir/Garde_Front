import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  BASED_URL = 'http://localhost:8080/';

  // login(data: any): Observable<any> {
  //   const url = this.BASED_URL + 'gardien/login';
  //   return this.http.post<any>(url, data).pipe(map(data => data));
  // }

  login(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.BASED_URL}gardien/login`, data, { headers });
  }
  loginClient(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.BASED_URL}client/login`, data, { headers });
  }
  

  private loggedIn = new BehaviorSubject<boolean>(false);
  getLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }
  setLoggedIn(value: boolean): void {
    this.loggedIn.next(value);
  }

  

  getGardiens(){
    const url = this.BASED_URL + 'gardiens';
    return this.http.get(url).pipe(map(data => data));
  }
  getGardienById(gardienId: any): Observable<any> {
    const url = this.BASED_URL + 'gardien/'+gardienId;
    return this.http.get<any>(url).pipe(map(data => data)); 
  }

  private idGardien = new BehaviorSubject<number | undefined>(undefined);
  getIdGardien(): BehaviorSubject<number | undefined>{
    return this.idGardien;
  }
  setIdGardien(value: number):void{
    this.idGardien.next(value);
  }
  private idClient = new BehaviorSubject<number | undefined>(undefined);
  getIdClient(): BehaviorSubject<number | undefined>{
    const storedId = localStorage.getItem('clientId');
    if (storedId) {
      this.idClient.next(+storedId);
    }
    return this.idClient;
  }
  setIdClient(value: number):void{
    localStorage.setItem('clientId', value.toString());
    this.idClient.next(value);
  }
  private idAdmin = new BehaviorSubject<number | undefined>(undefined);
  getIdAdmin(): BehaviorSubject<number | undefined>{
    return this.idAdmin;
  }
  setIdAdmin(value: number):void{
    this.idAdmin.next(value);
  }
  logoutClient(): void {
    localStorage.removeItem('clientId');
    this.idClient.next(undefined);
  }

  // private localStorageKey = 'loggedIn';

  // getLocalStorageLoginStatus(): boolean {
  //   const storedValue = localStorage.getItem(this.localStorageKey);
  //   return storedValue ? JSON.parse(storedValue) : false;
  // }

  // setLocalStorageLoginStatus(value: boolean): void {
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(value));
  // }


}
