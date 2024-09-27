const coin = document.querySelector('#coin')
const scoreEL = document.querySelector('#score')
const buyUpgrade = document.querySelector('#buyUpgade')
const message = document.querySelector('#message')
const buyBoost = document.querySelector('#buyBoost')

let score = 0
let clickValue = 1
let upgradeCost = 100
let boostcost = 50
let boostDuraction = 10000

coin.addEventListener('click', () => {
  score += clickValue
  scoreEL.innerText = score
})

buyUpgrade.addEventListener('click', () => {
   if(score >= upgradeCost){
      score -= upgradeCost
      scoreEL.innerText = score
      clickValue++
      upgradeCost = Math.floor(upgradeCost * 1.5)
      buyUpgrade.innerText = `Купить улучшение (${upgradeCost}) hits👊🏿`
      message.innerText = 'Вы успешно купили улучшение👌'
   }else{
      message.innerText = 'Вам не хватает! вы бомж💏'
   }
})

buyBoost.addEventListener('ckick', () => {
if(score >= boostcost){
   score -= boostcost
   clickValue *= 2
   message.innerText = 'Вы успешно купили буст!❤️‍🔥'
   setTimeout(() => {
      clickValue / 2
      message.innerText = 'Буст кончился!😢'
   }, boostDuraction);

}else{
   message.innerText = 'Вам не хватает! вы бомж💏'
}
})