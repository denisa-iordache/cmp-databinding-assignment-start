import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() incNumber = new EventEmitter<{number: number}>();
  nb: number = 0;
  interval;
  // @ViewChild('nbGenerator', {static:true}) nbGenerator: ElementRef;

  onAddGame() {
    // this.nb = this.nb+1;
    this.interval = setInterval(()=>{this.incNumber.emit({number: this.nb}); this.nb=this.nb+1}, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
