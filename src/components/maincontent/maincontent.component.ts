import { NgClass, NgIf } from '@angular/common';
import { afterNextRender, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [MatIcon,NgClass,NgIf],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    
    
  }
  constructor(){
    afterNextRender(()=>{
      setTimeout(() => {
     
        if (this.animateRefEl.nativeElement) {
          this.animateRefs(this.animateRefEl,this.rollingAnimation,this.animateRefEl1,this.rollingAnimation1);
        }
        if (this.animateRefEl2.nativeElement) {
          this.animateRefs(this.animateRefEl2,this.rollingAnimation2,this.animateRefEl3,this.rollingAnimation3);
        }
      }, 1000);
      
    })

  }

  @ViewChild('animateRefTmp', { static: false, read: ElementRef })
  animateRefEl: ElementRef;
  @ViewChild('animateRefTmp1', { static: false, read: ElementRef })
  animateRefEl1: ElementRef;
  @ViewChild('animateRefTmp2', { static: false, read: ElementRef })
  animateRefEl2: ElementRef;
  @ViewChild('animateRefTmp3', { static: false, read: ElementRef })
  animateRefEl3: ElementRef;
  public rollingAnimation: Animation = null;
  public rollingAnimation1: Animation = null;
  public rollingAnimation2: Animation = null;
  public rollingAnimation3: Animation = null;

  animateRefs(animateRefEl,rollingAnimation,animateRefEl1,rollingAnimation1) {
    if (typeof window === "undefined") {
     return
     
   }
   if (rollingAnimation) {
     rollingAnimation.cancel();
    }
    if (rollingAnimation1) {
      rollingAnimation1.cancel();
    }
    const el = animateRefEl.nativeElement as HTMLElement;
    const dist = el.parentElement.clientWidth - el.parentElement.scrollWidth;
    const spaceBt = Number(
      getComputedStyle(el.parentElement).gap.replace('px', '')
    );
    
    console.log('abc',el)

    const keyFrame = new KeyframeEffect(
      el,
      [
        {
          transform: `translateX(${0}px)`,
          offset: 0,
        }, // keyframe
        {
          transform: `translateX(${-el.parentElement.scrollWidth - spaceBt}px)`,
          offset: 1,
        }, // keyframe
      ],
      {
        // keyframe options
        duration: (Math.abs(dist) + el.clientWidth + spaceBt) * 15,
        direction: 'normal',
        easing: 'linear',
        iterations: '1',
        endDelay: 0,
        delay: 0,
      } as any
    );
    rollingAnimation = new Animation(keyFrame, document.timeline);
    const el1 = animateRefEl1.nativeElement as HTMLElement;
    const keyFrame1 = new KeyframeEffect(
      el1,
      [
        {
          left:`${el.parentElement.scrollWidth + spaceBt}px`,
          offset: 0,
        }, // keyframe
        { left: `${0}px`, offset: 1 }, // keyframe
      ],
      {
        // keyframe options
        duration: (el.parentElement.scrollWidth + spaceBt) * 15,
        direction: 'normal',
        easing: 'linear',
        iterations: '1',
        endDelay: 0,
        delay: 0,
      } as any
    );
    rollingAnimation = new Animation(keyFrame, document.timeline);
    rollingAnimation1 = new Animation(keyFrame1, document.timeline);
    // play rofl animation
    rollingAnimation.play();
    rollingAnimation1.play();
    el.parentElement.onmouseenter = () => {
      rollingAnimation.pause();
      rollingAnimation1.pause();
    };
    el.parentElement.onmouseleave = () => {
      rollingAnimation.play();
      rollingAnimation1.play();
    };
    rollingAnimation.finished.then(() => {
      this.animateRefs(animateRefEl,rollingAnimation,animateRefEl1,rollingAnimation1);
    });
    rollingAnimation1.finished.then(() => {});
  }



  isPopupVisible = false; 
  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
    console.log(this.isPopupVisible)
  }

}
