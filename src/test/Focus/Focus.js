import React, { useState, useEffect } from 'react';

const Focus = () => {

  useEffect(() => {
    const target = document.querySelector('#target');
    target.setAttribute('contentEditable', true);
    const selection = window.getSelection();
    selection.selectAllChildren(target);
    selection.collapseToEnd();
  }, []);

  return (
    <>
      <p id="target">포커스 테스트</p>
    </>
  );
}

export default Focus;
