/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {

    }
    toggle() {

    this.localeService.language = 'en';
  } 
    toggle1() {

    this.localeService.language = 'fr';
  } 
    toggle2() {

    this.localeService.language = 'ar';
  } 

}
