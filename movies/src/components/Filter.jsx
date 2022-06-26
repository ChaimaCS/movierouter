import React, { useState } from 'react';
import { Form, Col,Row } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const Filter = ({setFilters, rate, setRate}) => {
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    setFilters(e.target.value)
    }

    const ratingChanged = (newRating) => {
    setRate(newRating) 
    };
    return (
    <div >
        <Row>
            <Col>
                <Form.Control size="lg" type="text" placeholder="Search" value={search} width="200px" onChange={handleSearch} />
            </Col>
            <Col>
            <ReactStars
            setRate={setRate}
            rate={rate}
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
            </Col>
        </Row>
        


    </div>);
}

export default Filter;