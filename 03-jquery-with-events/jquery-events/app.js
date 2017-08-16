// This handles the nav
$('nav a').on('click', function() {
  var $whereToGo = $(this).data('tab'); //gives us 'Delegation/Data' or 'Attributes/Props'
  $('.tab-content').hide();
  $('#' + $whereToGo).fadeIn(5000);
})

// Event logger when clicking on the 'Delegation/Data' nav examples
function logTarget() {
  // Observe the difference
  console.log(this);
  console.log($(this));

  // These next lines create the log in the DOM
  // Similar templating process we've seen
  var $target = $(this).text();
  var $newFeedback = $('#feedback p:first-child').clone();
  $newFeedback.text('You clicked on ' + $target);
  $('#feedback').append($newFeedback);
}

// Event not delegated - event bound to all the 'li's
// No selector specified in .on() method
$('#menu1 li').on('click', logTarget)

// Event IS delegated = bound to parent
// 'li' is specified in .on()
$('#menu2').on('click', 'li', logTarget)

// Button handlers
$('button[name=adder1]').on('click', function() {
  var $newLi1 = $('#menu1 li:first').clone();
  $newLi1.text('newLi1');
  $('#menu1').append($newLi1);
});

$('button[name=adder2]').on('click', function() {
  var $newLi2 = $('#menu2 li:first').clone();
  $newLi2.text('newLi2');
  $('#menu2').append($newLi2);
});

$('button[name=clear]').on('click', function() {
  $('.log-item:first').siblings().remove();
});

// Checkbox handler - change event.
// Shows difference between attr & prop
$('input[name=check]').on('change', function() {
  var $checkbox = $(this);

  $('#checked-state').html('.attr("checked"): ' + $checkbox.attr('checked') + '<br>.prop( "checked" ): ' + $checkbox.prop('checked'));

}).change();

// Select box filtering!
$('select[name="icecream"]').on('change', function() {
  var $selection = $(this).val();
  $('img').hide()
  $('img[data-flavor="' + $selection + '"]').show()
})

// DOM-ready function
$(document).ready(function() {
  $('.tab-content').hide()
})
