// get current year
function upDate(){
  currentDate = new Date();
  year = currentDate.getFullYear();
  return year;
}

$(document).ready(function(){
  // get current year
  $("#year").html(upDate().toString());

  // scroll index
  $("#downButton1").click(function (){
      $("#divAbout").get(0).scrollIntoView();
  });
  $("#downButton2").click(function (){
      $("#divContact").get(0).scrollIntoView();
  });
  $("#upButton").click(function (){
      $("#divProjects").get(0).scrollIntoView();
  });
});
