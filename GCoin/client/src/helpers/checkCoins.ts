export const checkCoins = (c: number) => {
  if (c > 5000) {
    return ({status: 'you gone too far dude'});
   } else if (c > 1000) {
    return ({status: 'hackathon winner'});
   } else if (c > 500) {
    return ({status: 'successful typescripter'});
  } else if (c > 300) {
     return ({status: 'successful typescripter'});
  } else if (c > 150) {
    return ({status: 'successful csser'});
  } else if (c > 100) {
     return ({status: 'perfect miner'});
  } else if (c > 50) {
    return ({status: 'great miner'});
  } else if (c > 10) {
    return ({status: 'keep going'});
  } else if (c > 10) {
    return ({status: 'little miner'});
  }
  return {status: '******'};
}
