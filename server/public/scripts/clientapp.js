$(document).ready(function() {
  loadCats();

  function loadCats() {
    $.ajax({
      type: 'GET',
      url: '/cats',
      success: function(response) {
        $("#cat-list").empty();
        response.forEach(function(cat) {
          appendDom(cat);
        });
      }
    })
  }

  function appendDom(cat) {
    $("#cat-list").append('<div class="cat"></div>');
    $el = $("#cat-list").children().last();
    $el.append('<h2>' + cat.name + '</h2>');
    $el.append('<p>' + cat.trait + '</p>');
  }


  $("#cat-form").on("submit", function(event) {
    event.preventDefault();
    var cats = {};

    $.each($("#cat-form").serializeArray(), function(i, field) {
      cats[field.name] = field.value;
    });

    console.log('cat to send: ', cats);

    $.ajax({
      type: 'POST',
      url: '/cats',
      data: cats,
      success: function(data) {
        console.log('post request successful!');
        loadCats();
      },
      error: function() {
        console.log('post failed');
        alert("hey, it didn't work!");
      }

    });

    /**
    Which is the same as:
    $(this).serializeArray().forEach(function(field, index) {
      cat[field.name] = field.value;
    });

    This a method chain of:
      var fields = $(this).serializeArray();
      fields.forEach(function(field, index) {
        cat[field.name] = field.value;
      });
    **/

  });


});
