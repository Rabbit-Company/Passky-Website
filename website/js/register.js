loadData().then(() => {

	if(readData('url') !== null && typeof(readData('url')) !== 'undefined') document.getElementById('passky-server').value = readData('url');

	document.getElementById("passky-server").placeholder = lang["server"];
	document.getElementById("username").placeholder = lang["username"];
	document.getElementById("email").placeholder = lang["email"];
	document.getElementById("password").placeholder = lang["password"];
	document.getElementById("tos").innerText = lang["terms_of_service"];
	document.getElementById("btn-dialog").innerText = lang["okay"];
	document.getElementById("error-dialog-modal-title").innerText = lang["error"];
	document.getElementById("btn_signup").innerText = lang["signup"];
	document.getElementById("btn_signin").innerText = lang["signin"];

});

document.getElementById("signup-form").addEventListener("submit", e => {
	e.preventDefault();
	onBtnClick();
});

document.getElementById("btn-dialog").addEventListener("click", () => {
	hide('error-dialog');
});

document.getElementById("btn_signin").addEventListener("click", () => {
	window.location.href = "index.html";
});

document.getElementById("password").addEventListener("input", () => {
	let password = document.getElementById("password").value;
	let entropy = 100 - (PasswordEntropy.calculate(password));
	if(entropy <= 1) entropy = 0;
	document.getElementById("entropy").style.width = entropy + "%";
});

document.getElementById("password-hider").addEventListener("click", () => {
	let password = document.getElementById("password");
	if(password.type === "password"){
		password.type = "text";
		document.getElementById("password-hider").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 secondaryColor' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><line x1='3' y1='3' x2='21' y2='21'></line><path d='M10.584 10.587a2 2 0 0 0 2.828 2.83'></path><path d='M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341'></path></svg>";
	}else{
		password.type = "password";
		document.getElementById("password-hider").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 secondaryColor' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><circle cx='12' cy='12' r='2'></circle><path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7'></path></svg>";
	}
});

function onBtnClick(){

	const url = document.getElementById("passky-server").value;
	const username = document.getElementById("username").value.toLowerCase();
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	if(PasswordEntropy.calculate(password) < 75){
		setText('error-dialog-modal-text', lang["5"]);
		show('error-dialog');
		return;
	}

	Passky.createAccount(url, username, password, email).then(response => {

		if(typeof response['error'] === 'undefined'){
			setText('error-dialog-modal-text', lang["server_unreachable"]);
			show('error-dialog');
			return;
		}

		if(response['error'] != 0){
			setText('error-dialog-modal-text', lang[response['error']]);
			show('error-dialog');
			return;
		}

		writeData('url', url);
		writeData('username', username);

		setText('error-dialog-modal-title', lang["success"]);
		setText('error-dialog-modal-text', lang["registration_completed"]);
		document.getElementById('dialog-icon').className = "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100";
		document.getElementById('dialog-icon').innerHTML = "<svg class='h-6 w-6 text-green-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7' /></svg>";
		document.getElementById('btn-dialog').className = "successButton inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium sm:text-sm"
		document.getElementById('btn-dialog').onclick = function(){
			window.location.href = 'index.html';
		}
		show('error-dialog');

	}).catch(err => {
		switch(err){
			case 1000:
				setText('error-dialog-modal-text', lang["server_unreachable"]);
			break;
			case 1001:
				setText('error-dialog-modal-text', lang["url_invalid"]);
			break;
			case 1005:
				setText('error-dialog-modal-text', lang["12"]);
			break;
			case 1006:
				setText('error-dialog-modal-text', lang["5"]);
			break;
			case 1007:
				setText('error-dialog-modal-text', lang["6"]);
			break;
			default:
				setText('error-dialog-modal-text', lang[err]);
			break;
		}
		show('error-dialog');
	});

}