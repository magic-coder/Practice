__d(function(e,t,n,r){"use strict";function o(e){var t=Function.prototype.toString,n=Object.prototype.hasOwnProperty,r=RegExp("^"+t.call(n).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");try{var o=t.call(e);return r.test(o)}catch(e){return!1}}function u(e){var t=f(e);if(t){var n=t.childIDs;c(e),n.forEach(u)}}function a(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type.displayName||e.type.name||"Unknown"}function i(e){var t=O.getDisplayName(e),n=O.getElement(e),r=O.getOwnerID(e),o=void 0;return r&&(o=O.getDisplayName(r)),D(t||"",n&&n._source,o||"")}var p,f,c,l,s,d,v,y=t(15),m=t(26),g=t(247),I=g.getStackAddendumByWorkInProgressFiber,D=g.describeComponentFrame,h=t(22),b=(t(18),t(249)),M="function"==typeof Array.from&&"function"==typeof Map&&o(Map)&&null!=Map.prototype&&"function"==typeof Map.prototype.keys&&o(Map.prototype.keys)&&"function"==typeof Set&&o(Set)&&null!=Set.prototype&&"function"==typeof Set.prototype.keys&&o(Set.prototype.keys);if(M){var k=new Map,C=new Set;p=function(e,t){k.set(e,t)},f=function(e){return k.get(e)},c=function(e){k.delete(e)},l=function(){return Array.from(k.keys())},s=function(e){C.add(e)},d=function(e){C.delete(e)},v=function(){return Array.from(C.keys())}}else{var S={},_={},w=function(e){return"."+e},A=function(e){return parseInt(e.substr(1),10)};p=function(e,t){var n=w(e);S[n]=t},f=function(e){var t=w(e);return S[t]},c=function(e){var t=w(e);delete S[t]},l=function(){return Object.keys(S).map(A)},s=function(e){var t=w(e);_[t]=!0},d=function(e){var t=w(e);delete _[t]},v=function(){return Object.keys(_).map(A)}}var E=[],O={onSetChildren:function(e,t){var n=f(e);h(n,"Item must have been set"),n.childIDs=t;for(var r=0;r<t.length;r++){var o=t[r],u=f(o);u?void 0:y("140"),null==u.childIDs&&"object"==typeof u.element&&null!=u.element?y("141"):void 0,u.isMounted?void 0:y("71"),null==u.parentID&&(u.parentID=e),u.parentID!==e?y("142",o,u.parentID,e):void 0}},onBeforeMountComponent:function(e,t,n){var r={element:t,parentID:n,text:null,childIDs:[],isMounted:!1,updateCount:0};p(e,r)},onBeforeUpdateComponent:function(e,t){var n=f(e);n&&n.isMounted&&(n.element=t)},onMountComponent:function(e){var t=f(e);h(t,"Item must have been set"),t.isMounted=!0;var n=0===t.parentID;n&&s(e)},onUpdateComponent:function(e){var t=f(e);t&&t.isMounted&&t.updateCount++},onUnmountComponent:function(e){var t=f(e);if(t){t.isMounted=!1;var n=0===t.parentID;n&&d(e)}E.push(e)},purgeUnmountedComponents:function(){if(!O._preventPurging){for(var e=0;e<E.length;e++){var t=E[e];u(t)}E.length=0}},isMounted:function(e){var t=f(e);return!!t&&t.isMounted},getCurrentStackAddendum:function(e){var t="";if(e){var n=a(e),r=e._owner;t+=D(n,e._source,r&&b(r))}var o=m.current;if(o)if("number"==typeof o.tag){var u=o;t+=I(u)}else"number"==typeof o._debugID&&(t+=O.getStackAddendumByID(o._debugID));return t},getStackAddendumByID:function(e){for(var t="";e;)t+=i(e),e=O.getParentID(e);return t},getChildIDs:function(e){var t=f(e);return t?t.childIDs:[]},getDisplayName:function(e){var t=O.getElement(e);return t?a(t):null},getElement:function(e){var t=f(e);return t?t.element:null},getOwnerID:function(e){var t=O.getElement(e);return t&&t._owner?t._owner._debugID:null},getParentID:function(e){var t=f(e);return t?t.parentID:null},getSource:function(e){var t=f(e),n=t?t.element:null,r=null!=n?n._source:null;return r},getText:function(e){var t=O.getElement(e);return"string"==typeof t?t:"number"==typeof t?""+t:null},getUpdateCount:function(e){var t=f(e);return t?t.updateCount:0},getRootIDs:v,getRegisteredIDs:l};n.exports=O},246);