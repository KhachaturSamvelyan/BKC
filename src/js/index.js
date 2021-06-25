$("#file").change(function(){
var vidFileLength = $("#file")[0].files.length;
if(vidFileLength !== 0){
   $(".check").show()
   $(".pen").show()
   $(".plus").hide()
}
});

$("#file1").change(function(){
   var vidFileLength = $("#file1")[0].files.length;
   if(vidFileLength !== 0){
      $(".check1").show()
      $(".pen1").show()
      $(".plus1").hide()
   }
   });