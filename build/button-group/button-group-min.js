YUI.add("button-group",function(b){var a=function(d){this.buttons=new b.ArrayList();var c={selection:{value:[],getter:function(){var e=[];this.buttons.each(function(f){if(f.get("selected")){e.push(f);}});return e;}},type:{value:"radio",validator:function(e){return b.Array.indexOf(["radio","checkbox"],e);}},};this.addAttrs(c,d);if(d.srcNodes){if(b.Lang.isString(d.srcNodes)){d.srcNodes=b.all(d.srcNodes);}d.buttons=new b.Buttons(d);delete d.srcNodes;}if(d.buttons){b.Array.each(d.buttons,function(e){this.addButton(e);},this);}};a.prototype.getSelectedButtons=function(){var c=[],d;d=this.buttons;d.each(function(e){if(e.get("selected")){c.push(e);}});return c;};a.prototype.getSelectedValues=function(){var d,c=[];d=this.getSelectedButtons();b.Array.each(d,function(e){c.push(e.getDOMNode().get("value"));});return c;};a.prototype.addButton=function(c){c.set("type","toggle");if(this.get("type")==="radio"){c.before("selectedChange",this._beforeButtonSelectedChange,this);}c.after("selectedChange",this._afterButtonSelectedChange,this);this.buttons.add(c);};a.prototype._beforeButtonSelectedChange=function(c){if(c.target.get("selected")){c.preventDefault();return false;}else{}};a.prototype._onButtonSelectedChange=function(c){};a.prototype._afterButtonSelectedChange=function(d){var f=false;var c=this.buttons;if(this.get("type")==="radio"){c.each(function(e){if(c.indexOf(d.target)!=c.indexOf(e)){f=true;e.set("selected",false,{propagate:false});}else{}});}else{if(this.get("type")==="checkbox"){f=true;}}if(f){this.fire("selectionChange");}};b.augment(a,b.Attribute);b.ButtonGroup=a;},"@VERSION@",{requires:["button-base"]});