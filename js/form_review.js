const postsController = new PostsController(0);
alert("hello world");


const newPostFrom = document.querySelector('#newPostForm')

newPostFrom.addEventListener('submit', (event) => {
    event.preventDefault();

    const newUserName = document.querySelector("#newUserName")
    const newUserRecommendation = document.querySelector('#newUserRecommendation')
    const newUserCountry = document.querySelector('#userCountry')
    if (newUserCountry.value == 'Other Country') {
        newUserCountry = document.querySelector('#userOtherCountry');
    }
    const newUserCity = document.querySelector('#userCity')
    if (newUserCity.value == 'Other City') {
        newUserCity = document.querySelector('#userOtherCity');
    }
    const newUserImageUrl = document.querySelector('#userImageUrl');

    const userName = newUserName.value;
    const userCountry = newUserCountry.value;
    const userCity = newUserCity.value;
    const recommendation = newUserRecommendation.value;
    const userImageUrl = newUserImageUrl.value;



    postsController.addPost(userName, userCountry, userCity, recommendation, userImageUrl);



    //clear the form
    newUserName.value = '';
    newUserRecommendation.value = '';
    newUserCountry.value = 'Other Country';
    newUserCity.value = 'Other City';
    userImageUrl.value = '';

});




/*
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
*/