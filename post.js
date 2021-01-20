var userName, postHeading, postContent;
userName = localStorage.getItem("userName");
postHeading = localStorage.getItem("postHeading");
postContent = localStorage.getItem("postContent");
var countLikes = 0;
var commentsArray = [];

// Get the modal

var modal = document.getElementById("myModal");
var signInmodal = document.getElementById("signInModal");

// Get the <span> element that closes the modal
var span = document.getElementById("closeSignUp");
var spanForSignin = document.getElementById("closeSignIn");

// When the user clicks the button, open the modal
function signUp() {
  var btn = document.getElementById("signUp");
  modal.style.display = "block";
}

function signIn() {
  var btn = document.getElementById("signIn");
  signInmodal.style.display = "block";
}

function signUpFromSignIn() {
  signInmodal.style.display = "none";
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
spanForSignin.onclick = function () {
  signInmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == signInmodal) {
    signInmodal.style.display = "none";
  }
};

$(document).ready(function () {
  userName = localStorage.getItem("userName");
  postHeading = localStorage.getItem("postHeading");
  postContent = localStorage.getItem("postContent");
  var uName = document.getElementById("post-user");
  var postTitle = document.getElementById("post-heading");
  var postContents = document.getElementById("post-content");
  uName.innerText = userName;
  postTitle.innerText = postHeading;
  postContents.innerText = postContent;
});

function editDetails() {
  var btnedit = document.getElementById("btn");
  var btnSave = document.getElementById("btnSave");
  btnSave.hidden = false;
  btnedit.hidden = true;
  let posttitle = document.getElementById("post-heading");
  let postcontent = document.getElementById("post-content");
  posttitle.contentEditable = true;
  postcontent.contentEditable = true;
}

function saveDetails() {
  let btnedit = document.getElementById("btn");
  let btnSave = document.getElementById("btnSave");
  let postcontentUpd = document.getElementById("post-content");
  var postTitleUpd = document.getElementById("post-heading");
  postTitleUpd.contentEditable = false;
  postcontentUpd.contentEditable = false;
  let editedPostheading = document.getElementById("post-heading");
  btnSave.hidden = true;
  btnedit.hidden = false;
  if (
    postHeading !== postTitleUpd.innerText ||
    postContent !== postcontentUpd.innerText
  ) {
    var updatedPostheading = editedPostheading.innerText;
    if (updatedPostheading.indexOf("UPDATED: ") === -1) {
      editedPostheading.innerText = "UPDATED: " + editedPostheading.innerText;
      localStorage.setItem("postHeading", editedPostheading.innerText);
    }
  }
}

function likePost() {
  let likebtn = document.getElementsByClassName("like-btn")[0];
  let likedbtn = document.getElementsByClassName("like-btn")[1];
  let likes = document.getElementById("likes");
  let likesMore = document.getElementById("likesMore");
  let noOfLikes = document.getElementById("noOfLikes");
  countLikes += 1;
  if (countLikes > 1) {
    likes.hidden = true;
    likesMore.hidden = false;
    noOfLikes.innerText = countLikes;
  } else {
    likes.hidden = false;
    likesMore.hidden = true;
  }
  likebtn.hidden = true;
  likedbtn.hidden = false;
  let subsOfPost = document.getElementById("subs-like-text");
  subsOfPost.style.display = "none";
}

function comment() {
  let commentsId = document.getElementById("box");
  let commentstext = commentsId.value;
  let commentsContainer = document.getElementById("comment-box");
  if (commentsId.value != "") {
    commentsArray.push(commentstext);
  }
  let commentsLen = commentsArray.length;

  var x = "",
    i;
  for (i = 0; i < commentsLen; i++) {
    x = x + "<p class='borderBox'> " + commentsArray[i] + "</p>";
  }
  document.getElementById("comment-box").innerHTML = x;

  commentsId.value = "";
}
