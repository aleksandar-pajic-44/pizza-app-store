import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { Menu } from '../../model/menu.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.component.html',
  styleUrls: ['./edit-menu-item.component.scss']
})
export class EditMenuItemComponent implements OnInit {

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
  @Input() getSelectedItem: any;

  public menuFormGroup: any;
  public isOpenModal:boolean = false;
  public minimalPrice: number = 0.01;
  public menuSizeOptions: any[] = [23, 35, 50];

  ngOnInit(): void {
    this.menuFormGroup.controls['name'].setValue(this.getSelectedItem.name);
    this.menuFormGroup.controls['slug'].setValue(this.getSelectedItem.slug);
    this.menuFormGroup.controls['size'].setValue(this.getSelectedItem.size);
    this.menuFormGroup.controls['price'].setValue(this.getSelectedItem.price);
    this.menuFormGroup.controls['date'].setValue(this.getSelectedItem.date);
  }

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  slugValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let slugAlreadyExists = false;

      for (let item of this.menuList){

        if(this.getSelectedItem.slug === control.value) {
          slugAlreadyExists = false;
        }

        if(item.slug === control.value){
          slugAlreadyExists = true;
        }
      }

      return slugAlreadyExists ? { slugExists: { value: control.value } } : null;
    }
  }


  editMenuItem(){

    let name = this.menuFormGroup.controls['name'].value;
    let slug = this.menuFormGroup.controls['slug'].value;
    let size = this.menuFormGroup.controls['size'].value;
    let price = this.menuFormGroup.controls['price'].value;

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

    let selectedItem = this.getSelectedItem;

    this.menuList = this.menuList.map(menuItem => {
      if (menuItem.slug == selectedItem.slug) {
        menuItem.name = name;
        menuItem.slug = slug;
        menuItem.size = size;
        menuItem.price = price;
      }
      return menuItem;
    });

    Swal.fire({
      title: 'Success',
      text: "You've successfully edited menu item.",
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#007bff',
    })

    // Close modal
    this.closeModal();
  }

}