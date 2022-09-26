
class PostsController {
    constructor(currentId = 0) {
        this.posts = [];
        this.currentId = currentId;
    }

    addPost(userName, country, city, recommendation, imageUrl) {
        const post = {
            id: this.currentId++,
            userName: userName,
            country: country,
            city: city,
            recommendation: recommendation,
            imageUrl: imageUrl
        }
      
        this.loadPostsFromLocalStorage();
        

        this.posts.push(post);

        //Save posts to local storage
        localStorage.setItem("posts", JSON.stringify(this.posts));
    }



    



        loadStorageSampleData() {
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

