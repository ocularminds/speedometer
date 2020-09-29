import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    render() {
        return (
            <ul className="pagination justify-content-center">
                <li className="page-item"><Link className="page-link" to="/blog-detail">Previous</Link>
                </li>
                <li className="page-item"><Link className="page-link" to="/blog-detail">1</Link>
                </li>
                <li className="page-item active"><Link className="page-link" to="/blog-detail">2</Link>
                </li>
                <li className="page-item"><Link className="page-link" to="/blog-detail">3</Link>
                </li>
                <li className="page-item"><Link className="page-link" to="/blog-detail">Next</Link>
                </li>
            </ul>
        );
    }
}

export default Pagination;