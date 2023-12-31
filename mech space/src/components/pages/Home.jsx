import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './../CSS/Home.css'
import img1 from './../../assets/download.jpg'

const Home = () => {


    const sectionData = [
        {
          id: 1,
          title: 'Aeronautics',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 2,
          title: 'Robotics',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 3,
          title: 'Automation',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 4,
          title: 'Research',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 5,
          title: 'Nano-technology',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 6,
          title: 'Design',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 7,
          title: 'Industrial design',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 8,
          title: 'Manufacturing',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        },
        {
          id: 9,
          title: 'Cryogenics',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio pariatur quis nobis aut eligendi harum. Vitae, suscipit ea ipsa atque quod praesentium dolor minima.',
          link: 'https://www.google.com'
        }
    ]
    
  return (
    <div className='home'>
      <section id='blog' className="block">
      <h2>Areas of study</h2>
          <Container fluid>
              <Row xs={1} md={3} className='g-4'>
                  {
                      sectionData.map(blog => {
                          return(
                              <Col key={blog.id}>
                                  <div className='holder'>
                                      <Card>
                                          <Card.Body>
                                              <Card.Title>{blog.title}</Card.Title>
                                              <Card.Text>
                                                  {blog.description}
                                              </Card.Text>
                                              <a href="#" className='btn btn-primary'>Read more <i className='fas fa-chevron-right'></i></a>
                                          </Card.Body>
                                      </Card>
                                  </div>
                              
                              </Col>
                          )
                      })
                  }

              </Row>
          </Container>
      </section>

      <section className="topics">
        <div className="container">
          <div className="row row1">
            <div className="col-md-6">
              <h2>Resources</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident, 
                sint harum labore non ex iusto a possimus distinctio fugiat blanditiis 
                porro sed soluta? Magnam, dolores numquam a accusamus ab nobis expedita 
                eum modi animi laboriosam libero nemo odio fuga quasi delectus, atque, 
                debitis corporis consectetur maxime. Sequi, deleniti culpa maxime 
                doloribus nam voluptatibus quaerat consequuntur temporibus in impedit 
                architecto earum voluptas aspernatur eius dolor vitae ab debitis pariatur 
                dicta repellendus ullam 
              </p>
            </div>
            <div className="col-md-6">
              <div className='img'>
                <img  src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <div className='img'>
                <img  src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-6 offerings-content-container">
              <h2>Events</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident, 
                sint harum labore non ex iusto a possimus distinctio fugiat blanditiis 
                porro sed soluta? Magnam, dolores numquam a accusamus ab nobis expedita 
                eum modi animi laboriosam libero nemo odio fuga quasi delectus, atque, 
                debitis corporis consectetur maxime. Sequi, deleniti culpa maxime 
                doloribus nam voluptatibus quaerat consequuntur temporibus in impedit 
                architecto earum voluptas aspernatur eius dolor vitae ab debitis pariatur 
                dicta repellendus ullam 
              </p>
            </div>
          </div>
          <div className="row row1">
            <div className="col-md-6">
              <h2>Publications</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident, 
                sint harum labore non ex iusto a possimus distinctio fugiat blanditiis 
                porro sed soluta? Magnam, dolores numquam a accusamus ab nobis expedita 
                eum modi animi laboriosam libero nemo odio fuga quasi delectus, atque, 
                debitis corporis consectetur maxime. Sequi, deleniti culpa maxime 
                doloribus nam voluptatibus quaerat consequuntur temporibus in impedit 
                architecto earum voluptas aspernatur eius dolor vitae ab debitis pariatur 
                dicta repellendus ullam 
              </p>
            </div>
            <div className="col-md-6">
              <div className='img'>
                <img  src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <div className='img'>
                <img  src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h2>Courses</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident, 
                sint harum labore non ex iusto a possimus distinctio fugiat blanditiis 
                porro sed soluta? Magnam, dolores numquam a accusamus ab nobis expedita 
                eum modi animi laboriosam libero nemo odio fuga quasi delectus, atque, 
                debitis corporis consectetur maxime. Sequi, deleniti culpa maxime 
                doloribus nam voluptatibus quaerat consequuntur temporibus in impedit 
                architecto earum voluptas aspernatur eius dolor vitae ab debitis pariatur 
                dicta repellendus ullam 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="community ">
        <h2>Becoming a mech space Member</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <div className="img">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <p>
                  Joining MECH SPACE is the most important connection a current 
                  or future Mechanical Engineer can make. Get monthly newsletter, so
                  that you do not miss out any updates in the industry.
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, 
                  nostrum, nemo sed ratione aliquid expedita at, nisi fugit 
                  laborum unde in harum veritatis pariatur praesentium!
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
