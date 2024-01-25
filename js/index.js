let inputbx = document.getElementById("email")
let btn = document.getElementById("btn")
let txt = document.getElementById("txt")
let container = document.getElementById("cont")

btn.addEventListener('click', ()=> {
    const email = inputbx.value
    if( validateEmail(email) ) {
      container.innerHTML = ` <div class="sucess">
      <img src="img/icon-success.svg" alt="">
      <div class="inner">
        <h1>Thanks for subscribing!</h1>
        <p> A confirmation email has been sent to ${email}. 
          Please open it and click the button inside to confirm your subscription.</p>
          <button> Dismiss message</button>
      </div>
    </div>`
    }else {
       inputbx.style.border = '1px solid red'
       inputbx.style.color = 'red'
       txt.innerHTML = "Invalid Email"
    }
    
})


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  