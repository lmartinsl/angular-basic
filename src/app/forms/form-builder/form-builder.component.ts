import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  public clientForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.useFormGroup()
    this.useFormBuilder()
  }

  public useFormGroup(): void {
    this.clientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
      })
    })
  }

  public useFormBuilder(): void {
    this.clientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: ['']
      })
    })
  }

  public submit(): void {
    console.log(this.clientForm.value)
  }

}
