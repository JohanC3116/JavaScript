function ocultarLoading() {
  document.getElementById("loading").remove();
}
setTimeout(()=>{
    ocultarLoading();
}, 2500)