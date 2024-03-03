import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-datos-alumnos',
  templateUrl: './datos-alumnos.component.html'
})
export class DatosAlumnosComponent  implements OnInit {

  @Input() alumnosList:Alumnos[] =[];
  @Output() eliminar: any = new EventEmitter<Alumnos>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}