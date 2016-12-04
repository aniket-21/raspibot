"use strict"

module.exports = class Navigator {

  constructor() {

    console.info("Navigator constructor triggered");

    this.wpi = require('wiring-pi');
    this.wpi.setup('wpi');

    this.pin1 = 7;
    this.pin2 = 0;
    this.pin3 = 2;
    this.pin4 = 3;

    this.delay = 300;

    this.wpi.pinMode(this.pin1, this.wpi.OUTPUT);
    this.wpi.pinMode(this.pin2, this.wpi.OUTPUT);
    this.wpi.pinMode(this.pin3, this.wpi.OUTPUT);
    this.wpi.pinMode(this.pin4, this.wpi.OUTPUT);

    this.time = new Date().getTime();
    console.info('start time:  ' + this.time);
  }

  sendMoveCommand(p1, p2, p3, p4) {

    console.info("sending move command to bot")

    this.wpi.digitalWrite(this.pin1, p1);
    this.wpi.digitalWrite(this.pin2, p2);
    this.wpi.digitalWrite(this.pin3, p3);
    this.wpi.digitalWrite(this.pin4, p4);

    this.wpi.delay(this.delay);

    this.wpi.digitalWrite(this.pin1, 0);
    this.wpi.digitalWrite(this.pin2, 0);
    this.wpi.digitalWrite(this.pin3, 0);
    this.wpi.digitalWrite(this.pin4, 0);
  }

  move(direction) {

    let curTime = new Date().getTime();
    console.log('current time:  ' + curTime);
    if(curTime - this.time < (this.delay)) {
      console.info('Current time less than required delay');
      return;
    }

    this.time = curTime;
    console.info('time set to current time');

    if(direction === "forward")
      this.sendMoveCommand(0, 1, 0, 1); 
    else if(direction === "backward")
      this.sendMoveCommand(1, 0, 1, 0); 
    else if (direction === "left")
      this.sendMoveCommand(0, 1, 1, 1);
    else if (direction === "right")
      this.sendMoveCommand(1, 1, 0, 1);
    else 
      console.error("invalid direction received: " + direction);
  }
}