import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

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
  loginAdmin(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.BASED_URL}admin/login`, data, { headers });
  }
  register(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.BASED_URL}addClient`, data, { headers });
  }
  addGardien(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.BASED_URL}addGardien`, data, { headers });
  }



  reserver(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(`${this.BASED_URL}reserver`, data, { headers })
    .pipe(
      catchError((error: any) => {
        console.error('Error occurred in reserver request:', error);
        return throwError('Error occurred during reservation');
      }));
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
  getClients(){
    const url = this.BASED_URL + 'clients';
    return this.http.get(url).pipe(map(data => data));
  }
  getReservations(){
    const url = this.BASED_URL + 'reservations';
    return this.http.get(url).pipe(map(data => data));
  }
  getGardienById(gardienId: any): Observable<any> {
    const url = this.BASED_URL + 'gardien/'+gardienId;
    return this.http.get<any>(url).pipe(map(data => data)); 
  }
  getClientById(clientId: number): Observable<any> {
    const url = `${this.BASED_URL}client/${clientId}`;
    return this.http.get<any>(url);
  }

  getReservationById(reservationId: any): Observable<any> {
    const url = this.BASED_URL + 'reservation/'+reservationId;
    return this.http.get<any>(url).pipe(map(data => data)); 
  }

  updateReservation(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const url = this.BASED_URL + 'updateReservation';
    return this.http.put<any>(url, data, { headers }).pipe(map((data) => data));
  }
  
  

  deleteReservation(reservationId: number): Observable<any> {
    const url = `${this.BASED_URL}deleteReservation/${reservationId}`;
    return this.http.delete(url);
  }
  
  getClientReservations(clientId: number): Observable<any> {
    const url = `${this.BASED_URL}clientReservations/${clientId}`;
    return this.http.get<any>(url);
  }

  getAdminReservations(gardienId: number): Observable<any> {
    const url = `${this.BASED_URL}gardienReservations/${gardienId}`;
    return this.http.get<any>(url);
  }
   


  updateClientProfil(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const url = this.BASED_URL + 'updateClient';
     // Convert form data to JSON object
  const jsonData = {
    nom: data.get('nom'),
    prenom: data.get('prenom'),
    mail: data.get('mail'),
    teleNum: data.get('teleNum'),
    password: data.get('password'),
    id: data.get('id')
  };
    return this.http.put<any>(url, jsonData, { headers }).pipe(map(data => data));
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



}
