import { Component, OnInit } from '@angular/core';

export interface VehicleType {
  value: string;
  viewValue: string;
}

export interface Brands {
  value: string;
  viewValue: string;
}

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
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  selected : string;
  brandSelected : string;
  modelSelected : string;
  selected2 : string;

  constructor() { }

  ngOnInit() {
  }

  vehicleType : VehicleType[] = [
    {value: 'Bike', viewValue: 'Bike'},
    {value: 'Car', viewValue: 'Car'},
    {value: 'Electronics', viewValue: 'Electronics'},
  ]

  brands : Brands[] = [
    {value: 'Bajaj', viewValue: 'Bajaj'},
    {value: 'Hero', viewValue: 'Hero'},
    {value: 'Honda', viewValue: 'Honda'},
    {value: 'Yamaha', viewValue: 'Yamaha'}
  ]

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
