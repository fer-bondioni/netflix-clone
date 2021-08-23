import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './slider/slider.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [CommonModule, HomeRoutingModule, SlickCarouselModule, CoreModule],
  exports: [SlickCarouselModule, SliderComponent],
})
export class HomeModule {}
