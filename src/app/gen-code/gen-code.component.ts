// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-gen-code',
//   templateUrl: './gen-code.component.html',
//   styleUrls: ['./gen-code.component.css']
// })
// export class GenCodeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-gen-code',
    templateUrl: './gen-code.component.html',
    styleUrls: ['./gen-code.component.css']
})
export class GenCodeComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder) { }

    

    ngOnInit() {
        this.form = this.fb.group({ 'firstName' : ['', [Validators.required]]
,'lastName' : ['', [Validators.required]]
,'carModel' : ['', [Validators.required]]
,'address' : ['', [Validators.compose([Validators.required,Validators.minLength(40)])]]
,'email' : ['', [Validators.required]]
,'dob' : ['', [Validators.required]]
,'gender' : ['', [Validators.required]]
,'agreeToTerms' : ['', [Validators.required]]
,'submit' : ['', []]
});
    }

    onFormSubmit(formValue:String) {

    }
}