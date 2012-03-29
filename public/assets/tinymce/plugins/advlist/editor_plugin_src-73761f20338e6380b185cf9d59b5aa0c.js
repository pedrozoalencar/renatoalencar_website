/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){var a=tinymce.each;tinymce.create("tinymce.plugins.AdvListPlugin",{init:function(b,c){function e(b){var c=[];return a(b.split(/,/),function(a){c.push({title:"advlist."+(a=="default"?"def":a.replace(/-/g,"_")),styles:{listStyleType:a=="default"?"":a}})}),c}var d=this;d.editor=b,d.numlist=b.getParam("advlist_number_styles")||e("default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"),d.bullist=b.getParam("advlist_bullet_styles")||e("default,circle,disc,square"),tinymce.isIE&&/MSIE [2-7]/.test(navigator.userAgent)&&(d.isIE7=!0)},createControl:function(b,c){var d=this,e,f,g=d.editor;if(b=="numlist"||b=="bullist"){d[b][0].title=="advlist.def"&&(f=d[b][0]);function h(b,c){var d=!0;return a(c.styles,function(a,c){if(g.dom.getStyle(b,c)!=a)return d=!1,!1}),d}function i(){var a,c=g.dom,d=g.selection;a=c.getParent(d.getNode(),"ol,ul"),(!a||a.nodeName==(b=="bullist"?"OL":"UL")||h(a,f))&&g.execCommand(b=="bullist"?"InsertUnorderedList":"InsertOrderedList"),f&&(a=c.getParent(d.getNode(),"ol,ul"),a&&(c.setStyles(a,f.styles),a.removeAttribute("data-mce-style"))),g.focus()}return e=c.createSplitButton(b,{title:"advanced."+b+"_desc","class":"mce_"+b,onclick:function(){i()}}),e.onRenderMenu.add(function(c,e){e.onHideMenu.add(function(){d.bookmark&&(g.selection.moveToBookmark(d.bookmark),d.bookmark=0)}),e.onShowMenu.add(function(){var c=g.dom,i=c.getParent(g.selection.getNode(),"ol,ul"),j;if(i||f)j=d[b],a(e.items,function(b){var c=!0;b.setSelected(0),i&&!b.isDisabled()&&(a(j,function(a){if(a.id==b.id&&!h(i,a))return c=!1,!1}),c&&b.setSelected(1))}),i||e.items[f.id].setSelected(1);g.focus(),tinymce.isIE&&(d.bookmark=g.selection.getBookmark(1))}),e.add({id:g.dom.uniqueId(),title:"advlist.types","class":"mceMenuItemTitle",titleItem:!0}).setDisabled(1),a(d[b],function(a){if(d.isIE7&&a.styles.listStyleType=="lower-greek")return;a.id=g.dom.uniqueId(),e.add({id:a.id,title:a.title,onclick:function(){f=a,i()}})})}),e}},getInfo:function(){return{longname:"Advanced lists",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/advlist",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("advlist",tinymce.plugins.AdvListPlugin)})();