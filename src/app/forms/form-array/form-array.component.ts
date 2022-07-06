import { FormGroup, FormBuilder, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  public clientForm: FormGroup;

  public phones: FormArray;
  public children: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }

  public generateForm(): void {

    const name = { firstName: [''], lastName: [''] }
    const address = { street: [''], city: [''], state: [''] }
    const children = [
      this.fb.group({
        name: [''],
        age: ['']
      })
    ]
    const phones = ['']

    this.clientForm = this.fb.group({
      ...name,
      address: this.fb.group({ ...address }),
      phones: this.fb.array([...phones]) as FormArray,
      children: this.fb.array([...children])
    })

    this.phones = this.clientForm.get('phones') as FormArray
    this.children = this.clientForm.get('children') as FormArray
  }

  public submit(): void {
    console.log(this.clientForm.value)
  }


  public addPhone(): void {
    this.phones.push(this.fb.control(''))
  }

  public addChild(): void {
    this.children.push(this.fb.group({
      name: [''],
      age: ['']
    }))
  }

}
