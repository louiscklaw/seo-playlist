"use strict";(self.webpackChunkhelloworld=self.webpackChunkhelloworld||[]).push([[22],{5022:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return o}});var r=n(1811),i=n(9507),u=n(7909),o=function(e,t,n,o,a){var c=e.ownerDocument.defaultView,l=(0,i.i)(e),f=function(e){return l?-e.deltaX:e.deltaX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var t=e.startX;return l?t>=c.innerWidth-50:t<=50}(e)&&t()},onStart:n,onMove:function(e){var t=f(e)/c.innerWidth;o(t)},onEnd:function(e){var t=f(e),n=c.innerWidth,i=t/n,u=function(e){return l?-e.velocityX:e.velocityX}(e),o=u>=0&&(u>.2||t>n/2),h=(o?1-i:i)*n,s=0;if(h>5){var d=h/Math.abs(u);s=Math.min(d,540)}a(o,i<=0?.01:(0,r.h)(0,i,.9999),s)}})}}}]);
//# sourceMappingURL=22.45990f51.chunk.js.map