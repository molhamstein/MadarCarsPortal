import { MainService } from './../../../../services/main.service';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fuse-nav-vertical-item',
    templateUrl: './nav-vertical-item.component.html',
    styleUrls: ['./nav-vertical-item.component.scss']
})
export class FuseNavVerticalItemComponent implements OnInit {
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;
    isSuperAdmin
    constructor(private mainServ: MainService) {
    }

    ngOnInit() {
    }

    cheack(item) {
        this.isSuperAdmin = this.mainServ.loginServ.getIsSuperAdmin()

        if (item.data == null || (item.data != null && item.data['isSuperAdmin'] == true && this.isSuperAdmin == "true"))
            return true
    }

    isActive(item) {
        return this.mainServ.globalServ.isActive(item.id)
    }
}
