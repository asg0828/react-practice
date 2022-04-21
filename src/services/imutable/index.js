import React, { useState, useEffect } from 'react'
import { fromJS, toJS } from 'immutable';

const Index = () => {
  const data = fromJS({
    aaa: "aaa",
    bbb: "bbb",
    ccc: {
      "ADMIN_KEYWORD": "11111",
      "USER_KEYWORD": "22222",
    },
    ddd: ["a", "b", "c"]
  });
  
  useEffect(() => {
    const nData = data.toJS();
    const nProperty = data.get('ccc');
    const nPropertyValue = data.get('ccc').get('ADMIN_KEYWORD');
    nProperty.ADMIN_KEYWORD = 'asdasdasd';
    console.log('nData', nData);
    console.log('nProperty', nProperty);
    console.log('nPropertyValue', nPropertyValue);
  }, []);
  
  return (
    <>
      <div>
        <h4>fromJS 객체를 toJS로 변환</h4>
        <p>{JSON.stringify(data.toJS())}</p>
      </div>
      <div>
        <h4>fromJS 객체의 하나의 속성만 가져오기: get('ccc')</h4>
        <p>{JSON.stringify(data.get('ccc'))}</p>
      </div>
    </>
  )
}

export default Index;