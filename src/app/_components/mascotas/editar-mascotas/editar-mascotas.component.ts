import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from "../../../_services/mascotas-service.service";
import { Mascota } from '../../../_models/mascota.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.scss']
})
export class EditarMascotasComponent implements OnInit {

  public mascota: Mascota = new Mascota("", "", 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private mascotasService: MascotasService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idMascota = this.route.snapshot.paramMap.get("id");
    console.log('id mascota ' + idMascota);
    this.obtenerMascota(idMascota);
  }

  obtenerMascota(id: string | number) {
    return this.mascotasService
      .getMascota(id)
      .subscribe((mascota: Mascota) => this.mascota = mascota);
  }

  volver() {
    this.router.navigate(['/mascotas']);
  }

  onSubmit() {
    if (this.mascota.nombre != '' && this.mascota.raza != '' && this.mascota.edad != undefined) {
    this.mascotasService.updateMascota(this.mascota).subscribe(() => {
      this.snackBar.open('Mascota actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }
    else {
      this.snackBar.open('Debes llenar todos los campos', undefined, {
        duration: 1500,
      });
      }
  }

}
