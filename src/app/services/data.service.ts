import { Injectable } from '@angular/core';
import { Data } from '../entity/data';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl='http://localhost:8080/api/temp';

  constructor(private httpClient:HttpClient) { }
  
    getRecentData():Observable<Data>{
      return this.httpClient.get<Data>(this.baseUrl.concat("/new"));}

    getDataByTime(lInstant:string,hInstant:string):Observable<Data[]> {
        return this.httpClient.get<Data[]>(this.baseUrl.concat("/tbetween/").concat(lInstant).concat("/and/").concat(hInstant));
    }

    public getDataByMinAndMaxTemp( lowTemp:number,  highTemp:number):Observable<Data[]> {
      return this.httpClient.get<Data[]>(this.baseUrl.concat("/between/").concat(lowTemp.toString()).concat("/and/")
      .concat(highTemp.toString()));
    }
}
