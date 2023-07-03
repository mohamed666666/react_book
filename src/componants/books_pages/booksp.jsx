import React from "react";
import axios from "axios";

import { Component } from "react";

import { useParams } from "react-router-dom";

class Book extends Component {
    
    state = { pages:[]  } 

    showdata = () => {
       
        axios
          .get("http://localhost:8000/books/"+this.props.id['id'], this.state)
          .then((res) => this.setState({ pages: res.data }));
      };
    
      componentDidMount() {
        this.showdata();
      }
    render() { 
        return (
           <div  >
            {
                this.state.pages.map((item)=>(
                    <div key={item.id} className="page">
                    <h3 >{item.number}</h3>
                    <span>{item.content}</span>
                    </div>
                ))
            }

           </div>
        );
    }
}
 

const BookWrapper = () =>{
    const id=useParams();

    return (
        <Book id ={id}/>
    )
}

export default BookWrapper;