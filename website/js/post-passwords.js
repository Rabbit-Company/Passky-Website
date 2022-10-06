if (readData('passwords') !== null && typeof(readData('passwords')) !== 'undefined') {
  const passwords = JSON.parse(readData('passwords'));
  for (let i = 0; i < passwords.length; i++) {
    const id = passwords[i].id;
    const website = XChaCha20.decrypt(passwords[i].website, decryptPassword(readData('password')));
    const username = XChaCha20.decrypt(passwords[i].username, decryptPassword(readData('password')));
    const password = XChaCha20.decrypt(passwords[i].password, decryptPassword(readData('password')));
    const message = XChaCha20.decrypt(passwords[i].message, decryptPassword(readData('password')));

    const data = id + ";;;" + website + ";;;" + username + ";;;" + password + ";;;" + message;

    document.getElementById("copy-username-" + id).addEventListener("click", () => {
      copyToClipboard(username);
      changeDialog(7, 1);
      show('dialog');
    });

    document.getElementById("copy-password-" + id).addEventListener("click", () => {
      copyToClipboard(password);
      changeDialog(7, 2);
      show('dialog');
    });

    document.getElementById("edit-password-" + id).addEventListener("click", () => {
      changeDialog(4, data);
      show('dialog');
    });

    document.getElementById("delete-password-" + id).addEventListener("click", () => {
      changeDialog(6, id);
      show('dialog');
    });
  }
}