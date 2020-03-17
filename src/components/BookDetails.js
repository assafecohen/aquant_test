import React, { useContext, Fragment, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookDetails = ({ book }) => {
  const [titleInput, setTitleInput] = useState(book.title);
  const [authorInput, setAuthorInput] = useState(book.author);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { dispatch } = useContext(BookContext);

  console.log(book.id);
  return (
    <Fragment>
      <li>
        <div className='title'>{book.title}</div>
        <div className='author'>{book.author}</div>
        <button onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
          Delete
        </button>
        <button onClick={handleShow}>Edit</button>
      </li>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='book title...'
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Book Author</Form.Label>
              <Form.Control
                type='text'
                placeholder='book author...'
                value={authorInput}
                onChange={e => setAuthorInput(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              dispatch({
                type: 'EDIT_BOOK',
                book: {
                  title: titleInput,
                  author: authorInput,
                  id: book.id
                }
              });
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default BookDetails;
