== Developed By
Ashish Prajapati

== Created an javascript wrapper for dynamic modal box

This javascript wrapper provide ability to open modalbox popup with dynamic data using ajax.

Our wrapper is defined below
    window.modalBox.open("html data here", "id")

For using with rails partial 
    window.modalBox.open("<%=j render "/hello" %>", "user-info")

For Using with html data 
    window.modalBox.open("Hello World", "user-info")
    window.modalBox.open("Popup Data", "1")

For using this with ajax 
Step 1. Fire an ajax to any method
Step 2. In related js.erb use below mentioned way to render partial 
    window.modalBox.open("<%=j render "/partial" %>", "user-info")
 
