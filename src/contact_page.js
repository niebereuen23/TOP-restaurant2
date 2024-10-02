import peepoClown from "./assets/images/peepoClown.png"

export default function(target) {
   
   const header = document.createElement('h1');
   const card = document.createElement('div');
   const imgDiv = document.createElement('div');
   const img = document.createElement('img');
   const cardText = document.createElement('p');

   header.textContent = 'Contact Us';
   cardText.innerHTML = 'Pepe Laugh<br>912-3456789<br>pepelaugh@emote.com';
   img.src = peepoClown;

   imgDiv.appendChild(img);
   card.appendChild(cardText);

   return target.append(header, card, imgDiv);
}