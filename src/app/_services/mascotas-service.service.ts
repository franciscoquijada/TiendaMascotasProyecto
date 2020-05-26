import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mascota } from "../_models/mascota.model";
import { environment } from "../../environments/environment";
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private readonly apiUrl = environment.apiUrl;
  private headers: HttpHeaders;
  private token: string;

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


  getMascotas(): Observable<any> {
    let options = { headers: this.headers };
    return this.http
      .get<any>(this.apiUrl + "/mascotas")
      .pipe(
        map((response: Response) => {
          console.log('Contenido de respuesta de mascotas');
          console.log(response);
          return response;
          }
        ));
    }

  addMascota(mascota: Mascota): Observable<any> {
    let request = { nombre: mascota.nombre, raza: mascota.raza, edad: mascota.edad };
    let options = { headers: this.headers };
    return this.http.post(this.apiUrl + '/mascotas', request, options)
      .pipe(
        map((response: Response) => {
          console.log(' respuesta de add Mascota ');
          console.log(response);
        return response;
      }
      ));
  }

  getMascota(id: string | number): Observable<any> {
    let options = { headers: this.headers };
    return this.http
      .get<any>(`${this.apiUrl}/mascotas/${id}`)
      .pipe(
        map((response: Response) => {
          console.log('Contenido de respuesta de mascotas');
          console.log(response);
          return response[0];
        }
        ));
  }

  deleteMascota(mascota: Mascota) {
    let options = { headers: this.headers };
    return this.http.delete(this.apiUrl + '/mascotas/' + mascota.id, options)
      .pipe(
        map((response: Response) => {
        return response;
      }));
  }

  updateMascota(mascota: Mascota) {
    let request = { id: mascota.id, nombre: mascota.nombre, raza: mascota.raza, edad: mascota.edad };
    let options = { headers: this.headers };
    return this.http.put(this.apiUrl + '/mascotas/' + mascota.id, request, options)
      .pipe(map((response: Response) => {
        return response;
      }));
  }

}
