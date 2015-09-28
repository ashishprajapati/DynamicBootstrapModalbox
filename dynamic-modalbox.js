// Created an wrapper for dynamic modal box
// We can open modalbox popup with dynamic data using ajax
// For using partial window.modalBox.open("<%=j render "/hello" %>", "user-info")
// window.modalBox.open("Hello World", "user-info")
// window.modalBox.open("Popup Data", "1")

// For using this with ajax 
// Step 1. Fire an ajax to any method
// Step 2. In related js.erb use below mentioned way to render partial 
// window.modalBox.open("<%=j render "/partial" %>", "user-info")


(function() {   
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  this.ModalBox = (function() {
    ModalBox.prototype.open = function(htmlData, id) {
    	$('.modal').modal('hide');
    	$('.modal-backdrop').remove();
		  $('.modal').remove();
      	html_data='<div class="modal fade common-sign in" id="'+id+'" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true"> <div class="modal-dialog signup-stage common-popup"> <div class="modal-content"> <button type="button" class="close " data-dismiss="modal" aria-hidden="true"></button> '+htmlData+' </div> </div> </div>'
      	$("body").append(html_data)
      	$("#"+id).modal()
    };

    function ModalBox() {}

 	return ModalBox;
  })();

  $(document).ready(function() {
    return window.modalBox = new ModalBox;
  });
}).call(this);