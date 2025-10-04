import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. IMPORTAR RouterLink
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  standalone: true,
  // 2. ADICIONAR RouterLink ao array de imports
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink],
})
export class InicioPage {
  constructor() {}
}
