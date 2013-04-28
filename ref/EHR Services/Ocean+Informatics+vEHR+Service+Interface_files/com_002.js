(function(){if(window.google&&google.gears){return }var A=null;if(typeof GearsFactory!="undefined"){A=new GearsFactory()}else{try{A=new ActiveXObject("Gears.Factory");if(A.getBuildInfo().indexOf("ie_mobile")!=-1){A.privateSetGlobalObject(this)}}catch(B){if((typeof navigator.mimeTypes!="undefined")&&navigator.mimeTypes["application/x-googlegears"]){A=document.createElement("object");A.style.display="none";A.width=0;A.height=0;A.type="application/x-googlegears";document.documentElement.appendChild(A)}}}if(!A){return }if(!window.google){google={}}if(!google.gears){google.gears={factory:A}}})();
AJS.DragAndDrop={};(function(A){var B;AJS.DragAndDropUtils={getCachingUrl:function(D){var E=A("script[src*='drag-and-drop']:last");if(D&&D.indexOf("/")!=0){D="/"+D}if(!E.length){AJS.log("ERROR: Cannot find drag and drop caching url");return AJS.General.getContextPath()+(D||"/")}var F=E.attr("src");var C=F.replace(/\/_\/download\/.*/,"/_"+(D||"/"));AJS.log("DragAndDropUtils: computed cache URL: "+C);return C},init:function(C){if(AJS.DragAndDrop.i18n){C&&C()}else{AJS.log("Drag and Drop: requesting translation");A.getJSON(this.getCachingUrl("/plugins/drag-and-drop/i18n.action?locale="+AJS.params.userLocale),function(D){AJS.DragAndDrop.i18n=D;C&&C()})}},bindDragEnter:function(C,E){if(C.addEventListener){E=(this.isFireFox35()?this.firefox35DragEnterAndOverCallbackWrapper(E):E);E&&C.addEventListener("dragenter",E,false)}else{if(C.attachEvent){var D=this.ieDragEnterAndDragOverCallbackWrapper(E);C.attachEvent("ondragenter",D);A(window).unload(function(){C.detachEvent("ondragenter",D)})}}},bindDragOver:function(C,E){if(C.addEventListener){if(this.isFireFox35()){E=this.firefox35DragEnterAndOverCallbackWrapper(E)}else{if(A.browser.safari){E=this.safariDragOverCallbackWrapper(E)}}E&&C.addEventListener("dragover",E,false)}else{if(C.attachEvent){var D=this.ieDragEnterAndDragOverCallbackWrapper(E);C.attachEvent("ondragover",D);A(window).unload(function(){C.detachEvent("ondragover",D)})}}},bindDragLeave:function(C,D){if(!D){return }if(A.browser.safari||this.isFireFox35()){C.addEventListener("dragleave",D,false)}else{if(A.browser.mozilla){C.addEventListener("dragexit",D,false)}else{if(A.browser.msie){C.attachEvent("ondragleave",D);A(window).unload(function(){C.detachEvent("ondragleave",D)})}}}},bindDrop:function(D,F){if(A.browser.mozilla){var C=(this.isFireFox35()?"drop":"dragdrop");D.addEventListener(C,this.mozillaDropCallbackWrapper(F),false)}else{if(A.browser.msie){if(F){var E=function(G){F(G);AJS.DragAndDropUtils.stopPropagation(G)};D.attachEvent("ondrop",E);A(window).unload(function(){D.detachEvent("ondrop",E)
})}}else{if(A.browser.safari){F&&D.addEventListener("drop",function(G){F(G);AJS.DragAndDropUtils.stopPropagation(G)},false)}}}},niceSize:function(C){var F=[" b"," Kb"," Mb"," Gb"," Tb"," Pb"," Eb"," Zb"," Yb"];for(var D=0,E=F.length;D<E;D++){if(C<Math.pow(2,10*(D+1))){return(!D?C:(C/Math.pow(2,10*D)).toFixed(2))+F[D]}}return(C/Math.pow(2,10*(D+1))).toFixed(2)+F[F.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(C){return function(D){D=D||window.event;if(!D){return }C&&C(D);A.browser.msie&&(D.returnValue=false)}},safariDragOverCallbackWrapper:function(C){return function(D){D=D||window.event;if(!D){return }if(D.target.type=="file"){return }C&&C(D);(A.inArray("public.file-url",D.dataTransfer.types)!=-1)&&D.preventDefault()}},mozillaDropCallbackWrapper:function(C){return function(D){if(!D){return }C&&C(D);D.preventDefault();if(AJS.DragAndDropUtils.isFireFox35()){AJS.DragAndDropUtils.firefox35FileDataInEvent(D)&&D.stopPropagation()}else{D.stopPropagation()}}},firefox35DragEnterAndOverCallbackWrapper:function(C){return function(D){if(!D){return }C&&C(D);AJS.DragAndDropUtils.firefox35FileDataInEvent(D)&&D.preventDefault()}},firefox35FileDataInEvent:function(C){return A.inArray("application/x-moz-file",C.dataTransfer.types)!=-1},stopPropagation:function(C){C=C||window.event;if(!C){return }if(C.stopPropagation){C.stopPropagation()}else{C.cancelBubble=true}},preventDefault:function(C){C=C||window.event;if(!C){return }if(C.preventDefault){C.preventDefault()}else{C.returnValue=false}},isGearsInstalledNoPrompt:function(){try{return !!window.google&&!!google.gears&&!!google.gears.factory.create("beta.desktop")}catch(C){return false}},isGearsInstalledWithPermissions:function(C){var E={returnUrl:location.href};C=A.extend({},E,C);if(AJS.DragAndDropUtils.isGearsInstalledNoPrompt()){return google.gears.factory.getPermission("Confluence",contextPath+"/images/logo/confluence_64.png",AJS.DragAndDrop.i18n["confirm.gears.permissions"])}else{var D=confirm(AJS.DragAndDrop.i18n["confirm.install.gears"]);
if(D){location.href="http://gears.google.com/?action=install&name=Confluence&message=Install gears for drag-and-drop file upload functionality&return="+encodeURIComponent(C.returnUrl)}else{return false}}},isFireFox35:function(){return A.browser.version.indexOf("1.9.1")!=-1},isFireFox30:function(){return A.browser.version.indexOf("1.9.0")!=-1},enableDropZoneOn:function(C,D){if(!C){throw new Error("Cannot enable drop zone on invalid container. Received: "+C)}D=D||AJS.DragAndDrop.defaultDropHandler;this.bindDragEnter(C);this.bindDragOver(C);this.bindDragLeave(C);this.bindDrop(C,D)},getFilesFromDropEvent:function(D){if(AJS.DragAndDropUtils.isFolderDropEvent(D)){AJS.DragAndDropUtils.displayMessageDialog(AJS.DragAndDrop.i18n["folder.warning"]);return[]}var E=this.getDesktopInstance().getDragData(D,"application/x-gears-files");var C;try{C=E&&E.files}catch(F){AJS.log("Error retrieving file data from drop event")}return C||[]},isFolderDropEvent:function(C){try{return(this.getDesktopInstance().getDragData(C,"application/x-gears-files")||{}).count==0}catch(D){AJS.log("Error retrieving file data from drop event")}},displayMessageDialog:function(D){var C=new AJS.Dialog(600,200,"drag-and-drop-message-dialog");C.addHeader(AJS.DragAndDrop.i18n["message.dialog.header"]).addPanel("Panel 1","<div>"+D+"</div>").addButton(AJS.DragAndDrop.i18n["dialog.button.done"],function(E){C.remove()});C.show()},getDesktopInstance:function(){if(!B){B=google.gears.factory.create("beta.desktop")}return B}}})(AJS.$);
AJS.ObservableArrayList=function(){this._data=[];this._pushObservers=[]};AJS.ObservableArrayList.prototype={push:function(A){this._data.push(A);this._notifyPushObservers(A)},length:function(){return this._data.length},remove:function(B,A){return this._remove.call(this._data,B,A)},_remove:function(C,B){var A=this.slice((B||C)+1||this.length);this.length=C<0?this.length+C:C;return this.push.apply(this,A)},shift:function(){return this._data.shift()},removeByPredicate:function(B){var D=[],A=this._data.length;for(var C=0;C<A;C++){if(!B(this._data[C])){D.push(this._data[C])}}this._data=D;return A-this._data.length},addPushObserver:function(A){if(AJS.$.isFunction(A)){this._pushObservers.push(A)}else{throw new Error("Attempting to add an observer that is not a function: "+A)}},_notifyPushObservers:function(C){for(var A=0,B=this._pushObservers.length;A<B;A++){this._pushObservers[A](C)}}};
AJS.GearsUploadWork=function(A,B){if(!A){throw new Error("workId must be valid. Received: "+A)}if(!B){throw new Error("file must be valid. Received: "+B)}this.id=A;this.file=B};
AJS.GearsFileStatus=function(A,D,B,C){this.workId=A;this.file=D;this.fileSize=D.blob.length;this.status=B;if(C){this.errorMessage=C}};AJS.GearsFileStatus.QUEUED={name:"QUEUED"};AJS.GearsFileStatus.TOO_LARGE={name:"TOO_LARGE"};AJS.GearsFileStatus.INVALID_CHARS={name:"INVALID_CHARS"};
(function(A){AJS.DragAndDropProgressDialog=function(B){var C=this;var D={header:AJS.DragAndDrop.i18n["progress.dialog.header"],width:600,height:400};this._options=A.extend({},D,B);this.id="drag-and-drop-progress-dialog";this._dialog=new AJS.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",'<ul id="upload-statuses"></ul>').addButton(AJS.DragAndDrop.i18n["dialog.button.done"],function(){C.hide();C.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=A(".all-file-uploads-complete");A(document).keydown(function(E){if(E.which==27){if(!C._$closeButton.attr("disabled")){C.hide();C.clearRenderOutput()}return AJS.stopEvent(E)}});this._$container=A("#upload-statuses");this._fileStatusesRendered=0;this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=true};AJS.DragAndDropProgressDialog.prototype={show:function(){if(this._hidden){this._dialog.show();this._hidden=false;A.each(this.onShowListeners,function(B,C){C()})}},hide:function(){if(!this._hidden){this._dialog.hide();this._hidden=true}},render:function(C){this._workIdsOfFilesInProgress.push(C.workId);var B="file-"+C.workId+"-progress";this._$container.append("<li"+(this._fileStatusesRendered++===0?' class="first"':"")+"><label>"+C.file.name+'</label><div class="file-upload-progress-block"><div class="aui-progressbar" id="'+B+'"></div>'+(C.status===AJS.GearsFileStatus.QUEUED?AJS.format('<div id="cancel-or-success-placeholder-{0}" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-{0}" class="ui-icon ui-icon-circle-close" title="{1}"></span></div>',C.workId.toString(),AJS.DragAndDrop.i18n["cancel.upload.tooltip"]):"")+'</div><div id="file-upload-progress-text-'+C.workId+'" class="file-upload-progress-text">'+AJS.DragAndDrop.i18n["waiting.in.queue"]+" ...</div></li>");A("#cancel-or-success-placeholder-"+C.workId).hover(function(){A(this).addClass("ui-state-hover")
},function(){A(this).removeClass("ui-state-hover")});A("#"+B).progressbar({value:0});if(C.status===AJS.GearsFileStatus.QUEUED){A("#file-upload-cancel-"+C.workId).click((function(D){return function(E){A.each(D,function(F,G){G(E,C)})}})(this.cancelListeners))}else{this.renderError(C.workId,C.errorMessage)}},renderError:function(D,C){if(A.inArray(D,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+D)}var B=A("#file-"+D+"-progress");B.progressbar("option","value",100);B.addClass("aui-progressbar-error");A("#file-upload-progress-text-"+D).html(C);A("#cancel-or-success-placeholder-"+D).hide()},hasErrors:function(){return !!A("#upload-statuses .aui-progressbar-error").length},renderUpdateToBytesUploaded:function(G,F,B){if(A.inArray(G,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+G)}var C=AJS.DragAndDropUtils.niceSize(F);var E=A("#file-"+G+"-uploaded");if(!!E.length){E.text(C)}else{A("#file-upload-progress-text-"+G).html('<span id="file-'+G+'-uploaded">'+C+"</span> of "+AJS.DragAndDropUtils.niceSize(B))}var D=Math.round(F*100/B);A("#file-"+G+"-progress").progressbar("option","value",D)},renderComplete:function(B){if(A.inArray(B,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+B)}A("#cancel-or-success-placeholder-"+B).html("<span class='ui-icon ui-icon-circle-check'></span>")},renderCancelled:function(C){if(A.inArray(C,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+C)}var B=A("#file-"+C+"-progress");if(B.progressbar("option","value")==0){B.progressbar("option","value",100)}B.progressbar("disable");A("#file-upload-progress-text-"+C).html(AJS.DragAndDrop.i18n["upload.cancelled"]);A("#cancel-or-success-placeholder-"+C).hide()},clearRenderOutput:function(){this._$container.empty();this._fileStatusesRendered=0;this._workIdsOfFilesInProgress=[]},enableCloseButton:function(B){this._$closeButton.removeAttr("disabled");this.closeButtonText(B)
},disableCloseButton:function(B){if(!this._$closeButton.attr("disabled")){this._$closeButton.attr("disabled","disabled");this.closeButtonText(B)}},closeButtonText:function(B){B&&this._$closeButton.html(B)}}})(AJS.$);
AJS.GearsWorkerPool=function(A,D,C){if(typeof A!="number"){throw new Error("A valid number for numWorkers must be specified. Received: "+A)}if(typeof C!="string"){throw new Error("A valid string for workerUrl must be specified. Received: "+C)}if(!AJS.$.isFunction(D)){throw new Error("A valid function for messageHandler must be specified. Received: "+D)}this._numWorkers=A;try{this._workerPool=google.gears.factory.create("beta.workerpool")}catch(E){throw new Error("Could not construct Gears worker pool.")}this._workerPool.onmessage=D;this._workerIds=new AJS.ObservableArrayList();for(var B=0;B<this._numWorkers;B++){this._workerIds.push(this._workerPool.createWorkerFromUrl(C))}};AJS.GearsWorkerPool.prototype={sendMessage:function(B,A){this._workerPool.sendMessage(B,A)},workerAvailable:function(){return !!this._workerIds.length()},checkoutWorker:function(){if(this.workerAvailable()){return this._workerIds.shift()}else{throw new Error("Attempt to checkout worker when no workers available. Please check workerAvailable() first.")}},checkinWorker:function(A){this._workerIds.push(A)},addWorkerCheckedInObserver:function(A){this._workerIds.addPushObserver(A)}};
AJS.GearsUploadManager=function(B,D,A){this._MAX_WORKERS=2;this._idCounter=1;this._uploadsInProgress=0;this._onErrorHandlers=[];this._onSuccessHandlers=[];this._onCancelHandlers=[];this._onProgressHandlers=[];this._otherMessageHandlers=[];this._onIdleHandlers=[];var C=this._generateUploadObserver(this);this._workerPool=D||new AJS.GearsWorkerPool(this._MAX_WORKERS,this._generateOnmessageHandler(this),B);this._workerPool.addWorkerCheckedInObserver(C);this._workQueue=A||new AJS.ObservableArrayList();this._workQueue.addPushObserver(C);this._workIdToWorkerIdHash={}};AJS.GearsUploadManager.prototype={upload:function(G){var F=[];for(var D=0,E=G.length;D<E;D++){var H=G[D];var A=this._idCounter++;var B=new AJS.GearsUploadWork(A,H);if(this._fileTooLarge(H)){var C=AJS.format(AJS.DragAndDrop.i18n["validation.file.too.large"],AJS.DragAndDropUtils.niceSize(H.blob.length).toString(),AJS.DragAndDropUtils.niceSize(AJS.params.globalSettingsAttachmentMaxSize).toString());F.push(new AJS.GearsFileStatus(A,H,AJS.GearsFileStatus.TOO_LARGE,C))}else{if(this._filenameContainsInvalidCharacters(H.name)){F.push(new AJS.GearsFileStatus(A,H,AJS.GearsFileStatus.INVALID_CHARS,AJS.DragAndDrop.i18n["validation.filename.invalid.chars"]))}else{this._workQueue.push(B);F.push(new AJS.GearsFileStatus(A,H,AJS.GearsFileStatus.QUEUED))}}}return F},cancel:function(B){if(this.uploadInProgress(B)){var C=this._workIdToWorkerIdHash[B];this._workerPool.sendMessage({action:{name:"cancel",workId:B}},C)}else{var A=this._workQueue.removeByPredicate(function(D){return D.id===B});if(!A){throw new Error("File with workId: "+C+" could not be cancelled.")}AJS.$.each(this._onCancelHandlers,function(D,E){E(B)})}},uploadInProgress:function(A){return A in this._workIdToWorkerIdHash},isIdle:function(){return !this._workQueue.length()&&!this._uploadsInProgress},addOnErrorHandler:function(A){if(AJS.$.isFunction(A)){this._onErrorHandlers.push(A)}else{throw new Error("Called addOnErrorHandler with non-function object. Received: "+A)
}},addOnProgressHandler:function(A){if(AJS.$.isFunction(A)){this._onProgressHandlers.push(A)}else{throw new Error("Called addOnProgressHandler with non-function object. Received: "+A)}},addOnSuccessHandler:function(A){if(AJS.$.isFunction(A)){this._onSuccessHandlers.push(A)}else{throw new Error("Called addOnSuccessHandler with non-function object. Received: "+A)}},addOnCancelHandler:function(A){if(AJS.$.isFunction(A)){this._onCancelHandlers.push(A)}else{throw new Error("Called onCancelHandlers with non-function object. Received: "+A)}},addOtherMessageHandler:function(A){if(AJS.$.isFunction(A)){this._otherMessageHandlers.push(A)}else{throw new Error("Called addOtherMessageHandler with non-function object. Received: "+A)}},addOnIdleHandler:function(A){if(AJS.$.isFunction(A)){this._onIdleHandlers.push(A)}else{throw new Error("Called addOnIdleHandler with non-function object. Received: "+A)}},_generateUploadObserver:function(A){return function(){if(A._workerPool.workerAvailable()&&A._workQueue.length()>0){var G=A._workerPool.checkoutWorker();var D=A._workQueue.shift();var E=D.file;var C=D.id;var B=E.blob.length;AJS.log("Uploading file with workId: "+C+" and size: "+AJS.DragAndDropUtils.niceSize(B));var F=AJS.DragAndDropUtils.getDesktopInstance().extractMetaData(E.blob);A._workerPool.sendMessage({action:{name:"upload",workId:C,contextPath:contextPath,pageId:AJS.params.pageId,draftType:AJS.params.draftType,mimeType:F.mimeType,filename:E.name,fileSize:B,fileBlob:E.blob}},G);A._workIdToWorkerIdHash[C]=G;A._uploadsInProgress++}}},_generateOnmessageHandler:function(A){return function(D,B,E){var C=E.body.status;if(C){if(C.error){AJS.$.each(A._onErrorHandlers,function(F,G){G(C)});A._onWorkerFinishedProcessingWorkItem.call(A,E.sender,C.workId)}else{if(C.complete){if(C.action=="upload"){AJS.$.each(A._onSuccessHandlers,function(F,G){G(C)})}else{if(C.action=="cancel"){AJS.$.each(A._onCancelHandlers,function(F,G){G(C.workId)})}}A._onWorkerFinishedProcessingWorkItem.call(A,E.sender,C.workId)
}else{if(C.progress){AJS.$.each(A._onProgressHandlers,function(F,G){G(C)})}}}}else{AJS.$.each(A._otherMessageHandlers,function(F,G){G(E)})}}},_fileTooLarge:function(A){return A.blob.length>(AJS.params.globalSettingsAttachmentMaxSize||Number.MAX_VALUE)},_filenameContainsInvalidCharacters:function(A){return A.indexOf("+")!=-1||A.indexOf("&")!=-1||A.indexOf("#")!=-1},_onWorkerFinishedProcessingWorkItem:function(B,A){this._workerPool.checkinWorker(B);delete this._workIdToWorkerIdHash[A];this._uploadsInProgress--;if(this.isIdle()){AJS.$.each(this._onIdleHandlers,function(C,D){D()})}}};
(function(A){A.widget("ui.progressbar",{_init:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});this.valueDiv=A('<div class="ui-progressbar-value ui-widget-header ui-corner-left"></div>').appendTo(this.element);this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeData("progressbar").unbind(".progressbar");this.valueDiv.remove();A.widget.prototype.destroy.apply(this,arguments)},value:function(B){if(B===undefined){return this._value()}this._setData("value",B);return this},_setData:function(B,C){switch(B){case"value":this.options.value=C;this._refreshValue();this._trigger("change",null,{});break}A.widget.prototype._setData.apply(this,arguments)},_value:function(){var B=this.options.value;if(B<this._valueMin()){B=this._valueMin()}if(B>this._valueMax()){B=this._valueMax()}return B},_valueMin:function(){var B=0;return B},_valueMax:function(){var B=100;return B},_refreshValue:function(){var B=this.value();this.valueDiv[B==this._valueMax()?"addClass":"removeClass"]("ui-corner-right");this.valueDiv.width(B+"%");this.element.attr("aria-valuenow",B)}});A.extend(A.ui.progressbar,{version:"1.7.2",defaults:{value:0}})})(jQuery);
