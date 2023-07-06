let player1 = '';
let player2 = '';
let playable = 0;






// const playerName = document.querySelector('#playerName');
// const submitter = document.querySelector('#submitter');
// submitter.addEventListener('click', function(){
//     if(player1 === ''){
//     player1 = playerFactory(playerName.value, 'X');
//     console.log(`Player one name is ${player1.name}, and his symbol is ${player1.symbol}`);

//     }else if(player2 === ''){
//         player2 = playerFactory(playerName.value, 'O');
//         console.log(`Player two name is ${player2.name}, and his symbol is ${player2.symbol}`);
//         playable = 1;
//     }else{
//         console.log('You already have 2 players!');
//     }
// });

const playerName = document.querySelector('#playerName1');
const playerName2 = document.querySelector('#playerName2');
const submitter = document.querySelector('#submitter');
submitter.addEventListener('click', function(){
    if(playerName.value === '' || playerName2.value === ''){
        alert('You must insert player names!');
    }else if(playerName.value !== '' && playerName.value !== ''){
        player1 = playerFactory(playerName.value, 'X');
        player2 = playerFactory(playerName2.value, 'O');
        playable = 1;
        console.log(`Player one: ${player1.name}, Symbol: ${player1.symbol}\n Player two: ${player2.name}, Symbol: ${player2.symbol}\n`)
    }
});


































const gameBoard = (() => {
    function renderGameSpace(){
        const gridSpaces = document.querySelectorAll('.gridspace');
        gridSpaces.forEach((gridspace, index) => {
            gridspace.textContent = gameboard[index];
        });
    }
    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8],    //rows
        [0,3,6], [1,4,7], [2,5,8],   //columns
        [0,4,8], [2,4,6]            //diagonals
    ];

    const gameboard = ['', '', '', '', '', '', '', '', ''];
    const getGameboard = () => gameboard;
    const updateCell = (index, symbol) => {
        gameboard[index] = symbol;
    };
    function checkCombination(){ 
        
        if(!gameboard.includes('')){
            alert('TIE!');
        }else{
            for(let combination of winningCombinations){
                if(gameboard[combination[0]] === 'X' && gameboard[combination[1]] === 'X' && gameboard[combination[2]] === 'X'){
                    alert(`${player1.name} wins!`);
                }else if(gameboard[combination[0]] === 'O' && gameboard[combination[1]] === 'O' && gameboard[combination[2]] === 'O'){
                    alert(`${player2.name} wins!`);
                }
            }
        }
    }


    
    return{
        renderGameSpace,
        getGameboard,
        updateCell,
        checkCombination,
        
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
    function play(symbol, index){
        gameBoard.updateCell(index, symbol);
        console.log(gameBoard.getGameboard());
        gameBoard.renderGameSpace();
        gameBoard.checkCombination();
        turnCount++;
    }
        gridSpaces.forEach((gridspace, index) => {
        gridspace.addEventListener('click', function(){
            if(playable === 1 && turnCount === 0 || turnCount === 2 || turnCount === 4 || turnCount === 6 || turnCount === 8){
                play('X', index);
            }else if(playable === 1){
                play('O', index);
            }
        });
    });
})();





