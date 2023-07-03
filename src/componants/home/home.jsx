import React from "react";
import { Component } from "react";
import axios from "axios";
import './home.css'

import { Link } from "react-router-dom";
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
          <Link to={"/book/"+item.id}>
          <li key={item.id}>
            {item.title}
          
          </li>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
