//= require jquery-ui
//= require lolita/upload/plupload.full
//= require lolita/upload/jquery.ui.plupload

alert(1)
$(document).ready(function(){
  $(document).on("click", ".file-editor a.save", function(event) {
    $(this).closest("form").submit();
    return false;
  });
});

