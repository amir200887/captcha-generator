const captchaElem = document.querySelector(".captcha");
const captchaInput = document.querySelector(".captcha-input");
const confirmBtn = document.querySelector(".confirm");
const regenerateBtn = document.querySelector(".regenerate");
const toast = document.querySelector(".toast");
const toastText = document.querySelector(".toast p");
const toastProgress = document.querySelector(".progress");

let cpatcha = "";

function checkCaptcha() {
  const userCaptcha = captchaInput.value;
  let progressSteps = 0;

  toast.classList.remove("hidden");

  if (userCaptcha === cpatcha) {
    toastText.innerHTML = "عملیات با موفقیت انجام شد";
    toastProgress.style.backgroundColor = "#10b981";
  } else {
    toastText.innerHTML = "کپچای وارد شده صحیح نمی‌باشد";
    toastProgress.style.backgroundColor = "#ef4444";
  }

  const progressInterval = setInterval(function () {
    progressSteps++;

    if (progressSteps > 150) {
      toastProgress.style.width = `0%`;
      toast.classList.add("hidden");
      clearInterval(progressInterval);
    } else {
      toastProgress.style.width = `${progressSteps}%`;
    }
  }, 10);
}

function setCaptcha() {
  const text = "0123456789abcdefjhijklmnopqrstuvwxyz";

  cpatcha = "";

  for (let i = 0; i < 5; i++) {
    cpatcha += text[Math.floor(Math.random() * text.length)];
  }

  captchaElem.innerHTML = "";
  captchaElem.innerHTML = cpatcha;
}

confirmBtn.addEventListener("click", checkCaptcha);
regenerateBtn.addEventListener("click", setCaptcha);
