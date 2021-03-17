# CarLabs

Scenario

1. All Pilots and laps are given, code needs to calculate the time it takes each driver to complete all laps.
2. Who had the best time in each lap, and best average time to complete race.

Problem

1. one out of the six drivers only completed 3 laps.
2. Convert pdf to CSV

Solution

1. NPM install CSV-Parser
2. Require CSV and FS
3. Use PathLike FS to pull the CSV file into ENV.
4. Create an app.js file in the main folder
5. Create a function to get the best lap of drivers and pass the argument driverArray, then create a for lop that goes through all drivers and increments by length of drivers by looping through the arrays saved and add up their times and will determine who finshes the race first.
6. Loop through the original array with all the values and compare lap times to find the best lap
7. Convert all times to milliseconds using .split with parseInt and parseFloat since the numbers contain decimals.

Run the Code

1. To get the best lap (Line 19) - console.log(bestLap);
2. To get the code of each pilot (Line 30) - console.log(driverCode);
3. To get each driver info grouped based on the laps completed from lowest to highest number (Line 41) - console.log(driverGroupedInfo);
4. To see all the laps completed (Line 44) - console.log(ele.length);
5. To get the best lap time with driver info (Line 54) - console.log(ele[0].Pilot, totalLapTime);
