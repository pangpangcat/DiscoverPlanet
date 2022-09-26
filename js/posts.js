const postsController = new PostsController(0);


function addPostCard(post) {
    const postHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="' + post.img + '" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + post.name + '</h5>\n' + post.country + post.city + '</h5>\n'
    '        <p class="card-text">' + post.recommendation + '</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const postsContainer = document.getElementById("list-posts");
    postsContainer.innerHTML += postHTML;
}

function loadStorageSampleData() {
    if (!localStorage.getItem("posts")) {
        const samplePosts = [{
            'name': 'Yiran',
            'country': 'United States',
            'city': 'Utah',
            'img': 'https://i.natgeofe.com/n/45936334-bdc9-4659-88dd-6f380d5a2b76/2030.jpg?w=636&h=477',
            'recommendation': 'Tourist Information: Arch National Park'
        },
        {
            'name': 'Yiran',
            'country': 'United States',
            'city': 'San Fransico',
            'img': 'https://a.cdn-hotels.com/gdcs/production126/d349/d2422886-1662-43cb-a356-4087bdbb59f8.jpg?impolicy=fcrop&w=800&h=533&q=medium',
            'recommendation': 'Tourist Information: Yosemeti National Park'
        }];
        localStorage.setItem("posts", JSON.stringify(samplePosts));
    }
}

function loadCardsListFromPostsController() {
    for (var i = 0, size = postsController.posts.length; i < size; i++) {
        const post = postsController.posts[i];
        addPostCard(post);
    }
}

loadStorageSampleData();
postsController.loadPostsFromLocalStorage();
loadCardsListFromPostsController();