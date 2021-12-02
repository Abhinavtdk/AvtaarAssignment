import { Link } from "react-router-dom";

const AssignmentList = (props) => {

    const assignments = props.assignments
    const title = props.title

    return ( 
        <div className="assignment-list">
            <h2>{title}</h2>
            {assignments.map((assignment) => (
                <div className="assignment-preview" key={assignment.activity_id}>
                    <Link to={'/assignments/'+assignment.activity_id}>
                        <div className="career-name">
                            {assignment.careerName}
                        </div>
                        <h2>{assignment.title}</h2>
                        <p>Description: {assignment.description}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default AssignmentList;