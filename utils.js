 export function createPlayerCard(player){
    console.log('createPlayerCard',player);
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const imageElement = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardFooter = document.createElement('div');
    const detailsBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const nameText = document.createTextNode(player.name);
   // const breedText = document.createTextNode(player.breed);
    const deleteText = document.createTextNode('delete');
    const detailsText = document.createTextNode('details');

    card.className = 'card';
    cardHeader.classList = 'card-header card-image';
    cardBody.className = 'card-body';
    cardFooter.className = 'card-footer';
    detailsBtn.className = 'btn';
    deleteBtn.className = 'btn';
    imageElement.setAttribute('src', player.imageURL);

    
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardHeader.appendChild(nameText);
    cardHeader.appendChild(imageElement);
    //cardBody.appendChild(breedText);
    cardFooter.appendChild(detailsBtn);
    cardFooter.appendChild(deleteBtn);
    detailsBtn.appendChild(detailsText);
    deleteBtn.appendChild(deleteText);
    
   return card;

}