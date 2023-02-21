class PostsController {
  constructor(currentId = 0) {
    this.posts = [];
    this.currentId = currentId;
  }

  addPost(name, country, city, recommendation, image_url) {
    const post = {
      id: this.currentId++,
      name: name,
      country: country,
      city: city,
      recommendation: recommendation,
      image_url: image_url,
    };

    this.loadPostsFromLocalStorage();

    this.posts.push(post);

    //Save posts to local storage
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }

  save({ name, country, city, recommendation, image_url }) {
    const data = { name, country, city, recommendation, image_url };
    fetch("http://localhost:8080/post", {
      method: "POST",
      headders: {
        "content-Type:": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  update({ name, country, city, recommendation, image_url }) {
    //implement
  }

  delete(id) {
    //implement
  }

  findById(id) {
    //implement
  }

  loadPostsFromLocalStorage() {
    console.log("loadPostsFromLocalStorage");
    this.posts = [];
    const storagePosts = localStorage.getItem("posts");
    if (storagePosts) {
      var isSampleDataSaved = false;
      const posts = JSON.parse(storagePosts);
      for (var i = 0, size = posts.length; i < size; i++) {
        const post = posts[i];
        if (post.id < 0) isSampleDataSaved = true;
        this.posts.push(post);
      }
      if (!isSampleDataSaved) this.addStorageSampleData();
    } else {
      this.addStorageSampleData();
    }
  }

  addStorageSampleData() {
    console.log("addStorageSampleData");
    this.posts.push({
      id: -1,
      name: "Yiran",
      country: "United States",
      city: "Utah",
      image_url:
        "https://i.natgeofe.com/n/45936334-bdc9-4659-88dd-6f380d5a2b76/2030.jpg?w=636&h=477",
      recommendation: "Tourist Information: Arch National Park",
    });

    this.posts.push({
      id: -2,
      name: "Yiran",
      country: "United States",
      city: "San Fransico",
      image_url:
        "https://lh3.googleusercontent.com/p/AF1QipPl0KzMc-EVDFOHS7W10Gz6RPa1Kss4JZqszXa7=s680-w680-h510",
      recommendation: "Tourist Information: Yosemeti National Park",
    });

    this.posts.push({
      id: -3,
      name: "Yiran",
      country: "China",
      city: "Nanjing",
      image_url:
        "https://t4.ftcdn.net/jpg/02/95/21/59/360_F_295215999_pCLMPhNroeEuVcQxEnULnWOjRnZ6IIUy.jpg",
      recommendation: "Nanjing Zhonghan Mountain",
    });
  }
}
/*
// Test code
const posts1 = new PostsController();
posts1.addPost('Yiran',
    'recommendation: Arch National Park',
    'https://i.natgeofe.com/n/45936334-bdc9-4659-88dd-6f380d5a2b76/2030.jpg?w=636&h=477');
posts1.addPost('Yiran',
    'recommendation: Yosemeti',
    'https://a.cdn-hotels.com/gdcs/production126/d349/d2422886-1662-43cb-a356-4087bdbb59f8.jpg?impolicy=fcrop&w=800&h=533&q=medium')
console.log(posts1);
*/
