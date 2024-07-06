const shareButton = document.getElementById("shareButton");
shareButton.addEventListener("click", shareLink);

function shareLink() {
  const { title } = document;
  const url = document.location.url;

  if (navigator.share) {
    navigator
      .share({
        title: title,
        text: `${title} на гидрокрыму.online`,
        url: url,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}
