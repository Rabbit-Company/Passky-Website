if(!isSessionValid()) window.location.href = 'index.html';

document.getElementById("passwords-link").innerText = lang[localStorage.lang]["passwords"];
document.getElementById("import-export-link").innerText = lang[localStorage.lang]["import_export"];
document.getElementById("settings-link").innerText = lang[localStorage.lang]["settings"];
document.getElementById("signout-link").innerText = lang[localStorage.lang]["signout"];

document.getElementById("passwords-link-mobile").innerText = lang[localStorage.lang]["passwords"];
document.getElementById("import-export-link-mobile").innerText = lang[localStorage.lang]["import_export"];
document.getElementById("settings-link-mobile").innerText = lang[localStorage.lang]["settings"];
document.getElementById("signout-link-mobile").innerText = lang[localStorage.lang]["signout"];

document.getElementById("label-theme").innerText = lang[localStorage.lang]["theme"];
document.getElementById("label-session-duration").innerText = lang[localStorage.lang]["session_duration"];

document.getElementById("delete-account-title").innerText = lang[localStorage.lang]["delete_account"];
document.getElementById("delete-account-text").innerText = lang[localStorage.lang]["delete_account_info"];
document.getElementById("delete-account-btn").innerText = lang[localStorage.lang]["delete_account"];

document.getElementById("dialog-button-cancel").innerText = lang[localStorage.lang]["cancel"];

document.getElementById("settings-lang").value = localStorage.lang;
document.getElementById("settings-theme").value = localStorage.theme;
document.getElementById("settings-session").value = localStorage.sessionDuration;

let minutes = document.getElementsByClassName("addMinutes");
for(let i = 0; i < minutes.length; i++) minutes[i].innerText = minutes[i].innerText + " " + lang[localStorage.lang]["minutes"];

function deleteAccount(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", localStorage.url + "/?action=deleteAccount");

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.username + ":" + sha512(localStorage.password)));
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {

        if(xhr.readyState === 4){
            if(xhr.status != 200) return;
            
            const json = JSON.parse(xhr.responseText);

            if(typeof json['error'] === 'undefined') return;
            if(json['error'] != 0) return;
            
            logout();
        }

    };
    xhr.send("");
}

function changeDialog(style, text){
    switch(style){
        case 1:
            //Delete account dialog
            document.getElementById('dialog-icon').className = "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10";
            document.getElementById('dialog-icon').innerHTML = "<svg class='h-6 w-6 text-red-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' /></svg>";
    
            document.getElementById('dialog-title').innerText = lang[localStorage.lang]["delete_account"];
            document.getElementById('dialog-text').innerText = lang[localStorage.lang]["delete_account_confirmation"];
    
            document.getElementById('dialog-button-cancel').style.display = 'initial';

            document.getElementById('dialog-button').className = "dangerButton inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:w-auto sm:text-sm";
            document.getElementById('dialog-button').innerText = lang[localStorage.lang]["delete"];
            document.getElementById('dialog-button').onclick = () => deleteAccount();
        break;
    }
}

document.getElementById("settings-lang").addEventListener("change", () => {
    localStorage.lang = document.getElementById("settings-lang").value;
    location.reload();
});

document.getElementById("settings-theme").addEventListener("change", () => {
    localStorage.theme = document.getElementById("settings-theme").value;
    document.getElementById("css-theme").href = "css/themes/" + localStorage.theme + ".css";
});

document.getElementById("settings-session").addEventListener("change", () => {
    localStorage.sessionDuration = document.getElementById("settings-session").value;
    location.reload();
});

document.getElementById("delete-account-btn").addEventListener("click", () => {
    changeDialog(1);
    show('dialog');
});

document.getElementById("signout-link").addEventListener("click", () => {
    logout();
});

document.getElementById("signout-link-mobile").addEventListener("click", () => {
    logout();
});

document.getElementById("main-menu-toggle-btn").addEventListener("click", () => {
    toggleMenu();
});

document.getElementById("dialog-button-cancel").addEventListener("click", () => {
    hide('dialog');
});