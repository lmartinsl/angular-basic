import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public buttonLabel: string = 'My button'
  public i: number = 0;
  public spinnerMode: string = 'determinate';
  public btnEnable: boolean = true;
  public valueSpinner: number = 0;
  public selectDisabled: boolean = false;
  public foods: Array<string> = ['Yakisoba', 'Macarração', 'Bisteca', 'Feijoada'];
  public optionSelected: string = '';
  public inputName: string = 'Lucas';

  constructor() { }

  ngOnInit(): void { }

  public save(): void {
    alert('Cliquei no botão!')
  }

  public inc(): void {
    this.i++;
    this.buttonLabel = `O botão foi clicado ${this.i}x`
  }

  public disasbleAll(): void {
    this.btnEnable = false;

    setTimeout(() => {
      this.btnEnable = true;
      this.valueSpinner = 0;
      clearInterval(int)
    }, 5000)

    const int = setInterval(() => {
      this.valueSpinner = (this.valueSpinner + 10) % 110;
    }, 450)
  }

  public cbChange(event: MatCheckboxChange): void {
    this.selectDisabled = event.checked
  }

  public selectionChanged(event: MatSelectChange): void {
    this.optionSelected = event.value
  }
}
