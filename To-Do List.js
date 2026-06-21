const input = document.querySelector("input[type = 'text']");
const buttonAdd = document.querySelector(".add");
const todolist = document.querySelector(".todolist");
const spaceTask = document.querySelector(".spaceTask");
const spaceFinishTask = document.querySelector(".spaceFinishTask");
const message = document.querySelector(".message");
const h4 = document.querySelector("h4");

let state = false;

buttonAdd.addEventListener("click", () => {
  if (input.value) {
    message.style.display = "none";
    const divTask = document.createElement("div");
    spaceTask.appendChild(divTask);
    divTask.classList.add("baliseTask");
    spaceTask.style.display = "block";

    const parag = document.createElement("p");
    divTask.appendChild(parag);
    const allP = document.querySelectorAll("p");

    for (const element of allP) {
      if (
        element.textContent.trim().toLocaleLowerCase() ===
        input.value.trim().toLocaleLowerCase()
      ) {
        setTimeout(() => {
          message.style.display = "block";
        }, 100);
        setTimeout(() => {
          message.style.display = "none";
        }, 2000);

        h4.innerText = "Cette tâche existe déjà dans la liste.";
        // pour empêcher l'ajout
        if (divTask) divTask.style.display = "none";
        if (parag) parag.remove();
      }
    }
    parag.innerText = `${input.value}`;
    if (spaceTask.childElementCount === 0) spaceTask.style.display = "none";

    // checkbox
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";

    // del
    const del = document.createElement("div");
    del.classList.add("baliseDel");
    const img = document.createElement("img");
    del.appendChild(img);
    img.src = "delete_20dp_EA3323_FILL0_wght400_GRAD0_opsz20.png";
    parag.before(inputCheck);
    divTask.appendChild(del);

    del.addEventListener("click", () => {
      divTask.remove();
      parag.innerText = "";
      if (spaceTask.childElementCount === 0) spaceTask.style.display = "none";
    });

    inputCheck.addEventListener("input", () => {
      if (inputCheck.checked) {
        const finishTask = document.createElement("div");
        const realTaskFinished = parag.textContent;
        const divP = document.createElement("div");
        divP.classList.add("divP");
        inputCheck.disabled = true;
        divP.innerText = realTaskFinished;

        finishTask.classList.add("finishTask");
        const img2 = document.createElement("img");
        img2.classList.add("img2");
        img2.src = "Screenshot_20251203-025434.jpg";

        spaceFinishTask.appendChild(finishTask);
        spaceFinishTask.appendChild(img2);

        finishTask.appendChild(divP);
        finishTask.appendChild(img2);

        spaceFinishTask.style.display = "block";
        console.log(spaceFinishTask);
      }
    });
  } else {
    setTimeout(() => {
      message.style.display = "block";
    }, 100);
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  }
});
