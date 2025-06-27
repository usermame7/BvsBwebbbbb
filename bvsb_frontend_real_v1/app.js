
document.querySelectorAll('#amount-selector button').forEach(button => {
  button.addEventListener('click', () => {
    const amount = parseInt(button.innerText.replace('$', ''));
    const payout = amount + amount * 0.9;
    document.getElementById('payout-display').innerText = 'Expected Payout: $' + payout.toFixed(2);
  });
});
