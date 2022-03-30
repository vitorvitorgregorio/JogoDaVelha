var player = null
var selectedPlayer = document.getElementById('selected-player')

changePlayer(value = '<img src="https://prod.cloud.rockstargames.com/crews/sc/2929/7059403/publish/emblem/emblem_512.png" height="28" width="32" style="vertical-align: middle;">')
function select(id){
    var square = document.getElementById(id) 
    square.innerHTML = player
    square.style.backgroundColor = '#564c7e'

    if(player === '<img src="https://prod.cloud.rockstargames.com/crews/sc/2929/7059403/publish/emblem/emblem_512.png" height="28" width="32" style="vertical-align: middle;">') {
        player = '<img src="https://prod.cloud.rockstargames.com/crews/sc/9801/53214050/publish/emblem/emblem_256.png" height="32" width="32" style="vertical-align: middle;">'
    }
    else {
        player = '<img src="https://prod.cloud.rockstargames.com/crews/sc/2929/7059403/publish/emblem/emblem_512.png" height="28" width="32" style="vertical-align: middle;">'
    }

    changePlayer(player)
}



function changePlayer(value){
    player = value
    selectedPlayer.innerHTML = player
}