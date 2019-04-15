import * as React from 'react'

interface IState {
  coins: number;
  miner: boolean;
  minerText: string;
}

export default class Kek extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.addCoin = this.addCoin.bind(this);
    this.switchMiner = this.switchMiner.bind(this);
    }

  public state = {
      miner: false,
      minerText: 'miner OFF',
      interval: 0
    }

  public addCoin = (e: any) => {
    this.props.setCoins(this.props.coins + 1);
  }

  public switchMiner = async (e: any) => {
    if (this.state.miner) {
      this.setState({
        miner: false,
        minerText: 'miner OFF'
      });
      clearInterval(this.state.interval);
    } else {
      this.setState({
        miner: true,
        minerText: 'miner ON '
      });
      this.setState({interval: window.setInterval(() => {
        this.props.setCoins(this.props.coins + 1);
      }, 500)});
    }
  }

  render() {
    var {minerText} = this.state;
    return (
      <div>
        <div className="appName">GCoin mining</div>
        <div className="upperElem">
        <div className="coin">
          <div className="heads">G</div>
        </div>
          <div className="Coins">
            <div className="coins-number">{this.props.coins}</div>
          </div>
          <div className="Buttons">
            <button type="button" className="Coins-button action-button shadow animate yellow" onClick = {this.addCoin}>+1 GCoin</button>
            <button type="button" className="Miner-button action-button shadow animate yellow" onClick = {this.switchMiner}>{minerText}</button>
          </div>
        </div>
      </div>
    );
  }
}
