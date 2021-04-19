import React from "react";
import axios from "axios";
import {
  Container,
  Col,
  Tab,
  Tabs,
  Form,
  Button,
  ListGroup,
  Breadcrumb
} from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faEdit} from '@fortawesome/free-solid-svg-icons'

function ViewFile(props) {
  function takeData() {
    axios.get('https://localhost:44345/api/listreport',{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }})
    .then(res =>{
      const reports = res.data
      console.log(reports)
    })
  };

  return (
    <div className='viewFile__bg'>
      <Container>
        <ListGroup >
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2' href='/detail'>The report 1</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2'  href='#'>The report 2</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content' ><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2' href='#'>The report 3</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2' href='#'>The report 4</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
        </ListGroup>
        <Button onClick={takeData}> Let Go </Button>
      </Container>
    </div>
  );
}

export default ViewFile;
