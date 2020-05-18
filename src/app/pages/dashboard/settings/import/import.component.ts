import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/core/user.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { ImportService } from 'src/app/core/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  environnement = environment;
  uploading: boolean;
  constructor(private userService: UserService,
    private notificationService: NzNotificationService,
    private importService: ImportService,
    private modalService: NzModalService) { }
  header;
  dateFormat = "EEEE d MMMM";
  date = new Date;
  data = {
    from: this.date,
    to: this.date
  }
  dataOnSend: any = {};
  imports;

  async ngOnInit() {
    this.header = {
      authorization: "Bearer " + this.userService.getToken()
    }
    this.imports = await this.importService.getAllImports().toPromise()
  }




  delete(impor) {
    this.modalService.confirm({
      nzTitle: "Voulez vous supprimer cet import ?",
      nzContent: "Cela aura pour effet de vider les commandes contenants les produits importés",
      nzOnOk: async () => {
        await this.importService.delete(impor.id).toPromise();
        this.imports = await this.importService.getAllImports().toPromise();
      }
    })
  }



  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue) {
      return false;
    }
    return endValue.getTime() <= this.data.from.getTime();
  };

  disabledStartDate = (endValue: Date): boolean => {
    if (!endValue) {
      return false;
    }
    return endValue.getTime() <= this.date.getTime();
  };

  onStartChange(value) {
    this.data.to = value;
  }
  onBeforeUpload = () => {
    this.dataOnSend.from = this.formatDate(this.data.from);
    this.dataOnSend.to = this.formatDate(this.data.to);
    this.notificationService.success("Succès", "L'import a correctement été traité");
    setTimeout(async () => {
      this.imports = await this.importService.getAllImports().toPromise();
    }, 500)
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
