import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

export default function fetchData(url) {
  const [data, SetData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, SetError] = useState([]);
  useEffect(() => {
    async function fetching() {
        setIsLoading(true);
      try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
        const response = await request.json();
        SetData(response);
        
        setIsLoading(false);
      } catch (error) {
        SetError(error.message);
        setIsLoading(false);
        console.log(error.message);
      }
    }
    fetching()
  }, []);

  return {data,loading,error};
} 
