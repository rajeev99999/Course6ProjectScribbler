// Get the modal
var modal = document.getElementById("myModal");
var signInmodal = document.getElementById("signInModal");
var createPostModal = document.getElementById("createPostModal");

// Get the <span> element that closes the modal
var span = document.getElementById("closeSignUp");
var spanForSignin = document.getElementById("closeSignIn");
var spanForCreatePost = document.getElementById("closeCreatePost");

// When the user clicks the button, open the modal
function signUp() {
  var btn = document.getElementById("signUp");
  modal.style.display = "block";
}

function signIn() {
  var btn = document.getElementById("signIn");
  signInmodal.style.display = "block";
}

function createPost() {
  createPostModal.style.display = "block";
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
spanForCreatePost.onclick = function () {
  createPostModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == signInmodal) {
    signInmodal.style.display = "none";
  }
  if (event.target === createPostModal) {
    createPostModal.style.display = "none";
  }
};
