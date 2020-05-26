import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import {Router} from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../_components/mascotas/dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private dialogo: MatDialog) { }

  ngOnInit() {
  }

  showCredit(){
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `Programado por: Francisco Quijada, Rut: 26077241-4 Proyecto final Curso Angular Fecha: 25-05-2020`
      })
      .afterClosed();
  }

  logout() {
    this.authService.logoutnew()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);

        },
        error => {
        });
  }

}
