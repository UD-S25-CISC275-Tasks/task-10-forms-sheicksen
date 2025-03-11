import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState("");
    const [isCorrect, setCorrect] = useState("");
    function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }
    function submit() {
        if (answer === expectedAnswer) {
            setCorrect("✔️");
        } else {
            setCorrect("❌");
        }
    }
    return (
        <div style={{ textAlign: "center", alignItems: "center" }}>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Input Answer: </Form.Label>
                <Form.Control onChange={updateAnswer}></Form.Control>
                <Button onClick={submit}>Check Answer</Button>
            </Form.Group>
            {isCorrect}
        </div>
    );
}
