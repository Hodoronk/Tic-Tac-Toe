const gameBoard = (() => {
    function renderGameSpace(){
        const gridSpaces = document.querySelectorAll('.gridspace');
        gridSpaces.forEach((gridspace, index) => {
            gridspace.textContent = gameboard[index];
        });
    }

    const gameboard = ['', '', '', '', 'x', '', '', '', ''];
    const getGameboard = () => gameboard;
    const updateCell = (index, symbol) => {
        gameboard[index] = symbol;
    };
    renderGameSpace();
    return{
        getGameboard,
        updateCell,
        renderGameSpace,
    };
})();

const playerMaker = () => {
    const submitter = document.querySelector('#submitter');
    const playerName = document.querySelector('#playerName');
    submitter.addEventListener('click', function(){
        const playName = playerName.textContent;
        console.log(playName);
    });

}


const playerFactory = (name, symbol) => {
    return{
        name, symbol
    }
}

