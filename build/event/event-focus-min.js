YUI.add("event-focus",function(A){(function(){var D=A.Env.evt.plugins,E={capture:true},C=function(){},B=function(G,I){var F=(A.Lang.isString(I))?A.Selector.query(I,null,true):I,H=F&&F.parentNode;if(H){A.Event._attach([G,C,H],E);}};D.focus={on:function(H,G,I){var F=A.Array(arguments,0,true);if(A.UA.ie){F[0]=F[0].replace(/focus/,"focusin");}else{if(A.UA.opera){B(H,I);}}return A.Event._attach(F,E);}};D.blur={on:function(H,G,I){var F=A.Array(arguments,0,true);if(A.UA.ie){F[0]=F[0].replace(/blur/,"focusout");}else{if(A.UA.opera){B(H,I);}}return A.Event._attach(F,E);}};})();},"@VERSION@",{requires:["event-base"]});