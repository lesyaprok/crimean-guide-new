const playVideo = document.getElementById("playVideo");

playVideo.addEventListener("click", () =>
  !document.getElementById("video-wrap")
    ? showVideo(
        "media-container",
        playVideo.dataset.src,
        playVideo.dataset.title
      )
    : null
);

function showVideo(id, src, title) {
  const wrapper = document.getElementById(id);
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="video-wrapper" id="video-wrap">
      <iframe id="iframe" src="https://www.youtube.com/embed/${src}" title=${title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button id="close-video" class="close-video-wrapper"></button>
    </div>`
  );
  const closeVideoButton = document.getElementById("close-video");
  closeVideoButton.addEventListener("click", () => closeVideo("video-wrap"));
}

function closeVideo(id) {
  const frame = document.getElementById(id);
  frame.parentNode.removeChild(frame);
}
