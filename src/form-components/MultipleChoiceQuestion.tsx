import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState(options[0]);
    console.log(options, expectedAnswer);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>
                    Peasants dont get the question. Guess the answer:
                </Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(e) => {
                        setSelected(e.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selected === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
