var links = {
  SetColor: function(color) {
    //var abc = document.querySelectorAll("a");
    //var i = 0;
    //while (i < abc.length) {
    //abc[i].style.color = color;
    //i = i + 1;
    // }
    $("a").css("color", color);
  }
};
var body = {
  SetColor: function(color) {
    //document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  SetBackgroundColor: function(color) {
    //document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  }
};

function nightDay(self) {
  const jiJi = document.querySelector("body");
  if (self.value === "night") {
    body.SetBackgroundColor("black");
    body.SetColor("white");
    self.value = "day";
    links.SetColor("powderblue");
  } else {
    body.SetBackgroundColor("white");
    body.SetColor("black");
    self.value = "night";
    links.SetColor("blue");
  }
}
