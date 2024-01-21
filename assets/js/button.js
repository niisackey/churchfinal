
// var popupButtons = document.getElementsByClassName('openPopup');
// var popups = document.getElementsByClassName('popup');

// // Add event listeners to all popup buttons
// for (var i = 0; i < popupButtons.length; i++) {
//   popupButtons[i].addEventListener('click', function() {
//     var target = this.getAttribute('data-target');
//     document.getElementById(target).style.display = 'block';
//   });
// }

// // Add event listeners to all close buttons within popups
// var closeButtons = document.getElementsByClassName('close');
// for (var j = 0; j < closeButtons.length; j++) {
//   closeButtons[j].addEventListener('click', function() {
//     this.parentNode.parentNode.style.display = 'none';
//   });
// }


document.addEventListener('DOMContentLoaded', function() {
    var popupButtons = document.getElementsByClassName('openPopup');
    var popups = document.getElementsByClassName('popup');
  
    // Add event listeners to all popup buttons
    for (var i = 0; i < popupButtons.length; i++) {
      popupButtons[i].addEventListener('click', function() {
        var target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
      });
    }
  
    // Add event listeners to all close buttons within popups
    var closeButtons = document.getElementsByClassName('close');
    for (var j = 0; j < closeButtons.length; j++) {
      closeButtons[j].addEventListener('click', function() {
        this.parentNode.parentNode.style.display = 'none';
      });
    }
  });