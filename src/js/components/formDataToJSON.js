export function formDataToJSON(formData) {
  if (!(formData instanceof FormData)) {
    throw TypeError('Function argument is not an instance of FormData');
  }

  const data = {}
  for (const [name, value] of formData) {
    data[name] = value;
  }

  return JSON.stringify(data);
}
