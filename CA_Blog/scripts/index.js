//Dom elements

const blog_form = document.getElementById("blog-form");
const blog_list = document.getElementById('home')

const blogs = [];
blog_form.addEventListener("submit", (e) => {
  e.preventDefault()
  try {
    const blog_title = document.getElementById("title").value;
    const blog_description = document.getElementById("description").value;
    const blog_image = document.getElementById("profilePicInput").value;
    
    
      const new_blog = {
        blog_description,
        blog_title,
        blog_image: blog_image
      };
      blogs.push(new_blog);
     
      blog_form.reset()
      console.log(blogs)
      alert("blog created successfully");
      if(blogs){
        blogs.forEach((blog) => {
          const div = document.createElement("div");
          div.innerHTML = `
    <div class='blog-item'>
            <div class="img">
      <img src="${blog.blog_image}" alt="main image">
    </div>
    <div class="info">
      <h2>${blog.blog_title}</h2>
      <p>
        ${blog.blog_description}
      </p>
      <div class="profile">
        <img src="${blog.blog_image}" alt="user profile"><span>Anonymous</span>
      </div>
      <div class="btn">See more</div>
    </div>
    </div>
        `;
          blog_list.appendChild(div)
        });
      }else{
        alert('no block found')
      }
      

    

    
     
        
        
      

  } catch (error) {
    console.log(error);
  }
});


