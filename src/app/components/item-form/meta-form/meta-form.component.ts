import { Component, OnInit } from '@angular/core';
import { Parameter } from "../../../shared/parameter.interface.ts";

@Component({
    selector: 'meta-form',
    template: require("./meta-form.component.html"),
    styles: [require("./meta-form.component.css")]
})
export class MetaFormComponent implements OnInit {
    //types: Array<string> = ['String', 'Integer', 'Boolean'];

    constructor() {
    }

    ngOnInit() {
    }
}