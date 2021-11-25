import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'galeria';
  fotos: string[] = ["../assets/galeria/01.jpg", "../assets/galeria/02.jpg", "../assets/galeria/03.jpg", "../assets/galeria/04.jpg", "../assets/galeria/05.jpg", "../assets/galeria/06.jpg", "../assets/galeria/07.jpg", "../assets/galeria/08.jpg", "../assets/galeria/09.jpg", "../assets/galeria/10.jpg", "../assets/galeria/11.jpg", "../assets/galeria/12.jpg", "../assets/galeria/13.jpg", "../assets/galeria/14.jpg", "../assets/galeria/15.jpg", "../assets/galeria/16.jpg", "../assets/galeria/17.jpg", "../assets/galeria/18.jpg", "../assets/galeria/19.jpg", "../assets/galeria/20.jpg", "../assets/galeria/21.jpg"];
}
