import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'save-form',
    template: require("./save-form.component.html"),
    styles: [require("./save-form.component.css")]
})
export class SaveFormComponent implements OnInit {
    private schema: any = {
    'properties': {}
    };

    constructor() {
    }

    ngOnInit() {

    }
}
