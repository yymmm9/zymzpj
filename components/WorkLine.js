import{easeInOutQuint}from"/utils/easing.js";import clamp from"/utils/clamp.js";import{getObserver}from"/index.js";export default class WorkLine{static get selector(){return".works__work__line"}constructor(t){this.block=t,this.transitionDuration=1600,this.animate=this.animate.bind(this),this.onReady=this.onReady.bind(this),this.show=this.show.bind(this)}onReady(){this.block.dataset.intersectionRatio=.8,getObserver().register(this.block.dataset.instanceIndex,this.show,this.block)}show(){getObserver().unregister(this.block),this.raf||(this.raf=window.requestAnimationFrame(this.animate))}animate(t){this.animationStartTimestamp||(this.animationStartTimestamp=t);let i=easeInOutQuint(clamp((t-this.animationStartTimestamp)/this.transitionDuration,0,1));this.block.style.transform=`scale3d(${i}, 1, 1)`,i<1?this.raf=window.requestAnimationFrame(this.animate):window.cancelAnimationFrame(this.raf)}}