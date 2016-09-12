var mjpeg_img;
 
function reload_img () {
  mjpeg_img.src = "preview?time=" + new Date().getTime() + "&pDelay=100000";
}
function error_img () {
  setTimeout("mjpeg_img.src = 'preview?time=' + new Date().getTime();", 100);
}
function initCapture() {
  mjpeg_img = document.getElementById("mjpeg_dest");

  mjpeg_img.onload = reload_img;
  mjpeg_img.onerror = error_img;
  reload_img();
}
function stopCapture() {
  mjpeg_img.onload = function(){};
  mjpeg_img.onerror = function(){}
}
