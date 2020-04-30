if('serviceWorker' in navigator ) {
    window.addEventListener('load',()=>{
    navigator.serviceWorker
    .register('../sw2.js')
    .then(res=> console.info('Service Registered'))
    .catch(err=>console.error('Servive worker error: ${err} '));
    });
  
  } else {
    console.log("Service worker not supported");
 }