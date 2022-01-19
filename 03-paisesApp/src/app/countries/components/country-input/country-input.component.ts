import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  @Output()onEnter: EventEmitter<string>= new EventEmitter();
  @Output()OnDebounce: EventEmitter<string>= new EventEmitter();
  

  @Input() placeholder: string = '';

  debouncer: Subject<string> =new Subject;

  term: string = '';

  ngOnInit(): void {
      this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
      this.OnDebounce.emit(value);

      })
  }

  search(){
this.onEnter.emit(this.term);

  }

 keyPressed(event:any){
  const value= event.target.value;

  this.debouncer.next(this.term);
 }


}


