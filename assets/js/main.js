
/* javascript */

function mousemove(event){
    console.log("pageX: ",event.pageX,
    "pageY: ", event.pageY,
    "clientX: ", event.clientX,
    "clientY:", event.clientY)
}
window.addEventListener('click', mousemove);

const matches = document.querySelectorAll("*")

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
console.log(matches);
