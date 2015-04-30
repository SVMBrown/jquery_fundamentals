// SOLUTIONS GO BELOW EACH EXERCISE

/* // EXERCISE: Change Background

  // Change the background color of '#target' by script.
  // Hint: you can use .css
  // SOLUTION
  $(function() {
    $('#target').css('background-color', 'yellow');
  });
  */

/* // EXERCISE: Change Parent

  // Change the text in the span, a child of "#target"
  // Hint: you can use .text
  // SOLUTION
  $(function() {
    $('#target > span').html("You've been changed!");
  });
  */

/* // EXERCISE: Create Clone

  // Create a clone of the span in "#target" and position it under the origin.
  // Hint: you can use .clone and .insertAfter

  // SOLUTION
  $(function(){
    var original = $('#target > span');
    original.clone().insertAfter(original);
  });
  */

/* // EXERCISE: Use Filter
  // Change background color of the second ".target"
  // Hint: you can use .eq and .css
  // SOLUTION
  $(function(){
    $('.target').eq(1).css('background-color', 'black');
  });
  */

/* // EXERCISE: Disable Buttons

  // Disable the button
  // Hint: you will have to select the button and can use .attr
  // SOLUTION
  $(function(){
    $('.target > button').attr('disabled', 'true');
  });
  */

/* // EXERCISE: Uncheck CheckBoxes

  // Uncheck all checkboxes using jQuery
  // Hint: you will have to select the input and can use .removeAttr
  $(function(){
    $('.target input').removeAttr('checked');
  });
  */

/* // EXERCISE: Change Parent

  // Move "#child" from "#parent1" to "#parent2"
  // Hint: you can use .appendTo
  $(function() {
    $('#child').appendTo('#parent2');
  });
  */

/* // EXERCISE: Select A Option in A Select Box

  // Select the second option in the selectbox by script
  // Hint: you will have to select the option and can use .eq and .attr
  $(function() {
    $('#target select option').eq(1).attr('selected', 'true');
  });
  */

/* // EXERCISE: Change Size

  // Make "#target" double size
  // Hint: you can use .css, .width and .height
  $(function() {
    var target = $('#target');
    //used sqrt 2 instead of 2, because area scales quadratically with side length
    target.css({
      'width': (target.width()*Math.sqrt(2)),
      'height': (target.height()*Math.sqrt(2))
    });
  });
  */

/* // EXERCISE: Empty Elements
  // Hint: you can use .empty

  // Remove all children and text of "#target"
  $(function() {
    $('#target').empty();
  });
  */

/* // EXERCISE: Delay

  // Show Alert with 1 second delay (Use "setTimeout")
  // Hint: you can use .setTimeout and alert
  $(function() {
    setTimeout(alert, 1000, "it has been 1 second");
  });*/

/* // EXERCISE: Count

  // Show the number of children in an alert
  // Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5
  // Using the child class when the parent child relationship is important to the dom is misleading.
  // br tags are showing up as direct children (in the dom sense) and skewing my results...
  $(function() {
    alert($('#target > .child').length);
    // alert($('#target > *').length) and alert($('#target').children().length) return 7 because of <br> tags)
  });
  */

/* // EXERCISE: Animate

  // Make "#target" double size with animation
  // Hint: you can use .animate, .width, and .height
  $(function() {
    var target = $('#target');
    var factor = Math.sqrt(2);
    target.animate({
      'width': target.width() * factor,
      'height': target.height() * factor
    }, 4000);
  });
  */

/*// EXERCISE: Alternate Color

  // Make the list-box alternating. (Make odd options a different color)
  // Hint: you can select the option and use .filter and .css
  $(function() {
    $('#target option').filter(":odd").css({
      "background-color": "black",
      "color": "orange"
    });
  });
  */

/* // EXERCISE: All But One

  // Remove all children of "#target" but h2
  // Hint: you can use .children, .not and .remove
  $(function() {
    $('#target > *:not(h2)').remove();
  });
  */

/* // EXERCISE: Without Children

  // Remove all 'div' whitch has no child elements.
  // Hint: you can use .not and .remove. Look closely at what options you can pass .not
  $(function() {
    $('div:not(:parent)').remove();
  });*/


