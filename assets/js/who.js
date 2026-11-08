(function () {
  var root = document.querySelector("[data-who]");
  if (!root) return;

  var rooms = Array.prototype.slice.call(root.querySelectorAll("[data-room]"));

  function openRoom(name) {
    rooms.forEach(function (room) {
      var on = room.getAttribute("data-room") === name;
      room.classList.toggle("is-open", on);
      room.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  rooms.forEach(function (room, index) {
    room.addEventListener("click", function () {
      openRoom(room.getAttribute("data-room"));
    });
    room.addEventListener("keydown", function (event) {
      var next;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRoom(room.getAttribute("data-room"));
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        next = rooms[(index + 1) % rooms.length];
        next.focus();
        openRoom(next.getAttribute("data-room"));
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        next = rooms[(index - 1 + rooms.length) % rooms.length];
        next.focus();
        openRoom(next.getAttribute("data-room"));
      }
    });
  });

  var photo = root.querySelector("[data-route-photo]");

  function openStop(name) {
    var panels = root.querySelectorAll("[data-stop]");
    Array.prototype.forEach.call(panels, function (panel) {
      panel.classList.toggle("is-active", panel.getAttribute("data-stop") === name);
    });
    var buttons = root.querySelectorAll("[data-stop-btn]");
    Array.prototype.forEach.call(buttons, function (btn) {
      var on = btn.getAttribute("data-stop-btn") === name;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    var active = root.querySelector('[data-stop="' + name + '"]');
    if (!photo || !active) return;
    var nextSrc = active.getAttribute("data-img");
    var nextAlt = active.getAttribute("data-alt") || "";
    if (photo.getAttribute("src") === nextSrc) {
      photo.alt = nextAlt;
      return;
    }
    photo.style.opacity = "0";
    var show = function () {
      photo.style.opacity = "1";
      photo.removeEventListener("load", show);
    };
    photo.addEventListener("load", show);
    photo.alt = nextAlt;
    photo.src = nextSrc;
  }

  Array.prototype.forEach.call(root.querySelectorAll("[data-stop-btn]"), function (btn) {
    btn.addEventListener("click", function () {
      openStop(btn.getAttribute("data-stop-btn"));
    });
  });

  var links = root.querySelectorAll(".who-index a");
  var spies = root.querySelectorAll("[data-spy]");
  if ("IntersectionObserver" in window && spies.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          Array.prototype.forEach.call(links, function (link) {
            link.classList.toggle("is-here", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );
    Array.prototype.forEach.call(spies, function (section) {
      observer.observe(section);
    });
  }

  var reel = root.querySelector("[data-reel]");
  if (reel) {
    var beats = [
      { stop: "damascus", place: "Damascus", event: "EIcom" },
      { stop: "turkey", place: "Turkey", event: "GoKnet" },
      { stop: "malaysia", place: "Malaysia", event: "16TWO" },
      { stop: "malaysia", place: "Malaysia", event: "iPrice" },
      { stop: "hongkong", place: "Hong Kong", event: "WorldFirst" },
      { stop: "amsterdam", place: "Amsterdam", event: "Studocu" },
      { stop: "amsterdam", place: "Amsterdam", event: "Speakap" },
      { stop: "amsterdam", place: "Amsterdam", event: "Mollie" },
      { stop: "amsterdam", place: "Amsterdam", event: "Receiptu" }
    ];
    var beat = 0;
    var timer = null;
    var frames = reel.querySelectorAll("[data-reel-stop]");
    var dots = reel.querySelectorAll("[data-reel-dot]");
    var placeEl = reel.querySelector("[data-reel-place]");
    var eventEl = reel.querySelector("[data-reel-event]");
    var bar = reel.querySelector(".life-reel-progress span");
    var toggle = reel.querySelector("[data-reel-toggle]");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function paint(index) {
      var item = beats[index];
      Array.prototype.forEach.call(frames, function (frame) {
        frame.classList.toggle("is-on", frame.getAttribute("data-reel-stop") === item.stop);
      });
      Array.prototype.forEach.call(dots, function (dot) {
        dot.classList.toggle("is-on", dot.getAttribute("data-reel-dot") === item.stop);
      });
      if (placeEl) placeEl.textContent = item.place;
      if (eventEl) eventEl.textContent = item.event;
      if (!bar) return;
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "";
    }

    function start() {
      if (timer || reduce) return;
      timer = window.setInterval(function () {
        beat = (beat + 1) % beats.length;
        paint(beat);
      }, 1800);
    }

    function stop() {
      window.clearInterval(timer);
      timer = null;
    }

    if (toggle) {
      toggle.addEventListener("click", function () {
        var paused = toggle.getAttribute("aria-pressed") === "true";
        paused = !paused;
        toggle.setAttribute("aria-pressed", paused ? "true" : "false");
        toggle.textContent = paused ? "Play" : "Pause";
        reel.classList.toggle("is-paused", paused);
        if (paused) stop();
        else {
          paint(beat);
          start();
        }
      });
    }

    if (!reduce) {
      paint(0);
      start();
    }
  }
})();
