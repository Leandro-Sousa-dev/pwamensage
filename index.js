window.addEventListener('beforeinstallprompt', function (e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    showInstallPromotion();

});

let btnAdd = document.getElementById('botao-pwa')

// Installation must be done by a user gesture! Here, the button click
btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button

    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt

});



function showInstallPromotion() {
    btnAdd.style.display = 'inline-block'
}