import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IScheduler } from 'rxjs/Scheduler';
import { animationFrame } from 'rxjs/scheduler/animationFrame';

@Injectable()
export class RxAnimationService {
  constructor() { }

  frames(scheduler: IScheduler = animationFrame) {
    return Observable.defer(() => {
      const start = scheduler.now();
      return Observable.timer(0, 0, animationFrame)
        .map(() => scheduler.now() - start);
    });
  }

  duration(ms: number, scheduler: IScheduler = animationFrame) {
    return this.frames(scheduler)
      .map(elapsed => elapsed / ms)
      .takeWhile(d => d < 1)
      .concat(Observable.of(1));
  }

  tween(start: number, end: number, ms: number, scheduler: IScheduler = animationFrame) {
    const diff = end - start;
    return this.duration(ms, scheduler)
      .map(d => start + (d * diff));
  }
}