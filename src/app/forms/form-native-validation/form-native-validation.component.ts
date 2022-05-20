import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-native-validation',
  templateUrl: './form-native-validation.component.html',
  styleUrls: ['./form-native-validation.component.css']
})
export class FormNativeValidationComponent implements OnInit {

  public firstName: string = '';
  public lastName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {

  }

}
