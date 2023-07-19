 // Sign-up animation
 document.getElementById("back").addEventListener('click', ()=>{
    let form = document.getElementById('form1');
    form.style.transform = "scale(0)";
    form.style.borderRadius = "100%";
    form.style.right = "-100%";
    form.style.bottom = "-100%";
    form.style.zIndex = "5";
});
document.getElementById("btn-signup").addEventListener('click', ()=>{
    let form = document.getElementById('form1');
    form.style.transform = "scale(100%)";
    form.style.borderRadius = "0";
    form.style.right = "0";
    form.style.bottom = "0";
    form.style.zIndex = "15";
});
document.getElementById("btn-GetStarted").addEventListener('click', ()=>{
    let form = document.getElementById('form1');
    form.style.transform = "scale(100%)";
    form.style.borderRadius = "0";
    form.style.right = "0";
    form.style.bottom = "0";
    form.style.zIndex = "15";
});

// ===================================//
// ===================================//

// Show and Hide Password
function opener() {
    document.getElementById("closed").style.display = "none";
    document.getElementById("password").type = "text";
    document.getElementById("open").style.display = "block";
}

function closed() {
    document.getElementById("closed").style.display = "block";
    document.getElementById("password").type = "password";
    document.getElementById("open").style.display = "none";
}


// notification animation
function closeToast() {
    let toast = document.getElementById("toast");
    let bar = document.getElementById("bar");
    toast.classList.add("animaHide");
    toast.classList.remove("anima");
    bar.classList.remove("progress");
}

let bar = document.getElementById("bar");
bar.addEventListener('animationend', () => {
    let toast = document.getElementById("toast");
    bar.classList.remove("progress");
    toast.classList.add("animaHide");
    bar.style.display = "none";
});


// modal animations

let closeModal = document.getElementById("closeModal");
closeModal.addEventListener('click', ()=>{
    let modal = document.getElementById("modal");
    let overlay = document.getElementById("overlay");
    modal.classList.remove("moddy");
    overlay.style.display = "none";
    happy.style.opacity= "1";
    gif.style.opacity = "1";
    window.location.reload(true);
});



// Time Function
function Validate(e) {
    // list of Variables
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    let toast = document.getElementById("toast");
    let bar = document.getElementById("bar");
    let Error = document.getElementById("error");
    let modal = document.getElementById("modal");
    let modalMessage = document.getElementById("modal-message");
    let overlay = document.getElementById("overlay");
    let happy = document.getElementById("happy");
    let sad = document.getElementById("sad");
    let gif = document.getElementById("gif");



//>======= Time Variable =======<//

     // Setting Time
    let CurrentTime = new Date();
    // Starting Time
    let StartTime = new Date();
    StartTime.setHours(10, 0);

    // Ending Time
    let EndTime = new Date();
    EndTime.setHours(14, 0);


    // Setting Date 
    let CurrentDay = new Date();
    // Starting Time
    let StartDate = new Date();
    StartDate.setFullYear(2023, 6, 5);

    // Ending Date
    let EndDate = new Date();
    EndDate.setFullYear(2023, 6, 9);


    if (name.trim() == "") {
        toast.classList.add("anima");
        toast.classList.remove("animaHide");
        bar.classList.add("progress");
        bar.style.display = "block";
        Error.innerHTML = "Error : Fill in FullName";
        return false;
    } else if (!name.trim().match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        toast.classList.add("anima");
        toast.classList.remove("animaHide");
        bar.classList.add("progress");
        bar.style.display = "block";
        Error.innerHTML = "Error : Must be fullname";
        return false;
    } else if (mail.trim() == "") {
        toast.classList.add("anima");
        toast.classList.remove("animaHide");
        bar.classList.add("progress");
        bar.style.display = "block";
        Error.innerHTML = "Error : Fill in your Email";
        return false;
    } else if (!mail.trim().match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        toast.classList.add("anima");
        toast.classList.remove("animaHide");
        bar.classList.add("progress");
        bar.style.display = "block";
        Error.innerHTML = "Error : invalid Email";
        return false;
    } else if (password.trim() == "") {
        toast.classList.add("anima");
        toast.classList.remove("animaHide");
        bar.classList.add("progress");
        bar.style.display = "block";
        Error.innerHTML = "Error : Fill in Password";
        return false;
    } else if (password.trim().length < 8) {
        toast.classList.add("anima");
        toast.classList.remove("animaHide");
        bar.classList.add("progress");
        bar.style.display = "block";
        Error.innerHTML = "Error : Must be 8 or more";
        return false;
    } else if (CurrentDay < StartDate) {
        modalMessage.innerHTML = "Sorry We haven't started our registration come on 5th of july";
        modal.classList.add("moddy");
        overlay.style.display = "block";
        return false;
    }
    else if (CurrentDay > EndDate) {
        modalMessage.innerHTML = "Unfortunately we have closed our registration for the year 2023 ";
        modal.classList.add("moddy");
        overlay.style.display = "block";
        return false;
    }
    else if (CurrentTime < StartTime) {
        modalMessage.innerHTML = "Sorry unfortunately our registration haven't started come by 10AM";
        modal.classList.add("moddy");
        overlay.style.display = "block";
        return false;
    } else if (CurrentTime > EndTime) {
        modalMessage.innerHTML = "Our registration have closed for today come by 10AM tomorrow";
        modal.classList.add("moddy");
        overlay.style.display = "block";
        return false;
    } else {
        modalMessage.innerHTML = `Registration have been successful.<br> WELCOME ${name.toUpperCase()}`;
        modal.classList.add("moddy");
        overlay.style.display = "block";
        sad.style.opacity = "0";
        happy.style.opacity= "1";
        gif.style.opacity = "1";
        return true;
    }
}