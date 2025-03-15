import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setStudent] = useState(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                inline
                type="switch"
                id="edit-mode"
                label="Enable Edit Mode"
                checked={isEditMode}
                onChange={() => {
                    setEditMode(!isEditMode);
                }}
            />
            {isEditMode && (
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        disabled={!isEditMode}
                        onChange={updateName}
                    ></Form.Control>
                    <Form.Check
                        disabled={!isEditMode}
                        id="is-student"
                        type="checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={() => {
                            setStudent(!isStudent);
                        }}
                    ></Form.Check>
                </Form.Group>
            )}
            <br></br>
            {name} is {isStudent ? "" : "not"} a student.
        </div>
    );
}
