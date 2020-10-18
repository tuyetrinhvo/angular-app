import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  userUpdateForm: FormGroup;
  @Input() user: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userUpdateForm = this.formBuilder.group({
      fN: [this.user.firstName, Validators.required],
      lN: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      job: [this.user.job, Validators.required],
      hobbies: this.formBuilder.array([this.user.hobbies ? this.user.hobbies : []])
    });
  }

  onSubmitForm() {
    const formValue = this.userUpdateForm.value;
    const newUser = new User(
      formValue['fN'],
      formValue['lN'],
      formValue['email'],
      formValue['job'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies(): FormArray {
    return this.userUpdateForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

  onRemoveHobby(i: number) {
    this.getHobbies().removeAt(i);
  }

}
