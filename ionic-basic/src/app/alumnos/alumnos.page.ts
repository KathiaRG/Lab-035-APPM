import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumnos'
import { AlumnoService } from '../alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html'
})

export class AlumnoPage implements OnInit {

  alumnos:Alumnos[]= [];
  nombre: string = '';
  matricula: string ='';
  estado: string = '';
  idActualizar: any;
  error: boolean = false;


  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.setAlumnos([
      {id:1, nombre: 'Gerardo Martinez'
      ,matricula: '745589'},
      {id:2, nombre: 'Isela Rodriguez',
      matricula: '855449'},
      {id:3, nombre: 'Esteban',
      matricula: '0021554'}
    ]);

    this.alumnos = this.alumnoService.getAlumos();
    this.estado ='guardar';
  }

  public guardar(){
    if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.matricula == undefined || this.matricula == '') ) {
      this.error = true;
      return;
    }  
    let alumno: Alumnos={
      nombre: this.nombre,
      matricula: this.matricula
    };

    if (this.estado ==='actualizar'){
      alumno.id = this.idActualizar;
      this.alumnos = this.alumnoService.actualiza(alumno);
    }
    if(this.estado === 'guardar'){
      this.alumnoService.agregarAlumno(alumno);
      this.alumnos = this.alumnoService.getAlumos();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }

  public eliminar(id:number){
    this.alumnoService.borrarAlumno(id);
    this.alumnos = this.alumnoService.getAlumos();
  }

  public editar(alumno:Alumnos){
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }

}

