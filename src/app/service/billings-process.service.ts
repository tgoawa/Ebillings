import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICount } from 'src/app/model/count';

const api = environment.envApi;
@Injectable()
export class BillingsProcessService {

  constructor(private http: HttpClient) { }

  getBillingsCount() {
    return this.http.get<ICount>(api + 'GetBillingsCount')
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  processBillings() { }

  updateEmail() { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
