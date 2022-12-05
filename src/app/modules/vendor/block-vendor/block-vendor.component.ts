import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { VendorModel } from 'src/app/vendor-model';
@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  sVendor!:VendorModel


  constructor(private ss:SharedserviceService) { }

  ngOnInit(): void {
    this.ss.VendorObs.subscribe((d)=>{
      this.sVendor=d;
    })
  }

}
