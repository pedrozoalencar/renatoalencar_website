/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create("tinymce.plugins.VisualChars",{init:function(a,b){var c=this;c.editor=a,a.addCommand("mceVisualChars",c._toggleVisualChars,c),a.addButton("visualchars",{title:"visualchars.desc",cmd:"mceVisualChars"}),a.onBeforeGetContent.add(function(a,b){c.state&&b.format!="raw"&&!b.draft&&(c.state=!0,c._toggleVisualChars(!1))})},getInfo:function(){return{longname:"Visual characters",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/visualchars",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_toggleVisualChars:function(a){var b=this,c=b.editor,d,e,f,g=c.getDoc(),h=c.getBody(),i,j=c.selection,k,l,m;b.state=!b.state,c.controlManager.setActive("visualchars",b.state),a&&(m=j.getBookmark());if(b.state){d=[],tinymce.walk(h,function(a){a.nodeType==3&&a.nodeValue&&a.nodeValue.indexOf(" ")!=-1&&d.push(a)},"childNodes");for(e=0;e<d.length;e++){i=d[e].nodeValue,i=i.replace(/(\u00a0)/g,'<span data-mce-bogus="1" class="mceItemHidden mceItemNbsp">$1</span>'),l=c.dom.create("div",null,i);while(node=l.lastChild)c.dom.insertAfter(node,d[e]);c.dom.remove(d[e])}}else{d=c.dom.select("span.mceItemNbsp",h);for(e=d.length-1;e>=0;e--)c.dom.remove(d[e],1)}j.moveToBookmark(m)}}),tinymce.PluginManager.add("visualchars",tinymce.plugins.VisualChars)})();