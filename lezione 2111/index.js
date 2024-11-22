// Lista degli utenti
let users = [
    { firstName: 'Luca', lastName: 'Rossi', isAmbassador: true },
    { firstName: 'Marco', lastName: 'Bianchi', isAmbassador: false },
    { firstName: 'Giulia', lastName: 'Verdi', isAmbassador: true },
    { firstName: 'Anna', lastName: 'Gialli', isAmbassador: false }
  ];
  
  // Funzione per calcolare il totale del carrello
  function calculateCartTotal(cartItems, user, shippingCost) {
    // Calcola il costo totale dei prodotti nel carrello
    let totalCost = cartItems.reduce((total, item) => total + item.price, 0);
  
    // Se l'utente è un ambassador, applica uno sconto del 30%
    if (user.isAmbassador) {
      totalCost *= 0.7; // Sconto del 30%
    }
  
    // Se il costo del carrello è maggiore di 100, la spedizione è gratuita
    if (totalCost > 100) {
      shippingCost = 0; // Spedizione gratuita
    }
  
    // Aggiungi il costo della spedizione
    totalCost += shippingCost;
  
    return totalCost;
  }
  
  // Esegui il ciclo sugli utenti e calcola il totale per ogni utente
  users.forEach(user => {
    console.log(`${user.firstName} ${user.lastName} è ${user.isAmbassador ? '' : 'non '}un ambassador`);
    
    // Dati di esempio per il carrello
    let cartItems = [
      { name: 'T-shirt', price: 25 },
      { name: 'Jeans', price: 40 },
      { name: 'Sneakers', price: 50 }
    ];
  
    // Costo di spedizione (se applicato)
    let shippingCost = 10; // Costo di spedizione di esempio
  
    // Calcolare il totale del carrello per l'utente
    let total = calculateCartTotal(cartItems, user, shippingCost);
    
    // Stampa il totale
    console.log(`Totale carrello per ${user.firstName}: €${total.toFixed(2)}\n`);
  });