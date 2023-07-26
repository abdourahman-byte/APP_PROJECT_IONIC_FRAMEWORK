import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Serveys forms', url: '/form', icon: 'help-circle' },
    { title: 'Take a picture', url: '/picture', icon: 'camera' },
    { title: 'Identification', url: '/profile', icon: 'person-circle' },
    { title: 'Quran', url: '/quran', icon: 'book' },
    { title: 'Bible', url: '/bible', icon: 'book' },



  ];

}
