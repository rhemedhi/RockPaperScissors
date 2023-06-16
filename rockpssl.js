"use strict";

const game = () => {
  // displaying the rules image and modal
  const showImage = document.getElementById("div-rules-button");
  const modal = document.getElementById("div-rules-display");
  const modalDisplay = document.getElementById("moDal");
  showImage.addEventListener("click", () => {
    modal.style.display = "block";
    modalDisplay.style.display = "block";
  });

  // onloading the rules image and modal
  const btn = document.getElementById("div-rules-display");
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    modalDisplay.style.display = "none";
  });

  // When any part of the modal is clicked the page should go back to default
  this["onclick"] = function (event) {
    if (event.target === modalDisplay) {
      modalDisplay.style.display = "none";
      modal.style.display = "none";
    }
  };

  const sec2 = document.getElementById("section2");
  const appear = document.getElementById("ipickAndTheSystemPickSection");
  const scissorclick = document.getElementById("scissorappear");
  const paperclick = document.getElementById("paperappear");
  const rockclick = document.getElementById("rockappear");
  const spockclick = document.getElementById("spockappear");
  const lizclick = document.getElementById("lizardappear");
  const ipickSec = document.getElementById("divForyoupickedText");
  const syspickSec = document.getElementById("divFortheHousePickedText");
  let computerPick;

  //user choices
  const scissorclicke = document.getElementById("scissorButton");
  const ipicksyspick = () => {
    ipickSec.style.display = "block";
    ipickSec.style.position = "absolute";
    ipickSec.style.left = "200px";
    ipickSec.style.animationName = "ipick";
    ipickSec.style.animationDelay = "0s";
    ipickSec.style.animationDuration = "4s";

    syspickSec.style.display = "block";
    syspickSec.style.position = "absolute";
    syspickSec.style.left = "860px";
    syspickSec.style.animationName = "syspick";
    syspickSec.style.animationDelay = "0s";
    syspickSec.style.animationDuration = "4s";
  };

  scissorclicke.addEventListener("click", function () {
    sec2.style.display = "none";
    appear.style.display = "block";
    scissorclick.style.display = "block";

    scissorclick.style.position = "absolute";
    scissorclick.style.left = "-150px";
    scissorclick.style.animationName = "scissor";
    scissorclick.style.animationDuration = "4s";
    scissorclick.style.animationDelay = "0s";
    // console.log('scissor clicked');

    getComputerChoice();

    compare(scissorclick, computerPick);

    updateScore();

    ipicksyspick();
  });

  const paperclicke = document.getElementById("paperButton");
  paperclicke.addEventListener("click", function () {
    sec2.style.display = "none";
    appear.style.display = "block";
    paperclick.style.display = "block";

    paperclick.style.position = "absolute";
    paperclick.style.left = "-150px";
    paperclick.style.animationName = "scissor";
    paperclick.style.animationDuration = "4s";
    paperclick.style.animationDelay = "0s";
    // console.log('paper clicked');

    getComputerChoice();

    compare(paperclick, computerPick);

    updateScore();

    ipicksyspick();
  });

  const rockclicke = document.getElementById("rockButton");
  rockclicke.addEventListener("click", function () {
    sec2.style.display = "none";
    appear.style.display = "block";
    rockclick.style.display = "block";

    rockclick.style.position = "absolute";
    rockclick.style.left = "-150px";
    rockclick.style.animationName = "scissor";
    rockclick.style.animationDuration = "4s";
    rockclick.style.animationDelay = "0s";
    // console.log('rock clicked');

    getComputerChoice();

    compare(rockclick, computerPick);

    updateScore();

    ipicksyspick();
  });

  const lizardclicke = document.getElementById("lizardButton");
  lizardclicke.addEventListener("click", function () {
    sec2.style.display = "none";
    appear.style.display = "block";
    lizclick.style.display = "block";

    lizclick.style.position = "absolute";
    lizclick.style.left = "-150px";
    lizclick.style.animationName = "scissor";
    lizclick.style.animationDuration = "4s";
    lizclick.style.animationDelay = "0s";
    // console.log('lizard clicked');

    getComputerChoice();

    compare(lizclick, computerPick);

    updateScore();

    ipicksyspick();
  });

  const spockclicke = document.getElementById("spockButton");
  spockclicke.addEventListener("click", function () {
    sec2.style.display = "none";
    appear.style.display = "block";
    spockclick.style.display = "block";

    spockclick.style.position = "absolute";
    spockclick.style.left = "-150px";
    spockclick.style.animationName = "scissor";
    spockclick.style.animationDuration = "4s";
    spockclick.style.animationDelay = "0s";
    // console.log('spock clicked');

    getComputerChoice();

    compare(spockclick, computerPick);

    updateScore();

    ipicksyspick();
  });
  //end of user choices

  //system choices
  const getComputerChoice = () => {
    let systemChoice = Math.floor(Math.random() * 10);

    if (systemChoice <= 2) {
      systemChoice = rockclick;
      computerPick = rockclick;
      rockclick.style.display = "block";
      rockclick.style.position = "absolute";
      rockclick.style.left = "520px";
      rockclick.style.top = "0px";

      rockclick.style.animationName = "sysscissorchoice";
      rockclick.style.animationDelay = "0s";
      rockclick.style.animationDuration = "4s";
      // console.log('system selected rock');
    } else if (systemChoice <= 4) {
      systemChoice = paperclick;
      computerPick = paperclick;
      paperclick.style.display = "block";
      paperclick.style.position = "absolute";
      paperclick.style.left = "520px";
      paperclick.style.top = "0px";

      paperclick.style.animationName = "sysscissorchoice";
      paperclick.style.animationDelay = "0s";
      paperclick.style.animationDuration = "4s";
      // console.log('system selected paper');
    } else if (systemChoice <= 6) {
      systemChoice = scissorclick;
      computerPick = scissorclick;
      scissorclick.style.display = "block";
      scissorclick.style.position = "absolute";
      scissorclick.style.left = "520px";
      scissorclick.style.top = "0px";

      scissorclick.style.animationName = "sysscissorchoice";
      scissorclick.style.animationDelay = "0s";
      scissorclick.style.animationDuration = "4s";
      // console.log('system selected scissor');
    } else if (systemChoice <= 8) {
      systemChoice = lizclick;
      computerPick = lizclick;
      lizclick.style.display = "block";
      lizclick.style.position = "absolute";
      lizclick.style.left = "520px";
      lizclick.style.top = "0px";

      lizclick.style.animationName = "sysscissorchoice";
      lizclick.style.animationDelay = "0s";
      lizclick.style.animationDuration = "4s";
      // console.log('system selected lizard');
    } else {
      systemChoice = spockclick;
      computerPick = spockclick;
      spockclick.style.display = "block";
      spockclick.style.position = "absolute";
      spockclick.style.left = "520px";
      spockclick.style.top = "0px";

      spockclick.style.animationName = "sysscissorchoice";
      spockclick.style.animationDelay = "0s";
      spockclick.style.animationDuration = "4s";
      // console.log('system selected spock');
    }
  };
  //end of system choices

  //score updates
  let score = 5;
  const myScore = document.querySelector("#scorepoint");
  const updateScore = () => {
    setTimeout(() => {
      myScore.textContent = score;

      const restartGame = document.getElementById(
        "greaterDivForRestartButtonandText"
      );
      const congrat = document.getElementById(
        "greaterDivForCongratulationsButtonandText"
      );

      const scorehandler = () => {
        sec2.style.display = "none";
        youLose.style.display = "none";
        youWin.style.display = "none";
        ovals.style.display = "none";
        scissorclick.style.display = "none";
        paperclick.style.display = "none";
        rockclick.style.display = "none";
        spockclick.style.display = "none";
        lizclick.style.display = "none";
        appear.style.display = "none";
      };

      if (score === 0) {
        restartGame.style.display = "block";
        scorehandler();
      } else if (score === 10) {
        congrat.style.display = "block";
        scorehandler();
      }
    }, 4000);
  };
  //end of score updates

  //compare choices of user and computer
  const youLose = document.querySelector("#divForLoser");
  const youWin = document.querySelector("#divForWinner");
  const ovals = document.querySelector("#divForOvals");
  const draww = document.querySelector("#greaterDivForDrawButtonandText");

  const compare = (userPick, computerPick) => {
    const youwindisplay = () => {
      youWin.style.display = "block";
      ovals.style.display = "block";
      ovals.style.position = "absolute";
      ovals.style.left = "0";
      score++;
    };

    //draw
    if (userPick === computerPick) {
      draww.style.display = "block";
      draww.style.animationName = "drawGamePlay";
      draww.style.animationDelay = "0s";
      draww.style.animationDuration = "4s";
      computerPick.style.display = "none";
    }

    //scissor
    else if (userPick === scissorclick && computerPick === paperclick) {
      youwindisplay();
      updateScore();
    } else if (userPick === scissorclick && computerPick === lizclick) {
      youwindisplay();
      updateScore();
    }

    //paper
    else if (userPick === paperclick && computerPick === rockclick) {
      youwindisplay();
      updateScore();
    } else if (userPick === paperclick && computerPick === spockclick) {
      youwindisplay();
      updateScore();
    }

    //rockclick
    else if (userPick === rockclick && computerPick === lizclick) {
      youwindisplay();
      updateScore();
    } else if (userPick === rockclick && computerPick === scissorclick) {
      youwindisplay();
      updateScore();
    }

    //lizclick
    else if (userPick === lizclick && computerPick === spockclick) {
      youwindisplay();
      updateScore();
    } else if (userPick === lizclick && computerPick === paperclick) {
      youwindisplay();
      updateScore();
    }

    //spockclick
    else if (userPick === spockclick && computerPick === scissorclick) {
      youwindisplay();
      updateScore();
    } else if (userPick === spockclick && computerPick === rockclick) {
      youwindisplay();
      updateScore();
    }

    //default
    else {
      youLose.style.display = "block";
      ovals.style.display = "block";
      ovals.style.position = "absolute";
      ovals.style.left = "660px";
      // console.log('Computer Won');
      // let body = document.getElementsByTagName("body")[0];
      // if ((body.style.width = "375px" && youLose.style.display)) {
      //   appear.style.width = "250px";
      //   ovals.style.left = "200px";
      // }
      updateScore();
      score--;
    }

    // const boDy = document.querySelector('#body');
    // body responsiveness
    // if (body === '375px') {
    //     ovals.style.left = '200px';
    // }
  };
  //end of comparism

  //go back to the play buttons after the playAgain button is clicked
  const playAgainBtns = document.querySelectorAll(".playAgainBtn");

  playAgainBtns.forEach((playAgainBtn) => {
    playAgainBtn.addEventListener("click", () => {
      sec2.style.display = "block";
      youLose.style.display = "none";
      youWin.style.display = "none";
      ovals.style.display = "none";
      scissorclick.style.display = "none";
      paperclick.style.display = "none";
      rockclick.style.display = "none";
      spockclick.style.display = "none";
      lizclick.style.display = "none";
      appear.style.display = "none";
      draww.style.display = "none";
    });
  });

  // alert user to play on laptop
  window.onload = function tellUserToPlayOnLaptop () {
    const widthOfPage = window.innerWidth;
    if (widthOfPage <= 426) {
      alert('I am fixing the mobile version, Kindly play on your laptop for now.');
    }
  }
};
game();
