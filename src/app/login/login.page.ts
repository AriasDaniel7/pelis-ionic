import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    
  }

  isLogged: boolean;

  user = {
    email: 'admin@gmail.com',
    password: 'admin'
  }

  usuario = {
    email: '',
    password: ''
  }

  async presentAlert(titulo: string, subtitulo: string, message: string) {
    const alert = await this.alertController.create({
      header: `${titulo}`,
      subHeader: `${subtitulo}`,
      message: `${message}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres restantes`;
  }

  onSubmitTemplate() {
    if ((this.usuario.email == this.user.email) && (this.usuario.password == this.user.password)) {
      this.isLogged = true;
      this.router.navigate(['principal']);
    }else{
      this.presentAlert("Error!","","Usuario no registrado!");
      this.isLogged = false;
    }
      
  }


}
