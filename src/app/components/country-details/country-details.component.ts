import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() item = {};
  public countrydetailsflag: boolean = false;
  public countrydetaildata: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: any) {
    console.log("chnages", changes)
    this.countrydetaildata = changes.item.currentValue;
    console.log("countrydetaildata",this.countrydetaildata);
    this.countrydetailsflag = true;
  }
}
