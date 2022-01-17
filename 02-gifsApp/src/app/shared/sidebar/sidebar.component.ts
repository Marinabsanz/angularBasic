import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent  {


 get historic() {
 

return this.GifsService.historic;   }



 constructor(private GifsService: GifsService){


 }

 }
