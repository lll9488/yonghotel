
let clickCount = 0;
function logoClick(){
    clickCount++;
    if(clickCount >= 3){ 
        alert('暗号触发！进入夜晚谜夜模式');
        window.location.href = 'secret.html';
    }
    setTimeout(()=>{clickCount=0},1500);
}
