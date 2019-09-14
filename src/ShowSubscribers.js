import React,{Component} from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubcribers extends Component {
   
//  constructor(){
//    super();
//    this.state = {
//      subscribersListToShow: []
//    }
//    console.log("Constructor called");
//  }

//  componentDidMount(){

//   let newSubsciber={
//     id:1,
//     name:'Yogansh Gupta',
//     phone: '8893929932'
//   }

//   let subscriberList = this.state.subscribersListToShow;
//   subscriberList.push(newSubsciber);
//   this.setState({subscribersListToShow: subscriberList})
//   console.log("ComponentDidMount called");
//   console.log("State",this.state);

//  }
  
 clickHandler(message){
    alert(message)
  }
  
  render(){
    console.log("Render called");

  //   let subscribers = [
  //   {
  //     id:1,
  //     name:"Yogansh",
  //     phone:"9599168622"
  //   },
  //   {
  //     id:2,
  //     name:"Rahul",
  //     phone:"9599184939"
  //   }
  // ]

  return (
    <div>
      <Header heading="Phone Directory" />
        <div className="component-body-container">
         <Link to="./add"><button className="custom-btn add-btn">Add</button></Link> 

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.subscribersList.map(sub=>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Delete clicked")}>Delete</button>
                </span>

            </div>
          })}
      </div>
    </div>

  );
 }
}
export default ShowSubcribers;
