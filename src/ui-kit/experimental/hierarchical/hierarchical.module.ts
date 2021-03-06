import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamHierarchicalAutocompleteComponent } from './autocomplete/autocomplete.component';
import { SamHierarchicalTreeComponent } from './hierarchical-tree/hierarchical-tree.component';
import { SamHierarchicalTreeGridComponent } from './hierarchical-tree-grid/hierarchical-tree-grid.component';
import { SamHierarchicalSelectedResultComponent } from './selected-result/selected-result.component';
import { SamHierarchicalTreeFilterComponent } from './hierarchical-tree-filter/hierarchical-tree-filter.component';
import { SamHierarchicalTreeHeaderComponent } from './hierarchical-tree-header/hierarchical-tree-header.component';
import { SamHierarchicalTreeFooterComponent } from './hierarchical-tree-footer/hierarchical-tree-footer.component';
import { FormsModule } from '@angular/forms';
import { SamWrapperModule } from '../../wrappers';

@NgModule({
  imports: [
    CommonModule,FormsModule,SamWrapperModule
  ],
  declarations: [SamHierarchicalAutocompleteComponent, SamHierarchicalTreeComponent,
    SamHierarchicalTreeGridComponent, SamHierarchicalSelectedResultComponent,
    SamHierarchicalTreeFilterComponent, SamHierarchicalTreeHeaderComponent,
    SamHierarchicalTreeFooterComponent],
  exports: [SamHierarchicalAutocompleteComponent, SamHierarchicalSelectedResultComponent,
    SamHierarchicalTreeComponent, SamHierarchicalTreeGridComponent]
})
export class SamHierarchicalModule { }
