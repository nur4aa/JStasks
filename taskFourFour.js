const paragraphs = document.querySelectorAll('p');

for(let item of Array.from(paragraphs)) {
    const hr = document.createElement("hr");
    item.appendChild(hr)
}