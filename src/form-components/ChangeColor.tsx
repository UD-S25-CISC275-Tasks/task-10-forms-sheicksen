import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "lightblue",
    "coral",
];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState("red");
    let colorButtons = colors.map((colour) => (
        <Form.Check
            inline
            key={colour}
            type="radio"
            style={{ backgroundColor: colour }}
            label={colour}
            value={colour}
            checked={color === colour}
            onChange={(e) => {
                setColor(e.target.value);
            }}
        ></Form.Check>
    ));
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>{colorButtons}</Form.Group>
            You have chosen{" "}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
