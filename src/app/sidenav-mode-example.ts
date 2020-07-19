import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Sidenav with configurable mode */
@Component({
  selector: 'sidenav-mode-example',
  templateUrl: 'sidenav-mode-example.html',
  styleUrls: ['sidenav-mode-example.css'],
})
export class SidenavModeExample {
  mode = new FormControl('over');
  //shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */