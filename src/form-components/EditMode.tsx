import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setStudent] = useState(false);
    if (name === "Bob") {
        setName("Your Name");
        setStudent(false);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                id="edit-mode"
                type="switch"
                label="Enable Edit Mode"
                checked={isEditMode}
                onChange={() => {
                    setEditMode(!isEditMode);
                }}
            ></Form.Check>
            <Form.Group>
                <Form.Control
                    disabled={!isEditMode}
                    onChange={updateName}
                ></Form.Control>
                <Form.Check
                    disabled={!isEditMode}
                    label="Student"
                    checked={isStudent}
                    onChange={() => {
                        setStudent(!isStudent);
                    }}
                ></Form.Check>
            </Form.Group>
            {name} is {isStudent ? "" : "not"} a student.
        </div>
    );
}
