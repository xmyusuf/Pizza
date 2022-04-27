let elForm = document.querySelector("#order-form");
let elSelect = document.querySelector("#select");
let elBreadDiv = document.querySelector(".bread-wrapper");
let elSizeDiv = document.querySelector(".size-wrapper");
let elProductsDiv = document.querySelector(".products-wrapper");
let elExtraDiv = document.querySelector(".extra-wrapper");
let elButton = document.querySelector(".btn-form");
let elParagraph = document.querySelector(".option-p");
let elRadioSpan = document.querySelector(".radio-span");
let elProductsMiniWrap = document.querySelector(".products-mini-wrap");
let elCheckboxlist = document.querySelector(".checkbox-list");
let elCheckboxWrap = document.querySelector(".extra-wrapper")
let elMiniCheckboxlist = document.querySelector(".mini-checkbox-list");

let optionArr = ["Yupqa", "O'rtacha", "Qalin"];

// Bu yerda optionlar chaqirilgan.
for (let i = 0; i < optionArr.length; i++) {
  const elOption = document.createElement("option");
  elOption.textContent = optionArr[i];
  elOption.value = optionArr[i];
  if (i == 0) {
    elOption.setAttribute("selected", "")
  }
  elSelect.appendChild(elOption);
}


// Bu yerda selectga funksiya kiritilgan

elSelect.addEventListener("change", function (evt) {
  evt.preventDefault();

  elOptionSpan.textContent = elSelect.value;
});

const elOptionSpan = document.createElement("span");
elOptionSpan.textContent = elSelect.value;
elParagraph.appendChild(elOptionSpan);

//Bu yerda radio yasalgan

let radioArr = ["25cm", "30cm", "35cm"];


for (let i = 0; i < radioArr.length; i++) {
  const elLabel = document.createElement("label");
  elLabel.setAttribute("for", "radio"+ i);
  elSizeDiv.appendChild(elLabel);

  const elRadio = document.createElement("span");
  elLabel.appendChild(elRadio);
  elRadio.textContent = radioArr[i];

  let elInputRadio = document.createElement("input");
  elInputRadio.setAttribute("type", "radio");
  elInputRadio.setAttribute("name", "radio");
  elInputRadio.setAttribute("id", "radio" + i);
  elSizeDiv.appendChild(elInputRadio);
  
  elInputRadio.addEventListener("change", function (e) {
    e.preventDefault();

    elRadioSpan.textContent = radioArr[i];
  });
}

// Bu yerda asosiy checkbox yasalgan

let mainCheckBoxArr = ["Pomidor", "Sir", "Zaytun", "Qo'ziqorin", "Kurka go'shti", "Tuzlangan bodring"];

for (let i = 0; i < mainCheckBoxArr.length; i++) {
  const elInputCheckbox = document.createElement("input");
  elInputCheckbox.setAttribute("type", "checkbox");
  elInputCheckbox.setAttribute("name", "ustida");
  elInputCheckbox.setAttribute("value",  mainCheckBoxArr[i]);
  elInputCheckbox.setAttribute("id", "checkbox"+ i);
  elProductsMiniWrap.appendChild(elInputCheckbox);

  const elCbLabel =document.createElement("label");
  elCbLabel.setAttribute("for", "checkbox"+ i);
  elProductsMiniWrap.appendChild(elCbLabel);

  const elCheckbox = document.createElement("span");
  elCheckbox.textContent = mainCheckBoxArr[i];
  elCbLabel.appendChild(elCheckbox);


  elInputCheckbox.addEventListener("change", function(evn){
    evn.preventDefault();

    let elCheckboxItem = document.createElement("li");
    elCheckboxItem.textContent = mainCheckBoxArr[i];
    elCheckboxlist.appendChild(elCheckboxItem); 
    
  });
}

// Bu yerda mini checkbox yasalgan

let miniCheckboxArr = ["Achchiq", "Sosiskali"];

for (let i = 0; i < miniCheckboxArr.length; i++) {
  let elMiniCheckbox = document.createElement("input");
  elMiniCheckbox.setAttribute("type", "checkbox");
  elMiniCheckbox.setAttribute("name", "qo'shimcha");
  elMiniCheckbox.setAttribute("value", miniCheckboxArr[i]);
  elMiniCheckbox.setAttribute("id", "minicheckbox" + i);
  elCheckboxWrap.appendChild(elMiniCheckbox);

  const elMiniCbLabel = document.createElement("label");
  elMiniCbLabel.setAttribute("for", "minicheckbox" + i);
  elCheckboxWrap.appendChild(elMiniCbLabel);

  const elCheckboxMini = document.createElement("span");
  elCheckboxMini.textContent = miniCheckboxArr[i];
  elMiniCbLabel.appendChild(elCheckboxMini);

  elMiniCheckbox.addEventListener("change", function (ev) {
    ev.preventDefault();

    let elMiniCheckboxItem = document.createElement("li");
    elMiniCheckboxItem.textContent = miniCheckboxArr[i];
    elMiniCheckboxlist.appendChild(elMiniCheckboxItem);

  });
}
