'reach 0.1';

const Player = {
  getFingers: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null)
}

const [isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6)
const [isGuess, GUESS_ZERO, GUESS_ONE, GUESS_TWO, GUESS_THREE, GUESS_FOUR, GUESS_FIVE] = makeEnum(6)
const [isOutcome, A_WINS, B_WINS, DRAW] = makeEnum(3)

const winner = (getAFingers, getAGuess, getBFingers, getBGuess) => {
  const totalFingers = getAFingers + getBFingers
  if (getAGuess == totalFingers) {
    return A_WINS
  } else if (getBGuess == totalFingers) {
    return B_WINS
  } else if (getAGuess == getBGuess) {
    return DRAW
  } else {
    return DRAW
  }
}
assert(winner(ZERO, GUESS_ZERO, ZERO, GUESS_FIVE) == A_WINS, 'Expected an outcome of A_wins')
assert(winner(ZERO, GUESS_FIVE, ZERO, GUESS_ZERO) == B_WINS, 'Expected an outcome of B_wins')
assert(winner(ZERO, GUESS_FIVE, ZERO, GUESS_ONE) == DRAW, 'Expected a Draw outcome')


assert(isOutcome(winner(ZERO, GUESS_ZERO, ZERO, GUESS_FIVE)))

forall(UInt, getAFingers =>
  forall(UInt, getAGuess =>
    forall(UInt, getBFingers =>
      forall(UInt, getBGuess =>
        assert(isOutcome(winner(getAFingers, getAGuess, getBFingers, getBGuess)))
      ))))

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player,
    wager: UInt,
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player,
    acceptWager: Fun([UInt], Null)
  });
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const wager = declassify(interact.wager)
    const getAFingers = declassify(interact.getFingers())
    const getAGuess = declassify(interact.getGuess())

  });
  A.publish(wager, getAFingers, getAGuess)
    .pay(wager);
  commit();

  // unknowable(B, A(getAFingers))

  // The second one to publish always attaches
  B.only(() => {
    interact.acceptWager(wager);
    const getBFingers = declassify(interact.getFingers());
    const getBGuess = declassify(interact.getGuess());
  });
  B.publish(getBFingers, getBGuess)
    .pay(wager);

  const outcome = winner(getAFingers, getAGuess, getBFingers, getBGuess)
  assert(outcome == A_WINS || outcome == B_WINS || outcome == DRAW)

  const [toA, toB] = outcome == A_WINS ? [2, 0] :
    outcome == B_WINS ? [0, 2] :
      [1, 1]
  transfer(toA * wager).to(A)
  transfer(toB * wager).to(B)
  commit()

  each([A, B], () => {
    interact.seeOutcome(outcome)
  });
  // write your program here
  exit();
});
