export default function(target) {
   const text = document.createElement('p');
   text.textContent = 'We are out of business, no menu available :(';
   target.append(text);

   return target;
}