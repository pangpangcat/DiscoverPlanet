class PostsController {
    constructor(currentId=0, country){
       this._posts = []; 
       this.currentId = currentId;
    }

    get posts(){
        return this._posts;
    }
}

const post = new PostsController();
console.log(post.posts)

const country = document.getElementById('country');
const button = document.getElementById('button');
console.log(country, button);

country.addEventListener('input', ()=>{
    console.log(country.value)
})

// button.onclick = ()=>{
//     console.log(country.value)
// }