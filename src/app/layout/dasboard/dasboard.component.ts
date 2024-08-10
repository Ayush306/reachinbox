import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MailListComponent } from "./mail-list/mail-list.component";
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [SidebarComponent, MailListComponent],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export class DasboardComponent  implements OnInit{
  constructor(private apiService:ApiServiceService){}

  ngOnInit(){
    this.getMailList();
    console.log("call mail list");

  }

  getMailList(){
    this.apiService.getMailList().subscribe({next:(res)=>{
      console.log(res);

    },error:()=>{}})
  }

}
