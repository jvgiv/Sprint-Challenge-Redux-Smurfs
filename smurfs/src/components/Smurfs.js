import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf} from '../actions'


class Smurfs extends Component {
    constructor() {
        super();
        this.state = {
            smurfInfo: []
        }
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

  render() {
      console.log(this.props.smurfInfo)
    return (
      <div>
          <h1>Smurfs:</h1>
        {this.props.smurfInfo.map(eachSmurf => (
            <div>
                <h3>Name: {eachSmurf.name}</h3>
                <h3>Age: {eachSmurf.age}</h3>
                <h3>Height: {eachSmurf.height}</h3>
            </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        smurfInfo: state.smurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(Smurfs)