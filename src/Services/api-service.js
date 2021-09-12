const URL = "https://mortgage-calculat-default-rtdb.firebaseio.com/List.json";

export const getAllBank = () => {
  const allBank = fetch(URL)
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

export const updateBank = (bank) => {
  fetch(URL, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bank),
  });
};
