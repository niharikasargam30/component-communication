import { Component, OnInit ,Input} from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private ss:SharedserviceService) { }
@Input() activevendorname: VendorModel[]=[];
selectedVendor?:VendorModel;
OnselectedVendor(vendor:VendorModel):void {
  this.selectedVendor=vendor;
  console.log(this.selectedVendor);
  this.ss.setVendor(this.selectedVendor);

}
  ngOnInit(): void {
  }

}
