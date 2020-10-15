import React from "react";
import {map, keys} from 'ramda';

const Item = ({data}) => {
    const hasChildren = data.hasOwnProperty('children');
    return <li>
        <span>User: {data.name} - Id: {data.id}</span>
        { hasChildren && <List data={data.children} nested={hasChildren} /> }
    </li>;
}

export default function List ({data, nested}) {
    return <ul className={!nested ? 'tree' : ''}>
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