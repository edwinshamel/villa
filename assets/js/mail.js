const btnEnviar = document.getElementById("form-submit");

btnEnviar.addEventListener("click", () => {
  btnEnviar.preventDefault;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subjet = document.getElementById("subjet");
  const text = document.getElementById("message");
  console.log(text.value);
  //sendEmail();
  //alert("hola " + name.value);
  location.replace("http://127.0.0.1:5500/contact.html");
});
