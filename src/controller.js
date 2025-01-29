(function exportController() {
    // Your code here

    class Controller {
        constructor() {
            this.initialiseSea();
        }
        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 1000);
        }

        renderPorts(ports){
           let portsElement= document.querySelector("#ports") //div that has id=ports
           portsElement.style.width='0px';

           ports.forEach((port,index) => {
            //create a div for each port
            let newPortElement= document.createElement('div');

            newPortElement.dataset.portName=port.name;
            newPortElement.dataset.portIndex=index;


            //assign class=port to created port div
            newPortElement.className='port';
            //make port div child of parent ports div
            portsElement.appendChild(newPortElement);


            let portsElementWidth=parseInt(portsElement.style.width,10)
            portsElement.style.width= `${portsElementWidth + 256}px`;
           });
        }

        renderShip(ship){

            const shipPortIndex=ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement=document.querySelector(`[data-port-index='${shipPortIndex}']`)

            const shipElement= document.querySelector('#ship')

            shipElement.style.top=`${portElement.offsetTop+32}px`;
            shipElement.style.left=`${portElement.offsetLeft-32}px`;
        }


    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
      } else {
        window.Controller = Controller;
      }
    
  })();


   

