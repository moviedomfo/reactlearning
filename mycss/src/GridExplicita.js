import React from "react";

const GridExplicita = () => {
  return (
    <div className="App-header">
      <div className="">
        <section className="container grid-repeat">
          <div className="col one">One</div>
          <div className="col two">
            <h2>Two</h2>
          </div>
          <div className="col three">
            <h3>Tree</h3>
          </div>
          <div className="col four">Four</div>
          <div className="col ">Quinta</div>
        </section>

        <div className=" container grid-repeat">
          <div className="col one">One</div>
          <div className="col two">
            <h2>Two</h2>
          </div>
          <div className="col three">
            <h3>Tree</h3>
          </div>
          <div className="col four">Four</div>
          <div className="col five">Five</div>
          <div className="col  six">Six</div>
          <div className="col  six">Six</div>

          <div className="col ">
            The text will be displayed exactly as written in the HTML source
            code. Text in a pre element is displayed in a fixed-width font, and
            it preserves both spaces and line breaks
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridExplicita;
