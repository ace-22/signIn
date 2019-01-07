import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cookie } from "ng2-cookies/ng2-cookies";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { NgModule } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(public http: HttpClient) {}

  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("userInfo"));
  };

  public setUserInfoInLocalStorage = data => {
    localStorage.setItem("userInfo", JSON.stringify(data));
  };

  public signup(data): Observable<any> {
    const params = new HttpParams()
      .set("email", data.email)
      .set("password", data.password)
      .set("fullname", data.fullname)
      .set("mobile", data.mobile)
      .set("apiKey", data.apiKey);

    return this.http.post(
      `https://chatapi.edwisor.com/api/v1/users/signup`,
      params
    );
  }

  public signin(data): Observable<any> {
    const params = new HttpParams()
      .set("email", data.email)
      .set("password", data.password);

    return this.http.post(
      `https://chatapi.edwisor.com/api/v1/users/login`,
      params
    );
  }


  public logout(): Observable<any> {
    const params = new HttpParams().set("authToken", Cookie.get("authtoken"));
    return this.http.post(
      `https://chatapi.edwisor.com/api/v1/users/logout`,
      params
    );
  }
}
