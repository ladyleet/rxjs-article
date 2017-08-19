import { Component, OnInit } from '@angular/core';
import { OuijaService } from './ouija.service';
import { Observable } from 'rxjs/Observable';
import { animationFrame} from 'rxjs/scheduler/animationFrame';
import { RxAnimationService } from './rx-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  constructor(public ouija: OuijaService, public animationService: RxAnimationService) { };

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  //split takes the string and splits it into an array. if you passed a space in there, it would split on spaces.

  toSpell = Observable.of('ponies');
  
  spelling = this.toSpell.mergeMap(word => word.split(''))
    .concatMap(letter => Observable.timer(500).map(() => letter))
    .map(letter => this.findLetter(letter))
    .share()
  
  x = this.spelling.map(({x}) => x)
    .do(x => console.log(x))
    .scan(([previous], current) => {
      return [current, this.animationService.tween(previous as number, current as number, 1000)]
    }, [0,Observable.of(0)])
    .concatMap(([_,s]) => (s as Observable<number>).concat(Observable.timer(300)))
    .map(x => x + 'px');
  
  y = this.spelling.map( ({y}) => y)
  .scan(([previous], current) => {
    return [current, this.animationService.tween(previous as number, current as number, 1000)]
  }, [0,Observable.of(0)])
  .concatMap(([_,s]) => (s as Observable<number>).concat(Observable.timer(300)))
  .map(y => y + 'px');;

  ngOnInit() {

  };

  findLetter(x: string) {
    x = x.toUpperCase();
    const span = document.querySelector('.letter-' + x);
    const {top, left} = span.getBoundingClientRect(); 
    return {x: left, y: top};
  };
}