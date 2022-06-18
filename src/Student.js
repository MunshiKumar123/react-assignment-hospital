import { useEffect, useState } from 'react';
import axios from 'axios';
import Show from './Show';

const Student = () => {

    const [data, setData] = useState([]);
    const [more, setMore] = useState(2);

    const moredata = () => {
        setMore(more + 2);
    }

    const func = () => {
        axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
            .then((res) => {

                // console.log(res.status);
                // console.log(res.data.data);

                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        func();
    }, []);

    const handleAdd = () => {
        func();
        moredata();
    }
    return (
        <>
            {
                data.slice(0, more).map((row, i) => {
                    return (
                        <div key={i} className="stu">
                            <p>{row.Reviews}</p>
                            <h4>{row.Name}</h4>
                            <p> {row.Company}</p>
                            <p>{row.rating}*</p>
                            <Show /><hr />
                        </div>
                    )

                })
            }
            <input type="button" className='review' value="See More Reviews" onClick={handleAdd} />
        </>
    )
}

export default Student;
