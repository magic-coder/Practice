__d(function(n,e,o,t){"use strict";function i(n){if(null==n)return null;if("number"==typeof n)return n;var e=n,o=d.get(e);if(o)return u(o);var t=f(e);return t?t:(r("object"==typeof e&&("_rootNodeID"in e||"_nativeTag"in e)||null!=e.render&&"function"==typeof e.render,"findNodeHandle(...): Argument is not a component (type: %s, keys: %s)",typeof e,Object.keys(e)),void r(!1,"findNodeHandle(...): Unable to find node handle for unmounted component."))}var d=(e(26),e(82)),r=e(22),u=(e(18),void 0),f=void 0;i.injection={injectFindNode:function(n){u=n},injectFindRootNodeID:function(n){f=n}},o.exports=i},177);