    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        location.reload();
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index1 = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index1];
        let woord3 = restwoord[index2];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["she", "Ed", "Rosmerta", "Timo", "Leon", "Damon"];
    const werkwoord = ["walks", "learns", "drinks", "learns", "did", "is"];
    const restwoord = ["hard", "at school", "coffee", "much", "well", "smart"];
        
    let plaatjes = ["https://www.laughtard.com/wp-content/uploads/2019/02/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-37.jpg", "https://i.ytimg.com/vi/lDzgHlgoo5M/maxresdefault.jpg", "http://dreamicus.com/data/lake/lake-01.jpg", "https://wallsdesk.com/wp-content/uploads/2016/10/Cougar-Images.jpg"]
    let arrayLength = onderwerp.length;
