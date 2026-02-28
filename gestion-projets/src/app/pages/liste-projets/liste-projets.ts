import { Component, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjetService, Projet } from '../../services/projet';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-projets',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './liste-projets.html',
})
export class ListeProjets {
  projets: WritableSignal<Projet[]>;

  constructor(private projetService: ProjetService) {
    this.projets = this.projetService.getProjets(); 
  }
}
