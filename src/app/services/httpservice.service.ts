import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

    constructor(private http: HttpClient,private snackbar: MatSnackBar ) {
  }

  openSnackBar() {
    this.snackbar.open('Something Went Wrong ,Try Again!!', 'ok', {
      duration: 6000,
    });
  }
  getregionbasedcountry(region:any) {
    var result = this.http.get("https://restcountries.com/v2/region/"+region).pipe(map(res => res));
    return result;
  }



  
}