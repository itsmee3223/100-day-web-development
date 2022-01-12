let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com';

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!';

let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement);


let firstH1Element = document.querySelector('h1');
firstH1Element.parentElement.removeChild(firstH1Element);
firstParagraph.parentElement.append(firstParagraph);