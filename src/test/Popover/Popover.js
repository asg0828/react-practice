import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Popover as AntdPopover, Button } from 'antd';

const StyledPopover = styled.div`
  button {
    margin: 20px;
  }
`

const Popover = () => {

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );


  return (
    <StyledPopover>
      <AntdPopover
        title="Title"
        trigger="click"
        visible={true}
        content={content}
        overlayStyle={{backgroundColor: 'red'}}
      >
        <Button>overlayStyle</Button>
      </AntdPopover>
      <AntdPopover
        title="Title"
        trigger="click"
        visible={true}
        content={content}
        overlayInnerStyle={{backgroundColor: 'blue'}}
      >
        <Button>overlayInnerStyle</Button>
      </AntdPopover>
    </StyledPopover>
  );
}

export default Popover;
