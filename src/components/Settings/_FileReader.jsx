// import {useState} from "react";

const _FileReader = (file) => {
  const reader = new FileReader();
  // const [result, setResult] = useState(null)
  let result = null

  if (file) {
    reader.readAsDataURL(file);
    reader.onloadend = () => result = reader.result;
  }

  return result;
};

export default _FileReader;
