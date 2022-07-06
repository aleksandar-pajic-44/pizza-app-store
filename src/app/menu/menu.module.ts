import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './containers/menu/menu.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { FilterMenuPipe } from './pipes/filter-menu.pipe';
import { AddMenuItemComponent } from './components/add-menu-item/add-menu-item.component';
import { EditMenuItemComponent } from './components/edit-menu-item/edit-menu-item.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
];

@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    FilterMenuPipe,
    AddMenuItemComponent,
    EditMenuItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MenuModule { }
