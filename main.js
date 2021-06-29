var sr=window.webkitSpeechRecognition;
var r=new sr();
function start(){
  document.getElementById("textbox").innerHTML="" ;
    r.start();
}
r.onresult=function run(event){
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    
      s();
    
}
function s(){
    var synth=window.speechSynthesis;
    var speak_data="Your Selfie will be captured in about 4-5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(cam);
    setTimeout(function()  {
      photoc();
      save();
    },4470);
}
Webcam.set({
  width: 320,
  height: 240,
  image_format: 'jpeg',
  jpeg_quality: 90
});
 cam=document.getElementById("webcam");
 function photoc(){
   Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='pic' class='pic' src='"+data_uri+"'>";
   }
   );
 }
 function save() {
   link=document.getElementById("link");
   img=document.getElementById("pic").src;
   link.href=img;
   link.click();
   sk();
 }
 function sk() {  
    var synth=window.speechSynthesis;
    var speak_data="Your Selfie is saved";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 }
 

