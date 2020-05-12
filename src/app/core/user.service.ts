import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, throwError } from "rxjs";
import { distinctUntilChanged, map, catchError } from "rxjs/operators";
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: "root",
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<any>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  public permissions: Array<any>;
  constructor(private http: HttpClient,
    private permissionService : NgxPermissionsService) { }

  async populate() {
    if (this.getToken()) {
      try {
        const res: any = await this.http
          .get(`${environment.apiUrl}auth/current`)
          .toPromise();
        this.setAuth({user : res});
        this.isAuthenticatedSubject.next(true);
        return true;
      } catch (error) {
        this.purgeAuth();
        this.isAuthenticatedSubject.next(false);
        return false;
      }
    } else {
      this.purgeAuth();
      return false;
    }
  }


  getCurrentUser() {
    return this.http.get(`${environment.apiUrl}auth/current`)
  }

  async setAuth({ user, token }: any) {
    if (token) {
      this.saveToken(token);
    }
    this.permissionService.loadPermissions([user.role.slug]);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(credentials): any {
    return this.http.post(`${environment.apiUrl}auth/login`, credentials).pipe(
      map((res: any) => {
        this.setAuth(res);
        return res;
      }),
      catchError(this.formatErrors)
    );
  }

  addUser(user: any): any {
    return this.http.post(`${environment.apiUrl}auth/signup`, user).pipe(map((res: any) => {
      this.setAuth(res);
      return res;
    }))
  }

  purgeAuth() {
    this.destroyToken();
    this.currentUserSubject.next({});
    this.isAuthenticatedSubject.next(false);
  }

  updateUser(obj){
    return this.http.put(`${environment.apiUrl}auth/user/update`, obj);
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  destroyToken() {
    localStorage.removeItem("token");
  }



  getAllUser(keyword = ""){
    return this.http.get(`${environment.apiUrl}user?keyword=${keyword}`)
  }


  getAllRole(){
    return this.http.get(`${environment.apiUrl}user/roles`); 
  }


  updateRole(obj){
    return this.http.put(`${environment.apiUrl}user/role`, obj);
  }
}
