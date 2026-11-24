
const taskInput = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");

console.log(taskInput, taskBtn, taskList);


taskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    li.addEventListener("dblclick", function() {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
});


const bulb = document.querySelector("#bulb");
const bulbBtn = document.querySelector("#bulbBtn");

let isOn = false;

console.log(bulb, bulbBtn);

bulbBtn.addEventListener("click", function() {
    isOn = !isOn;

    if (isOn) {
        bulb.style.backgroundColor = "yellow";
        bulbBtn.textContent = "вимкнути";
    } else {
        bulb.style.backgroundColor = "gray";
        bulbBtn.textContent = "увімкнути";
    }
});


const regForm = document.querySelector("#regForm");
const userName = document.querySelector("#userName");
const userPass = document.querySelector("#userPass");
const regMessage = document.querySelector("#regMessage");

console.log(regForm, userName, userPass, regMessage);

regForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = userName.value.trim();
    const password = userPass.value;

    if (name === "") {
        regMessage.textContent = "введіть ім'я";
        regMessage.style.color = "red";
    } else if (password.length < 6) {
        regMessage.textContent = "пароль занадто короткий";
        regMessage.style.color = "red";
    } else {
        regMessage.textContent = "реєстрація успішна!";
        regMessage.style.color = "green";
    }
});

const mover = document.querySelector("#mover");

let position = 0;

console.log(mover);

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        position += 10;
    }

    if (event.key === "ArrowLeft") {
        if (position > 0) {
            position -= 10;
        }
    }

    mover.style.marginLeft = position + "px";
});
