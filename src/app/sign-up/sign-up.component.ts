import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service.service";
import { ToastrService } from "ngx-toastr";
import { Cookie } from "ng2-cookies/ng2-cookies";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  public email: any;
  public password: any;
  public fullname: any;
  public mobile: any;
  public apiKey: any;
  public a;
  public y = false;

  constructor(
    private router: Router,
    private service: ServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  navigate = () => {
    if (!this.email) {
      this.toastr.warning("Enter a valid email id");
    } else if (!this.password) {
      this.toastr.warning("Please set a password");
    } else if (!this.mobile) {
      this.toastr.warning("Enter a valid mobile number");
    } else if (!this.fullname) {
      this.toastr.warning("Please mention your full name");
    } else if (!this.apiKey) {
      this.toastr.warning("Please mention API key");
    } else {
      let data = {
        email: this.email,
        password: this.password,
        fullname: this.fullname,
        mobile: this.mobile,
        apiKey: this.apiKey
      };
      console.log(data);
      this.service.signup(data).subscribe(
        response => {
          console.log(response);
          if (response.status === 200) {
            console.log(response.data);
            this.toastr.success("Signup successfull");
            response.data.firstname = this.fullname;

            setTimeout(() => {
              this.router.navigate(["/signin"]);
            }, 2000);
          } else {
            this.toastr.error(response.message);
          }
        },
        err => {
          this.toastr.error("some error occured");
        }
      );
    }
  };
}
