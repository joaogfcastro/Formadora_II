import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. IMPORTAR RouterLink
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonImg, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonButton // 2. IMPORTAR IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
    IonImg, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel,
    IonButton, RouterLink // 3. ADICIONAR IonButton e RouterLink aos imports
  ],
})
export class PerfilPage {
  constructor() {}
}
