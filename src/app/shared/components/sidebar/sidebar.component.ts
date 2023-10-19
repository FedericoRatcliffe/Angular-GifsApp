import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService:GifsService) { }

  //GETTER PARA PODER UTILIZAR EL SERVICIO EN EL HTML, YA QUE ES PRIVADO
  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }
  
  searchTag( tag:string ):void {
    this.gifsService.searchTag( tag );
  }

}
