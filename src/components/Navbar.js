import { useEffect, useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import legend from '../assets/legend_logo.jpg'

function Navbars() {
  const [search, setSearch] = useState('');

  const getSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&query=${search}`)
      .then(Response => Response.json())
      .then(Response => {
        setSearch(Response.results)
      })
  }

  useEffect(() => {
    getSearch();
  }, [])

  return (
    <>
      <Navbar expand="lg" className="header sticky-top">
      <Container fluid>
      <Navbar.Brand href="#"><img src={legend} style={{width:200}}/></Navbar.Brand>
        <Navbar.Toggle className='icon' aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="me-auto my-2 my-lg-0 " >
           <Nav className="me-auto">
              <Link to='/' className='hed'>Home</Link>
              <Link to='/now_showing' className='hed'>Now Showing</Link>
              <Link to='/coming_soon' className='hed'>Coming Soon</Link>
              <Link to='/popular' className='hed'>Popular</Link>
              <Link to='/top_rate' className='hed'>Top Rate</Link>
              <Link to='/contact' className='hed'>Contact</Link>
            </Nav>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                id="search"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <a className="btn btn-outline-light" href={`/search?title=${search}`}>Search</a>
            </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars;
