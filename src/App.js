import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import PropTypes from 'prop-types'

import imagesApi from "./service/news-api";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import LoaderGallery from "./components/Loader";
import Button from "./components/Button";
// import Modal from "./components/Modal";

class App extends Component {
  state = {
    hits: [],
    search: "",
    loading: false,
    error: null,
    status: "idle",
    currentPage: 1,
    currentPageHits: [],
    showModal: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.search;
    const nextName = this.state.search;
    if (prevName !== nextName) {
      this.fetchHits();
    }
  }

  addSearch = (search) => {
    this.setState({
      search: search,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { search, currentPage } = this.state;
    const options = { search, currentPage };

    this.setState({ loading: true });

    imagesApi
      .fetchHits(options)
      .then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
          currentPageHits: [...hits],
        }));

        if (hits.length === 0) {
          this.setState({
            error: `No data on your request "${search}"`,
          });
        }
      })

      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { error, loading, currentPageHits } = this.state;
    const renderLoadMore = !(currentPageHits.length < 12) && !loading;
    return (
      <>
        <Searchbar onSubmit={this.addSearch} />
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

        <ImageGallery hits={this.state.hits} />

        {loading && <LoaderGallery />}

        {renderLoadMore && <Button onFetchHits={this.fetchHits} />}

        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
