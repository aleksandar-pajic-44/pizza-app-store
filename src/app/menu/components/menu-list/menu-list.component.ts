import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Menu } from '../../model/menu.model';
// Import service
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})

// @Pipe({ name: 'menuFilter' })

export class MenuListComponent implements OnInit {

  constructor(private menuService: MenuService) {}

  public menuList: Menu[] = [];
  public menuFilter: string = '';
  public menuLoading: boolean = false;
  // public menuFilterText: string = '';

  ngOnInit(): void {
    this.getMenuItems();
  }

  // Get menu items
  getMenuItems() {
    // Set as initial loading state every time we call this function
    this.menuLoading = false;

    this.menuService.getMenuItems().subscribe(response => {
      this.menuList = response;
    })

    // Menu is loaded
    this.menuLoading = true;
  }

  deleteMenuItem(slug: string) {
    Swal.fire({
      title: 'Do you really want to delete the following item:',
      showDenyButton: true,
      icon: 'warning',
      confirmButtonText: 'Delete item',
      confirmButtonColor: 'red',
      denyButtonText: `Cancel`,
      denyButtonColor: 'gray',
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ title: "You've successfully deleted the menu item.", icon: 'success', confirmButtonText: 'Ok', confirmButtonColor: '#007BFF'})
        this.menuList = this.menuList.filter(function(item: any) {
          return item.slug !== slug;
        });
      }
    });
  }

  filteredMenuItems(menuList: Menu[]) {

    // Convert string to lowercase
    let filter = this.menuFilter.toLowerCase();

    // Duplicate the object
    let filteredMenu = Object.assign({}, menuList);

    // Filter the data
    filteredMenu = menuList.filter(function(item: Menu) {
        if (item.name.toLowerCase().indexOf(filter) === -1) {
          return false;
        } else {
          return true;
        }
    });

    // console.log(filteredMenu)
    return filteredMenu;
}
}
