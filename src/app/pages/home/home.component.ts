import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: MovieApiService) { }

  bannerResult: any = []
  trendingMovies: any = []
  actionMovies: any = []
  adventureMovies: any = []
  animationMovies: any = []
  comedyMovies: any = []
  documentaryMovies: any = []
  sciencefictionMovies: any = []
  thrillerMovies: any = []

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovieData();
    this.adventureMovieData();
    this.animationMovieData();
    this.comedyMovieData();
    this.documentaryMovieData();
    this.sciencefictionMoviesData();
    this.thrillerMoviesData();
  }

  //bannerData
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    })
  }

  //trending movies
  trendingData() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      this.trendingMovies = result.results;
    })
  }

  //action
  actionMovieData() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovies = result.results
    })
  }

  //adventure
  adventureMovieData() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovies = result.results
    })
  }

  //animation
  animationMovieData() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovies = result.results
    })
  }

  //comedy
  comedyMovieData() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovies = result.results
    })
  }

  //documentary
  documentaryMovieData() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovies = result.results
    })
  }

  //sciencefiction
  sciencefictionMoviesData() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovies = result.results
    })
  }

  //thriller
  thrillerMoviesData() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovies = result.results
    })
  }


}
