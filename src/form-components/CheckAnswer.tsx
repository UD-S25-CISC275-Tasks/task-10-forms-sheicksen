import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [isCorrect, setCorrect] = useState(false);
    function checkAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value === expectedAnswer) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }
    return (
        <div style={{ textAlign: "center", alignItems: "center" }}>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Input Answer: </Form.Label>
                <Form.Control onChange={checkAnswer}></Form.Control>
            </Form.Group>
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}
