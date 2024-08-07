import { reactive } from 'vue';

type Choice = 'rock' | 'paper' | 'scissor';

export const store = reactive({
  userPick: '' as Choice | '',
  botPick: '' as Choice | '',
  winner: '',
  status: '',
  isLoading: false,
  score: 0,

  pick(element: Choice) {
    this.userPick = element;
    this.isLoading = true;
    setTimeout(() => {
      this.bot();
      this.isLoading = false;
    }, 1000); // Simulate loading time
  },

  reset() {
    this.userPick = '';
    this.botPick = '';
    this.status = '';
    this.winner = '';
    this.isLoading = false;
  },

  bot() {
    const choices: Choice[] = ['rock', 'paper', 'scissor'];
    const botPick = choices[Math.floor(Math.random() * 3)];
    this.botPick = botPick;
    this.evaluateGame(botPick, this.userPick);
  },

  evaluateGame(botPick: Choice, userPick: Choice | '') {
    if (!userPick) return;

    if (botPick === userPick) {
      this.status = 'draw';
    } else if (
      (botPick === 'rock' && userPick === 'paper') ||
      (botPick === 'paper' && userPick === 'scissor') ||
      (botPick === 'scissor' && userPick === 'rock')
    ) {
      this.status = 'win';
      this.score += 1;
      this.winner = 'user';
    } else {
      this.status = 'lose';
      this.score -= 1;
      this.winner = 'bot';
    }
    console.log(this.score); // Logging the score for debugging
  },
});
