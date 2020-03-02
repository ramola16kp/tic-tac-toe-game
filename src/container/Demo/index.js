import React, {Component,Fragment} from 'react';
import Demo1 from '../../components/Demo1'
import "./style.css"

class Demo extends Component {
    render(){
        return(
            <Fragment>
                <div className="main-container">
                    <Demo1/>
                </div>
            </Fragment>
        )
    }
}
export default Demo