import { Component,HostListener,Inject,Input } from '@angular/core';
import { JioserviceService } from './jioservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'AlgoTradersBot';
  constructor(@Inject(JioserviceService)jioserviceService:any){
    console.log(jioserviceService);
    console.log("From component");
  }
/**@HostListener('click',['$event'])
ohhostclick(event:Event)
{
  alert("Hello AlgotradersBot")
}**/
}
