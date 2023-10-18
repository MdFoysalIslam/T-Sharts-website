import React from 'react';
import Myself from '../Mysalf/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Mysalf/Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself ring={ring}/>
                <Sister/>
                <Brother/>
            </section>
        </div>
    );
};

export default Father;