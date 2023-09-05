// Code your solution in this file!
function distanceFromHqInBlocks(value) {
var blocks;                                    
    if (value > 42) {
        blocks = value - 42;
    }else if (value < 42){
        blocks = 42 - value;
    }else {
        blocks = 0;
    }
    return blocks;
}


function distanceFromHqInFeet(value) {
    var blocks = distanceFromHqInBlocks(value);
    var feet = blocks * 264;
    return feet;
   
}


//mmm var feet = distanceFromHqInFeet(blocks);

function distanceTravelledInFeet(num1, num2){
    var dist;
    if (num1 > num2) {
        dist = num1 - num2;
    }else if (num2 > num1) {
        dist = num2 - num1;
    }
    dist = dist*264;
    return dist;
}

function calculatesFarePrice(start, destination) {
    const conversionFactor = 264;
    const distance = distanceTravelledInFeet(start, destination);
    //var distance = (destination - start) * conversionFactor;
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return fare;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
  }
