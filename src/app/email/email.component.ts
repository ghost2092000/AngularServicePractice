import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private readonly emailService: EmailService) { }

  ngOnInit() {
    console.log(this.emailService.counter);

  }

}
