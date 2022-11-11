import { Numbers } from '../Home/Components';
import AdminAccess from '../../Context/AdminContext';
import "./Admin.css"
import http from '../../Utils/Axios';
import { useEffect, useState } from 'react';

const Admin = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        http.get('/admin')
            .then((res) => {
                // console.log(res);
                setData(res.data)
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);
    console.log(data);

    return (
        <AdminAccess>
            <h1>ALL FEEDBACK:</h1>
            {data.map((info) => {
                return <Numbers className="feedback-admin" key={info._id} h2={info.email} p={info.feedback} />
            })}
        </AdminAccess>
    )
}

export default Admin;