import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  imgDetail = false;
  imageUrl;
  artist;
  artName;
  year;

  colOneImages = [
    {path: '../../assets/images/gallery/grey2.jpg', artist: 'Alex Grey', name: 'Net of Being', year: 2006},
    {path: '../../assets/images/gallery/wood.jpg', artist: 'Grant Wood', name: 'American Gothic', year: 1930},
    {path: '../../assets/images/gallery/klimt.jpg', artist: 'Gustav Klimt', name: 'The Kiss', year: 1907},
    {path: '../../assets/images/gallery/dali.jpg', artist: 'Salvador Dali', name: 'The Persistence of Memory', year: 1931}
  ];

  colTwoImages = [
    {path: '../../assets/images/gallery/whistler.jpg', artist: 'James Abbott McNeill Whistler', name: 'Whistlers Mother', year: 1871},
    {path: '../../assets/images/gallery/mondrian.jpg', artist: 'Piet Mondrian', name: 'Composition II with Red Blue and Yellow', year: 1930},
    {path: '../../assets/images/gallery/gogh.jpg', artist: 'Van Gogh', name: 'The Starry Night', year: 1889},
    {path: '../../assets/images/gallery/monet.jpeg', artist: 'Monet', name: 'Water Lilies', year: 1917},
    {path: '../../assets/images/gallery/michelangelo.jpg', artist: 'Michelangelo', name: 'The Creation of Adam', year: 1508}
  ];

  colThreeImages = [
    {path: '../../assets/images/gallery/khalo.jpg', artist: 'Frida Khalo', name: 'The Two Fridas', year: 1939},
    {path: '../../assets/images/gallery/vermeer.jpg', artist: 'Johannes Vermeer', name: 'Girl with a Pearl Earring', year: 1665},
    {path: '../../assets/images/gallery/munch.jpg', artist: 'Edvard Munch', name: 'The Scream', year: 1893},
    {path: '../../assets/images/gallery/picasso.jpg', artist: 'Pablo Picasso', name: 'Guernica', year: 1937}
  ];

  colFourImages = [
    {path: '../../assets/images/gallery/grey.jpg', artist: 'Alex Grey', name: 'Over Soul', year: 1999},
    {path: '../../assets/images/gallery/saville.jpg', artist: 'Jenny Saville', name: 'Reverse', year: 2003},
    {path: '../../assets/images/gallery/warhol.jpg', artist: 'Andy Warhol', name: 'Campbell\'s Soup Cans', year: 1961},
    {path: '../../assets/images/gallery/seurat.jpg', artist: 'Georges Seurat', name: 'A Sunday Afternoon on the Island of La Grande Jatte', year: 1884}
  ];



  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  imageDetail(url: string, artist: string, name: string, year: number){
    this.imgDetail = !this.imgDetail;
    window.scroll(0, 0);
    this.imageUrl = url;
    this.artist = artist;
    this.artName = name;
    this.year = year;
  }

}
