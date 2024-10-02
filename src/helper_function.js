// Sticks together the event needed to trigger a button, to trigger a function in a target in HTML
export function glueFunction(event, button, funct, tagFunctTarget) {
   button.addEventListener(event, () => {
      tagFunctTarget.textContent = '';
      funct(tagFunctTarget);
   });
}