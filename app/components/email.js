import * as React from 'react';

export const EmailTemplate = (data) => (
    <div>
        <h1>{data.name},</h1>
        <h1>Age: {data.age}</h1>
        <h3>Email: {data.email}</h3>
        <h3>Contact: {data.contact}</h3>
    </div>
);
