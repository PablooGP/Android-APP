const ConvertPrice = (amount, add) => {
	try {
		amount = Number(amount);

		if (isNaN(amount)) {
			throw new Error("Invalid input");
		}

		const [entero, centavos] = amount.toFixed(2).split(".");
		const formattedEntero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, add);
		const formattedAmount = `$ ${formattedEntero}${centavos ? `,${centavos}` : ''}`;

		return formattedAmount;
	} catch (err) {
		return "ERROR";
	}
};
export { ConvertPrice }