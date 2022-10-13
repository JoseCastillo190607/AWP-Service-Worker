if('serviceWorker' in navigator){
    console.log('puede usar  los sw en tu navegador');
    navigator.serviceWorker.register('./sw.js')
    .then(res=>console.log('serviceWorker cargando correctamente', res))
    .catch(err=> console.log('ServiceWorker no se ha podido registrar', res))
}
else{
    console.log('NO puede usar  los sw en tu navegador');

}