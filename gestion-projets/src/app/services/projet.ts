import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface Projet {
  id: number;
  nom: string;
  statut: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private projets = signal<Projet[]>([
    { id: 1, nom: 'Site e-commerce', statut: 'En cours' },
    { id: 2, nom: 'Application mobile', statut: 'Terminé' },
    { id: 3, nom: 'Système de gestion', statut: 'En cours' },
  ]);

  getProjets() {
    return this.projets;
  }

  getProjetParId(id: number): Projet | undefined {
    return this.projets().find(p => p.id === id);
}

  ajouterProjet(projet: Omit<Projet, 'id'>): void {
    const newid = this.projets().length + 1;
    this.projets.update(projets => [...projets, { id: newid, ...projet }]);
  }
}
