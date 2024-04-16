import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-appartment-component',
  templateUrl: './detail-appartment-component.component.html',
  styleUrls: ['./detail-appartment-component.component.css']
})
export class DetailAppartmentComponentComponent {
  id!:number
  constructor(private Act : ActivatedRoute){}


  ngOnInit(){
    this.id= this.Act.snapshot.params['id'];
  }
}
