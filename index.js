const previousValue = document.getElementById("prevNumber");
const currentValue = document.getElementById("currentNumber");

function prev(number) {
  previousValue.innerHTML = number;
}

function getPrev() {
  return previousValue.innerHTML;
}

function current(number) {
  let text1 = "";
  text1 += number;
  currentValue.innerHTML = text1;
}

function getCurrent() {
  return currentValue.innerHTML;
}

function clearAll() {
  previousValue.innerHTML = "";
  currentValue.innerHTML = "";
}

// for operator
const operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    let previous = getPrev();
    let current = getCurrent();
    switch (this.id) {
      case "+":
        if (previous.includes("+")) {
          previous = previous.replace("+", "");
        }

        var result = add(Number(previous), Number(current)) + "+";
        currentValue.innerHTML = "";
        prev(result);
        break;

      case "-":
        if (Number(previous) < 0) {
          previous = previous.replace("-", "");
        }
        if (previous.includes("-")) {
          previous = previous.replace("-", "");
        }
        var result = diff(Number(previous), Number(current)) + "-";

        currentValue.innerHTML = "";
        prev(result);
        break;

      case "*":
        if (previous == 0) {
          previous += 1;
        }
        if (previous.includes("*")) {
          previous = previous.replace("*", " ");
        }

        var result = prod(Number(previous), Number(current)) + " *";

        currentValue.innerHTML = "";
        prev(result);
        break;

      case "/":
        if (previous == 0) {
          previous = current;
          currentValue.innerHTML = "";
          prev(current + "÷");
          break;
        }
        if (previous.includes("÷")) {
          previous = previous.replace("÷", " ");
        }

        var result = div(Number(previous), Number(current)) + "÷";
        currentValue.innerHTML = "";
        prev(result);
        break;

      case "^":
        if (previous == 0) {
          previous = current;
          currentValue.innerHTML = "";
          prev(current + "^");
          break;
        }
        if (previous.includes("^")) {
          previous = previous.replace("^", " ");
        }

        var result = power(Number(previous), Number(current)) + "^";
        currentValue.innerHTML = "";
        prev(result);
        break;

      case "%":
        if (previous == 0) {
          previous = current;
          currentValue.innerHTML = "";
          prev(current + "mod");
          break;
        }
        if (previous.includes("mod")) {
          previous = previous.replace("mod", " ");
        }

        var result = modulo(Number(previous), Number(current)) + "mod";
        currentValue.innerHTML = "";
        prev(result);
        break;

      case "Del":
        out = String(current);
        out = out.substring(0, out.length - 1);

        currentValue.innerHTML = out;
        break;

      case "=":
        if (previous.includes("+")) {
          previous = previous.replace("+", "");
          var result = add(Number(previous), Number(current));

          currentValue.innerHTML = result;
          previousValue.innerHTML = "";
        } else if (previous.includes("-")) {
          previous = previous.replace("-", "");
          var result = diff(Number(current), Number(previous));

          currentValue.innerHTML = result;
          previousValue.innerHTML = "";
        } else if (previous.includes("*")) {
          previous = previous.replace("*", "");
          var result = prod(Number(current), Number(previous));

          currentValue.innerHTML = result;
          previousValue.innerHTML = "";
        } else if (previous.includes("÷")) {
          previous = previous.replace("÷", "");
          var result = div(Number(previous), Number(current));

          currentValue.innerHTML = result;
          previousValue.innerHTML = "";
        } else if (previous.includes("^")) {
          previous = previous.replace("^", "");
          var result = power(Number(previous), Number(current));

          currentValue.innerHTML = result;
          previousValue.innerHTML = "";
        } else if (previous.includes("mod")) {
          previous = previous.replace("mod", "");
          var result = modulo(Number(previous), Number(current));

          currentValue.innerHTML = result;
          previousValue.innerHTML = "";
        }
    }
  });
}

// for number
const nums = document.getElementsByClassName("number");

for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    let output = getCurrent();
    if (output != NaN) {
      if (output == 0) {
        output = "";
      }

      output += this.id;
      current(output);
    }
  });
}

function add(a = 0, b = 0) {
  return a + b;
}

function diff(a, b) {
  return b - a;
}

function prod(a = 1, b = 1) {
  return a * b;
}

function div(a, b) {
  if (b == 0) {
    return "Error occured!";
  } else {
    return a / b;
  }
}

function power(a, b) {
  return a ** b;
}

function modulo(a, b) {
  return a % b;
}
