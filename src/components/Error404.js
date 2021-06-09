import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button } from 'react-bootstrap';
class Error404 extends Component {
    render(){
        return (
            <div>

                <h1> Error </h1>
                <Link to = '/' > 
                        <Button variant="primary">back to home page</Button>
                </Link>
        
            </div>
        )
            
    }
}
export default Error404