import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'item',
    template: require("./item.component.html"),
    styles: [require("./item.component.css")]
})
export class ItemComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
