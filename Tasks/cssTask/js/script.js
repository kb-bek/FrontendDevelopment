function changeCorolBtn() {
    document.getElementById('signin-btn').style.backgroundColor = 'yellow';
    document.getElementById('signin-btn').style.color = 'black';
}

function originalColor() {
    document.getElementById('signin-btn').style.backgroundColor = 'blue';
    document.getElementById('signin-btn').style.color = 'white';
}


function changeBgColor() {
    document.getElementById('about-web-dev').style.backgroundColor = 'aqua';
}

function originalBgColor() {
    document.getElementById('about-web-dev').style.backgroundColor = 'transparent';
}


function signInForm() {
    document.getElementById("main").style.display = 'flex';
    document.getElementById("main").style.alignItems = 'center';
    document.getElementById("main").style.justifyContent = 'center';
    document.getElementById("main").innerHTML = `
            <div style="margin:100px;">
                <h3>Sign In</h3>
                <form action="" style="display: flex; flex-direction: column;">
                    <input type="email" class="input" placeholder="Your Email">
                    <input type="password" class="input" placeholder="Your Password">
                    <input type="button" value="Sign Up" class="form-btn">
                </form>
            </div>

    `
}