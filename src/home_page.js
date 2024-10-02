import dulceOasis from "./assets/images/DALLE-Dulce-Oasis.webp";

export default function(target) {
   const imgDiv = document.createElement('div');
   const img = document.createElement('img');
   const div2 = document.createElement('div');
   const p = document.createElement('p');

   imgDiv.appendChild(img);
   img.src = dulceOasis;
   div2.textContent = 'Dulce Oasis';
   p.textContent = 'Welcome to the a cringy world of delicious food prepared keeping the highest standards for cleanness and freshness';

   return target.append(div2, p, imgDiv);
}