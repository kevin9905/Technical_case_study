import React from "react";
import "./App.css";
import Header from "./Header";
import Comics from "./Comics";
import ComicControl from "./ComicControl";
import { connect } from "react-redux";
import { fetchChapter } from "./state";

class MainPage extends React.Component {
  changePage = (nums) => {
    this.props.history.push(`/${nums}`);
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const { fetchComic } = this.props;
    fetchComic(id);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id;
      const { fetchComic } = this.props;
      fetchComic(id);
    }
  };

  render() {
    const { comicData } = this.props;
    return (
      <div className="App">
        <Header />
        <Comics comicData={comicData} />
        <ComicControl
          getComic={this.getComic}
          currentComic={comicData.num}
          buttonClick={this.changePage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ comicData: state.comics.data });
const mapDispatchToProps = (dispatch) => {
  return {
    fetchComic: (id) => dispatch(fetchChapter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
