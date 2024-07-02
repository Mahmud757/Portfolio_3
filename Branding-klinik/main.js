let input = document.querySelector(`#input`);
let submit = document.querySelector(`#submit`);

submit.addEventListener(`click`, function click() {
    if (input.value !== '') {
        alert(`Emailingiz saqlandi.`);
        localStorage.setItem(`Email`, input.value);
        window.location.href = "https://www.youtube.com/";
        // setTimeout(() => {
        //     window.location.href = "https://www.google.com/";
        // }, 500);
    }
    else if (input.value == '') {
        // localStorage.setItem(`Email`, `kiritilmadi`);
        alert(`Bo'sh joyni to'ldiring!`);
    }
}) 