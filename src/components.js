
export function generateNewsBox(title, description) {

    const container = document.createElement('div');
    const header = document.createElement('h2');
    header.innerText = title;
    const desc = document.createElement('p');
    desc.innerText = description;

    container.appendChild(header);
    container.appendChild(desc);
    document.body.appendChild(container);


}
