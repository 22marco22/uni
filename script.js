var resumeStudyingLink=document.querySelector('a[href^="https://lms-courses.mercatorum.multiversity.click/efs-courses"]');     
if (resumeStudyingLink) {
   resumeStudyingLink.click();
}
var checkLoaded=setInterval(function(){
   if(document.readyState === 'complete'){
      //code here
      clearInterval(checkLoaded);
   }
},1000); 
