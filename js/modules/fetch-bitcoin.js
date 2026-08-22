export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((bitcoin) => {
      const precoBtc = document.querySelector(target);
      precoBtc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
