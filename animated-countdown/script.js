const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final')
const replayBtn = document.querySelector('#replay');

replayBtn.addEventListener('click', resetCounter);

runAnimation();
function resetCounter() {
    // show the counters
    counter.classList.remove('hide');
    // hide the replay btn container
    finalMessage.classList.remove('show');
    // first element add the "In" class.
    nums[0].classList.add('in');
}
function runAnimation() {
    nums.forEach((num,idx) => {
        const lastElement = nums.length-1;
        num.addEventListener('animationend', (e)=> {
            // if finished animation was in and it is not last 
            if(e.animationName=='goIn' && idx !== lastElement){
                // remove in and add out
                num.classList.remove('in');
                num.classList.add('out');
            // if finished animation was out and next counter exist
            } else if(e.animationName=='goOut' && num.nextElementSibling){
                // add the nextSibling to add in
                num.nextElementSibling.classList.add('in');
                // remove out
                num.classList.remove('out');
            } else {
                // remove "in" from last
                num.classList.remove('in');
                // hide counter
                counter.classList.add('hide');
                // show replay button
                finalMessage.classList.add('show');
            }
        });
    });
}
