(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.gClass=function(){};gClass.extend=function(g){var f=this.prototype;a=true;var e=new this();a=false;for(var d in g){e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){return function(){var k=this._super;this._super=f[h];var j=i.apply(this,arguments);this._super=k;return j}})(d,g[d]):g[d]}function c(){if(!a&&this.initialize){this.initialize.apply(this,arguments)}}c.prototype=e;c.constructor=c;c.extend=arguments.callee;return c}})();if(Function.prototype.bind==undefined){jQuery.extend(Function.prototype,{bind:function(){if(arguments.length<2&&(typeof arguments[0]=="undefined")){return this}var a=this;var d=arguments[0];var c=new Array();for(var e=1,b=arguments.length;e<b;e++){c[(e-1)]=arguments[e]}return function(){var f=new Array();for(var h=0,g=c.length;h<g;h++){f[(f.length)]=c[h]}for(var h=0,g=arguments.length;h<g;h++){f[(f.length)]=arguments[h]}return a.apply(d,f)}}})}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,a){a||(a=0);var b=this.length;if(a<0){a=b+a}for(;a<b;a++){if(this[a]===c){return a}}return -1}}var Message={options:{duration:3000,stable:false,nextMessage:"",onShow:function(){},onComplete:function(){}},showMessage:function(d,a,c){var b=jQuery.extend({},this.options,c);this.renderMessage(d,a);if(b.stable!=true){setTimeout(function(){Message.renderMessage(b.nextMessage,a);if(b.onComplete){b.onComplete()}},b.duration)}if(b.onShow){b.onShow()}},renderMessage:function(b,a){if(a.nodeName=="INPUT"){a.value=b}else{if(jQuery(a).hasClass("gbut")){a.find(".gbtx").innerHTML=b}else{a.innerHTML=b}}return true}};var GawkerBase=gClass.extend({initialize:function(){},setOptions:function(b){var a=this.options;this.options=b;for(optionName in a){if(!this.options[optionName]){this.options[optionName]=a[optionName]}}},parseQueryString:function(a){return gawker_parseQueryString(a)}});Debug={enabled:false,enable:function(){this.enabled=true},disable:function(){this.enabled=false;jQuery("#debug_pane").hide()},log:function(a){if(!this.enabled){return}var b=new Date();var e=b.getMonth()+1;var g=b.getDate();var f=b.getFullYear();var h=b.getHours();var c=b.getMinutes();var i=b.getSeconds();if(e<10){e="0"+e}if(g<10){g="0"+g}if(c<10){c="0"+c}if(h<10){h="0"+h}if(i<10){i="0"+i}var d=f+"-"+e+"-"+g+" "+h+":"+c+":"+i;jQuery("#debug_server_info").append(a.mode+": "+a.url+" ("+d+")\n");if(a.mode=="AJAX"){jQuery("#debug_server_info").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+jQuery.toJSON(a.options.data)+"\n")}}};jQuery.getJsonOwn=function(b,h,f){if(f===undefined){if(typeof h=="string"){f=h;h=null}if(f===undefined){var g=b.replace(/[^A-Za-z0-9]/g,"");var e="";var d=1;while(window[g+e]!==undefined){d++;e="_"+d}f=g+e}}b=b.replace("pipeJsonP=?","pipeJsonP="+f);var a=document.createElement("script");a.defer="defer";a.src=b;Debug.log({mode:"JSON",url:b});a.onload=a.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){a.onload=a.onreadystatechange=null;if(c&&a.parentNode){c.removeChild(a)}}};var c=document.getElementsByTagName("head")[0]||document.documentElement;window[f]=function(i){if(h){h(i)}window[f]=undefined};c.insertBefore(a,c.firstChild)};var XHR=GawkerBase.extend({aborted:false,options:{type:"POST",dataType:"json",klass:null},initialize:function(a){this.setOptions(a)},send:function(c,f,e){this.options.url=c;this.options.data=f;var b="";var a={};if(e){var d=location.href.match(/\?(.+)$/);if(d!=null){b="&"+d[1];a=this.parseQueryString(d[1])}}XHRFormToken=jQuery.cookie("form_token");if(XHRFormToken&&(this.options.disableToken!==true)){switch(typeof(this.options.data)){case"undefined":this.options.data=a;this.options.data.formToken=XHRFormToken;break;case"string":this.options.data+=(f==""?"":"&")+"formToken="+XHRFormToken+b;break;default:jQuery.extend(this.options.data,a);this.options.data.formToken=XHRFormToken;break}}if(this.options.type=="POST"&&(c=="/index.php"||c=="")&&f.op!==undefined){c+="?_actn_="+f.op;this.options.url=c}Debug.log({mode:"AJAX",url:"http://"+document.domain+"/"+this.options.url,options:this.options});this.xhr=jQuery.ajax(this.options)},getJSON:function(c,d){if(d===undefined){d=this.options.success}var b=d;if(this.options.timeout!==undefined&&this.options.error!==undefined){var a=this;this.jsonp_guard=window.setTimeout(function(){a.aborted=true;a.options.error()},this.options.timeout);b=function(e){window.clearTimeout(a.jsonp_guard);if(!a.aborted){d(e)}}}jQuery.getJSON(c,b)},ajax:function(a,b){jQuery.ajax(a,b)},getJsonOwn:function(a,c,b){if(typeof c=="string"){b=c;c=undefined}if(c===undefined){c=this.options.success}jQuery.getJsonOwn(a,c,b)},abort:function(){if(this.xhr!=undefined){this.xhr.abort()}}});var gh={};jQuery.extend(jQuery.widget.prototype,function(){var EventDispatcher={listeners:{},event_history:{},subscribe:function(what,fn,last_n,which_object){if(this.listeners[what]){this.listeners[what].push({fn:fn,target:which_object})
}else{this.listeners[what]=[{fn:fn,target:which_object}]}if(this.event_history[what]){var l=this.event_history[what].length;if(last_n==undefined){last_n=1}if(last_n>=0){var i=l-last_n}else{var i=0}for(;i<l;i++){try{if(this.event_history[what][i]["notifyOnly"]){if(this.event_history[what][i]["notifyOnly"]===which_object){fn(this.event_history[what][i])}}else{fn(this.event_history[what][i])}}catch(ex){}}}},notify:function(ev){var name_parts=ev.name.split(".");var key="";for(var i=0,l=name_parts.length;i<l;i++){key+=name_parts[i];if(i<l-1){key+="."}if(this.listeners[key]){for(var ii=0,ll=this.listeners[key].length;ii<ll;ii++){try{if(ev.notifyOnly){if(ev.notifyOnly===this.listeners[key][ii]["target"]){this.listeners[key][ii]["fn"](ev)}}else{this.listeners[key][ii]["fn"](ev)}}catch(ex){Logger.debugLog(ex.message)}}}if(this.event_history[key]){this.event_history[key].push(ev)}else{this.event_history[key]=[ev]}}}};var DOMEventDispatcher={observing:[],eventmap:{},registerEventDispatcher:function(myeventmap){return function(e){var target=jQuery(e.target);for(var control_name in myeventmap){if(myeventmap.hasOwnProperty(control_name)){var closest=target.closest("."+control_name);if(closest.length>0){e.target=closest[0];myeventmap[control_name](e)}}}}},doRegisterHandler:function(el,event_type,fn,control_name){var ndx=this.observing.indexOf(el);if(ndx==-1){ndx=this.observing.push(el)-1;this.eventmap["n"+ndx]={}}ndx="n"+ndx;if(!this.eventmap[ndx][event_type]){this.eventmap[ndx][event_type]={control_types:{}};this.eventmap[ndx][event_type]["realhandler"]=this.registerEventDispatcher(this.eventmap[ndx][event_type]["control_types"]);jQuery(el)[event_type](this.eventmap[ndx][event_type]["realhandler"])}this.eventmap[ndx][event_type]["control_types"][control_name]=fn},doTearDownHandler:function(el,event_type,control_name){var ndx=this.observing.indexOf(el);if(ndx>-1){ndx="n"+ndx;if(this.eventmap[ndx]&&this.eventmap[ndx][event_type]){if(this.eventmap[ndx][event_type]["control_types"][control_name]){delete this.eventmap[ndx][event_type]["control_types"][control_name];var clearthis=true;for(var nm in this.eventmap[ndx][event_type]["control_types"]){if(this.eventmap[ndx][event_type]["control_types"].hasOwnProperty(nm)){clearthis=false;break}}if(clearthis){jQuery(el).unbind(event_type,this.eventmap[ndx][event_type]["realhandler"])}}}}}};var Feature={SSOLOGIN:typeof featureAliases!=="undefined"&&typeof featureAliases.ssologin!=="undefined"?featureAliases.ssologin:"switch",POWWOW:typeof featureAliases!=="undefined"&&typeof featureAliases.newcomments!=="undefined"?featureAliases.newcomments:"newcomments",DISABLESSO:typeof featureAliases!=="undefined"&&typeof featureAliases.disablesso!=="undefined"?featureAliases.disablesso:"disablesso",isOn:function(feature){var retval=null;if(typeof featureAliases!=="undefined"&&typeof featureAliases[feature]!=="undefined"){retval=jQuery("html").hasClass("feature_"+featureAliases[feature])}else{retval=jQuery("html").hasClass("feature_"+feature)}return retval},on:function(feature){if(!Feature.isOn(feature)){jQuery("html").addClass("feature_"+Feature.SSOLOGIN)}},off:function(feature){if(Feature.isOn(feature)){jQuery("html").removeClass("feature_"+Feature.SSOLOGIN)}}};var GawkerAuth={user:null,site:null,geoip:"",mail2token:"",authenticated:false,action_url:"/sso/userstate?jsonP=",ssoUser:null,xhr:null,levels:["removedusers","pendingusers","maybeusers","users","commenters","starcommenters","superstarcommenters","commentadmins","authors","editors","superusers"],now:null,getUserState:function(){if(Feature.isOn(Feature.POWWOW)){if(!Feature.isOn(Feature.DISABLESSO)){this.getPowwowUserState()}}else{this.getClassicUserState()}},getPowwowUserState:function(){this.callUserState(window.ssoOptions.ssoHost+"/v1/userstate?consumer="+window.ssoOptions.consumerId+"&cookieSuffix="+window.ssoOptions.cookieSuffix+"&jsonP=")},getClassicUserState:function(){this.callUserState(this.action_url)},callUserState:function(url){if(this.xhr==null){this.xhr=new XHR({klass:"auth",type:"GET",disableToken:true,error:this.handleAjaxFail.bind(this),success:this.handleAjaxSuccess.bind(this)})}var s=document.createElement("script");s.async="async";var funcName="getUserState"+Math.round(Math.random()*1000000);var obj=this;eval(funcName+" = function(data) {obj.handleAjaxSuccess(data)};");s.src=url+funcName+"&r="+this.getRevision();var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;head.insertBefore(s,head.firstChild)},getRevision:function(){var rev=jQuery.cookie("usrev");if(!rev){rev=this.resetRevision()}return rev},resetRevision:function(){var rev=Math.floor(Math.random()*100000);jQuery.cookie("usrev",rev,{path:"/",expires:30});return rev},handleAjaxFail:function(xr,errorcode){switch(errorcode){case"timeout":default:EventDispatcher.notify({name:"user.auth.failure",source:this});break}},fireLogoutEvent:function(){EventDispatcher.notify({name:"user.auth.failure",source:this})},fireSsoLogoutEvent:function(data){this.ssoUser=null;
EventDispatcher.notify({name:"user.auth.ssoFailure",source:data})},handleAjaxSuccess:function(data){if(data.meta!==undefined&&data.data!==undefined){if(data.meta.method=="userstate"&&data.meta.success==true){var d=data.data;if(d.loggedIn){this.ssoUser=data.data.user;EventDispatcher.notify({name:"user.auth.ssoSuccess",source:data});if(d.user.kinjaId>0){this.getClassicUserState()}else{this.fireLogoutEvent()}}else{this.fireLogoutEvent();this.fireSsoLogoutEvent(data)}}else{this.fireLogoutEvent();this.fireSsoLogoutEvent(data)}}else{this.authenticated=false;if(data.action=="userstate"){this.site=data.site?data.site:null;this.geoip=data.geoip?data.geoip:"N/A";this.formToken=data.formToken;this.mail2token=data.mail2token?data.mail2token:"N/A";this.sso_migrated=data.sso_migrated?data.sso_migrated:null;this.now=data.now;this.sso=null;if(data.sso!==null){this.sso=data.sso}this.kinjaUserId=0;if(data.kinjaUserId!==0){this.kinjaUserId=data.kinjaUserId}if(data.success==true){this.authenticated=true;this.user=data.user;EventDispatcher.notify({name:"user.auth.success",source:this})}else{this.fireLogoutEvent()}}else{this.fireLogoutEvent()}}},hasLevel:function(level,siteId){siteId=siteId?siteId:"current";if(!this.authenticated){return false}else{return(jQuery.inArray(level,this.levels)==-1?false:(jQuery.inArray(this.user.level[siteId],this.levels)>=jQuery.inArray(level,this.levels)))}},fbWhenReady:function(callback_function){if(window.FB!==undefined){FB.Facebook.get_sessionWaitable().waitUntilReady(function(){callback_function()}.bind(this))}}};if(!Feature.isOn(Feature.POWWOW)){GawkerAuth.getUserState()}var CommonDialogs={groups:{},initDialogs:function(params){if(!params.group){params.group="default"}if(!this.groups[params.group]){this.groups[params.group]={overlay:{el:params.overlay?params.overlay:null,show:params.showOverlay?params.showOverlay:function(args){var jwindow=jQuery(window);args.el.css({height:jwindow.height(),opacity:0.8}).fadeIn(125,args.callback?args.callback:null)},hide:params.hideOverlay?params.hideOverlay:function(args){args.el.fadeOut(125,args.callback?args.callback:null)}},state:"no_dialog",panels:{}}}if(!params.panels){params.panels={}}for(var pn in params.panels){if(params.panels.hasOwnProperty(pn)){this.groups[params.group].panels[pn]={el:params.panels[pn]["el"]["get"]?params.panels[pn]["el"]:jQuery(params.panels[pn]["el"]),focus:params.panels[pn]["focus"]?params.panels[pn]["focus"]:null,show:params.panels[pn]["show"]?params.panels[pn]["show"]:function(args){var jwindow=jQuery(window);var lft=Math.ceil((jwindow.width()-args.el.width())/2);if(jQuery(args.el[0]).hasClass("profile_edit")){var tp=Math.ceil((jwindow.height()-args.el.height())/2);if(tp<0){tp=0}}else{var tp=100}if(jQuery("html").hasClass("mobile")){var tp=window.scrollY+Math.max(jQuery("#header").height()-window.scrollY,0)+2}args.el.css({left:lft,top:tp}).fadeIn(125,args.callback?args.callback:null);jQuery("#content").addClass("noclick")},hide:params.panels[pn]["hide"]?params.panels[pn]["hide"]:function(args){args.el.fadeOut(125,args.callback?args.callback:null);jQuery("#content").removeClass("noclick")}}}}},toggleDialog:function(params){if(!params){params={}}var jwindow=jQuery(window);if(!params.group){params.group="default"}var obj=this;if(this.groups[params.group]){var whichpanel=this.groups[params.group].panels[params.which];if(this.groups[params.group].state=="no_dialog"){if(this.groups[params.group].panels[params.which]){this.widget.raiseEvent("dialog.beforeOpen."+params.which,params);this.groups[params.group].panels[params.which].show({el:this.groups[params.group].panels[params.which].el,callback:function(){obj.widget.raiseEvent("dialog.afterOpen."+params.which,params);if(whichpanel.focus){whichpanel.focus.focus()}if(params.sync_this){params.sync_this()}}});this.groups[params.group].overlay.show({el:this.groups[params.group].overlay.el});this.groups[params.group].state="active:"+params.which}}else{var oldpanel=this.groups[params.group].state.split(":").pop();if(oldpanel==params.which||!params.which){this.widget.raiseEvent("dialog.beforeClose."+oldpanel,{});this.groups[params.group].panels[oldpanel].hide({el:this.groups[params.group].panels[oldpanel].el,callback:function(){if(params.sync_this){params.sync_this()}obj.widget.raiseEvent("dialog.afterClose."+oldpanel,{})}});this.groups[params.group].overlay.hide({el:this.groups[params.group].overlay.el});this.groups[params.group].state="no_dialog";if(this.cancel_callback){this.cancel_callback()}}else{this.widget.raiseEvent("dialog.beforeClose."+oldpanel,{});this.widget.raiseEvent("dialog.beforeOpen."+params.which,{});this.groups[params.group].panels[oldpanel].hide({el:this.groups[params.group].panels[oldpanel].el,callback:function(){whichpanel.show({el:whichpanel.el,callback:function(){obj.widget.raiseEvent("dialog.afterClose."+oldpanel,{});obj.widget.raiseEvent("dialog.afterOpen."+params.which,params);if(whichpanel.focus){whichpanel.focus.focus()}if(params.sync_this){params.sync_this()}}})}});
this.groups[params.group].state="active:"+params.which}}}if(params.cancel){this.cancel_callback=params.cancel}else{this.cancel_callback=""}return"will_sync"}};return{options:{effectsSlideSpeed:300},auth:GawkerAuth,commondialogs:CommonDialogs,feature:Feature,mystate:"init",_init:function(){this.resetElements();this.commondialogs.widget=this;this._effect_queue=[];this._effect_busy=false;this.setControls();this.siteConfig={};this.browser=(jQuery("html").hasClass("ie")?"ie":"standard");if(typeof(siteConfig)!=="undefined"){this.siteConfig=siteConfig}(this.initialize&&this.initialize());Logger.debugLog(this.widgetName+" init done")},inState:function(whichstate){return(0==this.mystate.indexOf(whichstate))},registerEventHandler:function(for_element,eventType,fn){if(for_element===undefined){return}if(!for_element.get||typeof for_element.get==="undefined"){for_element=[for_element]}for(var i=0,l=for_element.length;i<l;i++){DOMEventDispatcher.doRegisterHandler(for_element[i],eventType,fn,this.getControlClass())}},tearDownEventHandler:function(for_element,eventType){if(!for_element.get){for_element=[for_element]}for(var i=0,l=for_element.length;i<l;i++){DOMEventDispatcher.doTearDownHandler(for_element[i],eventType,this.getControlClass())}},getControlClass:function(){return this.options.controlClass?this.options.controlClass:"control"},fireEvent:function(event,attributes,synced){if(!synced){synced=false}if(this.options[event]){try{if(synced){this.syncEffect({el:this.options,fn:event,params:attributes})}else{return this.options[event](attributes)}}catch(e){return null}}else{return null}},syncEffect:function(synced_effect){if(synced_effect){this._effect_queue.push(synced_effect)}else{this._effect_busy=false}if(!this._effect_busy&&this._effect_queue.length>0){var first_in_row=this._effect_queue.shift();this._effect_busy=true;var will_sync=false;if(first_in_row.params){will_sync=(first_in_row.el[first_in_row.fn](first_in_row.params)=="will_sync")}else{first_in_row.el[first_in_row.fn]()}if(!will_sync){this.syncEffect()}}},raiseEvent:function(name,params){var ev={name:name,source:this,params:params};if(this.notifyOnly){ev.notifyOnly=this.notifyOnly}EventDispatcher.notify(ev);jQuery(window).trigger(name,params)},asyncRaiseEvent:function(name,params){var obj=this;setTimeout(function(){obj.raiseEvent(name,params)},1)},subscribeForEvent:function(what,fn,last_n){return EventDispatcher.subscribe(what,fn,last_n,this)},resetElements:function(){var baseElement=this.element[0];this.element=[baseElement];if(this.options.externalElement){var exts=jQuery(this.options.externalElement);for(var i=0,l=exts.length;i<l;i++){this.element.push(exts.get(i))}}this.element=jQuery(this.element)},setControls:function(){this.controls={};var controlElements=this.element.find("."+this.getControlClass());var controlNames={};for(var i=0,l=controlElements.length;i<l;i++){controlNames[this.getParam("cn",controlElements.eq(i))]=1}for(var controlName in controlNames){if(controlNames.hasOwnProperty(controlName)){this.controls[controlName]=controlElements.filter(".cn_"+controlName)}}},getParam:function(param_name,element){if(element==undefined){element=this.element}else{element=jQuery(element)}var class_names=element.attr("class");if(class_names!=undefined){if(jQuery.data(element,"fp")===class_names){return jQuery.data(element,"params")[param_name]}else{jQuery.data(element,"fp",class_names);var params={};class_names=class_names.split(" ");for(var i=0,l=class_names.length;i<l;i++){var cut_position=class_names[i].indexOf("_");if(cut_position>0){params[class_names[i].substr(0,cut_position)]=class_names[i].substr(cut_position+1)}}jQuery.data(element,"params",params);return params[param_name]}}return null},setParam:function(paramName,value,element){if(element==undefined){element=this.element}var actualValue=this.getParam(paramName,element);if(actualValue!=null){element.removeClass(paramName+"_"+actualValue)}element.addClass(paramName+"_"+value)},hideWidget:function(){this.element.hide()},showWidget:function(){this.element.show()},toggleIndicator:function(){if(this.controls&&this.controls.indicator){this.controls.indicator.toggle()}},isEnabled:function(){return(!this.option("disabled"))},handleAjaxRequest:function(){},handleAjaxFail:function(){this.enableInputs();this.hideIndicator();Logger.debugLog("Network problem has occured.")},enableInputs:function(){jQuery("input:visible, textarea:visible, select:visible, button:visible",this.element).attr("disabled",false).removeClass("ui-state-disabled")},disableInputs:function(){jQuery("input[type=checkbox], input[type=text], input[type=password], input[type=radio], input[type=button], input[type=submit], input[type=reset], textarea, select, button",this.element).attr("disabled",true).addClass("ui-state-disabled")},showIndicator:function(){(this.controls&&this.controls.indicator&&this.controls.indicator.show())},hideIndicator:function(){jQuery(".indicator",this.element).hide()},getUrlParams:function(){var retVal={};var paramStr=location.search;
if(paramStr.length>0){paramStr=paramStr.substr(1)}if(location.hash.indexOf("?")!=-1){var parts=location.hash.split("?",2);paramStr+=(paramStr.length>0?"&":"")+parts[1]}if(paramStr.length>0){var items=paramStr.split("&");for(var i=0;i<items.length;i++){var name=items[i].split("=",1);if(!name.length){continue}name=name[0];var value=items[i].substr(name.length+1);if(name.substr(-2)=="[]"){name=name.substr(0,name.length-2)}if(retVal[name]===undefined){retVal[name]=value}else{if(typeof(retVal[name])=="string"){retVal[name]=[retVal[name],value]}else{retVal[name].push(value)}}}}return retVal}}}());var GawkerClientside={version:"0.4_jQuery",widgets:{},pushWidget:function(a,b){if(b){if(this.widgets[a]){this.widgets[a].push(b)}else{this.widgets[a]=[b]}}return b},destroyWidgets:function(c){var b=0,a=0;if(this.widgets[c]&&this.widgets[c].length){for(b=0,a=this.widgets[c].length;b<a;b++){this.widgets[c][b].destroy()}}this.widgets[c]=null}};var GanjaDate={refineDate:function(b){if(b===undefined){b=new Date()}var a={hours:this.zeroPad(b.getHours(),2),minutes:this.zeroPad(b.getMinutes(),2),seconds:this.zeroPad(b.getSeconds(),2),milliseconds:this.zeroPad(b.getMilliseconds(),3),time:b.getTime()};a.MSm=a.minutes+":"+a.seconds+"."+a.milliseconds;a.HMSm=a.hours+":"+a.MSm;return a},zeroPad:function(b,a){b=b.toString();while(b.length<a){b="0"+b}return b}};var Logger={enabled:false,buffer:[],previousDate:GanjaDate.refineDate(),cookieset:null,isCookieSet:function(){if(this.cookieset===null){this.cookieset=jQuery.cookie("____GDClientSide")==="on"}return this.cookieset},debugLog:function(c){if(this.enabled||this.isCookieSet()){try{var a=GanjaDate.refineDate();var d=GanjaDate.refineDate(new Date(a.time-this.previousDate.time));this.previousDate=a;if(typeof c==="object"){this.writeLog(a.HMSm+" [+"+d.MSm+"] =>");this.writeLog(c)}else{this.writeLog(a.HMSm+" [+"+d.MSm+"] "+c)}}catch(b){}}},writeLog:function(e){var d=0,c=0;if(console&&console.log){console.log(e)}else{var a=jQuery("#console");if(a.length>0){a.show();if(this.buffer.length>0){var b=this.buffer;this.buffer=[];for(d=0,c=b.length;d<c;d++){a.append(b[d]+"<br />")}}a.append(e+"<br />")}else{this.buffer.push(e)}}}};var settings={scan_interval:1500,widgets:{}};var Validator=GawkerBase.extend({options:{scope:null,validators:{valid_minlen:function(b,a){return b.length>=parseInt(a,10)},valid_maxlen:function(b,a){return b.length<=parseInt(a,10)},valid_minval:function(b,a){return parseInt(b,10)>=a},valid_maxval:function(b,a){return parseInt(b,10)<=a},valid_minmax:function(b,a){a=a.split("_");return(parseInt(b,10)>=a[0])&&(parseInt(b,10)<=a[1])},valid_nonempty:function(b){var a=/^[\s\S]+$/;return a.test(b)},valid_nonempty_any:function(c,a){var b=/^[\s\S]+$/;return b.test(c)||b.test(this.options.scope[0][a].value)},valid_nomatch:function(c,b){var a=new RegExp(b);return(c==""||a.test(c)===false)},valid_alpha:function(a){return(a==""||/^[a-zA-Z]+$/.test(a))},valid_alphanum:function(a){return(a==""||/^\W+$/.test(a))},valid_number:function(a){return(a==""||/^\d+$/.test(a))},valid_email:function(a){return(a==""||/\w{1,}[@](([\w\-]{1,}[.])){1,}([\w\-]{2,})$/.test(a))},valid_emails_comma:function(d){if(d==""){return true}else{var f=d.split(",");var b=true;for(var c=0,a=f.length;c<a;c++){var e=f[c].trim();b=b&&(e==""||/\w{1,}[@](([\w\-]{1,}[.])){1,}([\w\-]{2,})[,]?$/.test(e))}return b}},valid_unique_comma:function(d){if(d==""){return true}else{var f=d.split(",");var b=true;var g={};for(var c=0,a=f.length;c<a;c++){var e=f[c].trim();if(g["u"+e]){b=false;break}else{g["u"+e]=true}}return b}},valid_limit_comma:function(b,a){if(b==""){return true}else{a=parseInt(a,10);var c=b.split(",");if(c.length<=a){return true}else{return false}}},valid_url:function(a){return(a==""||/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(a))},valid_date:function(b){var a=/^(\d{2})\/(\d{2})\/(\d{4})$/;if(!a.test(b)){return false}var c=new Date(b.replace(a,"$1/$2/$3"));return(parseInt(RegExp.$1,10)==(1+c.getMonth()))&&(parseInt(RegExp.$2,10)==c.getDate())&&(parseInt(RegExp.$3,10)==c.getFullYear())},valid_sameas:function(b,a){return b==this.options.scope[0][a].value}},effects:{},infields:[],defaultEffects:function(a){return[function(){jQuery(a).show()},function(){jQuery(a).hide()}]}},initialize:function(b){this.errorlist={};this.errorlist_visible={};this.input_fields={};this.setOptions(b);if(this.options.scope===null){return false}this.options.infields=jQuery(".validate",this.options.scope[0]);for(var c=0,a=this.options.infields.length;c<a;c++){this.setupInfield(this.options.infields[c])}},setupInfield:function(e){this.input_fields[e.name]={};var c=e.name.replace(/\[/,"_").replace(/\]/,"");var d=jQuery("."+c+"_validmsg",this.options.scope[0]);for(var b=0,a=d.length;b<a;b++){this.setupErrorDiv(d[b],e)}},setupErrorEffects:function(d,c,b){var a=this.options.defaultEffects;if(this.options.effects[c]){switch($type(this.options.effects[c])){case"function":a=this.options.effects[c];break;case"object":if(this.options.effects[c][b]){a=this.options.effects[c][b]
}break}}var e=a(d);return{show:e[0],hide:e[1]}},setupErrorDiv:function(b,c){for(var a in this.options.validators){if(this.options.validators.hasOwnProperty(a)){if(b.className.indexOf("msg_"+a)>-1){this.input_fields[c.name][a]=this.setupErrorEffects(b,c.name,a)}}}},testRule:function(c,b){var a=this.options.validators[c[0]].bind(this);return a(b,c[1])},validate:function(){var h=true;this.errorlist={};for(var e=0,b=this.options.infields.length;e<b;e++){var g=this.options.infields[e].className.split(" ");inner_cycle:for(var d=0,c=g.length;d<c;d++){var f=g[d].split("-");if(this.options.validators.hasOwnProperty(f[0])){var a=this.testRule(f,this.options.infields[e].value);h=h&&a;if(!a){this.errorlist[this.options.infields[e].name]={input_el:this.options.infields[e],failed_validator:f[0]};break inner_cycle}}}}return h},hideErrors:function(){jQuery(".validationmessage",this.options.scope).hide();this.errorlist_visible={};return this},showErrors:function(){var a=jQuery.extend(this.errorlist,this.errorlist_visible),f=false,b=null;for(var c in a){if(this.errorlist.hasOwnProperty(c)){if(this.errorlist_visible[c]){var d=this.input_fields[this.errorlist_visible[c].input_el.name][this.errorlist_visible[c].failed_validator].hide();if(d&&d.chain){d.chain(this.input_fields[this.errorlist[c].input_el.name][this.errorlist[c].failed_validator].show)}else{this.input_fields[this.errorlist[c].input_el.name][this.errorlist[c].failed_validator].show()}}else{this.input_fields[this.errorlist[c].input_el.name][this.errorlist[c].failed_validator].show()}this.errorlist_visible[c]=this.errorlist[c];if(!f){try{b=jQuery(this.errorlist[c].input_el).closest("div.ui-tabs-panel");if(b.length>0){jQuery("a[href=#"+b.eq(0).attr("id")+"]").eq(0).click()}this.errorlist[c].input_el.focus();f=true}catch(g){}}}else{if(this.errorlist_visible[c]){this.input_fields[this.errorlist_visible[c].input_el.name][this.errorlist_visible[c].failed_validator].hide()}this.errorlist_visible[c]=undefined}}return this},clearErrors:function(){this.hideErrors();this.errorlist={};return this}});
