import { Component } from '@angular/core';
import quotes from '../../assets/quotes/quotes.json';

interface Quote {
  quote: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  quotes: Quote[] = quotes;
}

var quoteCounter = 0;

setInterval(changeQuote, 120000);

function changeQuote() {
  if (quoteCounter == quotes.length) {
    quoteCounter = 0;
  }
  document.getElementById("quote")!.innerHTML = quotes[quoteCounter].quote;
  quoteCounter++;
}
