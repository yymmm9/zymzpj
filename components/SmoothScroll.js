import lerp from"/utils/lerp.js";import clamp from"/utils/clamp.js";import{easeInOutQuint}from"/utils/easing.js";import mobileAndTabletcheck from"/utils/isMobileAndTablet.js";export default class SmoothScroll{static get selector(){return".smooth-scroll"}constructor(t){this.block=t,this.hero=this.block.querySelector("#hero"),this.works=this.block.querySelector("#works"),this.footer=this.block.querySelector("footer"),this.unsplash=this.block.querySelector("#unsplash"),this.page=this.block.querySelector(".page"),this.onWheel=this.onWheel.bind(this),this.render=this.render.bind(this),this.layout=this.layout.bind(this),this.animate=this.animate.bind(this),this.updateValue=this.updateValue.bind(this),this.getTranslationY=this.getTranslationY.bind(this),this.deltaY=0,this.offset=0,this.lastOffset=0,this.value=0,this.transitionDuration=2400,this.acceleration=0,this.translationY=0,this.newTranslationY=0,this.renderedStyles={translationY:{previous:0,current:0,ease:.08,setValue:()=>this.offset=this.newTranslationY}}}onReady(){mobileAndTabletcheck||(document.body.style.overflow="hidden",this.block.style.width="100%",this.block.style.height="100%",this.block.style.overflow="hidden",this.block.style.position="fixed",this.block.style.top="0",this.block.style.left="0",window.addEventListener("wheel",this.onWheel,{passive:!0}),this.render())}onResize(){this.newTranslationY=this.translationY=clamp(this.translationY+this.deltaY,0,this.page.offsetHeight-this.block.offsetHeight),this.isResizing=!0,setTimeout(()=>{this.isResizing=!1},100)}getTranslationY(){return this.translationY}animate(t,e){this.isAnimating=!0,this.animationStartTimestamp||(this.animationStartTimestamp=t);let s=easeInOutQuint(clamp((t-this.animationStartTimestamp)/this.transitionDuration,0,1));const i=this.newTranslationY+e*s;if(this.hero.style.transform=`translate3d(0, -${i}px, 0)`,this.works.style.transform=`translate3d(0, -${i}px, 0)`,this.footer.style.transform=`translate3d(0, -${i}px, 0)`,this.unsplash.style.transform=`translate3d(0, -${i}px, 0)`,s<1)this.animateRaf=window.requestAnimationFrame(t=>{this.animate(t,e)});else{this.isAnimating=!1,window.cancelAnimationFrame(this.animateRaf),this.animateRaf=null,this.animationStartTimestamp=null,this.newTranslationY=this.translationY=i;for(const t in this.renderedStyles)this.renderedStyles[t].current=this.renderedStyles[t].setValue(),this.renderedStyles[t].previous=this.renderedStyles[t].setValue();this.render()}}updateValue(t){window.cancelAnimationFrame(this.raf),(t=t>0?clamp(t,0,this.page.offsetHeight-this.block.offsetHeight):0===t?-1*(this.page.offsetHeight-this.block.offsetHeight):clamp(t,-1*(this.page.offsetHeight-this.block.offsetHeight),0))>=this.page.offsetHeight-this.block.offsetHeight&&(t-=this.newTranslationY),this.raf=null,this.animateRaf=window.requestAnimationFrame(e=>{this.animate(e,t)})}onWheel(t){this.isAnimating||(this.raf||this.render(),this.deltaY=t.deltaY/120,this.newTranslationY=this.translationY=clamp(this.translationY+120*this.deltaY,0,this.page.offsetHeight-this.block.offsetHeight))}render(){this.lastOffset=this.offset;for(const t in this.renderedStyles)this.renderedStyles[t].current=this.renderedStyles[t].setValue(),this.renderedStyles[t].previous=lerp(this.renderedStyles[t].previous,this.renderedStyles[t].current,this.renderedStyles[t].ease);this.layout(),this.raf=window.requestAnimationFrame(this.render)}layout(){this.hero.style.transform=`translate3d(0, ${-1*this.renderedStyles.translationY.previous}px, 0)`,this.footer.style.transform=`translate3d(0, ${-1*this.renderedStyles.translationY.previous}px, 0)`,this.unsplash.style.transform=`translate3d(0, ${-1*this.renderedStyles.translationY.previous}px, 0)`,this.works.style.transform=`translate3d(0, ${-1*this.renderedStyles.translationY.previous}px, 0)`}}