import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import { Sticky, StickyContainer } from 'react-sticky';
import { Header } from "../header";

let renderCount = 0;
class Stick extends PureComponent {
  render() {
    return (
      <div>
        <StickyContainer className="container relative">
          <div
            className="gap tall"
            style={{ background: "linear-gradient(#aaa, #fff)" }}
          >
            <div className="gap short" />
            <Sticky relative={true}>
              {({ style }) => (
                <Header style={style} renderCount={renderCount++} />
              )}
            </Sticky>
            <div className="gap short" />
            <h2>scrolling container</h2>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

export default Stick;
