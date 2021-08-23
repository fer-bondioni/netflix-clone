import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sliderConfig = {
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  subs: Subscription[] = [];
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;

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
}
