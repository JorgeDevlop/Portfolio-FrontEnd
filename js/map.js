document.addEventListener("DOMContentLoaded", (Event) => {
setTimeout(()=>{
    document.querySelector("#load-iframe-map").innerHTML = `                             
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.3232872541926!2d-103.3504763!3d20.6156754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b286fdc955c1%3A0x80714934afde629b!2sChopin%204092%2C%20Miravalle%2C%2044990%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1692377813098!5m2!1ses!2smx"></iframe>
     `;

}, 500);
    
});