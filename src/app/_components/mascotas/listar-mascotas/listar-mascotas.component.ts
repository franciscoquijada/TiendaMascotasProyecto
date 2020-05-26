import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../_models/mascota.model';
import { MascotasService } from "../../../_services/mascotas-service.service";
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.scss']
})
export class ListarMascotasComponent implements OnInit {

  mascotas: Mascota[] = [
    new Mascota("Firulai", "callejero", 2)
  ];

  constructor(private mascotasService: MascotasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarMascota(mascota: Mascota) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${mascota.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.mascotasService
          .deleteMascota(mascota)
          .subscribe(() => {
            this.obtenerMascotas();
            this.snackBar.open('Mascota eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.mascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) => this.mascotas = mascotas);
  }

}
