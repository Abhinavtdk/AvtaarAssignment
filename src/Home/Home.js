import { useEffect, useState } from "react";
import axios from 'axios'
import './home.css'
import add from '../add.png'
import vector from '../Vector.png'
import AssignmentList from "../../src/AssignmentList/AssignmentList";
import { Link } from "react-router-dom";

const Home = () => {

    const [assignments, setAssignments] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //For filter
    const [isJune, setisJune] = useState(false)
    const [isAugust, setisAugust] = useState(false)

    const onChangeJune = () => {
        setisJune(!isJune)
    }
    const onChangeAugust = () => {
        setisAugust(!isAugust)
    }


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
            <div className="filters">
                <h1>FILTERS</h1>

                <div className="filter-choices">
                    <div className="filter-title">
                        <h2>COHORT</h2>
                    </div>

                    <form>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox"
                                    checked={isJune}
                                    onChange={onChangeJune}
                                    className="form-check-input"
                                />
                                JUNcohort1
                            </label>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox"
                                    checked={isAugust}
                                    onChange={onChangeAugust}
                                    className="form-check-input"
                                />
                                AUGcohort3
                            </label>
                        </div>
                    </form>


                </div>

            </div>
            <div className="assignment-list">
                <h1>ASSIGNMENTS</h1>
                <Link to='/create'>
                    <div className="add-assignment">
                        <img src={vector} />
                        <h2>Add new assignment</h2>
                    </div>
                </Link>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {assignments && <AssignmentList assignments={assignments} />}
            </div>
        </div>
    );
}

export default Home;