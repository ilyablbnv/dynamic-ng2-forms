import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'item-form',
    template: require("./item-form.component.html"),
    styles: [require("./item-form.component.css")]
})
export class ItemFormComponent implements OnInit {
    editMode: boolean;

    constructor() {
        this.editMode = true;
    }

    ngOnInit() {
    }

    switchToPreview() {
        this.editMode = false;
    }

    switchToEdit() {
        this.editMode = true;
    }
}
