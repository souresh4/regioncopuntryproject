import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from "../../services/httpservice.service";
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  public regionSet: any = [
    { value: 'europe', viewValue: 'Europe' },
    { value: 'asia', viewValue: 'Asia' }
  ];
  public countriesDatasetArray: any = [];
  public flag: boolean = false;
  public countrydetailsFlag: boolean = false;
  public seletedCoutryDataset:any;
  constructor(public httpsService: HttpserviceService) { }

  ngOnInit() {
  }
  changeEvent(data: any) {
    console.log("data", data.value);
    this.httpsService.getregionbasedcountry(data.value).subscribe((response: any) => {
      this.countriesDatasetArray = response;
      this.flag = true;
      console.log("countriesDatasetArray", this.countriesDatasetArray);

    })
  }

  selectcountryFunc(dataset:any){
    console.log("dataset",dataset);
    this.seletedCoutryDataset=dataset;
    this.countrydetailsFlag=true;
  }
}
