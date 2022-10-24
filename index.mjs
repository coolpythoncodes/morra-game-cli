import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

const fmt = (x) => stdlib.formatCurrency(x, 4)
const getBalance = async (who) => fmt(await stdlib.balanceOf(who))
const beforeAlice = await getBalance(accAlice)
const beforeBob = await getBalance(accBob)


console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const FINGERS = ['Zero fingers', 'One finger', 'Two fingers', 'Three fingers', 'Four fingers', 'Five fingers']
const GUESS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
const OUTCOME = ['Alice wins', 'Bob wins', 'Draw']

const Player = (Who) => ({
  getFingers: () => {
    const fingers = Math.floor(Math.random() * 5)
    console.log(`${Who} played ${FINGERS[fingers]}`)
    return fingers
  },
  getGuess: () => {
    const guess = Math.floor(Math.random() * 5)
    console.log(`${Who} guessed ${GUESS[guess]}`)
    return guess;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw an outcome of ${OUTCOME[outcome]}`)
  },
  informTimeout: ()=>{
    console.log(`${Who} observed a timeout`)
  }
})

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
    ...Player('Alice'),
    wager: stdlib.parseCurrency(10),
    deadline: 10,
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
    ...Player('Bob'),
    acceptWager: (wager) => {
      console.log(`Bob accepts the wager ${fmt(wager)} ${stdlib.standardUnit}`)
    },
  }),
]);

const afterAlice = await getBalance(accAlice)
const afterBob = await getBalance(accBob)


console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);