import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [reqAttempts, setReqAttempts] = useState("");

    function useAttempt() {
        setAttempts(attempts - 1);
    }
    function addAttempts() {
        if (!isNaN(parseInt(reqAttempts))) {
            setAttempts(parseInt(reqAttempts) + attempts);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    onChange={(event) => {
                        setReqAttempts(event.target.value);
                    }}
                ></Form.Control>
                <Button onClick={addAttempts}>Gain</Button>
                <Button
                    onClick={useAttempt}
                    disabled={attempts > 0 ? false : true}
                >
                    Use
                </Button>
            </Form.Group>
            Attempts Remaining: {attempts}
        </div>
    );
}
