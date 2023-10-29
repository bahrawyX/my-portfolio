import React, { Component, useEffect } from 'react';

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  return rad * 180 / Math.PI;
}

class Eyes extends Component {
  componentDidMount() {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const anchor = document.getElementById("anchor");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      console.log(angleDeg);
        const eyes = document.querySelectorAll(".eye");
        eyes.forEach((eye) => {
          eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        });
    });
  }
  

  render() {
    return (
      <div className=' whole w-100'>
        <div className="main">
          <img id="anchor" src="../images/look_Morty.png" alt="" />
          <div id="eyes">
            <img className="eye" style={{ top: "-71px", left: "55px" }} src="../images/blackdot.png" alt="" />
            <img className="eye" style={{ top: "-91px", left: "84px" }} src="../images/blackdot.png" alt="" />
            <img className="eye" style={{ top: "-165px", left: "145px" }} src="../images/blackdot.png" alt="" />
            <img className="eye" style={{ top: "-178px", left: "120px" }} src="../images/blackdot.png" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Eyes;
