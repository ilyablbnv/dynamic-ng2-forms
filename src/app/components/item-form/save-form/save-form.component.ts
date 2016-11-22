import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../../../shared/shared.service";

import 'rxjs/Rx';

@Component({
    selector: 'save-form',
    template: require("./save-form.component.html"),
    styles: [require("./save-form.component.css")],
})
export class SaveFormComponent implements OnInit {
    schema: string[];

    constructor(private sharedService: SharedService) {
        sharedService.metaData$.subscribe((res) => this.schema = res);
    }

    ngOnInit() {
    }
}
