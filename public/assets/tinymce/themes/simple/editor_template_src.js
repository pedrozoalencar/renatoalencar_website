/**
 * editor_template_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){var a=tinymce.DOM;tinymce.ThemeManager.requireLangPack("simple"),tinymce.create("tinymce.themes.SimpleTheme",{init:function(b,c){var d=this,e=["Bold","Italic","Underline","Strikethrough","InsertUnorderedList","InsertOrderedList"],f=b.settings;d.editor=b,b.contentCSS.push(c+"/skins/"+f.skin+"/content.css"),b.onInit.add(function(){b.onNodeChange.add(function(a,b){tinymce.each(e,function(c){b.get(c.toLowerCase()).setActive(a.queryCommandState(c))})})}),a.loadCSS((f.editor_css?b.documentBaseURI.toAbsolute(f.editor_css):"")||c+"/skins/"+f.skin+"/ui.css")},renderUI:function(b){var c=this,d=b.targetNode,e,f,g=c.editor,h=g.controlManager,i;return d=a.insertAfter(a.create("span",{id:g.id+"_container","class":"mceEditor "+g.settings.skin+"SimpleSkin"}),d),d=i=a.add(d,"table",{cellPadding:0,cellSpacing:0,"class":"mceLayout"}),d=f=a.add(d,"tbody"),d=a.add(f,"tr"),d=e=a.add(a.add(d,"td"),"div",{"class":"mceIframeContainer"}),d=a.add(a.add(f,"tr",{"class":"last"}),"td",{"class":"mceToolbar mceLast",align:"center"}),f=c.toolbar=h.createToolbar("tools1"),f.add(h.createButton("bold",{title:"simple.bold_desc",cmd:"Bold"})),f.add(h.createButton("italic",{title:"simple.italic_desc",cmd:"Italic"})),f.add(h.createButton("underline",{title:"simple.underline_desc",cmd:"Underline"})),f.add(h.createButton("strikethrough",{title:"simple.striketrough_desc",cmd:"Strikethrough"})),f.add(h.createSeparator()),f.add(h.createButton("undo",{title:"simple.undo_desc",cmd:"Undo"})),f.add(h.createButton("redo",{title:"simple.redo_desc",cmd:"Redo"})),f.add(h.createSeparator()),f.add(h.createButton("cleanup",{title:"simple.cleanup_desc",cmd:"mceCleanup"})),f.add(h.createSeparator()),f.add(h.createButton("insertunorderedlist",{title:"simple.bullist_desc",cmd:"InsertUnorderedList"})),f.add(h.createButton("insertorderedlist",{title:"simple.numlist_desc",cmd:"InsertOrderedList"})),f.renderTo(d),{iframeContainer:e,editorContainer:g.id+"_container",sizeContainer:i,deltaHeight:-20}},getInfo:function(){return{longname:"Simple theme",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.ThemeManager.add("simple",tinymce.themes.SimpleTheme)})();