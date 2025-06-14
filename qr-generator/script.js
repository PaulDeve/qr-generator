function generateQR() {
  const container = document.getElementById("qrcode");
  const text = document.getElementById("text").value.trim();

  if (!text) {
    alert("Por favor, escribe algo.");
    return;
  }

  container.innerHTML = "";

  new QRCode(container, {
  text: text,
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
}
