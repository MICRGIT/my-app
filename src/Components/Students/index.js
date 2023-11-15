
function Students(props) {
    const { students } = props;
    
    return (
    <table>
        <thead>
            <tr><th className='w-15'>ROLL</th><th className='w-50'>NAME</th><th className='w-20'>DEPARTMENT</th></tr>
        </thead>
        <tbody>
            {students.map((s) => <tr><td className='w-15'>{s.roll}</td><td className='w-50'>{s.name}</td><td className='w-20'>{s.dept}</td></tr>)}
        </tbody>
    </table>
    )
}

export default Students;