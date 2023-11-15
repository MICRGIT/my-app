import { useState } from "react";

function AddStudet(props) {
    const { setStudent } = props;

    const [no, setNo] = useState("");
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");

    const handleChange = (el) => {
        const element = el.target.name;
        if (element === "no") {
            setNo(el.target.value);
        }
        else if (element === "name") {
            setName(el.target.value);
        } else {
            setDept(el.target.value);
        }

        console.log("el.target.name ", el.target.name);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log("submit is called ");
        setStudent((prev) => {
            console.log("prev ", prev);
            return [...prev, { roll: no, name, dept }]
        });
        setNo("");
        setName("");
        setDept("");

    }


    return (
        <form onSubmit={submit}>
            <div className="container">
                <div className="row pt-2">
                    <div className="col-3">
                        No
                    </div>
                    <div className="col-9">
                        <input value={no} type="text" name="no" onChange={handleChange} />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3">
                        Name
                    </div>
                    <div className="col-9">
                        <input value={name} type="text" name="name" onChange={handleChange} />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3">
                        dept
                    </div>
                    <div className="col-9">
                        <input value={dept} type="text" name="dept" onChange={handleChange} />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3">

                    </div>
                    <div className="col-9 float-left">
                        <input type="submit" value="Add"  />
                    </div>
                </div>

            </div>
        </form>

    )
}

export default AddStudet;