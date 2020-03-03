export const imageReader = (file) => {
  
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("file is required"));
  });
};
