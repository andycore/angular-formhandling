import {Component} from '@angular/core';
import {routes} from "../../app.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public routerConfig = routes;
}
