/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");
let myStorydata = null;

fetch(myDataFileUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.DK);
    myStorydata = data;
    // setUpStory("DK");
  })
  .catch((error) => {
    console.error(error);
  });



/* Opgave 2 - skriv videre på koden her: */
//  const myDataFileUrl = "../../opgavefiler/data/story.json";
//  const myStoryElement = document.getElementById("theStory");

function setUpStory (myLanguage) {
let myStory = null;

switch (myLanguage) {
 case 'DK':
 myStory = myStorydata.DK;
break;

case 'FI':
myStory = myStorydata.FI;
break;

case 'SE':
myStory = myStorydata.SE;
break;

case 'NO':
myStory = myStorydata.NO;
break;

case 'UK':
myStory = myStorydata.UK;
break;

   default:
   myStory = myStorydata.DK;
    break;
}
createStory(myStory);
 }



    function createStory(myStory) {
    myStoryElement.innerHTML = ''
    createButtons();

    letmyHeadline = document.createElement('h2');
    myHeadline.innertext = myStory.headline;
    let myImage = document.createElement('img');
    myImage.src = '../../opgavefiler/img/cat.jpg';
    let myParagraf = document.createElement('p');
    myParagraf.innerText = myStory.text;

    myStoryElement.appendChild(myHeadline);
    myStoryElement.appendChild(myImage);
    myStoryElement.appendChild(myParagraf);
    }

    function createButtons () {
    let myDKbutton = document.createElement('button');
    myDKbutton.innerText = 'Dansk';
    myDKbutton.addEventListener('click', () => {
    setUpStory('DK');
    });

    function createButtons () {
    let myFIbutton = document.createElement('button');
    myFIbutton.innerText = 'Finsk';
    myFIbutton.addEventListener('click', () => {
    setUpStory('FI');
    });

    function createButtons () {
    let mySEbutton = document.createElement('button');
    mySEbutton.innerText = 'Svensk';
    mySEbutton.addEventListener('click', () => {
    setUpStory('SE');
    });

    function createButtons () {
    let myNObutton = document.createElement('button');
    myNObutton.innerText = 'Norsk';
    myNObutton.addEventListener('click', () => {
    setUpStory('NO');
    });

    function createButtons () {
    let myUKbutton = document.createElement('button');
    myUKbutton.innerText = 'Engelsk';
    myUKbutton.addEventListener('click', () => {
    setUpStory('UK');
    });

    myStoryElement.appendChild(myDKbutton);
    myStoryElement.appendChild(myFIbutton);
    myStoryElement.appendChild(mySEbutton);
    myStoryElement.appendChild(myNObutton);
    myStoryElement.appendChild(myUKbutton);
}




/* Opgave 3*/
// din kode her
// const userURI = "https://jsonplaceholder.typicode.com/users";
// const myUserlistElement = document.getElementById("userList");

/* Opgave 4*/
// din kode her
/*