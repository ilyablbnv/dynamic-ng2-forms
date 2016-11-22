import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Parameter } from "../../../shared/parameter.interface";
import { SharedService } from "../../../shared/shared.service";

@Component({
    selector: 'meta-form',
    template: require("./meta-form.component.html"),
    styles: [require("./meta-form.component.css")],
})
export class MetaFormComponent implements OnInit {
    public metaForm: FormGroup;

    public types: string[] = ['string', 'boolean', 'number'];

    constructor(private _fb: FormBuilder, private sharedService: SharedService) { }

    ngOnInit() {
        this.metaForm = this._fb.group({
            params: this._fb.array([
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
        const control = <FormArray>this.metaForm.controls['params'];
        control.push(this.initParam());
    }

    removeParam(i: number) {
        const control = <FormArray>this.metaForm.controls['params'];
        control.removeAt(i);
    }

    sendJSON() {
        let json = JSON.stringify(this.metaForm.value);
        this.sharedService.MetaData(json);
    }
}