import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
 const [data,setdata] = useState([{
  id:1,
  name:"fullstack developer",
  duration : "2 hours",
  img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/top_full_stack.jpg",
  discription:"Full stack development involves working with both front-end and back-end technologies to build dynamic web applications. A full stack developer is skilled in languages like JavaScript, React for UI, and Node.js or Python for server-side logic. They handle databases, APIs, and deployment to create fully functional applications. Mastering full stack development allows developers to work on all aspects of a project, making them highly versatile.",
  disquote:"Full stack development bridges creativity and logic, turning ideas into fully functional applications. A true full stack developer thrives in both front-end elegance and back-end efficiency.",
 },{
  id:2,
  name:"data science",
  duration:"2 hours",
  img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
  discription:"Data science is the process of extracting insights from structured and unstructured data using statistical methods, machine learning, and AI. It helps businesses make data-driven decisions, predict trends, and automate processes efficiently. A data scientist works with tools like Python, SQL, and TensorFlow to analyze massive datasets. The field combines mathematics, programming, and domain expertise to uncover meaningful patterns in data.",
  disquote:"A data science course typically covers topics like statistical analysis, machine learning, data visualization, and Python programming. It equips learners with skills to analyze complex datasets, build predictive models, and apply AI-driven insights in various industries.",

 },{
  id:3,
  name:"mechine learning",
  duration:"3 hours",
  img:"https://blog.integral-system.fr/wp-content/uploads/2020/02/33797061.jpg",
  discription:"A machine learning course covers fundamental concepts like algorithms, data preprocessing, and model training. It teaches techniques such as supervised and unsupervised learning, neural networks, and deep learning. Students gain hands-on experience with Python libraries like TensorFlow and Scikit-learn to build predictive models. The course prepares learners to apply AI-driven solutions across various industries.",
  disquote:"A machine learning course covers key topics like supervised and unsupervised learning, neural networks, and deep learning algorithms. It equips learners with hands-on experience in building AI models using Python libraries such as TensorFlow and Scikit-learn. ",
 }])

  return (
   
       <div>
         <div className='navit'>
        <Navbar bg="light" data-bs-theme="light">
       <Container>
       <Nav className="me-auto">
           <Nav.Link href="/home">All</Nav.Link>
           <Nav.Link href="/home/fsd">FullStack Web Development</Nav.Link>
           <Nav.Link href="/home/fsd/datasc">DataScience</Nav.Link>
           <Nav.Link href="/home/fsd/datasc/mechlearn">mechineLearning</Nav.Link>
         </Nav>
        
       </Container>
     </Navbar>
</div>
       {/* <BrowserRouter> */}
       <Routes> 
<Route path = "/home" element = {<Home info = {data}/>}/>

<Route path = "/home/fsd" element = {<Fsd info = {data}/>}/>
<Route path = "/home/fsd/datasc" element = {<Datascience info = {data}/>}/>
<Route path = "/home/fsd/datasc/mechlearn" element = {<Mechinelearning  info = {data}/>}/>

  </Routes>
  {/* </BrowserRouter> */}
        
       </div>
    
   
  )
}



 

 function Home({info}){
  const [show,setShow]=useState(true);
  const togg = {
    display:show ? "block":"none",
   
  }
  function toggledis(){
    setShow(!show)
  }
  return(
    <div>
       <div className='crds'>
<div className="row">
  {
 info.map((ifoo)=>(
  <div className="col-md-4 col-lg-6" key={ifoo.id}>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ifoo.img}/>
      <Card.Body>
        <Card.Title>{ifoo.name}</Card.Title>
        <button onClick={()=>toggledis()}>"discription"</button>
        <Card.Text style={togg}>
         {ifoo.disquote}
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
      ))
     }
  
</div>
     
     </div>
     
    </div>
  )
 }

 function Fsd({info}){
  const fsdInfo = info.filter((fll) => fll.name == "fullstack developer")
  return(
<div>
  {
   fsdInfo.map((items)=>(
   <div className="mern">
     <Card className="bg-dark text-white">
      <Card.Img src={items.img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
         {items.discription}
        </Card.Text>
        <Card.Text><span>Last updated 3 mins ago</span></Card.Text>
      </Card.ImgOverlay>
    </Card>
   </div>
   ))
  }
</div>
  )
 }

 function Datascience({info}){
  const dasc = info.filter((flk) => flk.name == "data science");

  return(
<div>
  {
   dasc.map((dc)=>(
    <div className="datacnt">
      <Card className="bg-dark text-white">
      <Card.Img src={dc.img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{dc.name}</Card.Title>
        <Card.Text>
          {dc.discription}
        </Card.Text>
        <Card.Text><span>Last updated 3 mins ago</span></Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
   ))
  }
</div>
  )
 }

 function Mechinelearning({info}){
  const mechlearning = info.filter((mcl) => mcl.name == "mechine learning");
  return(
    <div>
    {
    mechlearning.map((ml)=>(
      <div className="mchln">
        <Card className="bg-dark text-white">
        <Card.Img src={ml.img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{ml.name}</Card.Title>
          <Card.Text>
           {ml.discription}
          </Card.Text>
          <Card.Text><span>Last updated 3 mins ago</span></Card.Text>
        </Card.ImgOverlay>
      </Card>
      </div>
     ))
    }
  </div>
  )

 }
export default App
