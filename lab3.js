class Bus {
    constructor(passengerCount, ticketPrice) {
        this.passengerCount = passengerCount;
        this.ticketPrice = ticketPrice;
    }

    totalTicketPrice() {
        return this.passengerCount * this.ticketPrice;
    }
}

class ExpressBus extends Bus {
    constructor(passengerCount, ticketPrice, speed) {
        super(passengerCount, ticketPrice);
        this.speed = speed;
    }

    totalTicketPrice() {
        return this.passengerCount * (this.ticketPrice + 0.05 * this.speed);
    }
}

document.getElementById('busForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const bus = new Bus(
        +document.getElementById('busPassengers').value,
        +document.getElementById('busPrice').value
    );
    document.getElementById('busResult').textContent = `Загальна вартість: ${bus.totalTicketPrice()} грн.`;
});

document.getElementById('expressBusForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const expressBus = new ExpressBus(
        +document.getElementById('expressPassengers').value,
        +document.getElementById('expressPrice').value,
        +document.getElementById('speed').value
    );
    document.getElementById('expressBusResult').textContent = `Загальна вартість: ${expressBus.totalTicketPrice()} грн.`;
});
