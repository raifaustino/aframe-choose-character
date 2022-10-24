var skyDefaultColor = "#333333";

AFRAME.registerComponent("handle-totoro", {
  init: function () {
    let el = this.el;
    let sky = document.querySelector("a-sky");
    let audioTotoro = new Audio("assets/ost_totoro.mp3");
    audioTotoro.loop = true;

    el.addEventListener("mouseenter", function () {
      sky.setAttribute("color", "#7BC8A4");
      audioTotoro.play();
      const fadeInTotoro = setInterval(() => {
        if (audioTotoro.volume < 1) audioTotoro.volume += 0.1;
        console.log(audioTotoro.volume);
        if (audioTotoro.volume > 0.9) {
          clearInterval(fadeInTotoro);
        }
      }, 400);
      //   el.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
    });
    el.addEventListener("mouseleave", function () {
      sky.setAttribute("color", skyDefaultColor);
      const fadeOutTotoro = setInterval(() => {
        audioTotoro.volume -= 0.1;
        console.log(audioTotoro.volume);
        if (audioTotoro.volume < 0.2) {
          audioTotoro.pause();
          clearInterval(fadeOutTotoro);
        }
      }, 400);

      //   el.setAttribute("scale", { x: 0.25, y: 0.25, z: 0.25 });
    });
    el.addEventListener("click", function () {
      console.log("totoro");
    });
  },
});

AFRAME.registerComponent("handle-diglett", {
  init: function () {
    let el = this.el;
    let audioDiglett = new Audio("assets/ost_diglett.mp3");
    audioDiglett.loop = true;

    el.addEventListener("mouseenter", function () {
      sky.setAttribute("color", "teal");
      const fadeInDiglett = setInterval(() => {
        audioDiglett.play();

        audioDiglett.volume += 0.1;

        if (audioDiglett.volume > 0.9) {
          clearInterval(fadeInDiglett);
        }
      }, 400);

      //   el.setAttribute("scale", { x: 2, y: 2, z: 2 });
    });
    el.addEventListener("mouseleave", function () {
      sky.setAttribute("color", skyDefaultColor);
      const fadeOutDiglett = setInterval(() => {
        audioDiglett.volume -= 0.1;

        if (audioDiglett.volume < 0.003) {
          audioDiglett.pause();
          clearInterval(fadeOutDiglett);
        }
      }, 400);
      //   el.setAttribute("scale", { x: 1, y: 1, z: 1 });
    });
    el.addEventListener("click", function () {
      console.log("diglett");
    });
  },
});

AFRAME.registerComponent("handle-basketball", {
  init: function () {
    let el = this.el;
    let audioBasketball = new Audio("assets/ost_basketball.mp3");
    audioBasketball.loop = true;

    el.addEventListener("mouseenter", function () {
      sky.setAttribute("color", "purple");
      audioBasketball.play();

      const fadeInBasketball = setInterval(() => {
        audioBasketball.play();

        audioBasketball.volume += 0.1;

        if (audioBasketball.volume > 0.9) {
          clearInterval(fadeInBasketball);
        }
      }, 400);

      //   el.setAttribute("scale", { x: 3, y: 3, z: 3 });
    });
    el.addEventListener("mouseleave", function () {
      sky.setAttribute("color", skyDefaultColor);
      const fadeOutBasketball = setInterval(() => {
        audioBasketball.volume -= 0.1;

        if (audioBasketball.volume < 0.003) {
          audioBasketball.pause();
          clearInterval(fadeOutBasketball);
        }
      }, 400);
      //   el.setAttribute("scale", { x: 2, y: 2, z: 2 });
    });
    el.addEventListener("click", function () {
      console.log("basket");
    });
  },
});

AFRAME.registerComponent("handle-spongebob", {
  init: function () {
    let el = this.el;
    let audioSpongebob = new Audio("assets/ost_spongebob.mp3");
    audioSpongebob.loop = true;

    el.addEventListener("mouseenter", function () {
      sky.setAttribute("color", "#FFC65D");
      audioSpongebob.play();

      const fadeInSpongebob = setInterval(() => {
        audioSpongebob.play();

        audioSpongebob.volume += 0.1;

        if (audioSpongebob.volume > 0.9) {
          clearInterval(fadeInSpongebob);
        }
      }, 400);

      //   el.setAttribute("scale", { x: 0.25, y: 0.25, z: 0.25 });
    });
    el.addEventListener("mouseleave", function () {
      sky.setAttribute("color", skyDefaultColor);
      const fadeOutSpongebob = setInterval(() => {
        audioSpongebob.volume -= 0.1;

        if (audioSpongebob.volume < 0.003) {
          audioSpongebob.pause();
          clearInterval(fadeOutSpongebob);
        }
      }, 400);
      //   el.setAttribute("scale", { x: 0.15, y: 0.15, z: 0.15 });
    });
    el.addEventListener("click", function () {
      console.log("spongebob");
    });
  },
});
