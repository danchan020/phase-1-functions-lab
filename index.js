function distanceFromHqInBlocks(block){
    if (block < 42){
            return (42 - block);
        }
    else {
        return (block -42);
    }
    }
    function distanceFromHqInFeet (someValue) {
        return distanceFromHqInBlocks(someValue)*264;
    }

    function distanceTravelledInFeet(a,b){
        if (b>a){
          return((b-a)*264);
        }
        else
          return((a-b)*264);
    }

    function calculatesFarePrice (a,b){
        let distance = distanceTravelledInFeet(a,b);
        if (distance <= 400){return 0;}
        if (distance > 400 && distance < 2000){return (distance - 400) * 0.02;}
        else if (distance >= 2000 && distance <= 2500){return 25;}
        else if (distance > 2500){return "cannot travel that far";}
    }