$(document).ready(function () {
  $('.event').each(function () {
    var row = $(this);

    row
      .find('.event-checkbox')
      .on('change', function () {
        if ($(this).prop('checked')) {
          row.removeClass('active');
        }
        row.toggleClass('active');
      });
  });
});