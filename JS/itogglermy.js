$(function(){
     
    $('.jtoggler').jtoggler();
   
});
$(document).on('jt:toggled',function(event, target) {
    console.log(event, target);
    console.info($(target).prop('checked'))
});
  $(document).on('jt:toggled:multi',function (event, target) {
    console.log(event, target);
    console.info($(target).parent().index())
});
  