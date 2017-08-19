import { Component, OnInit } from '@angular/core';
import { OuijaService } from '../ouija.service';

@Component({
  selector: 'app-ouija',
  templateUrl: './ouija.component.html',
  styleUrls: ['./ouija.component.css']
})
export class OuijaComponent implements OnInit {

  constructor(public ouija: OuijaService) { }

  ngOnInit() {
  }

}
