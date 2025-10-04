// src/app/services/github.ts  <-- Note o nome do arquivo aqui
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para tipar a resposta da API (boa prática)
export interface GithubRepo {
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // URL base da API do GitHub
  private readonly apiUrl = 'https://api.github.com';

  // Injeta o HttpClient no construtor
  constructor(private http: HttpClient) { }

  // Método que busca os repositórios de um usuário
  getRepos(username: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.apiUrl}/users/${username}/repos`);
  }
}
