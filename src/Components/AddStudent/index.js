import { useState } from "react";
import { useForm } from 'react-hook-form';

function AddStudet(props) {
    const { setStudent } = props;
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    console.log("errors ", errors);
    // const [no, setNo] = useState("");
    // const [name, setName] = useState("");
    // const [dept, setDept] = useState("");

    // const handleChange = (el) => {
    //     const element = el.target.name;
    //     if (element === "no") {
    //         setNo(el.target.value);
    //     }
    //     else if (element === "name") {
    //         setName(el.target.value);
    //     } else {
    //         setDept(el.target.value);
    //     }

    //     console.log("el.target.name ", el.target.name);
    // }

    const submit = (e) => {
        // e.preventDefault();
        console.log("submit is called e ", e);
        setStudent((prev) => {
            console.log("prev ", prev);
            return [...prev, { ...e, roll: e.no }]
        });
        reset({ no: "", name: "", dept: "Mech" });
        // setNo("");
        // setName("");
        // setDept("");

    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="container">
                <div className="row pt-2">
                    <div className="col-3">
                        No
                    </div>
                    <div className="col-9">
                        <input
                            type="text"
                            name="no"
                            {...register("no", { required: true })}
                        // ref={register}
                        //  ref={register("no")} 
                        />

                    </div>
                    {errors.no && (
                        <span className="text-danger">{errors.no.message || "Some error"}</span>
                    )}
                </div>
                <div className="row pt-2">
                    <div className="col-3">
                        Name
                    </div>
                    <div className="col-9">
                        <input
                            type="text"
                            name="name"
                            //  ref={register("name")}
                            {...register("name",{ required: "Name is required" })}
                        />
                    </div>
                    {errors.name && (
                        <span className="text-danger">{errors.name.message || "Some error"}</span>
                    )}
                </div>
                <div className="row pt-2">
                    <div className="col-3">
                        dept
                    </div>
                    <div className="col-9">
                        {/* <input 
                         type="text" 
                         name="dept" 
                         {...register("dept")}
                     /> */}
                        <select
                            className="w-80"
                            name="dept"
                            {...register("dept")}
                        >
                            <option name="IT"  >IT</option>
                            <option name="CSE" >CSE</option>
                            <option name="Mech" >Mech</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3">

                    </div>
                    <div className="col-9 float-left">
                        <input type="submit" value="Add" />
                    </div>
                </div>

            </div>
        </form>

    )
}

export default AddStudet;