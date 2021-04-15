let lessonsArray = ["JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.","Javascript is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning Javascript:","Javascript is the most popular programming language in the world and that makes it a programmers great choice. Once you learnt Javascript, it helps you developing great front-end as well as back-end softwares using different Javascript based frameworks like jQuery, Node.JS etc.","Javascript is everywhere, it comes installed on every modern web browser and so to learn Javascript you really do not need any special environment setup. For example Chrome, Mozilla Firefox , Safari and every browser you know as of today, supports Javascript.","Javascript helps you create really beautiful and crazy fast websites. You can develop your website with a console like look and feel and give your users the best Graphical User Experience.","JavaScript usage has now extended to mobile app development, desktop app development, and game development. This opens many opportunities for you as Javascript Programmer.","Due to high demand, there is tons of job growth and high pay for those who know JavaScript. You can navigate over to different job sites to see what having JavaScript skills looks like in the job market.","Great thing about Javascript is that you will find tons of frameworks and Libraries already developed which can be used directly in your software development to reduce your time to market.","There could be 1000s of good reasons to learn Javascript Programming. But one thing for sure, to learn any programming language, not only Javascript, you just need to code, and code and finally code until you become expert.","As mentioned before, Javascript is one of the most widely used programming languages (Front-end as well as Back-end). It has it's presence in almost every area of software development. I'm going to list few of them here:"];
let originalTextTag=document.querySelector('#original-text');
let textAreaBoxTag=document.querySelector('#text-area');
let secondsTag=document.querySelector('#seconds');
let minutesTag=document.querySelector('#minutes');
let milliSecondsTag=document.querySelector('#m-seconds');
let minutes=0;
let seconds=0;
let milliSeconds=0;
let count=0;
let timerRunning=false;
let congratsSection=document.querySelector('.cong-section');
let interval=null;


let startTimer=()=>
{

    count++;
    minutes=Math.floor((count/100)/60);
    seconds=Math.floor((count/100)-(minutes*60));
    milliSeconds=Math.floor(count-(seconds*100)-(minutes*6000));

    minutesTag.innerText=leadingZero(minutes);
    secondsTag.innerText=leadingZero(seconds);
    milliSecondsTag.innerText=leadingZero(milliSeconds);
}


let leadingZero=(time)=>
{
    if(time<10)
    {
        return '0'+time;
    }
    else
    {
        return time;
    }
}

textAreaBoxTag.addEventListener('keyup',function()
{
    let textEnteredLength=textAreaBoxTag.value.length;
    if(textEnteredLength=== 1 && !timerRunning)
    {
        interval=setInterval(startTimer,10);
        timerRunning=true;

    }
    let originalText=originalTextTag.innerText;
    let textEntered=textAreaBoxTag.value;
    let partialText=originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});


let evaluateText=(originalText,textEntered,partialText)=>
{
    if(textEntered==='')
    {
        applyColors('grey');
    }
    else
    {
        if(originalText===textEntered)
    {
        applyColors('green');
        congratsSection.style.display='block';
        clearInterval(interval);
    }
    else
    {
        if(textEntered===partialText)
        {
            applyColors('blue');
        }
        else
        {
  
            applyColors('red');
        }
    }
    }
}


let applyColors=(color)=>
{
    textAreaBoxTag.style.borderColor=color;
    textAreaBoxTag.style.boxShadow=`0 0 10px ${color}`;
}


let changeText=(index)=>
{
    let lessonText=lessonsArray[index];
    originalTextTag.innerText=lessonText;
}