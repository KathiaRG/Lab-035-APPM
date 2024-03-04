import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html'
})
export class RecetaPage implements OnInit {

  public recetas: Receta[] = [];
  public recetaService: RecetaService

  constructor(recetaService: RecetaService) { 
    this.recetaService = recetaService;
  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}