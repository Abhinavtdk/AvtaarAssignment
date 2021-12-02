import { useEffect, useState } from "react";
import axios from 'axios'
import AssignmentList from "./AssignmentList";

const Home = () => {

    const [assignments, setAssignments] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const baseURL = ' https://qa-api.avtaar.me//avtaar/demo'


    useEffect(() => {
        // const abortCont = new AbortController();

        axios.get(baseURL + '/assignments', {
            headers: {
                demoKey: 'jsmp35gxqi78'
            }
        }).then((response) => {
            console.log(response.data)
            setIsPending(false)
            setAssignments(response.data.response)
            setError(null)
        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })


    }, [])

    return (
        <div className="home">
            <h1>ASSIGNMENTS</h1>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {assignments && <AssignmentList assignments={assignments} />}
        </div>
    );
}

export default Home;