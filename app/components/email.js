import * as React from 'react';

export const EmailTemplate = (data) => (
    <div>
        <h1>{data.name} want's to Contact you,</h1>
        <h3>Age: {data.age}</h3>
        <h3>Email: {data.email}</h3>
        <h3>Contact: {data.contact}</h3>
    </div>
);
