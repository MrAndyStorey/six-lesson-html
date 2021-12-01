

function changeColour(){
    switch(parseInt(document.getElementById("nextPhase").value)) {
        case 0:
            console.log("Traffic: Red.");
            document.getElementById("lampRed").style.backgroundColor = "red";
            document.getElementById("lampAmber").style.backgroundColor = "black";
            document.getElementById("lampGreen").style.backgroundColor = "black";

            /* Change the Pedestrian Crossing to Green. */
            console.log("Pedestrian: Green.");
            document.getElementById("pedLampRed").style.backgroundColor = "black";
            document.getElementById("pedLampGreen").style.backgroundColor = "green";

            /* Increment our counter. */
            document.getElementById("nextPhase").value = 1;

            /* Call our function again after 6 seconds. */
            setTimeout(function() { changeColour(); }, 6000);
            break;

        case 1:
            /* Change the Pedestrian Crossing to Red. We've had to add this extra phase to our logic so that both lights are RED to prevent an accident. */
            console.log("Pedestrian: Red.");
            document.getElementById("pedLampRed").style.backgroundColor = "red";
            document.getElementById("pedLampGreen").style.backgroundColor = "black";

            /* Increment our counter. */
            document.getElementById("nextPhase").value = 2;

            /* Call our function again after 3 seconds. */
            setTimeout(function() { changeColour(); }, 3000);
            break;
    
        case 2:
            console.log("Traffic: Red, Amber.");
            document.getElementById("lampRed").style.backgroundColor = "red";
            document.getElementById("lampAmber").style.backgroundColor = "orange";
            document.getElementById("lampGreen").style.backgroundColor = "black";
            
            /* Increment our counter. */
            document.getElementById("nextPhase").value = 3;

            /* Call our function again after 3 seconds. */
            setTimeout(function() { changeColour(); }, 3000);
            break;

        case 3:
            console.log("Traffic: Green.");
            document.getElementById("lampRed").style.backgroundColor = "black";
            document.getElementById("lampAmber").style.backgroundColor = "black";
            document.getElementById("lampGreen").style.backgroundColor = "green";

            console.log("Pedestrian: Red.");
            document.getElementById("pedLampRed").style.backgroundColor = "red";
            document.getElementById("pedLampGreen").style.backgroundColor = "black";

            /* Change the status of the Pedestrian Crossing button to allow them to press it. */
            document.getElementById("toggle").disabled = false;

            /* Increment our counter. */
            document.getElementById("nextPhase").value = 4;
            break;
        
        case 4:
            console.log("Traffic: Amber.");
            document.getElementById("lampRed").style.backgroundColor = "black";
            document.getElementById("lampAmber").style.backgroundColor = "orange";
            document.getElementById("lampGreen").style.backgroundColor = "black";
            
            /* Change the status of the Pedestrian Crossing button to prevent them from pressing it during our automatic cycle. */
            document.getElementById("toggle").disabled = true;

            /* Increment our counter. */
            document.getElementById("nextPhase").value = 0;

            /* Here we use setTimeout for the first time in the lights cycle to run to the next sequence after 3 seconds. */
            setTimeout(function() { changeColour(); }, 3000);
            break;
        }
}
// Make the lights change every 2 seconds without having to click a button.
//trafficTimer=setInterval(function(){changeColour()},2000);

function changingLights(){
    if (document.getElementById("lamp1").style.backgroundColor == "orange") {
        //Turn the lamps off
        document.getElementById("lamp1").style.backgroundColor = "#111111";
        document.getElementById("lamp2").style.backgroundColor = "#111111";
    } else {
        //Turn the lamps on
        document.getElementById("lamp1").style.backgroundColor = "orange";
        document.getElementById("lamp2").style.backgroundColor = "orange";
    }
}
// Set the function to execute every 1 second (1000 milli seconds)
zebraTimer=setInterval(function(){changingLights()},1000);
