
const postsController = new PostsController(0);

const newPostFrom = document.querySelector('#newUserForm')

newPostFrom.addEventListener('submit', (event) => {
    event.preventDefault();

    let newName = document.querySelector("#newName")
    let newUserRecommendation = document.querySelector('#newUserRecommendation')
    let newUserCountry = document.querySelector('#userCountry')
    if (newUserCountry.value == 'Other Country') {
        newUserCountry = document.querySelector('#userOtherCountry');
    }
    let newUserCity = document.querySelector('#userCity')
    if (newUserCity.value == 'Other City') {
        newUserCity = document.querySelector('#userOtherCity');
    }
    const newUserImage_url = document.querySelector('#userImageUrl');

    const name = newName.value;
    const userCountry = newUserCountry.value;
    const userCity = newUserCity.value;
    const recommendation = newUserRecommendation.value;
    const userImage_url = newUserImage_url.value;



    postsController.addPost(name, userCountry, userCity, recommendation, userImage_url);

    //clear the form
    newName.value = '';
    newUserRecommendation.value = '';
    newUserCountry.value = 'Other Country';
    newUserCity.value = 'Other City';
    userImage_url.value = '';




});