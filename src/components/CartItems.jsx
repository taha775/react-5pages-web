import {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CartItems extends Component{
  constructor(){
    super()
    this.state={
      array : [],
      call : 0,
      name: 'asad',
      count:0

    }
  }

  //api call 
  async componentDidMount(){
   
    //life cycle
    await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json1)=>
  {
    console.log(json1)
    this.setState({
      array :json1,
      name:"ali",
      count:0


    })
    console.log("asjdhjashdjhj")
  
  });
  }

  //state kei setstate ko render na karya 
  //false render 
  //is lifecycle state value chang ho ya nhi 
  shouldComponentUpdate(preprops,pre){
    console.log(this.state.array)
    console.log(pre)
    if(pre.array!==this.state.array){
      return false

    }
    else{
      return true
    }
  }

  render(){
    const {array,call,name,count} = this.state //destructing
    return(
      <Container>
        <Row>
          {name} {count}
        </Row>
        <Row>
          {call}
          <button style={{marginTop:"100px"}}  onClick={()=>this.setState({
            call:this.state.call+1,
            count:this.state.count+1
          })}>Update </button>
        </Row>
       <Row>
        <Col className="text-center" lg={12} md={6} sm={6} xs={12}>
         <h1>Fetch Api Data</h1>
        </Col>
      
       </Row>
       <Row>
        
        {
          array.length==0 ? 
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
          :
          array.map((v,i)=>{
            return(
            
              <Col lg={4} key={i} className="mt-4">
              <Card style={{height:550}}>
              <Card.Img variant="top" src={v.image} style={{width:200,height:300,objectFit:"cover",textAlign:"center",display:"block",margin:"auto"}} />
              <Card.Body>
                <Card.Title>{v.title}</Card.Title>
                <Card.Text style={{height:100,overflow:"hidden"}}>
                {v.description}
                </Card.Text>
                <Button variant="warning" onClick={()=>alert("sgbdhbsdhb")}>Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            )
          })
        }
       </Row>
  
 
      
      </Container>
    )
  }

}

export default CartItems;


