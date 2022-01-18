const fileElement = document.getElementById("image");
const imageElement = document.getElementById("image-preview");

function showPreview() {
  const files = fileElement.files;
  if (!files || files.length === 0) {
    imageElement.style.display = "none";
    return;
  }

  const pickedFile = files[0];
  imageElement.src = URL.createObjectURL(pickedFile);
  imageElement.style.display = "block";
}

fileElement.addEventListener("change", showPreview);
