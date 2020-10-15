import React from "react";
import {map, keys} from 'ramda';

const Item = ({data}) => {
    return <li>User: {data.name} - Id: {data.id}
        { data.hasOwnProperty('children') && <List data={data.children} /> }
    </li>;
}

export default function List ({data}) {
    return <ul>
        {   
            !!data ?
                map(_key => {
                    const innerData = data[_key];
                    return <Item key={innerData.id} data={innerData} />
                }, keys(data)) :
                <li>Sorry, no data found!</li>
        }
    </ul>;
}