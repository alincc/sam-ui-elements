import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SamBoxComponent } from './box';
import { SamContainerComponent } from './container';
import { SamIconsModule } from './icon';
import { SamLabelNextComponent } from './label';
import { SamLayoutComponent } from './layout';
import { SamLayoutContentComponent } from './layout';
import { SamLayoutImgComponent } from './layout';
import { SamListComponent } from './list';
import { SamListItemComponent } from './list';
import { SamMasterPageComponent } from './master-page';
import { SamSearchComponent } from './search';
import { SamYoutubeComponent } from './youtube';
import { SamPickerComponent, SamPopoverComponent } from './picker';
import { SamVideoPlayerModule } from './video-player';
import { SamInputMaskModule } from './input-mask';
import { SamLayoutComponentsModule } from './patterns';
import { SamDollarComponent } from './dollar';
import { SamWrapperModule } from '../wrappers';
import { SamActionsListModule } from './actions-list';
import { SamButtonNextModule } from './button-next';
import { SamTabsNextModule } from './tabs';
import { SamAlertNextModule } from './alert';
import { SamTitleModule } from './title';
import { SamHierarchicalModule } from './hierarchical/hierarchical.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SamInputMaskModule,
    SamLayoutComponentsModule,
    FormsModule,
    SamWrapperModule,
    SamActionsListModule,
    SamIconsModule,
    SamButtonNextModule,
    SamVideoPlayerModule,
    SamTabsNextModule,
    SamAlertNextModule,
    SamTitleModule,
    SamHierarchicalModule
  ],
  declarations: [
    SamBoxComponent,
    SamContainerComponent,
    SamLabelNextComponent,
    SamLayoutComponent,
    SamLayoutContentComponent,
    SamLayoutImgComponent,
    SamListComponent,
    SamListItemComponent,
    SamMasterPageComponent,
    SamSearchComponent,
    SamYoutubeComponent,
    SamPopoverComponent,
    SamPickerComponent,
    SamDollarComponent,
  ],
  exports: [
    SamBoxComponent,
    SamContainerComponent,
    SamLabelNextComponent,
    SamLayoutComponent,
    SamLayoutContentComponent,
    SamLayoutImgComponent,
    SamListComponent,
    SamListItemComponent,
    SamMasterPageComponent,
    SamSearchComponent,
    SamYoutubeComponent,
    SamPopoverComponent,
    SamPickerComponent,
    SamVideoPlayerModule,
    SamInputMaskModule,
    SamLayoutComponentsModule,
    SamDollarComponent,
    SamActionsListModule,
    SamIconsModule,
    SamButtonNextModule,
    SamTabsNextModule,
    SamAlertNextModule,
    SamTitleModule,
    SamHierarchicalModule
  ]
})
export class SamExperimentalModule { }
