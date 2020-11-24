import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Tower of Hanoi</h1>
        <div className="content">
          <h4> Explanation:</h4>
          <p>1. As long as length greater than 0: </p>
          <p>
            2. Move the disk at index (length -1) from the initial row to the
            temporaryRow.
          </p>
          <p>
            3. Move the disk at index (length) from the initial row to final.
          </p>
          <p>
            4. Move the disk on the temporaryRow index (length -1) to the
            target.
          </p>
          <p>5. Recursivly repeat until a length of zero is returned.</p>
          <img
            className="image"
            alt="Diagram"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Tower_of_Hanoi_recursion_SMIL.svg/1024px-Tower_of_Hanoi_recursion_SMIL.svg.png"
          />
          <h4>Time Complexity: O(n^2 -1)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
