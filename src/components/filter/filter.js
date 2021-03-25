import React from 'react';
import './filter.css';

export default function Filter( { filterQuery, setFilterQuery} ) {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="search by name"
                value={filterQuery}
                onChange={(event)=>setFilterQuery(event.target.value)}
            />

        </div>
    );
}
