import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Parameter } from "../../../shared/parameter.interface";

@Component({
    selector: 'meta-form',
    template: require("./meta-form.component.html"),
    styles: [require("./meta-form.component.css")],
})
export class MetaFormComponent implements OnInit {
    public metaForm: FormGroup;

    public types: string[] = ['string', 'boolean', 'number'];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.metaForm = this._fb.group({
            properties: this._fb.array([
                this.initParam(),
            ])
        })
    }


    initParam(): any {
        return this._fb.group({
            description: ['', Validators.required],
            type: ['', Validators.required]
        })
    }

    addParam(): void {
        const control = <FormArray>this.metaForm.controls['properties'];
        control.push(this.initParam());
    }

    removeParam(i: number) {
        const control = <FormArray>this.metaForm.controls['properties'];
        control.removeAt(i);
    }

    sendJSON() {

    }
}