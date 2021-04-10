import React from 'react'
import './Skeleton.css'

export default function Skeleton(props) {

  const { count = 1, width = null, wrapper: Wrapper, borderRadius = '5px', height = null, circle = false, style: customStyle, className: customClassName } = props;

  const elementsArray = () => {
    const elements = [];

    for (let i = 0; i < count; i++) {
      let style = {};

      if (width !== null) style.width = width;

      if (height !== null) style.height = height;

      if (width !== null && height !== null && circle) style.borderRadius = "50%";

      let className = "skeleton animation";
      if (customClassName) {
        className += " " + customClassName;
      }

      elements.push(
        <span
          key={i}
          className={className}
          style={{
            ...customStyle,
            borderRadius: borderRadius,
            ...style,
          }}
        >
          &zwnj;
        </span>
      );
    }

    return elements;
  }

  return (
    <div>
      <span>
        {Wrapper
          ? elementsArray().map((element, i) => (
            <Wrapper key={i}>
              {element}
              &zwnj;
            </Wrapper>
          ))
          : elementsArray()}
      </span>
    </div>
  )
}
