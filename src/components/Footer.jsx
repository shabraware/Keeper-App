import React from "react";
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
const footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {fullYear}</p>
    </footer>
  );
};

export default footer;
