import { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';

const TopPage: FunctionComponent = () => {

    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios(
                'http://localhost:3001/'
            );
            console.log(result);
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <main className="l-main--top">
            <section className="p-top--firstview">
                <div className="p-top--firstview__container">
                    FirstView
                </div>
            </section>
        </main>
    );
}

export default TopPage;