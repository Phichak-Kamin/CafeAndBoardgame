export default {
  calculateTotalPrice: () => {
    return get_allcart.data.reduce((total, item) => total + Number(item.price || 0), 0);
  }
}