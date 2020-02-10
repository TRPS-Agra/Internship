import { Component, OnInit } from '@angular/core';

export interface Bike {
  value: string;
  viewValue: string;
}

export interface BajajModels {
  value: string;
  viewValue: string;
}

export interface Services {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.css']
})
export class AdminInventoryComponent implements OnInit {

  selected : string;
  modelSelected : string;
  selected2 : string;

  constructor() { }

  ngOnInit() {
  }

  bikes: Bike[] = [
    {value: 'Bajaj', viewValue: 'Bajaj'},
    {value: 'Hero', viewValue: 'Hero'},
    {value: 'Honda', viewValue: 'Honda'},
    {value: 'Yamaha', viewValue: 'Yamaha'}
  ];

  bajajModels: BajajModels[] = [
    {value: 'CT100', viewValue: 'CT100'},
    {value: 'Platina', viewValue: 'Platina'},
    {value: 'Discover', viewValue: 'Discover'},
    {value: 'Pulsar', viewValue: 'Pulsar'}
  ];

  services: Services[] = [
    {value: 'Engine', viewValue: 'Engine'},
    {value: 'Gearbox', viewValue: 'Gearbox'},
    {value: 'Accessories', viewValue: 'Accessories'},
    {value: 'Other', viewValue: 'Other'}
  ];
  
}