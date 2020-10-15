//libs
import React, {useState, useEffect} from "react";
import {map} from 'ramda';
import Papa from 'papaparse';
//styles
import "./App.css";
//components
import List from './components/List';
//utils
import {PATH} from './utils/constants';
import {dataMock, buildTree} from './utils/helpers';

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCSV() {
      try {
        const response = await fetch(PATH);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.text();
        const parsedData = Papa.parse(result).data; 
        //use data mock if git stop responding
        // const parsedData = await Promise.resolve(dataMock); 
        const formattedData = map(([id, name, parent]) => ({id, name, parent}), parsedData);
        const dataTree = buildTree('', formattedData);
        setData(dataTree);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  return <div className='App'>
    {
      isLoading ? 
        <div>Loading...</div> : 
        !!error ? 
          <div className='alert'>{error}</div> :
          <List data={data} />
    }
  </div> 
}