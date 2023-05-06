import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataServices } from '../data.services';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formReg: FormGroup;

  constructor(
    private dataServices: DataServices,
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    
  }

  ngOnInit(): void {  };
  onSubmit() {
   this.dataServices.Register(this.formReg.value)
   .then(Response=> {
    console.log(Response)
   })
   .catch(error=> console.log(error));
   this.router.navigate(['/login']);
  }
}
