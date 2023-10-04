import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserInput } from '../../models/user';


export interface AddUserFormProps {
    onAddUser: (userInput: UserInput) => void;
}

const AddUserForm = ({ onAddUser }: AddUserFormProps): JSX.Element => {

    const [userInput, setUserInput] = useState<UserInput>({ name: '', age: 0 });
    // const [errors, setErrors] = useState({});

    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onAddUser(userInput);
    };

    const inputChangeHandler = (field: string, value: string | number) => {
        // v. 1
        setUserInput((prevInput) => {
            return (
                {
                    ...prevInput,
                    [field]: value,
                }
            );
        });

        // // v. 2
        // setUserInput((prevInput) => ({
        //     ...prevInput,
        //     [field]: value,
        // }))

        // // v. 3
        // setUserInput((prevInput) => ({ ...prevInput, [field]: value }));
    };

    return (
        <div>
            <Form noValidate onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        onChange={(event) => inputChangeHandler('name', event.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter your age"
                        onChange={(event) => inputChangeHandler('age', +event.target.value)}
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddUserForm;
