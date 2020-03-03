import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title = 'Welcome';
  continueUrl = '';
  loginUrl = '';
  logoutUrl = '';
  apName = '';
  apTags = '';
  apMac = '';
  mauth = '';
  username = 'bcpdd';
  password = '22099189';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.continueUrl = params.continue_url || '';
      this.loginUrl = `${params.login_url}&username=${this.username}&password=${this.password}` || '';
      this.logoutUrl = params.logout_url || '';
      this.apName = params.ap_name || '';
      this.apTags = params.ap_tags || '';
      this.apMac = params.ap_mac || '';
      this.mauth = params.mauth || '';
    });
  }


}
