import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {User} from "../models/user.model";

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUserByEmail(email: string) {
    return this.httpClient.get(`http://localhost:3000/users?email=${email}`)
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  createNewUser(user: User) {
    return this.httpClient.post('http://localhost:3000/users', user);
  }
}
