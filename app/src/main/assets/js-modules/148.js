__d(function(e,r,t,o){"use strict";var n=r(60),i=r(40).LocationObserver,s=r(22),a=r(66),v=r(18),c=new n(i),g=[],u=!1,l={getCurrentPosition:function(e,r,t){s("function"==typeof e,"Must provide a valid geo_success callback."),i.getCurrentPosition(t||{},e,r||a)},watchPosition:function(e,r,t){u||(i.startObserving(t||{}),u=!0);var o=g.length;return g.push([c.addListener("geolocationDidChange",e),r?c.addListener("geolocationError",r):null]),o},clearWatch:function(e){var r=g[e];if(r){r[0].remove();var t=r[1];t&&t.remove(),g[e]=void 0;for(var o=!0,n=0;n<g.length;n++)g[n]&&(o=!1);o&&l.stopObserving()}},stopObserving:function(){if(u){i.stopObserving(),u=!1;for(var e=0;e<g.length;e++){var r=g[e];if(r){v("Called stopObserving with existing subscriptions."),r[0].remove();var t=r[1];t&&t.remove()}}g=[]}}};t.exports=l},148);