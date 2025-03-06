import React from "react";
import styled from "styled-components";

const ExampleComponent = () => {
    // props.children
    return (
       <StyleExample>
          <h1>Example Component</h1>
       </StyleExample> 
    )

}
//使用css in js解决样式隔离问题
const StyleExample = styled.div`
    background-color: black;
    color: white;
    padding: 1rem
    h1 {
    color: blue;
    }
    `
;
export default ExampleComponent;