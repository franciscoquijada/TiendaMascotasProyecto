import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  name: string = '';
  password: string = '';
  warningMessage: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    console.log(' registerrr ' + this.name + ' ' + this.email + ' ' + this.password);
    this.authService.register(this.name, this.email, this.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.warningMessage = '';
          if (Array.isArray(data.email)) {
            this.warningMessage += data.email[0];
          }
          if (Array.isArray(data.name)) {
            this.warningMessage += data.name[0];
          }
          if (Array.isArray(data.password)) {
            this.warningMessage += data.password[0];
          }
          if (!this.warningMessage)
            this.router.navigate(['mascotas']);
        },
        error => {
          this.warningMessage = "Correo o contraseña inválida";
          console.error(error);
        });
  }

}
