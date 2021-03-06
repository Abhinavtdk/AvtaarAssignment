import { Link } from "react-router-dom";
import write from '../write.png'
import './assignmmentList.css'
import { useState } from "react";

const AssignmentList = (props) => {

    const assignments = props.assignments
    const title = props.title

    // const [id, setid] = useState(null)


    const handleOnClick = (id) =>{
        if(id!== null){
            console.log(id)
        }
    }

    return (
        <div className="assignment-list">
            <h2>{title}</h2>
            {assignments.map((assignment) => (
                <div className="assignment-preview" key={assignment.activity_id}>
                    <div className="assignment-preview-header">
                        <div className="career-name">
                            {assignment.careerName}
                        </div>
                        <Link to={"/assignments/"+assignment.activity_id}>
                        {/* <Link to={'/create'}> */}
                            <div className="assignment-edit">
                                <img src={write} onClick={() => {handleOnClick(assignment.activity_id)}} />
                            </div>
                        </Link>
                    </div>
                    <h2>{assignment.title}</h2>
                    <p>Description: {assignment.description}</p>

                </div>
            ))}
        </div>
    );
}

export default AssignmentList;