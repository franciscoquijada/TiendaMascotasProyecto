import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public token: string;
  private headers: HttpHeaders;
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    //Asigno headers
    this.headers = new HttpHeaders();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "*");
    this.headers.append(
      "Access-Control-Allow-Headers",
      "Origin, Authorization, Content-Type, Accept"
    );
    //asignar token si esta guardado en el local storage
    var currentUser = JSON.parse(localStorage.getItem("user"));
    this.token = currentUser && currentUser.token;
  }

  register(username: string, email: string, password: string): Observable<any> {
    let request = {
      email: email,
      name: username,
      password: password
    };
    let options = { headers: this.headers };
    return this.http
      .post<any>(this.apiUrl + "/register", request, options)
      .pipe(
        map((response: Response) => {
          console.log('Contenido de respuesta de login');
          console.log(response);
          if (response && response['token']) {
            this.token = response['token'];
            let email = response['email'];
              localStorage.setItem(
                "user",
                JSON.stringify({ email: email, token: this.token })
              );
          }
          console.log(' Local Storage ' + localStorage.getItem("user"));
          return response;
          }
        ));
  }

  login(email: string, password: string): Observable<any> {
    let request = JSON.stringify({ email: email, password: password });
    return this.http
      .post<any>(this.apiUrl + "/login", { email, password })
      .pipe(
        map((response: Response) => {
          console.log('Contenido de respuesta de login');
          console.log(response);
          if (response && response['token']) {
            this.token = response['token'];
            let email = response['email'];
            localStorage.setItem(
              "user",
              JSON.stringify({ email: email, token: this.token })
            );
          }
          console.log(' Local Storage ' + localStorage.getItem("user"));
          return response;
      }
      ));
  }

  logoutnew(): Observable<any> {
    return this.http
      .post<any>(this.apiUrl + "/logout", {})
      .pipe(
        map((response: Response) => {
          console.log('Contenido de respuesta de login');
          console.log(response);
          if (response && response['message'] == 'Successfully logged out') {
            this.token = null;
            localStorage.removeItem("user");
          }
          return response;
        }
        ));
  }

}
