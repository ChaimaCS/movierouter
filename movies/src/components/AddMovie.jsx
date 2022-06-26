import React,{useState}from 'react'
import {Button,Modal, Form}from 'react-bootstrap'

const AddMovie=({handleAddMovie}) =>{
    const [show, setShow] = useState(false);
  const [newMovie, setNewMovie]=useState({
    name:'', description:'',genre:'', rating:0, images:''
  })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const mySubmitHandler = (event) => {
        event.preventDefault();
        handleAddMovie(newMovie)
        setNewMovie({
            name: "",
            description: "",
            images: "",
            rating: "",
            genre: ""
        })
        handleClose()
    }
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }
    return (
      <>
        <Button variant="light" className="btn-lg btn btn-outline-secondary " style={{margin:20, textAlign:'center', justifyContent:'center'}} onClick={handleShow}>
          Add Movie of Your Choice
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
        <Form onSubmit={mySubmitHandler}>
              <Form.Control name='name' type='text' placeholder='name' onChange={handleChange} required/>
              <Form.Control name='description' type='text' placeholder='description' onChange={handleChange} required/>
              <Form.Control name='genre' type='text' placeholder='genre' onChange={handleChange} required/>
              <Form.Control name='rating' type='number' placeholder='rating' onChange={handleChange} required/>
              <Form.Control name='images' type='text' placeholder='Images' onChange={handleChange} required/>
              </Form>
              
          </Modal.Body>
          <Modal.Footer>           
          
            <Button variant="primary" onClick={()=>handleClose()}>Close</Button>
            <Button variant="secondary" onClick={mySubmitHandler}>Save Changes</Button>
          
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddMovie
  