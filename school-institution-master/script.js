var checkForm = function(e)
{
  var form = "container"
  if(form.name.value == "") {
    alert("Please enter your Name");
    form.name.focus();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    return;
  }
  if(form.email.value == "") {
    alert("Please enter a valid Email address");
    form.email.focus();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    return;
  }
}