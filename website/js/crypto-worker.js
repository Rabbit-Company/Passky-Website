importScripts('Argon2id.min.js');

self.addEventListener('message', (e) => {
	let action = e.data[0];

	// Server Authentication
	if(action == 0){
		let authHash = Blake2b.hash("passky2020-" + e.data[1] + "-" + e.data[2]);
		let authPass = Argon2id.hash(authHash, Blake2b.hash("passky2020-" + e.data[2]), 6, 64, 8, 64);
		self.postMessage([action, authPass]);
		return;
	}

	// Password encryption & decryption
	if(action == 1){
		let decrHash = Blake2b.hash(e.data[2] + "-" + e.data[1] + "-passky2020");
		let decrPass = Argon2id.hash(decrHash, Blake2b.hash(e.data[2] + "-passky2020"), 6, 64, 8, 64);
		self.postMessage([action, decrPass]);
		return;
	}

});