const initials = document.getElementById("initials");
const saveScorebtn = document.getElementById("saveScorebtn");
const viewScores = document.getElementById("viewScores");
const mostRecentScore = localStorage.getItem("mostResentScore")
viewScores.innerText = mostRecentScore;

initials.addEventListener("keyup", () => {
    console.log(initials.value);

    saveScorebtn.disabled = !initials.value;
});
 

saveHighScore = (e) => {
    e.preventDefault();
    console.log("clicked the save button");
    
};