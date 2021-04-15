let lessonsArray=["Lorem ipsum sed ut officia sit nostrud et quis aute adipisicing magna sed in laboris dolore qui adipisicing. Ad consectetur reprehenderit occaecat enim eiusmod qui sint laboris esse eiusmod ad duis. Labore do eu elit deserunt commodo in consectetur duis consequat aliqua irure dolor dolor dolore labore laborum in laboris. Et et ullamco consectetur dolor occaecat culpa velit elit labore ut voluptate esse labore.","Occaecat irure nisi id magna ad proident adipisicing veniam dolor consequat nulla quis in. Ut amet consectetur excepteur exercitation pariatur aliquip ut amet proident in et enim velit sit laborum. Ea pariatur quis proident aliqua amet aliquip tempor esse velit ea aliqua. Laborum incididunt laborum ut ea velit dolor cupidatat nulla laborum dolor ex voluptate officia sit reprehenderit adipisicing proident duis. Et nulla dolore aute consequat incididunt incididunt dolor ex ex pariatur officia non irure do duis. Ut magna ad cupidatat ut aute quis ut ut velit. Adipisicing sunt consequat sunt nisi mollit laborum non eiusmod adipisicing non magna enim dolore cupidatat ut velit aliquip dolor. Anim commodo deserunt anim elit amet consectetur do fugiat nisi ullamco nostrud voluptate. Elit cupidatat velit elit reprehenderit nostrud dolore pariatur ut dolore tempor ut dolor ullamco consectetur tempor. Amet nisi et reprehenderit dolore sit sint consectetur ex excepteur adipisicing nostrud incididunt consequat. Sit eiusmod dolore excepteur excepteur sint et consequat elit cillum ullamco consequat est dolor consequat. Lorem ipsum quis sit qui magna magna esse nulla qui fugiat nostrud in consectetur mollit minim incididunt eiusmod.","Lorem ipsum nulla et cillum consectetur dolore est ut veniam ex deserunt minim sit. Lorem ipsum excepteur aliqua anim aliqua mollit nisi qui nostrud nisi officia in dolore dolore proident aliquip consectetur ut.","Ullamco aliquip officia ad irure sed voluptate amet amet anim culpa velit laborum dolore ea culpa dolor voluptate elit. Proident eu proident sit occaecat fugiat et exercitation sed veniam incididunt mollit. Lorem ipsum do nostrud voluptate in incididunt ut ex minim elit ut esse.","Dolor et officia qui dolor eu exercitation laboris est. Labore nulla aliqua reprehenderit voluptate proident id consequat enim amet sunt excepteur ut proident nisi sunt.","Laboris mollit incididunt veniam in dolore ad amet est. Sunt in velit minim pariatur ullamco ut elit dolore do elit nulla qui enim.","Mollit voluptate ut labore velit laborum enim exercitation do qui officia dolore sint. Incididunt veniam nulla officia laboris do ullamco dolor ut eu dolor ut dolor nostrud aliquip. Ea irure pariatur labore veniam laborum in sed et magna nulla cillum eiusmod elit est culpa culpa.","Lorem ipsum nulla ullamco fugiat ex occaecat exercitation sint sunt consectetur ea laborum laborum sit duis. Sit mollit commodo non amet laboris laborum non sit. Dolor velit esse voluptate incididunt aliquip qui aliquip sint reprehenderit qui ut velit.","Elit do exercitation eiusmod laboris veniam minim proident proident consequat aute laborum exercitation velit id quis. Velit aliquip dolor deserunt dolore enim aliqua occaecat culpa cillum nostrud dolore ut tempor sit adipisicing. Sit et irure exercitation laborum dolor ut dolor officia.","In velit officia aute cupidatat aliqua id dolore do consectetur pariatur. Elit enim officia adipisicing et sed et cupidatat irure est dolor tempor. Lorem ipsum cupidatat aliqua deserunt esse et sunt irure in esse in laboris ea ut mollit.",];
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
	minutes=Match.floor((count/100)/60);
	seconds=Match.floor((count/100)-(minutes*60));
	milliSeconds=Match.floor(count-(seconds*100)-(minutes*6000));

	minutesTag.innerText=leadingTime(minutes);
	secondsTag.innerText=leadingTime(seconds);
	milliSecondsTag.innerText=leadingTime(milliSeconds);
}

let leadingTime=(time)=>
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

let textAreaBoxTag.addEventListener('keyup',function()
{
  let textEnterdLength=textAreaBoxTag.value.length;
  if(textEnterdLength===1&& !timerRunning)
  {
  	interval=setInterval(startTimer,10)
  	timerRunning=true;
  }
  let originalText=originalTextTag.innerText;
  let textEnterd=textAreaBoxTag.innerText;
  let partialText=originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

let evaluateText=(originalText,textEntered,partialText)=>
{
	if(textEntered==='')
	{
		applyColors('gray');
	}
	else if(originalText===textEntered)
	{
		applyColors('green');
		congratsSection.style.display='black';
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

let applyColors=(color)=>
{
	textAreaBoxTag.style.borderColor=color;
	textAreaBoxTag.style.boxShadow=`0 0 10px ${color}`;
}

let changeText=(index)=>
{
	let lessonsText=lessonsArray[index];
	originalText.innerText=lessonsText;
}
