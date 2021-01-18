window.saveDataAcrossSessions = true;
let app1 = document.querySelector("#app1");
webgazer
  .setGazeListener((data) => {
    if (data != null) {
      app1.style.top = data["y"] + "px";
      app1.style.left = data["x"] + "px";
      //console.log(data["x"], data["y"]);
    }
  })
  .begin();

webgazer.showVideoPreview(false).showPredictionPoints(false);
