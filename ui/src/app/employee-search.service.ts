import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ENDPOINTS, BASE_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSearchService {

  constructor(private http: HttpClient) { }

  searchEmployee(query): Observable<any> {
    return this.http.get(BASE_URL + ENDPOINTS["search-employee"] + query)
                    .pipe(map(res => res))
  }

  getEmployee(id): Observable<any> {
    return this.http.get(BASE_URL + ENDPOINTS["detail-employee"] + id)
                    .pipe(map(res => res));
  }
}
