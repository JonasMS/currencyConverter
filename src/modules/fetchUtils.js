const emitErr = (res) => {
  const err = new Error('response error: ', res.statusText);
  err.response = res;
  throw err;
};

export const displayStatus = res => {
  console.log(res.satus);
  return res;
}

export const checkStatus = res => (res.status >= 200) && (res.status < 300) ? res : emitErr(res);

export const parseJSON = res => res.json();

export const createPOST = body => (
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
);
