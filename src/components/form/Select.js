import React from "react"
import InputGroup from "react-bootstrap/InputGroup";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";

const Select = ({options, base, handleChange, compare}) => {
    const generateOptions = options.map((option, key) => <option key={key} value={option}>{option}</option>);
    let helpText;
    if(compare) {
        helpText = <Form.Text muted>
            Compare rates against another currency
        </Form.Text>
    }
    return (
        <FormGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><i className="fas fa-coins"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <select name="base" value={base} className="form-control" onChange={handleChange}>
                    {generateOptions}
                </select>
            </InputGroup>
            {helpText}
        </FormGroup>
    )
}


export default Select;