//You are starting a landscaping business
//If using your teeth, you can spend the day cutting lawns and make $1. Can do as much as you want
//If using your teeth only, you can buy rusty scissors once for $5. Can make this purchase once
//If using rusty scissors, you can spend the day cutting lawns and make $5. Can do as much as you want
//If using rusty scissors, you can buy an old-timey push lawnmower for $25. Can make this purchase once
//If using old-timey push lawnmower, you can spend the day cutting lawns and make $50. Can do as much as you want
//If using old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can make this purchase once
//If using the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. Can do as much as you want
//If using fancy battery-powered lawnmower, you can hire a team of starving student for $500. You can make this purchase once
//If using starving students, you can spend the day cutting lawns and make $250. Can do this as much as you want
//If you have a team of starving students and $1000 dollars, you win
    //Send user a message informing them they've won

const tools = [
    {name: "teeth", generates: 1, price: 0},
    {name: "rusty scissors", generates: 5, price: 5},
    {name: "old-timey push mower", generates: 50, price: 25},
    {name: "fancy battery-powered mower", generates: 100, price: 250},
    {name: "starving students", generates: 250, price: 500}
]

const player = {
    money: 0,
    tool: 0
}

alert("Lets begin mowing some lawns ~~~ YEAH!!!")

function mowingLawn(){
    const tool = tools[player.tool]
    alert(`you mowed a lawn with ${tool.name} and make ${tool.generates} dollars`)
    player.money += tool.generates
}

function update(){
    if (player.tool + 1 < tools.length){
        const nextTool = tools[player.tool + 1]
        if (nextTool.price <= player.money){
            player.money -= nextTool.price
            player.tool += 1
    } else {
        alert("Work harder, you don't have enough money for the next upgrade")
    }
    } else {
        alert("There are no more upgrades for your business")
    }
}

function winningObjective(){
    if(player.tool === tools.length -1 && player.money >= 1000){
    alert("You're the block lawn mowning emperor")
    player.wonGame = true
    } else {
        alert("You're getting closer but there is still another ruler on the block")
    }
}

while(!player.wonGame){ 
    const response = prompt(`Another day another dollar! Your wallet has ${player.money} dollars, would you like to [mow] lawns or [invest] today`)

    if (response === 'mow'){
        mowingLawn()
    } if 
        (response === 'invest' ){
            update()
    } if
        (response !== 'mow' && response !== 'invest') {
            alert("Come on pal, gotta be productive. Type 'mow' or 'invest'")
    }

    winningObjective()

 }