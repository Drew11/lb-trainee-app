import React from 'react';
import './table.css';

function Table( { stats }) {

    const captions = Object.keys(stats[0]).map((caption, idx)=><th key={idx}>{caption}</th>);
    const statsList = stats.map(stat =><tr key={stat.id}>
        {Object.values(stat).map((val, idx)=><td key={idx + stat.id}> { val } </td>) }
    </tr>);
    return (
        <div className="table">
                <table>
                    <thead>
                    <tr>{ captions }</tr>
                    </thead>
                    <tbody>
                    { statsList }
                    </tbody>
                </table>
        </div>
    );
}

export default Table;
