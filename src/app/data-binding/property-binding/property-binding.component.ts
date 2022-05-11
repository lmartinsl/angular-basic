import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public accentColor: string = 'accent';
  public disabled: boolean = true;
  public labelFirstButton: string = '';
  public colors: Array<string> = ['primary', 'accent', 'warn', 'basic']
  public idx: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.defineFirstButton();

    setInterval(() => {
      this.cicleColors();
    }, 200)
  }

  public cicleColors(): void {
    // this.colors.forEach(() => {
    //   this.idx > this.colors.length ? this.idx = 0 : this.idx++
    // })

    this.idx = (this.idx + 1) % this.colors.length
  }

  public alterateDisabled(): void {
    this.disabled = !this.disabled
    this.defineFirstButton();
  }

  public defineFirstButton(): void {
    this.disabled ? this.labelFirstButton = 'Enable' : this.labelFirstButton = 'Disable'
  }

}
