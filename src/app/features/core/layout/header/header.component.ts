import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;

  sliderConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  @ViewChild('stickyHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private movie: MoviesService) {}

  ngOnInit(): void {
    this.subs.push(
      this.movie.getTrending().subscribe((data) => (this.trending = data))
    );
    this.subs.push(
      this.movie.getPopular().subscribe((data) => (this.popular = data))
    );
    this.subs.push(
      this.movie.getTopRated().subscribe((data) => (this.topRated = data))
    );
    this.subs.push(
      this.movie.getOriginals().subscribe((data) => (this.originals = data))
    );
    this.subs.push(
      this.movie.getNowPlaying().subscribe((data) => (this.nowPlaying = data))
    );
  }
  ngOnDestroy(): void {
    this.subs.map((s) => s.unsubscribe());
  }

  //falta hostlistener
}
