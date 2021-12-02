import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Edit = (props) => {

    const baseURL = ' https://qa-api.avtaar.me//avtaar/demo'

    const {id} = useParams()
    const location = useLocation()
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    return ( 
        <h3>Have to edit the assignmet with id at {id}</h3>
        );
}
 
export default Edit;