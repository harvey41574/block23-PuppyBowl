import {createPlayerCard} from './utils.js';
const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');
// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2401-ftb-et-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of object
 */
const fetchAllPlayers = async () => {
    try{ 
      const response = await fetch(`${APIURL}/players`);
      const result = await response.json();
        //  console.log(result);
        return result.data.players;
   } catch (err) {     
        console.error('Uh oh, trouble fetching players!', err);
    }
};


const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result= await response.json();
        if (result.success){
            return result.data.player;
        }
     } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
   try {
  //      const response= await fetch(`${APIURL}/newplayer/${newPlayer, {
       //     method:'POST',
        //    headers: {
          //      'Content-Type':'application/json'
          //  },
         //   body:JSON.stringify(newPlayer)

      //  });
      //  const json= await response.json();
        
   
    } catch (err) {
       console.error('Oops, something went wrong with adding that player!', err);

};

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
   
        const grid = document.querySelector('.grid');
        console.log(grid);
        playerList.forEach((player)=>{
        const playerCard = createPlayerCard(player);
        const footerElement = playerCard.lastChild;
        const bodyElement= footerElement.previousSibling;

       footerElement.lastChild.addEventListener('click',async(event)=>{
       const selectedCard = event.target.closest('.card');
       const id = selectedCard.dataset.id;
       const result = await fetchSinglePlayer(id);
       console.log('result',result);
       
       
       const playerDetailsElement= document.createElement('div');
       playerDetailsElement.innerHTML= `
       <p>breed: ${result.breed}</p>
       <p>status: ${result.status}</p>
       <p>team: ${result.team? result.team.id:'N/A'}</P>
        `;
        bodyElement.appendChild(playerDetailsElement);
    });
        grid.appendChild(playerCard);
});
        try {    
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};



/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
       console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();}