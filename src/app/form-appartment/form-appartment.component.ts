import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent {

  apartForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.createForm(); 
  }

  createForm() {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', Validators.required],
      terrace: ['',Validators.required],
      surfaceTerrace: ['',Validators.required],
      category: ['S+1',Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      residence: ['',[Validators.required]]
    });
  }
}