// preload
$('<img>').attr('src', 'stamp.png');

$(function() {
  var stampCard = $('.stamp-card');
  var createSquare = function (d, stamp, current) {
    var item = $('<div>').addClass('item');
    if (current) {
      item.addClass('current');
    }
    item.append($('<span>').addClass('day').text(d));
    if (stamp) {
      item.append($('<img>').attr('src', 'stamp.png'));
    }
    stampCard.append(item);
  };
  $.ajax({
    url: 'data.json',
    type: 'GET',
  })
  .done(function(data) {
    var days = data.days;
    for(var d = 1; d <= days; d++) {
      var current = $.inArray(d, data.currents) != -1;
      var stamp = current || $.inArray(d, data.stamps) != -1;
      createSquare(d, stamp, current);
    }
  });
});
