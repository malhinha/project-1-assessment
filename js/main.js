/* CACHE DOM NODES */

const count = document.getElementById('count');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const integer = document.getElementById('integer');


/* GLOBAL VARIABLES */
let countValue = 0;
let integerValue = 1;

/* FUNCTIONS */

// sets color of counter based on positive vs negative

const countColor = () => {
  if (countValue < 0) {
    count.classList.add("red");
    count.classList.remove("black");
  }
  else if (countValue >= 0){
    count.classList.add("black");
    count.classList.remove("red");
  }
}

/* EVENT LISTENERS */

// add value of integer input to count

addBtn.addEventListener('click', (e) => {
  let amount = parseInt(integer.value, 10);
  countValue += amount;
  count.innerHTML = countValue;
  countColor();
});

// subtract value of integer input to count

subtractBtn.addEventListener('click', (e) => {
  let amount = parseInt(integer.value, 10);
  countValue -= amount;
  count.innerHTML = countValue;
  countColor();
});
