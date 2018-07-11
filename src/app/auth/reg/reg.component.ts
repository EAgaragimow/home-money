import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'mel-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'name': new FormControl(null, [Validators.required]),
      'checkbox': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    console.log(this.form);
    const {email, password, name} = this.form.value;
    // Такая запись подтягивает нужные поля - "email, password, name", из обьекта - "this.form.value"
    const user = new User(email, password, name);

    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      })
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({forbiddenEmail: true});
          } else {
            resolve(null);
          }
        })
    });
  }

}
