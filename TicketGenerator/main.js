
  const fileInput = document.getElementById("profilePicInput");
  const previewImg = document.getElementById("profilePicPreview");

  fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        previewImg.src = this.result;
      });

      reader.readAsDataURL(file);
    }
  });