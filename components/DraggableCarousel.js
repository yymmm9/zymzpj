import clamp from"/utils/clamp.js";import map from"/utils/map.js";import{easeInOutQuint}from"/utils/easing.js";import{getObserver}from"/index.js";export default class DraggableCarousel{static get selector(){return".draggable-carousel"}constructor(t){this.block=t,this.images=this.block.querySelectorAll(".draggable-carousel__image-wrapper"),this.imgs=this.block.querySelectorAll(".draggable-carousel__image-wrapper__image"),this.imagesWrapper=this.block.querySelector(".draggable-carousel__images-wrapper"),this.x0=0,this.x=0,this.dX0=0,this.dX=0,this.translationX=0,this.translationAmount=.15,this.index=0,this.deltaX=0,this.deltaX0=0,this.image,this.enterTransitionDuration=1600,this.timer=null,this.innerScale={previous:1,current:1,amt:.15},this.outerScale={previous:1,current:1,amt:.15},this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.render=this.render.bind(this),this.layout=this.layout.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.updateIndex=this.updateIndex.bind(this),this.onReady=this.onReady.bind(this),this.show=this.show.bind(this),this.animateInView=this.animateInView.bind(this),this.block.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.block.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.block.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.block.addEventListener("mousedown",this.onTouchStart),this.block.addEventListener("mousemove",this.onTouchMove),this.block.addEventListener("mouseup",this.onTouchEnd),this.block.addEventListener("mouseleave",this.onMouseOut)}onResize(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{console.log("timeout"),this.iScale=window.innerWidth>=1025?1.3:1.1,this.oScale=window.innerWidth>=1025?.8:.96,this.skewToValue=window.innerWidth>1025?8:24,this.setImagesRect(),this.block.style.cursor=null,this.innerScale.current=1,this.outerScale.current=1,this.updateIndex(),this.x0=null,this.x=null,this.render()},400)}onReady(){this.iScale=window.innerWidth>=1025?1.3:1.1,this.oScale=window.innerWidth>=1025?.8:.96,this.skewToValue=window.innerWidth>1025?8:24,this.setImagesRect(),this.block.dataset.intersectionRatio=.2,getObserver().register(this.block.dataset.instanceIndex,this.show,this.block),this.images.forEach((t,i)=>{i>1||(t.style.clipPath="polygon(40% 0, 40% 0, 60% 100%, 60% 100%)",t.style.webkitClipPath="polygon(40% 0, 40% 0, 60% 100%, 60% 100%)")})}setImagesRect(){if(!this.images||this.images.length<2)return null;this.images[0].rect=this.images[0].getBoundingClientRect(),this.images[1].rect=this.images[1].getBoundingClientRect(),this.imageMarginRight=this.getItemMarginRight(),this.imageWidth=this.images[0].rect.width+this.imageMarginRight}getItemMarginRight(){return!this.images||this.images.length<2?null:this.images[1].rect.left-(this.images[0].rect.width+this.images[0].rect.left)}onTouchStart(t){this.block.style.cursor="grabbing",this.x0=t.touches&&t.touches[0]&&t.touches[0].clientX||t.clientX,this.innerScale.current=this.iScale,this.outerScale.current=this.oScale,this.raf||this.render()}onTouchMove(t){this.x0&&(this.x=t.touches&&t.touches[0]&&t.touches[0].clientX||t.clientX,this.dX=this.x-this.x0+this.index*this.imageWidth,this.deltaX=this.x-this.x0)}onTouchEnd(t){if(this.block.style.cursor=null,this.innerScale.current=1,this.outerScale.current=1,!this.x0||!this.x)return this.x=null,void(this.x0=null);this.updateIndex(),this.x=null,this.x0=null}onMouseOut(){this.x0&&(this.block.style.cursor=null,this.innerScale.current=1,this.outerScale.current=1,this.updateIndex(),this.x0=null,this.x=null)}updateIndex(){Math.abs(this.deltaX)>this.imageWidth/4&&(this.index=this.deltaX<0?this.index-1:this.index+1,this.index=clamp(this.index,-(this.images.length-1),0)),this.dX=this.index*this.imageWidth,this.deltaX=0}render(){this.dX0=this.dX0+.09*(this.dX-this.dX0),this.deltaX0=this.deltaX0+.09*(this.deltaX-this.deltaX0),this.innerScale.previous=this.innerScale.previous+.09*(this.innerScale.current-this.innerScale.previous),this.outerScale.previous=this.outerScale.previous+.09*(this.outerScale.current-this.outerScale.previous),this.layout(),Math.round(this.dX0)===Math.round(this.dX)&&this.outerScale.previous<=this.outerScale.current&&this.outerScale.previous>=.99999&&null===this.x0&&this.raf?(window.cancelAnimationFrame(this.raf),this.raf=null):this.raf=window.requestAnimationFrame(this.render)}layout(){this.imagesWrapper&&(this.block.style.transform=`skewX(${-1*map(this.deltaX0,0,500,0,this.skewToValue)}deg)`,this.imagesWrapper.style.transform=`scale3d(${this.outerScale.previous}, ${this.outerScale.previous}, 1)`,this.images.forEach((t,i)=>{t.style.transform=`translate3d(${this.dX0}px, 0, 0)`}),this.imgs.forEach(t=>{t.style.transform=`translate3d(${this.getInnerTranslation()}px, 0, 0) scale3d(${this.innerScale.previous}, ${this.innerScale.previous}, 1)`}))}getInnerTranslation(){const t=this.deltaX0-this.deltaX,i={distance:{min:0,max:400},translation:{min:0,max:50*this.innerScale.previous/this.outerScale.previous}};let e=map(Math.abs(t),i.distance.min,i.distance.max,i.translation.min,i.translation.max);return e=clamp(e,i.translation.min,i.translation.max),t>0?e.toFixed(2):-1*e.toFixed(2)}show(){getObserver().unregister(this.block),this.inViewRaf=window.requestAnimationFrame(this.animateInView)}animateInView(t){this.animationStartTimestamp||(this.animationStartTimestamp=t);let i=easeInOutQuint(clamp((t-this.animationStartTimestamp)/this.enterTransitionDuration,0,1));this.images.forEach((t,e)=>{e>1||(t.style.clipPath=`polygon(${40*(1-i)}% 0, ${100-60*(1-i)}% 0,  ${100-40*(1-i)}% 100%, ${60*(1-i)}% 100%)`,t.style.webkitClipPath=`polygon(${40*(1-i)}% 0, ${100-60*(1-i)}% 0,  ${100-40*(1-i)}% 100%, ${60*(1-i)}% 100%)`)}),i<1?this.inViewRaf=window.requestAnimationFrame(this.animateInView):window.cancelAnimationFrame(this.inViewRaf)}}