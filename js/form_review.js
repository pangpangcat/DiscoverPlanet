const postsController = new PostsController(0);



const newPostFrom = document.querySelector('#newUserForm')

newPostFrom.addEventListener('submit', (event) => {
    event.preventDefault();

    let newUserName = document.querySelector("#newUserName")
    let newUserRecommendation = document.querySelector('#newUserRecommendation')
    let newUserCountry = document.querySelector('#userCountry')
    if (newUserCountry.value == 'Other Country') {
        newUserCountry = document.querySelector('#userOtherCountry');
    }
    let newUserCity = document.querySelector('#userCity')
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
    userImageUrl.value = ''




});