import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  @Output() difficultyFilter:EventEmitter<string> = new EventEmitter();
  @Output() nameFilter:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterDifficulty(filter){
    this.difficultyFilter.emit(filter);    
  }
  filterName(filter){
    this.nameFilter.emit(filter);
  }

}
