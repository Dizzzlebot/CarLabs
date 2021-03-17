var fs = require("fs");
const csv = require("csv-parser");
const results = [];

fs.createReadStream("CarLabsChallenge.csv")
  .pipe(csv({}))
  .on("data", (data) => results.push(data))
  .on("end", () => getDriverCode(results));

function getBestLap(driverArray) {
  let bestLap;
  for (let i = 0; i < driverArray.length; i++) {
    let lapTimeSplit = driverArray[i]["Lap Time"].split(":");
    let lapTimeSeconds =
      parseInt(lapTimeSplit[0] * 60) + parseFloat(lapTimeSplit[1]);
    if (lapTimeSeconds < bestLap || bestLap == undefined)
      bestLap = driverArray[i];
  }
  //console.log(bestLap);
}

function getDriverCode(driverArray) {
  const driverCode = [];
  const driverGroupedInfo = [];
  driverArray.forEach((element) => {
    let code = element.Pilot.replace("–", "-").split(" - ")[0];
    if (!driverCode.includes(code)) driverCode.push(code);
  });

  //console.log(driverCode);

  driverCode.forEach((ele) => {
    let driverInfo = [];
    driverArray.forEach((driverEle) => {
      if (driverEle.Pilot.replace("–", "-").split(" - ")[0] == ele)
        driverInfo.push(driverEle);
    });
    driverGroupedInfo.push(driverInfo);
  });

  //   console.log(driverGroupedInfo);

  driverGroupedInfo.forEach((ele) => {
    // console.log(ele.length); //Finished all laps
    getBestLap(ele);
    let totalLapTime = 0;
    ele.forEach((driverEle) => {
      let lapTimeSplit = driverEle["Lap Time"].split(":");
      let lapTimeSeconds =
        parseInt(lapTimeSplit[0] * 60) + parseFloat(lapTimeSplit[1]);
      totalLapTime += lapTimeSeconds;
    });

    console.log(ele[0].Pilot, totalLapTime);
  });
}
