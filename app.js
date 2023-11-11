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

const mowingEquipments = [
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

function mowingLawn(){
    const mowingEquipment = mowingEquipments[player.tool]
    alert(`you mowed a lawn with ${mowingEquipment.name} and make ${mowingEquipment.generates} dollars`)
    player.money += mowingEquipment.generates
}

function update(){
    if (player.tool + 1 < tools.length){
        const nextTool = mowingEquipment[player.tool + 1]
        if (nextTool.price < player.money){
    } else {
        alert("Work harder, you don't have enough money for the next upgrade")
    }
    } else {
        alert("There are no more upgrades for your business")
    }
}