import * as React from 'react'
import Kek from './kek'
import Achieves from './achieves'

interface IState {
  coins: number;
  status: string;
}

export default class Father extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        coins: 0,
        status: 'beginner',
        loaded: false
      }
    this.setCoins = this.setCoins.bind(this);
    this.componentCleanup = this.componentCleanup.bind(this);
    }

  public setCoins = (coins: number) => {
    this.setState({coins});
  }
  componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanup);
    fetch('/getcoins', {
      method: 'GET',
      headers: {
      }
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({coins: data.coins});
      this.setState({loaded: true});
    });
  }

  componentCleanup() {
    fetch('/savecoins', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ coins: this.state.coins })
    });
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  render() {
    return this.state.loaded ? (
      <>
        <Kek coins={this.state.coins} setCoins={this.setCoins}/>
        <Achieves coins={this.state.coins} />
      </>
    ) : (<div>KEKEKEKEK</div>)
  }
}
