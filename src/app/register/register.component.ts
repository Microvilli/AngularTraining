import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private register: FormBuilder) {

    this.registerForm = this.register.group({
      name: this.register.group({
        firstName: [''],
        lastName: [''],
      }),
    });

  }

  ngOnInit() {
  }

  onRegister() {
    console.log(this.registerForm);
  }


}
