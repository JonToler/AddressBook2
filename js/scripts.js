// Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.FullName = function () {
  return this.firstName + " " + this.lastName;
};

// UI Logic
$(document).ready(function() {
  var addressBook = [];
  var count = -1;
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var firstIn = $("#new-first-name").val();
    var lastIn = $("#new-last-name").val();
    var newName = new Contact(firstIn,lastIn);
    count++;
    addressBook.push(newName);
    $("#contacts").append("<li id='" + count + "'>" + newName.FullName() + "</li>");
  });

  $("ul").on("click", "li", function(){

    alert(addressBook[$(this).index()].FullName());



  });
});
