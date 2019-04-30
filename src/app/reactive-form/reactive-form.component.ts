import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpForm: FormGroup;
  statuses: string[] = [
    'Stable',
    'Critical',
    'Finished',
  ];
  submittedForm: {
    'name': string,
    'email': string,
    'status': string,
  } = null;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        'name': new FormControl(null, [Validators.required, this.forbiddenProject]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'status': new FormControl('Stable'), 
      }
    );
  }

  onSubmit() {
    this.submittedForm = {
      'name': this.signUpForm.value['name'],
      'email': this.signUpForm.value['email'],
      'status': this.signUpForm.value['status'],
    };
    this.signUpForm.reset();
  }

  forbiddenProject(formControl: FormControl): {[s: string]: boolean} {
    if (formControl.value === 'Test') {
      return {
        'nameIsForbidden': true,
      }
    }
    return null;
  }

}
