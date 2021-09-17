export const getBank = () => {
  const allBank = fetch("http://localhost:3001")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  return allBank;
};

export const createBank = (bank) => {
  fetch("http://localhost:3001/banks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bank),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      alert(data);
      getBank();
    });
};
export const deleteBank = (id) => {
  fetch(`http://localhost:3001/banks/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      return response.url;
    })
    .then((data) => {
      alert(data);
      getBank();
    });
};
export const editBank = (id) => {
  fetch(`http://localhost:3001/editbank/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      alert(data);
      getBank();
    });
};
