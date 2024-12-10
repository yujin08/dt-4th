let target;

$('p').on('click', function () {
  let date = $(this).text();
  $('#date').val(date);

  target = this;
});

function writeSchedule() {
  let content = $('#content').val();
  $(target).parent().append(`<span>${content}</span>`);

  $('#content').val('');
  $('#date').val('');
}
