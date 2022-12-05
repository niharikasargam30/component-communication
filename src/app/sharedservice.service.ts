import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { VendorModel } from './vendor-model';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() { }

  VendorObs = new Subject<VendorModel>();
  ve?:VendorModel;
  setVendor(vendor: VendorModel)
  {
    this.ve=vendor;
    this.VendorObs.next(vendor);
  }
}
