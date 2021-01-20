// Get the modal
var target;
var modal = document.getElementById("myModal");
var signInmodal = document.getElementById("signInModal");
// var deletbtnid = document.getElementById("deletbtnid");
var deletePostModal = document.getElementById("deletePostModal");

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

function deleteCardYes() {
  if (target !== undefined && target !== null) {
    target.style.display = "none";
    deletePostModal.style.display = "none";
  }
}

function deleteCardNo() {
  deletePostModal.style.display = "none";
}

$(document).ready(function () {
  $(".trash").click(function () {
    target = $(this).parents()[3];

    deletePostModal.style.display = "block";
  });
  $(".ellipsis").click(function () {
    target = $(this).parents()[3];
    localStorage.setItem(
      "userName",
      $(this).parents()[2].children[0].innerText
    );
    localStorage.setItem(
      "postHeading",
      $(this).parents()[2].children[1].children[0].innerText
    );
    localStorage.setItem(
      "postContent",
      $(this).parents()[2].children[1].children[1].innerText
    );
    window.location.href = "post.html";
  });
});
