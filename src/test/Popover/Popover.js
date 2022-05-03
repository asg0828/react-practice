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

  const [isPopover, setIsPopover] = useState(false);

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const onPopoverVisible = () => {
    setIsPopover(true);
  }

  const onPopoverInvisible = () => {
    setIsPopover(false);
  }

  return (
    <div>
      <AntdPopover content={content} title="Title" visible={isPopover} onMouseEnter={onPopoverVisible} onMouseLeave={onPopoverInvisible}>
        <Button>Hover me</Button>
      </AntdPopover>
      <AntdPopover content={content} title="Title" trigger="focus">
        <Button>Focus me</Button>
      </AntdPopover>
      <AntdPopover content={content} title="Title" trigger="click">
        <Button>Click me</Button>
      </AntdPopover>

      <Button onClick={onPopoverInvisible}>테스트 버튼</Button>
    </div>
  );
}

export default Popover;
