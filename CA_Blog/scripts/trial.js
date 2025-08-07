const blog_form = document.getElementById("blog-form");
const profilePicInput = document.getElementById("profilePicInput");

blog_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const blog_title = document.getElementById("title").value;
  const blog_description = document.getElementById("description").value;
  const file = profilePicInput.files[0];

  if (!file) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const blog_image = reader.result; // Base64 Data URL

    const new_blog = {
      blog_title,
      blog_description,
      blog_image,
    };

    // Get existing blogs from localStorage or start with empty array
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(new_blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    blog_form.reset();
    alert("Blog created successfully");
  };

  reader.readAsDataURL(file); // Convert image to Base64
});



const blog_list = document.getElementById("home");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

if (blogs.length === 0) {
  blog_list.innerHTML = "<p>No blogs found.</p>";
} else {
  blogs.forEach((blog) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class='blog-item'>
        <div class="img">
          <img src="${blog.blog_image}" alt="main image">
        </div>
        <div class="info">
          <h2>${blog.blog_title}</h2>
          <p>${blog.blog_description}</p>
          <div class="profile">
            <img src="${blog.blog_image}" alt="user profile">
            <span>Anonymous</span>
          </div>
          <div class="btn">See more</div>
        </div>
      </div>
    `;
    blog_list.appendChild(div);
  });
}
