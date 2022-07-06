import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../model/menu.model';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {

  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param item.name list of elements to search in
   * @param menuFilterText search string
   * @returns list of elements filtered by search text or []
   */
   transform(item: Menu[], menuFilterText: string): Menu[] {
    if (!item) {
      return [];
    }
    if (!menuFilterText) {
      return item;
    }
    menuFilterText = menuFilterText.toLowerCase();

    return item.filter(it => {
      return it.toString().toLowerCase().includes(menuFilterText);
    });
  }


}
