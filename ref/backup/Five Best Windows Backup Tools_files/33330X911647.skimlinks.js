// v:9.2.3
var skimlinks_pub_id = '33330X911647';
var skimlinks_site = 'lifehacker.com';
var skimwords_hover_name = 'neutral';
var skimwords_horizontal_distance = 80;
var skimwords_vertical_distance = 80;
var skimlinks_exclude = Array('amazon.com');
var noskimwords = true;
var noskoupon = true;
var noskimproducts = true;
var skimwords_instant = true;
(function(){var ra,sa,ta,ba,j,q,ua,va,wa,ca,H,u,i,P,da,xa,ya,m,D,r,I,z,Q,ea,s,E,F,v,za,o,fa,ga,Aa,ha,R,J,w,Ba,Ca,ia,S,Da,Ea,Fa,Ga,Ha,Ia,Ja,x,Ka,ja,La,Ma,ka,t,Na,l,Oa,T,U,V,la,K,Pa,L,W,A,X,Y,G,Z,p,M,Qa,Ra,Sa,ma,$,y,n,B,na,aa,N,C,oa,O,pa,d,qa={}.hasOwnProperty;z=Q=null;s={pag:"",phr:{},pub:"",slc:0,swc:0,jsl:0,jsf:"",guid:"",uc:"",t:1};ea=/http:/g;m=function(){var a;a=navigator.userAgent.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||
0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:parseFloat(a[2])||0}}();ga=[];za=(new Date).getTime();v=[];fa=[];o=r=null;I=!1;E=[];D=[];F=[];Z=G=X=K=la=A=p=null;U=[];aa=N=na=C=L=Y=T=V=W=null;y="";B=n=0;oa=!1;d=this;O=d.location;ra=["noskim","norewrite"];sa="*doubleclick.net,*mjxads.internet.com,*pgpartner.co.uk,*pgpartner.com,*pricegrabber.co.uk,*pricegrabber.com,*overture.com,*youtube.com".split(",");Pa=function(){return!0};Aa=function(a){var b;
b=document.createElement("a");b.href=a;return M(b.hostname)};ta=function(){var a,b,c,e,g,f,h,k,j,i,m,l,o,q,r,t,u,v,w,x,y;Q=null!=(a=document.getElementsByTagName("html"))?a[0]:void 0;E=null!=(b=d.skimlinks_included_classes)?b:[];D=null!=(o=d.skimlinks_excluded_classes)?o:[];F=null!=(r=d.skimlinks_included_ids)?r:[];z=d.force_location?Aa(d.force_location):O.hostname;p=null!=(t=d.skimlinks_tracking)?t:!1;A=d.skimlinks_site||d.skimlinks_sitename||!1;la=null!=(u=d.skimlinks_domain)?u:"go.redirectingat.com";
K=null!=(v=d.skimlinks_google)?v:!1;X=null!=K?K:"skimout";G=null!=(w=d.skimlinks_target)?w:!1;Z=null!=(x=d.sl_test)?x:!1;U=null!=(y=d.skimlinks_exclude)?y:[];W=null!=(c=d.skimlinks_noright)?c:!1;V=null!=(e=d.skimlinks_exrel)?e:!1;T=null!=(g=d.skimlinks_byrel)?g:!1;Y=null!=(f=d.skimlinks_blocked_tag)?f:!1;L=0;C=null!=(h=d.skimlinks_pub_id)?h:"";if(d.skimlink_legacy_support)d.skimlinks=function(){return!0},d.mugicPopWin=function(){return!0},d.mugicRightClick=function(){return!0};n=null!=(k=d.skimlinks_dnt)?
k:0;B=null!=(j=window.skimlinks_nocookie)?j:!1;na=null!=(i=d.noimpressions)?i:!1;aa=null!=(m=d.noskimlinks||d.noskim)?m:!1;N=null!=(l=d.noskimwords||d.noskim)?l:!1;oa=null!=(q=d.skim_toolbar)?q:!1;Ha(z)&&(N=aa=!0);p&&!/^[a-z0-9_\\|]+$/i.test(p)&&(p=!1);s.pub=C;s.uc=p;"undefined"!==typeof assign_skimwords_globals&&null!==assign_skimwords_globals&&assign_skimwords_globals();D.push("noskimlinks");return!0};Ha=function(a){var b,c,e,g;if(d.noskim_domains){g=d.noskim_domains;for(c=0,e=g.length;c<e;c++)if(b=
g[c],-1!==a.toLowerCase().indexOf(b.toLowerCase()))return!0}return!1};M=function(){var a;a=/^www\./i;return function(b){return b.replace(a,"")}}();q=function(){return document.addEventListener?function(a,b,c){if(a&&(a.nodeName||a===d))return a.addEventListener(b,c,!1)}:function(a,b,c){if(a&&(a.nodeName||a===d))return a.attachEvent("on"+b,function(){return 7>m.version&&!window.event?(setTimeout(function(){return c.call(a,window.event)},100),!0):c.call(a,window.event)})}}();(function(){return document.createElement("div").getElementsByClassName?
function(a,b){return w(a,b)?a:a.getElementsByClassName(b)}:function(a,b){var c;c=ca(b);return da(a,c)}})();i=function(){var a,b;b=[function(){var b,e,g,d;g=[["%20","+"],["!","%21"],["'","%27"],["\\(","%28"],["\\)","%29"],["\\*","%2A"],["\\~","%7E"]];d=[];for(b=0,e=g.length;b<e;b++)a=g[b],d.push([RegExp(a[0],"g"),a[1]]);return d}()];return function(c){var e,g,c=encodeURIComponent(c);for(e=0,g=b.length;e<g;e++)a=b[e],c=c.replace(a[0],a[1]);return c}}();Fa=function(){var a;a=/^\/\/|https?:\/\//i;return function(b,
c){return a.test(b)&&(!c||!z||-1===c.indexOf(z))&&(!z||-1===z.indexOf("."+c))}}();j=function(a,b,c){var e;3<=arguments.length&&(a[b]=c);e=a[b];null==e&&(e=a.getAttribute(b));return e};u=function(a,b,c){arguments[1]="data-"+b;return j.apply(this,arguments)};Ra=function(a,b){var c;c=a.innerText||a.textContent||a.nodeValue;if(2<=arguments.length)a.innerText?a.innerText=b:a.textContent=b,c=b;return c};$=function(){var a,b;if(String.prototype.trim)return function(a){return null===a?"":String.prototype.trim.call(a)};
a=/^\s+/;b=/\s+$/;/\S/.test("\u00a0")&&(a=/^[\s\xA0]+/,b=/[\s\xA0]+$/);return function(c){return null===c?"":c.toString().replace(a,"").replace(b,"")}}();Ka=function(a){var b,c,e,g,d;if("object"===typeof a||a instanceof Array){g="";e=0;c=a instanceof Array;for(d in a)qa.call(a,d)&&(b=a[d],0<e&&(g+=","),c?g+=x(b):(b=x(b),g+='"'+d+'":'+b),e++);return c?"["+g+"]":"{"+g+"}"}return"string"===typeof a?(b=a.replace(/"/g,'\\"',a),'"'+b+'"'):isNaN(a)?"null":a.toString()};x=function(){var a;return"undefined"!==
typeof JSON&&null!==JSON&&JSON.stringify&&'["la"]'===JSON.stringify(["la"])?(a=JSON.stringify,function(b){return a(b)}):Ka}();P=function(){var a,b;a=/[-[\]{}()*+?.,\\^$|#\s]/g;b=/\s+/g;return function(c){return c.replace(a,"\\$&").replace(b,"s+")}}();ca=function(a){a=P(a);return RegExp("\\b"+a+"\\b","i")};w=function(a,b){return a.className?ca(b).test(a.className):!1};da=function(a,b){var c,e,d,f,h;e=[];a.className&&b.test(a.className)&&e.push(a);h=a.childNodes;for(d=0,f=h.length;d<f;d++)c=h[d],e=
e.concat(da(c,b));return e};va=function(a){return-1!==encodeURIComponent(a).indexOf("%C3%82%C2%A3")};ya=function(a){a=a.innerHTML.slice(0,4);if("http"===a||"www."===a)a.innerHTML="<span style='display:none!important;'>&nbsp;</span>";return!0};Ia=function(a){for(var b,c,e,d,a=a.parentNode;a&&a!==Q;){c=a.id;for(e=0,d=E.length;e<d;e++)if(b=E[e],w(a,b))return!1;for(e=0,d=F.length;e<d;e++)if(b=F[e],c===b)return!1;for(c=0,e=D.length;c<e;c++)if(b=D[c],w(a,b))return!0;a=a.parentNode}return E.length||F.length?
!0:!1};Da=function(a,b,c){null==c&&(c=!1);for(b=RegExp("\\b(?:(?:"+P(b)+")|(?:noskim))\\b","i");null!=a&&a!==Q;){if(a.className&&b.test(a.className))return!0;a=c?null:a.parentNode}return!1};wa=function(a,b){var c,e,g,f;w(a,"skimwords-link")?(f=j(a,"data-skimwords-word"),c=j(a,"data-skim-creative"),e=j(a,"data-skim-product"),g=d.skimlinks_domain||"go.redirectingat.com","undefined"!==typeof settings&&null!==settings&&(g=settings.sw_domain||g),b="//"+g+"/?id="+C+""+(p?"&xcust="+p:"")+"&xs=2&url="+i(b)+
"&xguid="+y+"&xword="+(f?f:"")+"&xcreo="+(c?c:"")+"&xpid="+(e?e:"")+"&sref="+i(O)+""+(n?"&dnt="+n:"")+""+(B?"&fdnt=1":"")):Da(a,"noskimlinks")||(c=j(a,"data-skim-creative"),b="//"+la+"/?id="+C+""+(A?"&site="+A:"")+""+(Z?"&test="+Z:"")+""+(p?"&xcust="+p:"")+"&xs=1&url="+i(b)+"&xguid="+y+"&xcreo="+(a&&null!=c?c:0)+"&sref="+i(O)+""+(n?"&dnt="+n:"")+""+(B?"&fdnt=1":""));return b};ha=function(a){var b;if((b=a.target||a.srcElement)&&!b.href&&a.currentTarget)b=a.currentTarget;for(;b&&"A"!==b.nodeName;)b=
b.parentNode;return b};t=function(a){var b;b=ha(a);La(b);if(d.vglnk&&w(b,"skimwords-link"))a&&a.stopPropagation?a.stopPropagation():(a=d.event,a.cancelBubble=!0);return!0};La=function(a){var b,c,e,d,f,h;f="msie"===m.browser&&7>m.version?1E4:100;b=!1;c=K;if(a&&a.nodeName&&"IMG"===a.nodeName)a=a.parentNode;if(a){h=a.href;if("msie"===m.browser&&a.childNodes.length&&3===a.childNodes[0].nodeType)d=a.innerHTML;(e=u(a,"skimlinks-href"))?b=!0:(e=wa(a,h),u(a,"skimlinks-href",e));c&&Sa(h);u(a,"skimlinks-orig-link")||
(u(a,"skimlinks-orig-link",h),b=!1);a.href=e;if(d)a.innerHTML=d;setTimeout(function(){a.href=u(a,"skimlinks-orig-link");if(d)a.innerHTML=d;return!0},f)}return b};Ga=function(a){var b,c,e;if(e=fa)for(b in e)if(qa.call(e,b)&&(c=e[b],c===a))return!0;return!1};Ja=function(a){var b,c;if(!Y)return!1;b=null!=a?a.previousSibling:void 0;if(!b)return!1;a=("["+Y+"]").toLowerCase();c=Ra(b);c=c.toLowerCase();c=$(c);b=c.lastIndexOf(a);return-1!==b&&b+a.length===c.length};S=function(a){return!a||T&&a===T||!Ba(a)};
Ba=function(a){var b,c,e,d;r=null;if(!a)return!1;a=a.toLowerCase();if(r)return r[a];r={};b=V?[V]:[];b=b.concat(ra);for(c=0,e=b.length;c<e;c++)d=b[c],r[d.toLowerCase()]=!0;return r[a]};ua=function(){var a,b,c,e;o={};A&&U.push(A);e=U.concat(sa);for(b=0,c=e.length;b<c;b++)a=e[b],o[a]=a.length;return o};Ea=function(a){var b,c,e;null===o&&ua();if(!a)return!1;for(b in o)if(qa.call(o,b))if(c=o[b],0===b.indexOf("*")){if(b=b.substr(1),c-=1,e=a.lastIndexOf(b),-1!==e&&e===a.length-c)return!0}else if(a===b)return!0;
return!1};ia=function(a,b){return Fa(a,b)&&!Ea(b)};Sa=function(a){var b,c,e;b=d.pageTracker;e=d.urchinTracker;c="/"+X+"/"+a;if(null!=b&&b._trackPageview)return b._trackPageview(c),!0;if(e)return e(c),!0;if(d._gaq)b=d._gaq,b.push(["_trackEvent",X,"click",a]);return!1};H=function(a){var b,c,e;c=i('},"pub"');b="//t.skimresources.com/api/track.php";e=[];n&&e.push("dnt="+n);B&&e.push("fdnt=1");e.push("data=");b+="?"+e.join("&");b+=i(x(s).replace(ea,""));null!=a&&a.length&&(a.join(i(",")),b=b.replace(c,
""+a+c));return[b,b.length]};ma=function(){var a,b,c,e,d,f,h;if(na)return!1;d=(new Date).getTime()-za;e=[];b=8E3;"msie"===m.browser&&(b=2E3);s.slc=L;s.swc="undefined"!==typeof sw_handlers&&null!==sw_handlers?sw_handlers:0;s.jsl=d;s.guid=y;s.phr={};a=H();a=a[1];for(c=d=0,h=ga.length;d<h;c=++d){f=ga[c];f=x(f).replace(ea,"");c=i('"'+c+'":'+f);f=a+c.length+3*e.length;if(f>b)a=H(e),e=a[0],J(e,!1,{async:!0}),e=[],s.t=0,a=H(),a=a[1];e.push(c)}b=H(e)[0];"msie"===m.browser&&7>m.version&&(b=b.substring(0,4095));
J(b,!1,{async:!0});ka(1);return!0};ka=function(a){if(10>a)return v=Ma(),setTimeout(function(){return ka(a+1)},2E3*a)};Ma=function(){var a,b,c,e,d,f,h;b={};e=[];c=[];for(d=0,f=v.length;d<f;d++)a=v[d],a.parentNode?c.push(a):b[a.href]=1;h=R();for(d=0,f=h.length;d<f;d++)a=h[d],b[a.href]&&e.push(a);ba(e);return e.concat(c)};ja=function(a){var b,c;c=new Date;b=c+300;a=ha(a);a=i('{"pubcode":"'+C+'","referrer":"'+O+'","site":"'+A+'","url":"'+a.href+'","custom":"'+p+'","product":"1"}');for(J("//r.skimresources.com/api/?call=track"+
(n?"&dnt="+n:"")+(B?"&fdnt=1":"")+"&data="+a);c<b;)c=new Date;return!0};J=function(a,b,c){var g;var e,d,f,h,k,j,i=this;null==c&&(c={});e=c.charset||null;j=c.target||null;g=null!=(d=c.async)?d:!0,c=g;d=null!=j&&j.document?j.document:document;f=d.getElementsByTagName("head")[0];k=d.createElement("script");h=!1;k.type="text/javascript";if(e)k.charset=e;k.onload=k.onreadystatechange=function(){var a;a=i.readyState;if(!h&&(!a||"complete"===a||"loaded"===a))if(k.onload=k.onreadystatechange=null,h=!0,b)return b.call(j)};
k.async=!1!==c;k.src=a;f.appendChild(k);return k};R=function(a){var b,c,e,d,f;b=null;a&&(b=RegExp("\\b"+P(a)+"\\b","i"));f=[];d=document.getElementsByTagName("a");for(c=0,e=d.length;c<e;c++){a=d[c];try{a.href&&(!b||a.className&&b.test(a.className))&&f.push(a)}catch(h){console.log("Malformed IE url")}}return f};ba=function(a){var b,c,d,g,f,h,k,i,l;c=E.length||F.length||D.length;g=[];for(i=0,l=a.length;i<l;i++)if(b=a[i],d=M(b.hostname),b.sl_hidden_domain&&(d=M(b.sl_hidden_domain)),k=$(b.href),h=j(b,
"rel"),f=j(b,"onclick"),(!c||!Ia(b))&&!Ja(b))if(Ga(d,b)){if(S(h)){G&&j(b,"target",G);if("msie"===m.browser){if(va(k))continue;ya(b)}null!=f&&-1!==f.toString().indexOf("return false")?q(b,"mousedown",t):q(b,"click",t);Qa(b,!1);Ca(b);g.push(b);W||q(b,"contextmenu",t);Pa(b)}}else ia(k,d)&&S(h)&&(G&&j(b,"target",G),q(b,"click",ja),W||q(b,"contextmenu",ja));return g};Ca=function(a,b){var c,e,g,f;if(d.link_icon||0<a.getAttribute("data-skim-product")&&d.skimwords_product_icon){if(0<a.getElementsByTagName("img").length)return!0;
if("msie"===m.browser&&8>m.version)a.style.display="inline-block";g=c="";null!=b&&(c=d.skimwords_icon_class||"",g=d.skimwords_icon_link_class||"");f=j(a,"title").replace("'","&#39;");e=d.link_icon||d.skimwords_product_icon;c="<a href='"+j(a,"href")+"' title='"+f+"' style='border:0px;padding:0;margin:0' class='skimlinks-icon-link "+g+"' skimlinked='skimlinked' target='_blank'><img src='"+e+"' class='"+c+"' skimlinked='skimlinked' style='margin: 0px 0px -3px 2px !important; float:none !important;  border:0px; float:none !important; display:inline !important;' /></a>";
e=document.createElement("div");e.innerHTML=c;c=e.childNodes[0];q(c,"mousedown",t);a.appendChild(c)}return!0};Oa=function(){"undefined"!==typeof skimwords&&null!==skimwords&&!N?skimwords():ma();return!0};xa=function(){var a,b,c,d,g,f,h,i;g=R();c=[];d={};for(h=0,i=g.length;h<i;h++)a=g[h],b=M(a.hostname),f=$(a.href),a=j(a,"rel"),ia(f,b)&&S(a)&&b&&!d[b]&&(c.push(b),d[b]=!0);return c};pa=function(){var a;ta();aa?"undefined"!==typeof skimwords&&null!==skimwords&&!N?skimwords():ma():(a=xa(),a=i('{"pubcode":"'+
C+'","domains":'+x(a)+"}"),a="//r.skimresources.com/api/?callback=skimlinksApplyHandlers"+(n?"&dnt="+n:"")+(B?"&fdnt=1":"")+(oa?"&call=toolbar":"")+"&data="+a,J(a));return!0};l=function(){if(I)return!1;I=!0;pa();return!0};Qa=function(a,b){var c,e;e=a.style.cssText;e+=" ";if(d.link_background)c=d.link_background,-1===c.indexOf("#")&&(c="#"+c),e+="background-color: "+c+" !important; ";if(null!=d.link_tooltip)a.title=d.link_tooltip;if(b){if(d.skimwords_color)c=d.skimwords_color,-1===c.indexOf("#")&&
(c="#"+c),e+="color: "+c+" !important; ";d.skimwords_weight&&(e+="font-weight: "+d.skimwords_weight+" !important; ");if(d.skimwords_decoration)c=d.skimwords_decoration,e="double"===c?e+"border-bottom: 1px double !important; ":e+("text-decoration: "+c+" !important; ");if(d.skimwords_style)c=d.skimwords_style,e+="text-style: "+c+"; ";if(d.skimwords_link_style)c=d.skimwords_link_style,e+=c+"; ";c=" "+a.className;if(d.skimwords_link_class)c+=" "+d.skimwords_link_class,a.className=c.substring(1);if(d.skimwords_title&&
null===a.getAttribute("title"))a.title=d.skimwords_title;if(null===a.getAttribute("title"))a.title="Shopping link added by SkimWords"}a.style.cssText=e;return!0};Na=function(){return function(){var a,b,c;b=function(){if(I)return!0;try{document.documentElement.doScroll("left")}catch(a){return setTimeout(b,50),!1}return l()};a=function(){return document.addEventListener?function(){document.removeEventListener("DOMContentLoaded",a,!1);l();return!0}:document.attachEvent?function(){document.detachEvent("onreadystatechange",
a);l();return!0}:function(){l();return!0}}();if("complete"===document.readyState)setTimeout(l,1);else if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1),d.addEventListener("load",l,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",a);d.attachEvent("onload",l);c=!1;try{c=null===d.frameElement}catch(e){}document.documentElement.doScroll&&c&&b()}return!0}}();d.skimlinksApplyHandlers=function(a){var b,a=null!=a?a:{};null!=d.skimlinks_runner&&(d.skimlinks_runner.skimlinks=
1);b=R();fa=a.merchant_domains;a.guid&&""===y&&(y=a.guid);v=ba(b);L+=v.length;Oa();return!0};d.mugicPopWin=t;d.mugicRight=t;d.skimlinksReload=function(){I=!1;l();return!0};d.skimlink_legacy_support||(d.skimlinks=pa);Na()})();
