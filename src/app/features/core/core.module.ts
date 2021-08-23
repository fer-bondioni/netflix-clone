import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SliderComponent } from '../home/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, CoreRoutingModule, MatIconModule, MatBadgeModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {}
