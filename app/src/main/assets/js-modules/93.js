__d(function(o,t,e,n){"use strict";var r,f;"function"==typeof Symbol&&("function"==typeof Symbol?Symbol.for:"@@for")?(r=("function"==typeof Symbol?Symbol.for:"@@for")("react.coroutine"),f=("function"==typeof Symbol?Symbol.for:"@@for")("react.yield")):(r=60104,f=60105),n.createCoroutine=function(o,t,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,f={$$typeof:r,key:null==n?null:""+n,children:o,handler:t,props:e};return f},n.createYield=function(o){var t={$$typeof:f,value:o};return t},n.isCoroutine=function(o){return"object"==typeof o&&null!==o&&o.$$typeof===r},n.isYield=function(o){return"object"==typeof o&&null!==o&&o.$$typeof===f},n.REACT_YIELD_TYPE=f,n.REACT_COROUTINE_TYPE=r},93);