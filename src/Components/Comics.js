import React from "react";

class Comics extends React.Component {
  render() {
    const comicData = this.props.comicData;

    return (
      <div className="comic">
        <cite>
          "Published date: {comicData.year}-{comicData.month}-{comicData.day}"
        </cite>
        <h2>
          #{comicData.num}: &nbsp;
          {comicData.safe_title}
        </h2>
        <img src={comicData.img} alt={`XKCD # ${comicData.num}`}></img>
        <br />
        <br />
        {comicData.transcript !== "" ? (
          <h3>Transcript</h3>
        ) : (
          <p>Transcript has not released yet</p>
        )}
        <p>{comicData.transcript}</p>
      </div>
    );
  }
}
export default Comics;
