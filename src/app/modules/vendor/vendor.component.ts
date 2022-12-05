import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor() { }
vendorlist:VendorModel[]=[
  {name:'Niha',age:21,city:'Solapur'},
  {name:'Shraa',age:23,city:'Solapur'},
  {name:'Vandana',age:22,city:'Vizag'},
  {name:'Sindhu',age:24,city:'Guntur'},
  {name:'Saicharitha',age:23,city:'Warangal'}
];

  ngOnInit(): void {
  }

}
