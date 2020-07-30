import React from "react";
import { render } from "@testing-library/react";
import HomeContainer from "./HomeContainer";

describe("HomeContainer spec", () => {
  it("should render Hello world!", () => {
    const { getByText } = render(<HomeContainer />);
    const textElement = getByText("Hello world!");
    expect(textElement).toBeInTheDocument();
  });
});
