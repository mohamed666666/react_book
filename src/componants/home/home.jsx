import React from "react";
import { Component } from "react";
import axios from "axios";
import './home.css'

class Home extends Component {
  state = { books: [] };

  showdata = () => {
    axios
      .get("http://localhost:8000/books", this.state)
      .then((res) => this.setState({ books: res.data }));
  };

  componentDidMount() {
    this.showdata();
  }

  render() {
    const newItems = this.state.books;
    return (
      <div className="book">
        {newItems.map((item) => (
          <li key={item.id}>
            {item.title}
          
          </li>
        ))}
      </div>
    );
  }
}

export default Home;
