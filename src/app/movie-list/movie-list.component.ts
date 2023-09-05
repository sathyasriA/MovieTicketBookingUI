import { Component } from '@angular/core';

import { Movie } from '../movies';
import { MovieService } from './movie-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {


  movies: Movie[] = [];
  imageSrc = '/assets';
  constructor(private apiService: MovieService) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe((data: any[]) => {
      console.log('Console log',  data);
      this.movies = data;
    });
  }
}

export { MovieService } from './movie-list.component.service';
