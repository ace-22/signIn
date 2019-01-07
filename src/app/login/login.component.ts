import { Component, OnInit } from "@angular/core";

import { Cookie } from "ng2-cookies/ng2-cookies";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ServiceService } from "src/app/service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public userId;
  public fullname;

  constructor(
    public _route: ActivatedRoute,
    private service: ServiceService,
    public router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit() {}
  public email = this._route.snapshot.params["email"];
  public logout = () => {
    this.router.navigate(["/signin"]);
  };
}
