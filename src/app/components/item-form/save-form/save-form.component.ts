import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'save-form',
    template: require("./save-form.component.html"),
    styles: [require("./save-form.component.css")]
})
export class SaveFormComponent implements OnInit {
    @Input() schema;

    constructor() {
        console.log(this.schema);
    }

    ngOnInit() {
    }
}
