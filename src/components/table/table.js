import React from 'react';
import './table.css';

function Table( props ) {

    const {
        stats,
        sortQuery,
        setSortQuery,
        setOrder,
        order
    } = props;

    const changeSort = (caption) => {
        if(sortQuery === caption) {
            if(order === 1) {
                setOrder(-1);
            }else {
                setOrder(1);
            }
            return;
        }
        setOrder(1);
        setSortQuery(caption);
    };

    const captions = Object.keys(stats[0]).map((caption, idx)=><th
        onClick={()=>changeSort(caption)}
        key={idx}>
            {caption}
        </th>
    );

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
