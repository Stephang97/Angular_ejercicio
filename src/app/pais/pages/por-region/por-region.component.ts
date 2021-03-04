import { Component, OnInit } from '@angular/core';
import { PaisService } from "../../pais.service";
import { Regiones } from '../../interfeces/region.interfece';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {

  hayError:boolean = false;
  termino:string="prueba de pais";
  paises:Regiones[]=[];
  constructor(public api:PaisService){

  }

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino
    this.api.buscarRegion(termino)
                                  .subscribe(

                                    (paises)=>{console.log(paises); this.paises=paises},(err)=>{this.hayError= true;
                                    this.paises=[]
                                    }

                                  )
    }


}
