let player1 = '';
let player2 = '';


const playerName = document.querySelector('#playerName');
const submitter = document.querySelector('#submitter');
submitter.addEventListener('click', function(){
    if(player1 === ''){
    player1 = playerFactory(playerName.value, 'X');
    console.log(`Player one name is ${player1.name}, and his symbol is ${player1.symbol}`);
    }else if(player2 === ''){
        player2 = playerFactory(playerName.value, 'O');
        console.log(`Player one name is ${player2.name}, and his symbol is ${player2.symbol}`);
    }else{
        console.log('You already have 2 players!');
    }
});

const gameBoard = (() => {
    function renderGameSpace(){
        const gridSpaces = document.querySelectorAll('.gridspace');
        gridSpaces.forEach((gridspace, index) => {
            gridspace.textContent = gameboard[index];
        });
    }

    const gameboard = ['', '', '', '', '', '', '', '', ''];
    const getGameboard = () => gameboard;
    const updateCell = (index, symbol) => {
        gameboard[index] = symbol;
    };
    return{
        renderGameSpace,
        getGameboard,
        updateCell,
    };
})();

const playerFactory = (name, symbol) => {
    return{
        name,
        symbol,
    }
}

const game = (() =>{

    let turnCount = 0;
        const gridSpaces = document.querySelectorAll('.gridspace');
        gridSpaces.forEach((gridspace, index) => {
        gridspace.addEventListener('click', function(){
            if(turnCount === 0 || turnCount === 2 || turnCount === 4 || turnCount === 6 || turnCount === 8){
                gameBoard.updateCell(index, 'X');
            }
        });
    });
})();