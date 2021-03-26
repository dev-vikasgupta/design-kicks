const codes = document.querySelectorAll('.code');
focus(0);
codes.forEach((code, idx) => {
    code.addEventListener('keydown', e => {
        if(e.key >= 0 && e.key <= 9) {
            codes[idx].value='';
            setTimeout(() => {
                codes[idx].value = e.key;
                // if it is not last digit to enter, then focus on next digit
                const next = idx < codes.length-1 ? ++idx : idx;
                focus(next);
            }, 10);
        } else if(e.key==='Backspace'){
            setTimeout(() => {
                // if it is not first digit to enter, then focus on prev digit
                focus(idx > 0 ? --idx : idx)
            }, 10);
        } else {
            // ignore every other input except digit 0 to 9
             e.preventDefault();
        }
    })
});
function focus(idx) {
     codes[idx].focus();
}