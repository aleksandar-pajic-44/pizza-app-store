import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { Menu } from '../../model/menu.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.menuFormGroup = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      slug: [null, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9]+(?:-[a-z0-9]+)*$'), this.slugValidation()])],
      size: [null, Validators.required],
      price: [null, Validators.compose([Validators.required, Validators.min(this.minimalPrice)])],
      date: [null]
    })
  }

  @Input() menuList: Menu[] = [];

  public menuFormGroup: any;
  public isOpenModal:boolean = false;
  public minimalPrice: number = 0.01;
  public menuSizeOptions: any[] = [23, 35, 50];

  ngOnInit(): void {
  }

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.menuFormGroup.reset();
    this.isOpenModal = false;
  }

  slugValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let slugAlreadyExists = false;

      for (let item of this.menuList){
        if(item.slug === control.value){
          slugAlreadyExists = true;
        }
      }

      return slugAlreadyExists ? { slugExists: { value: control.value } } : null;
    }
  }

  addMenuItem(){
    // Mark all inputs as touched
    this.menuFormGroup.markAllAsTouched();

    // If form is not valid, show errors with SWAL
    if(!this.menuFormGroup.valid){
      Swal.fire({
        title: 'Error',
        text: 'Your form is not valid',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#007bff',
      })
      return;
    }

    // Mark all inputs as pristine
    this.menuFormGroup.markAsPristine();

    // Get current datetime
    let currentDate = new Date().getTime();

    // Add current time with specified format as date param
    this.menuFormGroup.controls['date'].setValue(currentDate);

    // Push data
    this.menuList.push(this.menuFormGroup.value);

    // Sort the list after pushing data
    this.menuList = this.menuList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    Swal.fire({
      title: 'Success',
      text: "You've successfully added new menu item.",
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#007bff',
    })

    // Reset form
    this.menuFormGroup.reset();
    
    // Close modal
    this.closeModal();
  }

}
