import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 1. IMPORTAR FormsModule
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList,
  IonItem, IonLabel, IonSpinner, IonIcon, IonButton,
  IonSearchbar // 2. IMPORTAR IonSearchbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star, gitBranchOutline, searchOutline } from 'ionicons/icons';

import { GithubService, GithubRepo } from '../services/github';

@Component({
  selector: 'app-repositorios',
  templateUrl: 'repositorios.page.html',
  styleUrls: ['repositorios.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink, FormsModule, // 3. ADICIONAR FormsModule aos imports
    IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonSpinner, IonIcon, IonButton,
    IonSearchbar // 4. ADICIONAR IonSearchbar aos imports
  ],
})
export class RepositoriosPage implements OnInit {
  // Variável para o two-way data binding com a searchbar
  public usernameToSearch: string = 'joaogfcastro'; // Usuário inicial
  public displayedUsername: string = ''; // Para exibir no título

  public repos: GithubRepo[] = [];
  public isLoading = false; // Inicia como false
  public errorMessage: string | null = null;

  constructor(private githubService: GithubService) {
    addIcons({ star, gitBranchOutline, searchOutline });
  }

  // Carrega os dados do usuário inicial quando a página é criada
  ngOnInit() {
    this.searchUser();
  }

  // O novo método de busca
  searchUser() {
    // 1. Não busca se o campo estiver vazio
    if (!this.usernameToSearch || this.usernameToSearch.trim() === '') {
      return;
    }

    // 2. Reseta o estado da UI para o início de uma nova busca
    this.isLoading = true;
    this.repos = [];
    this.errorMessage = null;

    // 3. Chama o serviço com o nome de usuário (removendo espaços)
    this.githubService.getRepos(this.usernameToSearch.trim()).subscribe({
      next: (data) => {
        // Sucesso
        this.repos = data;
        this.displayedUsername = this.usernameToSearch.trim();
        this.isLoading = false;
      },
      error: (error) => {
        // Erro (ex: usuário não encontrado)
        console.error('Erro ao buscar repositórios:', error);
        this.errorMessage = 'Usuário não encontrado ou erro na API.';
        this.displayedUsername = '';
        this.isLoading = false;
      }
    });
  }
}
