const background = document.getElementById('background');
const pwdInput = document.getElementById('password');

pwdInput.addEventListener('keyup', function(){
    const pwdLength = this.value.length;
    background.style.filter = `blur(${20 - (pwdLength * 2)}px)`;
})