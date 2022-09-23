const postsController = new PostsController(0);


const newPostFrom = document.querySelector('#newUserForm')
newPostFrom.addEventListener('submit', (event) => {
    event.preventDefault();

    const newUserNameInput = document.querySelector("#newUserNameInput")
    const newUserRecommendation = document.querySelector('#newUserRecommendation')

    const userName = newUserNameInput.value;
    const recommendation = newUserRecommendation.value;
    const createdAt = new Date();

    postsController.addPost(userName, recommendation, createdAt);

    //clear the form
    newUserNameInput.value = '';
    newUserRecommendation.value = '';

});




function addPostCard(post) {
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="' + post.img + '" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + post.name + '</h5>\n' +
        '        <p class="card-text">' + post.recommendation + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const postsContainer = document.getElementById("list-posts");
    postsContainer.innerHTML += itemHTML;
}


addPostCard({
    'name': 'Yiran',
    'img': 'https://i.natgeofe.com/n/45936334-bdc9-4659-88dd-6f380d5a2b76/2030.jpg?w=636&h=477',
    'recommendation': 'Tourist Information: Arch National Park'

});

addPostCard({
    'name': 'Yiran',
    'img': 'https://a.cdn-hotels.com/gdcs/production126/d349/d2422886-1662-43cb-a356-4087bdbb59f8.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    'recommendation': 'Tourist Information: Yosemeti National Park'

})
