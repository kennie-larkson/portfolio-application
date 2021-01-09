const myName = "Lawal Kehinde";
const content = `
<h2>
Hey guys! 🤓<br/>
<hr/>
My name is <i>${myName}</i>.<br/> I am a web developer.👨‍💻 <br/>

Welcome to my Home Page 🙌
<hr/>
</h2>
`;
const exploreMeBtn = document.createElement("button");
// exploreMeBtn.innerText = "Explore Me";
exploreMeBtn.style.width = "300px";
exploreMeBtn.style.padding = "10px";
exploreMeBtn.style.border = "none";
exploreMeBtn.style.borderRadius = "15px";
exploreMeBtn.style.backgroundColor = "darkmagenta";
const btnAnchortag = document.createElement("a");
btnAnchortag.style.textDecoration = "none";
btnAnchortag.style.color = "cornflowerblue";
btnAnchortag.setAttribute("href", "http://123.com");
btnAnchortag.innerText = "explore my portfolio";
exploreMeBtn.appendChild(btnAnchortag);
const paraOne = document.querySelector(".paraOne");
paraOne.innerHTML = content;
paraOne.appendChild(exploreMeBtn);
