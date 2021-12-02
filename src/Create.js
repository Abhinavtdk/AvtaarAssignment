import { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Create = () => {

    const baseURL = ' https://qa-api.avtaar.me//avtaar/demo'

    //constructStates
    const [isSDLC, setisSDLC] = useState(false)
    const [isProgramming, setisProgramming] = useState(false)
    const [isOther, setisOther] = useState(false)
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const onChangeSDLC = () => {
        setisSDLC(!isSDLC)
    }
    const onChangeProgramming = () => {
        setisProgramming(!isProgramming)
    }
    const onChangeOther = () => {
        setisOther(!isOther)
    }

    //cohortStates
    const [isJune, setisJune] = useState(false)
    const [isAugust, setisAugust] = useState(false)

    const onChangeJune = () => {
        setisJune(!isJune)
    }
    const onChangeAugust = () => {
        setisAugust(!isAugust)
    }

    //titleStates
    const [assignmentTitle, setAssignmentTitle] = useState(null)

    //descriptionStates
    const [description, setDescription] = useState(null)

    //imageStates
    const [image, setImage] = useState(null)

    //referenceStates
    const [referenceLink, setReferenceLink] = useState(null)
    const [referenceName, setReferenceName] = useState(null)

    //Submit
    const handleSubmitAssignment = () => {
        setIsPending(true)
        let constructArray = [];
        if (isSDLC === true) {
            constructArray.push("SDLC");
        }
        if (isProgramming === true) {
            constructArray.push("Programming");
        }
        if (isOther === true) {
            constructArray.push("Other");
        }

        let cohortArray = [];
        if (isJune === true) {
            cohortArray.push("JUNcohort1");
        }
        if (isAugust === true) {
            cohortArray.push("AUGcohort3");
        }

        let mediaArray = [];
        if (image !== null && image !== "") {
            const mediaObj = {
                type: "IMAGE",
                image: {
                    link: image.toString()
                }
            }
            mediaArray.push(mediaObj)
        }

        let referenceArray = [];
        if (referenceLink !== null && referenceLink !== ""
            && referenceName !== null && referenceName !== "") {
            const mediaObj = {
                type: "URL",
                url: {
                    link: referenceLink.toString()
                }
            }
            referenceArray.push({
                name: referenceName.toString(),
                media: mediaObj
            })
        }

        const assignment = {
            title: assignmentTitle && assignmentTitle.toString(),
            description: description && description.toString(),
            constructs: constructArray,
            cohorts: cohortArray,
            careerName: "Full Stack Developer",
            medias: mediaArray,
            referenceList: referenceArray
        }

        // axios.get(baseURL+'/assignments',{
        //     headers:{
        //         demoKey : 'jsmp35gxqi78'
        //     }
        // }).then((response)=>{
        //     console.log(response.data)
        // })

        axios.post(baseURL + '/assignment',
            assignment,
            {
                headers: { demoKey: 'jsmp35gxqi78' }
            }).then((response)=>{
                console.log(response.data)
                setIsPending(false)
                history.push('/')
            })

        console.log(assignment)
    }


    return (
        <div className="create-assignment">
            <div className="add-assignment-title">
                <h1>Add an assignment</h1>
            </div>

            {/*Constructs*/}
            <div className="question-assignment">
                <div className="question-assignment-title">
                    <h2>Which of the folllowing constructs will the assignment cover?*</h2>
                </div>

                <form>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isSDLC}
                                onChange={onChangeSDLC}
                                className="form-check-input"
                            />
                            SDLC
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isProgramming}
                                onChange={onChangeProgramming}
                                className="form-check-input"
                            />
                            Programming
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isOther}
                                onChange={onChangeOther}
                                className="form-check-input"
                            />
                            Other
                        </label>
                    </div>
                </form>


            </div>


            {/*Cohort*/}
            <div className="question-assignment">
                <div className="question-assignment-title">
                    <h2>Which cohort is the assignment meant for?*</h2>
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

            {/*Title*/}
            <div className="question-assignment">
                <div className="question-assignment-title-exc">
                    <h2>Add a title for the assignment*</h2>
                </div>
                <div className="assignment-title-text">
                    <input
                        type="text"
                        required
                        value={assignmentTitle}
                        onChange={(e) => setAssignmentTitle(e.target.value)}
                    />
                </div>
            </div>


            {/*Description*/}
            <div className="question-assignment">
                <div className="question-assignment-title-exc">
                    <h2>Add a description for the assignment*</h2>
                </div>
                <div className="assignment-title-text">
                    <input
                        type="text"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>

            {/*Image*/}
            <div className="question-assignment">
                <div className="question-assignment-title-exc">
                    <h2>Add images, if any</h2>
                </div>
                <div className="assignment-title-text">
                    <input
                        type="text"
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
            </div>

            {/*References*/}
            <div className="question-assignment">
                <div className="question-assignment-title-exc">
                    <h2>Add references, if any</h2>
                </div>
                <div className="assignment-text-reference">
                    <h2>Add link:</h2>
                    <input
                        type="text"
                        required
                        value={referenceLink}
                        onChange={(e) => setReferenceLink(e.target.value)}
                    />
                </div>
                <div className="assignment-text-reference-name">
                    <h2>Add name for the reference:</h2>
                    <input
                        type="text"
                        required
                        value={referenceName}
                        onChange={(e) => setReferenceName(e.target.value)}
                    />
                </div>
            </div>

            <div className="submit-assignment">
                {/* <button onClick={handleSubmitAssignment}>Add Assignment</button> */}
                {!isPending && <button onClick={handleSubmitAssignment}>Add Assignment</button>}
                {isPending && <button disabled>Adding Assignment...</button>}
            </div>


        </div>
    );
}

export default Create;