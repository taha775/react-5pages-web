import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
  return (
    <>
    <div style={{display:"inline-block   "}}>
    <Card style={{ width: '18rem',marginTop:"100px" }}>
      <Card.Img variant="top" src="https://www.pcworld.com/wp-content/uploads/2023/04/IMG_20190615_214330.jpg?quality=50&strip=all&w=1024" />
      <Card.Body>
        <Card.Title>Gaming Pc</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginTop:"100px" }}>
      <Card.Img variant="top" src="https://www.pcworld.com/wp-content/uploads/2023/04/IMG_20190615_214330.jpg?quality=50&strip=all&w=1024" />
      <Card.Body>
        <Card.Title>Gaming Pc</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginTop:"100px" }}>
      <Card.Img variant="top" src="https://www.pcworld.com/wp-content/uploads/2023/04/IMG_20190615_214330.jpg?quality=50&strip=all&w=1024" />
      <Card.Body>
        <Card.Title>Gaming Pc</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>

   
  );
}

export default Product;