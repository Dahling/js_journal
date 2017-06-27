var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-entry').submit(function(event) {

    event.preventDefault();

    var title = $('.title').val();
    var entry = $('.entryBody').val();
    var newEntry = new Entry (title, entry);

    $('.entries').append('<h4>'
                        + newEntry.title
                        + '</h4>'
                        + '<p>'
                        + newEntry.entry
                        + '</p>');

  });
});
