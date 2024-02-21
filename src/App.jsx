import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactEChartComponent from './components/react-echart'
// import barChartsOption from './layouts/bar'
// import simpleNetworkOption from './layouts/simple-network'
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap"
import lesMiserablesDataset from './datasets/graph/lesMiserables';
import createCircularLayoutOptions from './layouts/network/circular';
import createForceLayoutOptions from './layouts/network/force';
import webDepsDataset from './datasets/graph/webDeps';
import { useEffect, useState } from 'react';



const LayoutTypes = {
  circularLayout : "circularLayout",
  forceLayout: "forceLayout"
}

console.log("====LayoutTypes",  LayoutTypes)

function App() {

  const [options, setOptions] = useState(null);
  const [selectedLayout, setSelectedLayout] = useState(null)


  useEffect(() => {
    console.log("selectedLayout is", selectedLayout)
    if (selectedLayout === LayoutTypes.circularLayout){
      setOptions(createCircularLayoutOptions(lesMiserablesDataset))
    }
    else if (selectedLayout === LayoutTypes.forceLayout){
      setOptions(createForceLayoutOptions(webDepsDataset))
    }
  }, [selectedLayout]); // refresh the data when layout is updated

 
  return (
    <>
      <Container fluid>
        <Row>
          <Col><h1>Hello World - testing echarts</h1> <hr /> </Col>
        </Row>
        <Row>
          <Col md={2}>
            <ListGroup>
              {
                Object.entries(LayoutTypes).map(([key, value]) =>{
                  return <ListGroup.Item key={key} action onClick={()=> setSelectedLayout(value)}>{value}</ListGroup.Item>
                })
              }
            </ListGroup>
          </Col>
          <Col md={10}>
            <Card style={{height: "950px", width: "100%"}}>
              <Card.Header>{selectedLayout? <span>{selectedLayout}</span>: "No Layout selected"}</Card.Header>
              {options 
                ? <ReactEChartComponent options={options} styles={{ with: "100%", height: "100%" }} />
                : <Card.Body className='text-muted'>Select a layout</Card.Body>
              }
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col md={4}>
            <Card>
              <ReactEChartComponent options={simpleNetworkOption} styles={{ with: "600px", height: "450px" }} />
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <ReactEChartComponent options={lesMiserablesCircularLayoutData} styles={{ with: "1000px", height: "950px" }} />
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <ReactEChartComponent options={webDepsForceLayoutData} styles={{ with: "1000px", height: "950px" }} />
            </Card>
          </Col>
        </Row> */}

      </Container>
    </>
  )
}

export default App
