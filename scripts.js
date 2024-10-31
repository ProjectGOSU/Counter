const LAB = document.getElementById("LAB");
const DEC = document.getElementById("DEC");
const RES = document.getElementById("RES");
const INC = document.getElementById("INC");
let dum = 0;

INC.onclick = function()
{
    dum++;
    LAB.textContent = dum;
}

RES.onclick = function()
{
    dum = 0;
    LAB.textContent = dum;
}

DEC.onclick = function()
{
    dum--;
    LAB.textContent = dum;
}
