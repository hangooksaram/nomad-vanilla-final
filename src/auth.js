const isSignedIn = JSON.parse(localStorage.getItem("userInfo"))?.isSignedIn;
const app = document.getElementById("app");
const sign = document.getElementById("sign");
const signInEl = document.getElementById("sign-in");
const signUpEl = document.getElementById("sign-up");
const signInId = document.getElementById("sign-in-id");
const signInPw = document.getElementById("sign-in-pw");
const signInBtn = document.getElementById("sign-in-btn");
const signUpId = document.getElementById("sign-up-id");
const signUpPw = document.getElementById("sign-up-pw");
const showSignUpBtn = document.getElementById("show-sign-up-btn");
const signUpBtn = document.getElementById("sign-up-btn");

const signIn = () => {
  const userInfoInput = {
    id: signInId.value,
    pw: signInPw.value,
    isSignedIn: true,
  };
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (
    userInfo &&
    userInfo.id === userInfoInput.id &&
    userInfo.pw === userInfoInput.pw
  ) {
    localStorage.setItem("userInfo", JSON.stringify(userInfoInput));
    app.classList.toggle("hide");
    sign.classList.toggle("hide");
    alert("Sign In Successed");
  } else {
    alert("Sign In Failed. Please check your id and password.");
  }
};

const signUp = () => {
  const userInfo = {
    id: signUpId.value,
    pw: signUpPw.value,
    isSignedIn: false,
  };

  if (signUpId.value && signUpPw.value) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    alert("Sign Up Successed.");
    toggleSignEl();
  } else {
    alert("Sign Up Failed. Please type your id and password.");
  }
};

const toggleSignEl = () => {
  signInEl.classList.toggle("hide");
  signUpEl.classList.toggle("hide");
};

if (isSignedIn) {
  sign.classList.toggle("hide");
} else {
  app.classList.toggle("hide");
  showSignUpBtn.addEventListener("click", () => {
    toggleSignEl();
  });

  signUpBtn.addEventListener("click", () => {
    signUp();
  });

  signInBtn.addEventListener("click", () => {
    signIn();
  });
}
