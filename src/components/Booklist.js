import React from "react";
import { books } from "../utils/constants";
import styled from "styled-components";
import { FaDollarSign } from "react-icons/fa";
import {
  Form,
  Card,
  Button,
  Container,
  Alert,
  ListGroup,
} from "react-bootstrap";
const Booklist = () => {
  const Book = (props) => {
    const { title, author, img, price } = props;
    return (
      <Card className="book">
        <Card.Img variant="top" src={img} />
        {/* <img src={img} alt={title} /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          {/* <button>add</button> */}
        </Card.Body>
        <ListGroup className="price list-group-flush">
          <ListGroup.Item>
            <FaDollarSign size={12} />
            {price}: Like New
            <Button variant="primary" className="addButton">
              add
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaDollarSign size={12} />
            {price}: Good
            <Button variant="primary" className="addButton">
              add
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };
  return (
    <Wrapper>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .booklist {
    width: 90vw;
    max-width: 1170px;
    margin: 5rem auto;
    display: grid;
    gap: 2rem;
  }
  @media screen and (min-width: 768px) {
    .booklist {
      grid-template-columns: repeat(3, 1fr);
    }
    .addButton{
      width: 40%
    }
  }
  // .book {
  //   background: #fff;
  //   border-radius: 1rem;
  //   
  //   text-align: center;
  //   display: grid;
  //   grid-template-columns: 1fr, 2fr;
  // }
  .addButton{
    text-align: center;
    width: 100px;
    float:right
  }
  
  .book img {
    width: 100%;
    // height: 100%;
    object-fit: cover;
    padding: 1rem;
  }

  .book h2 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  .book h4 {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    color: #617d98;
  }

  .book button {
    margin-top: 0.5rem;

  }

  .price h5{
    font-size: 0.8rem;
    line-height: 25px;
    display: inline-flex;
    align-items: center;
  }
  ,
`;

export default Booklist;