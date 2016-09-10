//Gallery Set Slider - BxSlider JQuery
$('.setPage').load($(document).ready(function() {
  $('.bxslider').bxSlider();
}));

function validateForm() {
  var nameLength = document.contactForm.nameOfWriter.value.length;
  if (nameLength > 20) {
    alert("Name cannot be more than 20 characters!");
    return false;
  } else {
    var subjectLength = document.contactForm.subject.value.length;
    if (subjectLength > 80) {
      alert("Subject cannot be more than 80 characters!");
      return false;
    } else {
      alert("Your form is submitted!");
      return true;
    }
  }
}
