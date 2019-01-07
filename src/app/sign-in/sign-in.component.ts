import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Cookie } from "ng2-cookies/ng2-cookies";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  public email: any;
  public password: any;
  public x;
  public fullname;
  public userId: any;

  constructor(
    public service: ServiceService,
    public router: Router,
    public toastr: ToastrService,
    public _route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public validate = () => {
    if (!this.email) {
      this.toastr.warning("enter email");
    } else if (!this.password) {
      this.toastr.warning("enter password");
    } else {
      let data = {
        email: this.email,
        password: this.password
      };
      console.log(data);
      this.service.signin(data).subscribe(
        response => {
          if (response.status === 200) {
            this.userId = response.data.userDetails.userId;
            Cookie.set("authtoken", response.data.authtoken);
            this.service.setUserInfoInLocalStorage(response.data.userDetails);
            this.router.navigate(["/login", this.email]);
          } else {
            this.toastr.error(response.message);
          }
        },
        err => {
          this.toastr.error("password incorrect");
        }
      );
    }
  };

  public navigate = () => {
    this.router.navigate(["/signup"]);
  };
}
