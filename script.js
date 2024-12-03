const inputNum = document.querySelector("#input-num")
const circleContainer = document.querySelector ("#circle-container");

const makeCircles = () => {
    //1-1000 circles allowed
   if (inputNum.value < 1 || inputNum.value > 1000){
  window.alert("Please write a number between 0 and 1001.");
}    
    else{
        //make circles
        for (let i = 0; i < inputNum.value; i++) {
            const circle = document.createElement("div")
            circle.classList.add("circle")
        }
        

   }
};