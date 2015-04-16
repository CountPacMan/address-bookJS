
jQuery(document).ready(function() {
  $("#firstName").focus();
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("#firstName").val();
    var inputLastName = $("#lastName").val();

    var newContact = {
      firstName: inputFirstName,
      lastName: inputLastName,
      addresses: []
    };

    $(".new-address").each(function() {
      var inputStreet = $(this).find("input.street").val();
      var inputCity = $(this).find("input.city").val();
      var inputState = $(this).find("input.state").val();
      var inputZip = $(this).find("input.zip").val();

      var newAddress = {  street: inputStreet,
                          city: inputCity,
                          state: inputState,
                          zip: inputZip};
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("#result").show();

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + " " + address.zip + "</li>");
      });
    });

    $("#firstName").val("");
    $("#lastName").val("");
    $("input.street").val("");
    $("input.city").val("");
    $("input.state").val("");
    $("input.zip").val("");
    $(".new-address").remove();
  });

  $("#add-address").click(function() {
    $("#new-addresses").show();
    $("#new-addresses").append(
      '<div class="new-address">' +
        '<div class="form-group">' +
          '<label for="street">Street</label>' +
          '<input type="text" class="form-control street" required>' +
        '</div>' +
       '<div class="form-group">' +
         '<label for="city">City</label>' +
         '<input type="text" class="form-control city" required>' +
       '</div>' +
       '<div class="form-group">' +
         '<label for="state">State</label>' +
         '<input type="text" class="form-control state" required>' +
       '</div>' +
       '<div class="form-group">' +
         '<label for="zip">Zip</label>' +
         '<input type="number" class="form-control zip" required>' +
       '</div>' +
      '</div>');
  });


});
