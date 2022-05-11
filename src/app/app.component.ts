import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = 'Lucas';
  public person = { name: 'Larissa', age: '25', state: 'SP' }
}
