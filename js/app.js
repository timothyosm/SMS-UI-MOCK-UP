const menuCtrl = document.querySelector('ion-menu-controller');


function dashboard() {
    document.querySelector("ion-menu-controller").close();
    $.ajax("./dashboard.html")
        .then(response => {
            $("#content").html(response);
            console.error(response);
        })
        .catch(error => console.error(error));
    presentLoading(500);
};



$(document).ready(function () {
    dashboard();
});

function openFirst() {
  menuCtrl.enable(true, 'first');
  menuCtrl.open('first');
}



//loading popup
async function presentLoading(a) {
    const loading = document.createElement("ion-loading");
    (loading.message = "Loading..."), (loading.duration = a);
    document.body.appendChild(loading);
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
};


