import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(private readonly emailService: EmailService) { }

  ngOnInit() {
    this.emailService.counter = 5;
    console.log(this.emailService.counter);

  }

}
