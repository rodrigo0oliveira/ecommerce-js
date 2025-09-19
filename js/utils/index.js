class Utils {
    static formatMoney(value) {
        return value.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        });
    }
}
export default Utils;