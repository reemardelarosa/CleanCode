// Dirty
List<decimal> p = new List<decimal>(){5.50m, 10.48m, 12.69m};

decimal t = 0;
foreach (var i in p) {
    t += i;
}

return t;

// Clean
List<decimal> prices = new List<decimal>(){5.50m, 10.48m, 12.69m};

decimal total = 0;
foreach (var price in prices) {
    total += price;
}

return total;