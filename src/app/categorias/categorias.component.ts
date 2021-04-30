import { Component, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent{  

@Output() peliculaEvent = new EventEmitter<Object>();
@Output() aceptadoEvent = new EventEmitter<boolean>();

Peli(titu: string, y: string, img: string, genero: string, ){
  var year = 2021;
  if (titu == ""){
    titu = ""
  }
  if (y != ""){
    year = parseInt(y);
  }
  this.aceptadoEvent.emit(false);
  this.peliculaEvent.emit({
    src: img,
    titulo: titu,
    year: year,
    genero: genero
  })
}

generos = [
  {
  value : "Anime",
  text : "Anime"
  },
  { 
  value: "Accion",
  text : "Accion"
  },
  { 
  value: "Autos",
  text : "Carreras"
  },
  {
  value: "Sus",
  text : "Suspenso"
  },
  {
    value: "Scary",
    text : "Terror"
  },
  {
    value: "Sub",
    text: "Subtitulado"
  }
]

constructor() { }

}




