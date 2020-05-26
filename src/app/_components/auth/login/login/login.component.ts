import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  warningMessage: string;


  constructor(private authService: AuthenticationService, private router: Router, ) { }

  ngOnInit() {
  }


  onLoginIn() {
    this.authService.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          if (data[0] == "Invalid Credentials")
                this.warningMessage = "Correo o contraseña inválida";
          else{
            this.router.navigate(['mascotas']);
          }
        },
        error => {
          this.warningMessage = "Correo o contraseña inválida";
          console.error(error);
        });
  }

}
