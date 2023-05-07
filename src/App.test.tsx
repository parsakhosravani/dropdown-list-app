import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "../src/components/organisms/Dropdown";

describe("Dropdown", () => {
  const items = [
    { id: 1, label: "Item 1", icon: "" },
    { id: 2, label: "Item 2", icon: "" },
    { id: 3, label: "Item 3", icon: "" },
  ];

  test("renders with default props", () => {
    render(<Dropdown items={items} />);
    const input = screen.getByPlaceholderText(
      "Select an item or write it down to add!"
    );
    expect(input).toBeInTheDocument();
  });

  test("opens and closes the dropdown when the input is clicked", () => {
    render(<Dropdown items={items} />);
    const input = screen.getByPlaceholderText(
      "Select an item or write it down to add!"
    );
    fireEvent.click(input);
    const firstItem = screen.getByText("Item 1");
    expect(firstItem).toBeInTheDocument();
    fireEvent.click(input);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  test("selects an item from the dropdown", () => {
    render(<Dropdown items={items} />);
    const input = screen.getByPlaceholderText(
      "Select an item or write it down to add!"
    ) as HTMLInputElement;
    fireEvent.click(input);
    const firstItem = screen.getByText("Item 1");
    fireEvent.click(firstItem);
    expect(input.value).toEqual("Item 1");
    fireEvent.change(input, { target: { value: "New Item" } });
  });

  test("adds a new item to the dropdown", () => {
    render(<Dropdown items={items} />);
    const input = screen.getByPlaceholderText(
      "Select an item or write it down to add!"
    );
    fireEvent.change(input, { target: { value: "New Item" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    const newItem = screen.getByText("New Item");
    expect(newItem).toBeInTheDocument();
  });
});
