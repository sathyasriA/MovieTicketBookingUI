import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from './login.component.service';

@Component({ 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.loginService
        .addUser(this.form.value, this.router)
        .subscribe(console.log("test"));

        this.loading = true;
    }
}