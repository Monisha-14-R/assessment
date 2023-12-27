const productsData = {
  men: [/* Men's product data from API */],
  women: [/* Women's product data from API */],
  kids: [/* Kids' product data from API */],
};

function showProducts(category) {
  // Hide all product containers
  document.getElementById('menProducts').style.display = 'none';
  document.getElementById('womenProducts').style.display = 'none';
  document.getElementById('kidsProducts').style.display = 'none';

  // Show the selected product container
  document.getElementById('${category}Products').style.display = 'block';
