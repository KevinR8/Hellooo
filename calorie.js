document.querySelector(".submit").addEventListener("click", function () {
  let height = Number(document.querySelector(".height").value);
  let weight = Number(document.querySelector(".weight").value);
  let age = Number(document.querySelector(".age").value);
  let training = Number(document.querySelector(".training").value);
  var sex;
  var intensity;
  var calories;
  var BMR;
  try {
    if (
      document.getElementById("male").checked === false &&
      document.getElementById("female").checked === false
    )
      throw "choose male or female";

    if (height === 0 || weight === 0 || age === 0 || training === 0)
      throw "enter all fields";

    if (document.getElementById("male").checked === true) {
      sex = "male";
    } else if (document.getElementById("female").checked === true) {
      sex = "female";
    }

    if (training === 0) {
      intensity = 1.2;
    } else if (training === 1) {
      intensity = 1.375;
    } else if (training === 2) {
      intensity = 1.55;
    } else if (training === 3) {
      intensity = 1.725;
    } else if (training < 0) {
      document.getElementById("msg").textContent =
        "Intensity needs to be higher than 0";
    } else if (training > 0) {
      document.getElementById("msg").textContent =
        "Intensity needs to be lower than 3";
    }

    if (sex === "male") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height + 5.677 * age;
      calories = BMR * intensity;
    } else if (sex === "female") {
      BMR = 447.593 + 9.247 * weight + 3.098 * height + 5.677 * age;
      calories = BMR * intensity;
    }

    calories = Math.ceil(calories);

    console.log(BMR, calories);

    document.getElementById(
      "response"
    ).textContent = `you should be eating ${calories} calories a day`;
    document.querySelector("#response").style.backgroundColor = "pink";
    document.querySelector("#msg").textContent = "";
  } catch (err) {
    document.getElementById("msg").textContent = "please enter all fields";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".input").textContent = 0;
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
});
