import { Component, OnInit } from '@angular/core';
import { Parameter } from "../../../shared/models/parameter.model";

@Component({
    selector: 'meta-form',
    template: require("./meta-form.component.html"),
    styles: [require("./meta-form.component.css")]
})
export class MetaFormComponent implements OnInit {
    types: Array<string> = ['String', 'Integer', 'Boolean'];
    paramsList: Array<Parameter>;

    constructor() {
        this.paramsList = [];
    }

    addParam() {
        this.paramsList.push(new Parameter('', this.types[0])); // Set default type to a 'String'
    }

    ngOnInit() {
    }
}