const searchPrices = async (id = '') => {
  let URL = '';
  if (id === '') {
    URL = `${process.env.REACT_APP_BASE_URL}/api/services`;
  } else {
    URL = `${process.env.REACT_APP_BASE_URL}/api/services/${id}`;
  }
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const resp = await response.json();
  return resp;
};

export default searchPrices;
