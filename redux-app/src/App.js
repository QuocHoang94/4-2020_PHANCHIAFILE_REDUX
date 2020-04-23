
import React, { Component } from 'react'
import './App.css';
import {connect} from 'react-redux';
import * as actions from './actions/index';
import { bindActionCreators } from 'redux';
import * as indexAction from './actions/index';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class App extends Component {
  myEvent = ()=>{
    const { allAction } = this.props;
    const { addTask } = allAction;
    var supperman = {
      id:3,
      content:'Game moving on',
    }
    addTask(supperman);
    const { task1 } = this.props;
    console.log('gia tri get object 1: ',task1);
    // this.props.onAdd(supperman);
  }
  myEvent1 = ()=>{
    console.log('gia tri get object 2', this.props.task2);
  }
  myEvent2 = ()=>{
    const { allAction } = this.props;
    const { toggleForm,openForm,closeForm } = allAction;
    // toggleForm();
    openForm()
    console.log(this.props.task3);
  }
  closeModal = ()=>{
    const { allAction } = this.props;
    const { closeForm } = allAction;
    closeForm();
  }
  render() {

    return (
    <div className="App btn-group ">
        <button onClick={()=>this.myEvent()} type="button" className="btn btn-success">Success</button>
        <button onClick={()=>this.myEvent1()} type="button" className="btn btn-success">Success</button>
        <button onClick={()=>this.myEvent2()} type="button" className="btn btn-success">Success</button>
        <Modal
          isOpen={this.props.task3}
          style={customStyles}
          contentLabel="Example Modal">
          <button onClick={()=>this.closeModal()}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
          </form>
        </Modal>
    </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    task1: state.needy.myObject,
    task2: state.needy.myNewobject,
    task3: state.needy.checkForm
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      // onAdd:(tasks)=>{
      //   dispatch(actions.addTask(tasks));
      // }
      allAction: bindActionCreators(indexAction, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
// Hoang dep trai