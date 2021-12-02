import { useState, useEffect } from "react";

const Create = () => {


    //constructStates
    const [isSDLC, setisSDLC] = useState(false)
    const [isProgramming, setisProgramming] = useState(false)
    const [isOther, setisOther] = useState(false)

    const onChangeSDLC = () => {
        setisSDLC(!isSDLC)
    }
    const onChangeProgramming = () => {
        setisProgramming(!isProgramming)
    }
    const onChangeOther = () => {
        setisOther(!isOther)
    }

    const onsubmitConstructs = (e) => {
        e.preventDefault()
        console.log(isSDLC)
        console.log(isOther)
        console.log(isProgramming)

        let checkArray = [];
        if (isSDLC === true) {
            checkArray.push("SDLC");
        }
        if (isProgramming === true) {
            checkArray.push("Programming");
        }
        if (isOther === true) {
            checkArray.push("Other");
        }
        console.log(checkArray)

        let checkData = {
            checkbox: checkArray.toString()
        };
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

    const onsubmitCohorts = (e) => {
        e.preventDefault()

        let checkArray = [];
        if (isJune === true) {
            checkArray.push("JUNcohort1");
        }
        if (isAugust === true) {
            checkArray.push("AUGcohort3");
        }
        console.log(checkArray)

        let checkData = {
            checkbox: checkArray.toString()
        };
    }

    //titleStates
    const [assignmentTitle, setAssignmentTitle] = useState(null)
    const onsubmitTitle = (e) => {
        e.preventDefault()

        console.log(assignmentTitle)
    }


    //descriptionStates
    const [description, setDescription] = useState(null)
    const onsubmitDescription = (e) => {
        e.preventDefault()

        console.log(description)
    }

    //imageStates
    const [image, setImage] = useState(null)
    const onSubmitImage = (e) => {
        e.preventDefault()
        console.log(image)
    }

    //referenceStates
    const [referenceLink, setReferenceLink] = useState(null)
    const [referenceName, setReferenceName] = useState(null)
    const onSubmitReference = (e) => {
        e.preventDefault()
        console.log({ referenceLink, referenceName })
    }


    return (
        <div className="create-assignment">
            <div className="add-assignment-title">
                <h1>Add an assignment</h1>
            </div>

            <div className="question-assignment">
                <div className="question-assignment-title">
                    <h2>Which of the folllowing constructs will the assignment cover?*</h2>
                </div>

                <form onSubmit={onsubmitConstructs}>
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



                    <div className="form-group">
                        <button className="btn btn-success">
                            Save
                        </button>
                    </div>
                </form>


            </div>


            {/*Cohort*/}

            <div className="question-assignment">
                <div className="question-assignment-title">
                    <h2>Which cohort is the assignment meant for?*</h2>
                </div>

                <form onSubmit={onsubmitCohorts}>
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

                    <div className="form-group">
                        <button className="btn btn-success">
                            Save
                        </button>
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
                <form onSubmit={onsubmitTitle}>
                    <div className="form-group">
                        <button className="btn btn-success">
                            Save
                        </button>
                    </div>
                </form>

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
                <form onSubmit={onsubmitDescription}>
                    <div className="form-group">
                        <button className="btn btn-success">
                            Save
                        </button>
                    </div>
                </form>

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
                <form onSubmit={onSubmitImage}>
                    <div className="form-group">
                        <button className="btn btn-success">
                            Save
                        </button>
                    </div>
                </form>

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
                <form onSubmit={onSubmitReference}>
                    <div className="form-group">
                        <button className="btn btn-success">
                            Save
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Create;