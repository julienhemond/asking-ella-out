const form = document.querySelector("form");
const main = document.querySelector("main");
const img = document.querySelector("#img1");
const idYesPlus = "yes_plus";
const idYes = "yes";
const idNo = "no";
const labelYesPlus = "Yes absolutely I want him so bad 😻";
const labelYes = "Yes";
const labelNo = "No";
const submit = document.createElement("input");
submit.setAttribute("type", "submit");

function handleSubmitFirstPart(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data.go_out === idYesPlus) {
        alert("Great! I want you too 🥵");
        form.innerHTML = "";
        form.removeEventListener("submit", handleSubmitFirstPart);
        initSecondPart();
    } else if (data.go_out === idYes) {
        alert("Try a little harder!");
        deleteOptionGoOut(idYes, labelYes);
    } else if (data.go_out === idNo) {
        alert("Really? You're missing out on my sweet bod! I'm pretty sure this is an mistake, try again!");
        deleteOptionGoOut(idNo, labelNo);
    } else {
        alert("You need to pick an answer Ella!");
    }
}

function handleSubmitSecondPart(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data["how-much-drink"] === "1") {
        alert("One drink? You're no fun! Try again!");
        deleteOptionDrink("1", "1 drink each");
    } else if (data["how-much-drink"] === "5") {
        alert("Three drinks each? That's more like it! Try again!");
        deleteOptionDrink("5", "3 drinks each");
    } else if (data["how-much-drink"] === "1-million") {
        alert("Yessssss let's get wasted!");
        form.innerHTML = "";
        initThirdPart();
    } else {
        alert("You need to pick an answer Ella!");
    }
}

function initFirstPart() {
    img.src = "image1.png";
    const label = document.createElement("label");
    label.setAttribute("for", "go-out-label");
    label.textContent = "Dear Ella, will you go grab drinks with Julien on Thursday?";
    label.style.fontWeight = "bold";
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    createOptionGoOut(idYesPlus, labelYesPlus);
    createOptionGoOut(idYes, labelYes);
    createOptionGoOut(idNo, labelNo);
    form.appendChild(submit);
    form.addEventListener("submit", handleSubmitFirstPart);
}

function createOptionGoOut(id, labelContent) {
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", id);
    input.setAttribute("name", "go_out");
    input.setAttribute("value", id);
    form.appendChild(input);

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelContent;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
}

function deleteOptionGoOut(id, labelContent) {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    form.removeChild(input);
    form.removeChild(label);
}

function initSecondPart() {
    img.src = "image2.png";
    const label = document.createElement("label");
    label.setAttribute("for", "how-much-drink");
    label.textContent = "How much will we drink?";
    label.style.fontWeight = "bold";
    form.appendChild(label);
    form.appendChild(document.createElement("br"));

    createOptionDrink("1", "1 drink each");
    createOptionDrink("5", "3 drinks each");
    createOptionDrink("1-million", "1 million vodka cranberries for me and 1 million rum & cokes for you");
    form.appendChild(submit);
    form.addEventListener("submit", handleSubmitSecondPart);
}

function initThirdPart() {
    img.src = "jul-danse.gif";
    const h4Un = document.createElement("h4");
    h4Un.innerHTML = "So happy I'm dancing! 🕺🎉";
    main.appendChild(h4Un);
    const h4Deux = document.createElement("h4");
    h4Deux.innerHTML = "Let's get wasted next Thursday! 🤪🍹";
    main.appendChild(h4Deux);
    const br = document.createElement("br");
    main.appendChild(br);
    const p = document.createElement("p");
    p.innerHTML = "I wanted to send a confirmation email to both <br>of us, but it's harder than I thought,<br>so just tell me when you're done with the form 😅";
    main.appendChild(p);
}

function createOptionDrink(id, labelContent) {
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", id);
    input.setAttribute("name", "how-much-drink");
    input.setAttribute("value", id);
    form.appendChild(input);

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelContent;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
}

function deleteOptionDrink(id, labelContent) {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    form.removeChild(input);
    form.removeChild(label);
}

initFirstPart();