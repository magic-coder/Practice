__d(function(e,t,a,r){"use strict";var p={captureHeap:function(a){var r=null;try{e.nativeCaptureHeap(a),console.log("HeapCapture.captureHeap succeeded: "+a)}catch(e){console.log("HeapCapture.captureHeap error: "+e.toString()),r=e.toString()}t(40).JSCHeapCapture.captureComplete(a,r)}};a.exports=p},121);