import * as React from 'react'
import { checkCoins } from '../helpers/checkCoins'

interface IState {
  coins: number;
  status: string;
}

export default class Achieves extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    }
  public state = {
      status: 'beginner'
  }

  componentWillMount() {
    this.setState(checkCoins(this.props.coins));
  }

  componentWillReceiveProps() {
    this.setState(checkCoins(this.props.coins));
  }

  render() {
    var {status} = this.state;
    return (
        <div className="achieves">{status}</div>
    );
  }
}
