// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener( 'DOMContentLoaded', () =>{
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const right = document.getElementById('right');
    const left = document.getElementById('left');

    
    
    rocket.style.position = 'absolute';
    rocket.style.right = '210px';
    rocket.style.top = '250px';
    

                    
    takeOff.addEventListener('click', ()=>{
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            rocket.style.top = '150px'
            spaceShuttleHeight.innerHTML = 10000
            right.addEventListener('click', ()=>{
                if(parseInt(rocket.style.right)<=440 && parseInt(rocket.style.top) < 250){
                    rocket.style.right = parseInt(rocket.style.right)+10+'px';}
                })
                
            left.addEventListener('click', ()=>{
                if(parseInt(rocket.style.right)>=-10 && parseInt(rocket.style.top) < 250){
                    rocket.style.right = parseInt(rocket.style.right)-10+'px';}
                })
                    
            up.addEventListener('click', ()=>{
                if(parseInt(rocket.style.top)> 0){
                    rocket.style.top = parseInt(rocket.style.top)-10+'px';
                    spaceShuttleHeight.innerHTML = (250-parseInt(rocket.style.top))*100;}
                })          
                        
            down.addEventListener('click', ()=>{
                if(parseInt(rocket.style.top) < 250){
                    rocket.style.top = parseInt(rocket.style.top)+10+'px';
                    spaceShuttleHeight.innerHTML = (250-parseInt(rocket.style.top))*100;}
                    })

        }
    })
                    
    land.addEventListener('click', ()=>{
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        rocket.style.top = '250px'
        spaceShuttleHeight.innerHTML = 0                    
    })
                    
                    
    abortMission.addEventListener('click', ()=>{
        if(window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            rocket.style.top = '250px'
            spaceShuttleHeight.innerHTML = 0
            }
        })


            
            


    })
                