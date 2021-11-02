import React from "react";
import { withRouter } from "react-router-dom";

class ComicControl extends React.Component {
  render() {
    const { currentComic, buttonClick } = this.props;

    return (
      <nav>
        <button
          className="previousButton"
          onClick={(e) => {
            buttonClick(currentComic - 1);
          }}
        >
          <span className="previous">Previous</span>
        </button>
        <button
          className="nextButton"
          onClick={(e) => {
            buttonClick(currentComic + 1);
          }}
        >
          <span className="next">Next</span>
        </button>
        <br />
        <button
          className="random"
          onClick={(e) => {
            buttonClick(Math.floor(Math.random() * currentComic));
          }}
        >
          <span>Random Comic</span>
        </button>
        <button className="current" onClick={() => buttonClick("latest")}>
          <span>Lastest Comic</span>
        </button>
      </nav>
    );
  }
}
export default withRouter(ComicControl);
