import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './_services/authentication.service';
import { MascotasService } from './_services/mascotas-service.service';
import { LoginComponent } from './_components/auth/login/login/login.component';
import { RegisterComponent } from './_components/auth/register/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatRadioModule, MatIconModule,
  MatCardModule, MatToolbarModule, MatInputModule, MatDialogModule, MatSidenavModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatTableModule
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './_guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { MascotasComponent } from './_components/mascotas/mascotas/mascotas.component';
import { AgregarMascotaComponent } from './_components/mascotas/agregar-mascota/agregar-mascota.component';
import { ListarMascotasComponent } from './_components/mascotas/listar-mascotas/listar-mascotas.component';
import { EditarMascotasComponent } from './_components/mascotas/editar-mascotas/editar-mascotas.component';
import { DialogoConfirmacionComponent } from './_components/mascotas/dialogo-confirmacion/dialogo-confirmacion.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, NavigationComponent, MascotasComponent, AgregarMascotaComponent, ListarMascotasComponent, EditarMascotasComponent, DialogoConfirmacionComponent],
  entryComponents: [
    DialogoConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule
  ],

  providers: [AuthGuard, AuthenticationService, MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
