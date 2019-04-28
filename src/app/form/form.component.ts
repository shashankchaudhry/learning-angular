import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  defaultSubType = 'basic';
  formData = {
    emailId: '',
    subType: '',
    password: '',
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.formData.emailId = form.value.email;
    this.formData.subType = form.value.subscription;
    this.formData.password = form.value.password;
    form.reset();
  }

}
