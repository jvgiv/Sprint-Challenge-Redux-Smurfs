import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf} from '../actions'


class Smurfs extends Component {
    constructor() {
        super();
        this.state = {
            smurfInfo: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    handleChanges = e => {
        
        this.setState({ smurfInfo: {
            ...this.state.smurfInfo,
            [e.target.name]: e.target.value 
        }})
    }

    newSmurf = e => {
        console.log(this.state)
        e.preventDefault();
        this.props.addSmurf(this.state.smurfInfo)
        // this.setState({ })
    console.log("addbutton")
    }

  render() {
    //   console.log(this.props.smurfInfo)
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
        <input 
            
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.smurfInfo.name}
            onChange={this.handleChanges}
        />
        <br/>
         <input 
            
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.smurfInfo.age}
            onChange={this.handleChanges}
        />
        <br/>
         <input 
            
            type="text"
            name="height"
            placeholder="Height"
            value={this.state.smurfInfo.height}
            onChange={this.handleChanges}
        />
        <br/>
        <button onClick={this.newSmurf}>Add Smurf</button>
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