// all fields
function validateFields(){
  var insertYM = document.getElementById('insertYM');
  var insertPassword = document.getElementById('insertPassword');
  var insertEmail = document.getElementById('insertEmail');
  var insertPlace = document.getElementById('insertPlace');
  var insertUserName = Document.getElementById('insertUserName');
  var button = document.querySelector('registerButton')


  if (insertYM.value.trim() == "" ||  insertPassword.value.trim() == "" ||
   insertEmail.value.trim() == "" ||  insertPlace.value.trim() == ""
   || insertUserName.value.trim() == "") {
      alert('not ampty');
      return false;
  }
  else{
      return true;
  }

}