import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
  apartForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      floorNumber: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      surface: ['', Validators.required],
      terrace: ['no', Validators.required],
      surfaceTerrace: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      residence: ['']
    });
  }

  onSubmit() {
    // Logique de soumission du formulaire ici
    console.log(this.apartForm.value);
  }
}

