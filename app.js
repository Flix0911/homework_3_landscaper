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

//array for tools used. Includes name of tool, how much it generates in cash, and the price
const tools = [
    {name: "teeth", generates: 1, price: 0},
    {name: "rusty scissors", generates: 5, price: 5},
    {name: "old-timey push mower", generates: 50, price: 25},
    {name: "fancy battery-powered mower", generates: 100, price: 250},
    {name: "starving students", generates: 250, price: 500}
]
//array for the player
const player = {
    money: 0,
    tool: 0
}

//1st text prompt that begins the game
alert("Lets begin mowing some lawns ~~~ YEAH!!!")

//function for mowing the law
function mowingLawn(){ //name of the function is mowingLawn
    const tool = tools[player.tool] //create a variable name tool that will pull from the tools array
    alert(`you mowed a lawn with ${tool.name} and make ${tool.generates} dollars`) //text prompt that will pull the name of the tool used and how much money it generates
    player.money += tool.generates //
}

//create a function that will be used for updating your current tool
function update(){ //name of the function is update
    if (player.tool + 1 < tools.length){ //determines the tool at the start
        const nextTool = tools[player.tool + 1] //create a variable called nextTool that will pull from the tools array. will at 1 through the array
        if (nextTool.price <= player.money){ //if statement for upgrading tools
            player.money -= nextTool.price
            player.tool += 1
    } else {
        alert("Work harder, you don't have enough money for the next upgrade") //will generate if you try and purchase an upgrade without enough money
    }
    } else {
        alert("There are no more upgrades for your business") //will generate if you are at the full length of the array
    }
}

//function to state what the winning objective would be
function winningObjective(){ //name of function is winningObjective
    if(player.tool === tools.length -1 && player.money >= 1000){ //states that if the player.tool is equal to length of the tools array AND you have 1000 or more
    alert("You're the block lawn mowing emperor") //if that is met, generate this alert to show the player is the winner
    player.wonGame = true //player won game
    } else {
        alert("You're getting closer but there is still another ruler on the block") //if not equal to the above mentioned, alert that the game has not been won
    }
}

function resetGame() {
    if(response === 'give up')
    alert("Lets start that over again")
}


//while wongame is false(!) create choices of what the player can do next
while(!player.wonGame){
    //create a variable called response that will prompt the below message
    const response = prompt(`Another day another dollar! Your wallet has ${player.money} dollars, would you like to [mow] lawns or [invest] today? Or do you want to [give up]?`)
    
    //if player chooses mow, run the mowingLawn function, which will generate cash
    if (response === 'mow'){
        mowingLawn()
    //if the player chooses invest, purchase an upgrade only if cash is available and if there is an upgrade available
    } if 
        (response === 'invest'){
            update()
    //if an answer is typed outside of that, so does not equal mow and invest, alert again on what player must choose
    } if
        (response !== 'mow' && response !== 'invest') {
            alert("Come on pal, gotta be productive. Type 'mow' or 'invest'")
    } else {
        (reponse === 'give up')
           reset()
        }

//check for winning objective
    winningObjective()

}

