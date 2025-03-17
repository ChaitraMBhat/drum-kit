const drumlen=document.querySelectorAll('.drum').length;
console.log(drumlen);
for(let i=0;i<drumlen;i++){
  document.querySelectorAll(".drum")[i].addEventListener('click',function(e){
      sound(this.innerHTML);
      animateButtons(this.innerHTML);
  })  
}

function sound(key){
  switch(key){
    case "w":
      const tom1=new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
      case "a":
        const tom2=new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;
        case "s":
          const tom3=new Audio("sounds/tom-3.mp3")
          tom3.play();
          break;
          case "d":
            const tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
            case "j":
              const snare=new Audio("sounds/snare.mp3")
              snare.play();
              break;
              case "k":
                const crash=new Audio("sounds/crash.mp3")
                crash.play();
                break;
                case "l":
                  const kickbass=new Audio("sounds/kick-bass.mp3")
                  kickbass.play();
                  break;
                default: console.log(key);
  }  
}

function animateButtons(key){
  const activeButton=document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  },500);
}