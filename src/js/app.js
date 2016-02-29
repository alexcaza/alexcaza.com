import Http from './classes/Http';
import { modifyClassList } from './functions/modifyClassList';

const http = new Http();
const blogPost = document.getElementById('blog-post');

var init = (function() {
    const popout = document.getElementsByClassName('popout')[0];
    const photoBtn = document.getElementsByClassName('profile-photo')[0];

    photoBtn.addEventListener('click', (e) => {
        if (popout.children[0].classList[2] === "hide") {
            modifyClassList(popout, "remove");
        } else {
            modifyClassList(popout, "add");
        }
    });
});

init();

http.fetch().then((response) => {
    blogPost.setAttribute('href', response.url);
    blogPost.textContent = response.title;
}).catch((error) => {
   console.log("Error! :", error);
});
