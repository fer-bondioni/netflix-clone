import {
  ElementRef,
  NgModule,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;
  latest: Movies;

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  @ViewChild('stickyHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private service: MoviesService) {}

  ngOnDestroy(): void {
    this.subs.push(
      this.service.getTrending().subscribe((data) => {
        this.trending = data;
        this.trending.results[0].backdrop_path;
      })
    );
    this.subs.push(
      this.service.getPopular().subscribe((data) => (this.popular = data))
    );
    this.subs.push(
      this.service.getTopRated().subscribe((data) => (this.topRated = data))
    );
    this.subs.push(
      this.service.getOriginals().subscribe((data) => (this.originals = data))
    );
    this.subs.push(
      this.service.getNowPlaying().subscribe((data) => (this.nowPlaying = data))
    );
    this.subs.push(
      this.service.getLatestMovie().subscribe((data) => (this.latest = data))
    );
  }
  ngOnInit(): void {
    this.subs.map((x) => x.unsubscribe());
  }

  //falta hostlistener
}
