import { reactive } from 'vue'

export const store = reactive({
  userPick: '',
  botPick: '',
  status: '',
  pick(element : 'rock'| 'paper'| 'scissor') {
    this.userPick = element
  },

  reset() {
    this.userPick = ''
    this.botPick = ''
  },
  bot() {
    const botPick = ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)]
    this.botPick = botPick

    if(botPick === this.userPick) {
      this.status = 'draw'
    } else if (botPick === 'rock' && this.userPick === 'paper') {
      this.status = 'win'
    } else if (botPick === 'rock' && this.userPick === 'scissor') {
      this.status = 'lose'
    } else if (botPick === 'paper' && this.userPick === 'rock') {
      this.status = 'lose'
    } else if (botPick === 'paper' && this.userPick === 'scissor') {
      this.status = 'win'
    } else if (botPick === 'scissor' && this.userPick === 'rock') {
      this.status = 'win'
    } else if (botPick === 'scissor' && this.userPick === 'paper') {
      this.status = 'lose'
    }
  },
})