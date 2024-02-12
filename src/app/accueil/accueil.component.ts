import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent {
  meublesSalon = [
      { nom: 'Meuble cuisine', prix: 1000, image: 'assets/product-1.jpg' },
      { nom: 'Ensemble Salon', prix: 3000, image: 'assets/product-2.jpg' },
      { nom: 'Salle à manger', prix: 3000, image: 'assets/product-3.jpg' },
      { nom: 'Table de cuisine', prix: 3000, image: 'assets/product-4.jpg' },
 
  ];

  meublesChambre = [
      { nom: 'Ensemble lit', prix: 1200, image: 'assets/product-5.jpg' },
      { nom: 'Armoire classique', prix: 800, image: 'assets/product-6.jpg' },
      { nom: 'Chambre Adulte', prix: 800, image: 'assets/product-7.jpg' },
      { nom: 'Ensemble de chambre', prix: 800, image: 'assets/product-8.jpg' },
     
  ];

  // Scroll to the connexion form
  scrollToSection(sectionId: string): void {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
