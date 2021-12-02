import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Edit = (props) => {

    const baseURL = ' https://qa-api.avtaar.me//avtaar/demo'

    const {id} = useParams()
    const [assignment, setassignment] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    return ( 
        <h3>Have to edit the assignmet with id {id}</h3>
     );
}
 
export default Edit;