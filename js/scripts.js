
jQuery(document).ready(function() {
  $("#firstName").focus();
  $("#address-book").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("#firstName").val();
    var inputLastName = $("#lastName").val();
    var inputAddress = $("#address").val();
    var newContact = {firstName: inputFirstName, lastName: inputLastName, address: inputAddress};

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("#firstName").val("");
    $("#lastName").val("");
    $("#address").val("");

    $("#result").show();

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);

    });

  });
});
