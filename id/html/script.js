

window.addEventListener('DOMContentLoaded', function() {
    function updatePlayerID(playerID) {
        const playerIdElement = document.getElementById('player-id');
        playerIdElement.textContent = `ID : ${playerID}`; //you Can Change Your Name Menu In This Line ❤️
    }


    window.addEventListener('message', function(event) {
        if (event.data.type === "updatePlayerID") {
            updatePlayerID(event.data.playerID);
        }
    });
});
