import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  public clientForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }

  public generateForm(): void {

    const { minLength, maxLength, required, max, min, email } = Validators

    this.clientForm = this.fb.group({
      firstName: ['', [required, minLength(5)]],
      lastName: ['', [required]],
      birth: [new Date(), [required]],
      age: [0, [required, min(18), max(120)]],
      email: ['', [required, email]],
      street: ['', [required]],
      city: ['', [required]],
      state: ['', [required, minLength(2), maxLength(2)]],
      phone1: ['', [required]],
      phone2: ['', [required]],
    });
  }

  public onSubmit(): void { }

}
