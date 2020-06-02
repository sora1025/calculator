const calBtn = document.getElementsByClassName('cal-btn')[0];

calBtn.onclick = (e) => {
  const num = [];
  const operator = [];
  const target = e.target.innerHTML;

  if (typeof(target) == "number") {
    num.push(target);
  } else {
    operator.push(target);
  }

}