function upDate(){
  currentDate = new Date();
  year = currentDate.getFullYear();
  return year;
}

$(document).ready(function(){
  $("#year").html(upDate().toString());
});
