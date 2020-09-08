import React, {useEffect, useState} from "react"
import {useRouter} from "next/router";
import axios from "axios";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import RatesTable from "../../components/RatesTable";
import Select from "../../components/form/Select";
import {Col, Row, Container} from "react-bootstrap";
import DatePicker from "react-datepicker";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";

const getDateString = date => {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return y + "-" + m + "-" + d;
}

const Base = (props) => {
    const [compareBase, setCompareBase] = useState("EUR");
    const [baseValue, setBaseValue] = useState(1);
    const [compareBaseValue, setCompareBaseValue] = useState(0);
    const [compareBaseRate, setCompareBaseRate] = useState(2);
    const {base, date, rates} = props.data;


    useEffect(() => {
        setCompareBaseValue(rates[compareBase])
        setCompareBaseRate(rates[compareBase])
        setBaseValue(1);
    },[rates]);


    const router = useRouter();

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case "baseValue":
                setBaseValue(value);
                setCompareBaseValue(value * compareBaseRate);
                break
            case "compareBaseValue":
                setCompareBaseValue(value);
                setBaseValue(value / compareBaseRate);
                break
            default: return;
        }
    }

    const handleCompareBaseChange = e => {
        setCompareBase(e.target.value);
        setCompareBaseRate(rates[e.target.value])
        setCompareBaseValue(baseValue * rates[e.target.value])
    }

    const handleBaseChange = e => {
        router.push(`/${date}/${e.target.value}`)
    }

    const handleDateChange = date => {

        router.push(`/${getDateString(date)}/${base}`)
    }

    const CustomDatePickerInput = ({ value, onClick }) => (
        <button className="btn btn-primary" onClick={onClick}>
            <i className="fas fa-calendar"></i> {value}{console.log(value)}
        </button>
    );

    return (
        <Container className={"bg-dark text-light p-5"} style={{ borderTopRightRadius: "50px", borderBottomLeftRadius: "50px",  }}>
            <Row className={"mb-5"}>
                <Col>
                    <h1>Showing results for {base}
                        <div className={"float-right"}>
                            <DatePicker selected={new Date(date)} customInput={<CustomDatePickerInput />} className="form-control" onChange={date => handleDateChange(date)} />
                            <Select handleChange={handleBaseChange} base={base} options={Object.keys(rates)} />
                        </div>
                    </h1>

                </Col>
            </Row>
            <Row className="bg-light p-4" style={{ margin: "0 0px" }}>
                <Col md="12">
                  <Select handleChange={handleCompareBaseChange} base={compareBase} options={Object.keys(rates)} compare />
                </Col>
                <Col md="6">
                  <FormGroup>
                      <InputGroup>
                          <InputGroup.Append>
                              <InputGroup.Text>
                                  {base}
                              </InputGroup.Text>
                          </InputGroup.Append>
                          <input type="text" value={baseValue} onChange={handleChange} name="baseValue" className={"form-control"} />
                      </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    {compareBase}
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <input type="text" value={compareBaseValue} onChange={handleChange} name="compareBaseValue" className={"form-control"} />
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RatesTable rates={rates} />
                </Col>
            </Row>
        </Container>
    )
}

export async function getServerSideProps(context) {
    const {date, base} = context.params;
    const result = await axios.get(`https://api.exchangeratesapi.io/${date}?base=${base}`)
    const data = await result.data;
    return {
        props: {data},
    }
}
export default Base;