
jQuery(document).ready(function() {
  $("#firstName").focus();
  $("#address-book").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("#firstName").val();
    var inputLastName = $("#lastName").val();
    var inputStreet = $("#street").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var inputZip = $("#zip").val();

    var newContact = {
      firstName: inputFirstName,
      lastName: inputLastName,
      street: inputStreet,
      city: inputCity,
      state: inputState,
      zip: inputZip,

      fullAddress: function() {
        return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
      }
    };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("#firstName").val("");
    $("#lastName").val("");
    $("#street").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zip").val("");


    $("#result").show();

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.fullAddress());
    });

  });
});
