import React, { useState } from "react";
function Button(props) {
  const [variant] = useState(props.variant);
  const href = useState(props.href);
  return (
    <a href={href} className={`button ${variant}`}>{props.children}</a>
  );
}
export default Button;