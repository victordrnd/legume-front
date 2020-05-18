import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  form;
  user;
  constructor(private fb: FormBuilder, private userService: UserService, private notificationService: NzNotificationService, private modalService : NzModalService) { }

  async ngOnInit() {
    if(!this.user){
      this.user = await this.userService.getCurrentUser().toPromise();
    }
    console.log(this.user);
    this.form = this.fb.group({
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      phone: [this.user.phone, [Validators.required, Validators.pattern("[0-9]{10}")]],
      email: [this.user.email, [Validators.required, Validators.email]]
    })
  }


  async save() {
    await this.userService.updateUser({id: this.user.id,...this.form.value}).toPromise()
      .then(res => {
        this.notificationService.success("Succès", "Les informations de votre profil ont été mises à jour")
        this.modalService.closeAll();
      })
      .catch(err => this.notificationService.error("Erreur", "Une erreur est survenue lors de la mise à jour, veuillez vérifier les informations saisies"));
  
    }


  get firstname() {
    return this.form.controls.firstname
  }
  get lastname() {
    return this.form.controls.lastname
  }
  get phone() {
    return this.form.controls.phone
  }

  get email() {
    return this.form.controls.email
  }



}
