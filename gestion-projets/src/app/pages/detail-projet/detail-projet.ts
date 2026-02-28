import { Component, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjetService, Projet } from '../../services/projet';  
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail-projet',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './detail-projet.html',
})
export class DetailProjet{
  projet: Projet | undefined;

  constructor(private route: ActivatedRoute, private projetService: ProjetService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projet = this.projetService.getProjetParId(id);
  }

}
