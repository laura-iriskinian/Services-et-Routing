import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjetService } from '../../services/projet';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajouter-projet',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './ajouter-projet.html',
})
export class AjouterProjet {
  nom: string = '';
  statut: string = '';

  constructor(private projetService: ProjetService, private router: Router) {}

  ajouterProjet() {
    if (this.nom && this.statut) {
      this.projetService.ajouterProjet({ nom: this.nom, statut: this.statut });
      this.router.navigate(['/']);
    }
  }
}
