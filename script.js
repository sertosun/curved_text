function circularText(txt, radius, classIndex) {
  (txt = txt.split("")),
    (classIndex = document.getElementsByClassName("circTxt")[classIndex]);

  var deg = 360 / txt.length,
    origin = 0;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;
        position:absolute;
        transform:rotate(${origin}deg);
        transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText("shadow circular text ", 100, 0);
// circularText("cursive in a circle ", 50, 1);
// circularText("*************************", 32, 2);
// circularText("0 1 2 3 4 5 6 7 8 9 ", 75, 3);
// circularText("                                                         ", 90, 4);
// circularText("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆", 64, 5);
