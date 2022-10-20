
const postsController = new PostsController(0);


function loadCardsListFromPostsController() {
    var allPosts = "";
    const postsContainer = document.getElementById("list-posts");
    allPosts += "<div class='row'>";
    for (var i = 0, size = postsController.posts.length; i < size; i++) {
        const post = postsController.posts[i];
        if(i>0 && i%3 == 0) {
            allPosts += "</div> <div class='row'>";
        }
        allPosts += addPostCard(post);
        if(i == size-1){
            allPosts += "</div>"; 
        }
    }

    postsContainer.innerHTML = allPosts;
}

function addPostCard(post) {
    var postHTML = "";
 
       
     postHTML +=
        '<div class="card col-auto" style="margin: 5px; width: 350px">\n' +
        '    <img src="' + post.imageUrl + '" width="300" height="250" style="padding-left: 20px;"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + post.userName + '</h5>\n' +
        '        <p class="card-text">' + post.country + ', ' + post.city + '</p>\n' +
        '        <p class="card-text">' + post.recommendation + '</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '';
        
    
    return postHTML;
    
}

postsController.loadPostsFromLocalStorage();
loadCardsListFromPostsController();
