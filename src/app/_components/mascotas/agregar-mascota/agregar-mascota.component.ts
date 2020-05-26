import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../_models/mascota.model';
import { MascotasService } from "../../../_services/mascotas-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.scss']
})
export class AgregarMascotaComponent implements OnInit {

  constructor(private mascotasService: MascotasService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  mascotaModel = new Mascota("", "", undefined);

  onSubmit() {
    if (this.mascotaModel.nombre != '' && this.mascotaModel.raza != '' && this.mascotaModel.edad != undefined) {
    this.mascotasService.addMascota(this.mascotaModel).subscribe((response) => {
      console.log(' response ' + response);
      this.snackBar.open('Mascota guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/mascotas']);
    })
  } else {
      this.snackBar.open('Debe llenar todos los campos', undefined, {
        duration: 1500,
      });
  }
}


}
