const products = [
  {
    id: 'hydro-bottle',
    name: 'Termo isotérmico Boreal',
    category: 'Bebidas',
    price: '$189 - $249 MXN',
    priceLevel: 'medium',
    description: 'Acero inoxidable, doble pared y tapa hermética. Personalizable con grabado láser o serigrafía a color.',
  },
  {
    id: 'eco-notebook',
    name: 'Libreta ecológica Aura',
    category: 'Papelería',
    price: '$110 - $160 MXN',
    priceLevel: 'low',
    description: 'Cubierta de cartón reciclado con banda elástica y pluma de bambú. Ideal para kits de bienvenida.',
  },
  {
    id: 'premium-hoodie',
    name: 'Sudadera premium Atlas',
    category: 'Textil',
    price: '$420 - $560 MXN',
    priceLevel: 'high',
    description: 'Algodón orgánico y poliéster reciclado, interior afelpado y corte unisex. Branding bordado o parche.',
  },
  {
    id: 'wireless-charger',
    name: 'Cargador inalámbrico Halo',
    category: 'Tecnología',
    price: '$260 - $320 MXN',
    priceLevel: 'medium',
    description: 'Compatible con Qi, superficie antiderrapante y base iluminada para destacar tu logo.',
  },
  {
    id: 'stone-mug',
    name: 'Taza cerámica Stoneware',
    category: 'Bebidas',
    price: '$130 - $190 MXN',
    priceLevel: 'low',
    description: 'Acabado mate con interior esmaltado en color contrastante. Personalización con tampografía de alta definición.',
  },
  {
    id: 'travel-kit',
    name: 'Kit de viaje Nomad',
    category: 'Experiencias',
    price: '$280 - $360 MXN',
    priceLevel: 'medium',
    description: 'Incluye antifaz, cepillo plegable, botella mini y pouch repelente. Perfecto para activaciones corporativas.',
  },
  {
    id: 'desk-plant',
    name: 'Mini suculenta Terra',
    category: 'Bienestar',
    price: '$95 - $140 MXN',
    priceLevel: 'low',
    description: 'Maceta de concreto pigmentado con planta natural y tarjeta con cuidados personalizados.',
  },
  {
    id: 'executive-pen',
    name: 'Pluma ejecutiva Nova',
    category: 'Papelería',
    price: '$210 - $260 MXN',
    priceLevel: 'medium',
    description: 'Cuerpo metálico, tinta alemana y estuche magnético. Personalizable con grabado láser individual.',
  },
  {
    id: 'smart-pack',
    name: 'Mochila inteligente Vertex',
    category: 'Tecnología',
    price: '$680 - $820 MXN',
    priceLevel: 'high',
    description: 'Puerto USB integrado, compartimento acolchado y material repelente al agua. Ideal para ejecutivos.',
  },
  {
    id: 'spa-set',
    name: 'Set wellness Horizonte',
    category: 'Bienestar',
    price: '$340 - $420 MXN',
    priceLevel: 'high',
    description: 'Incluye vela aromática, spray relajante y sales minerales. Empaque premium listo para regalar.',
  },
];

const priceRanges = {
  low: { max: 150 },
  medium: { min: 150, max: 300 },
  high: { min: 300 },
};

const selectors = {
  grid: document.querySelector('#product-grid'),
  search: document.querySelector('#search'),
  category: document.querySelector('#category'),
  price: document.querySelector('#price'),
  template: document.querySelector('#product-card-template'),
  productInterest: document.querySelector('#product-interest'),
  quoteForm: document.querySelector('.quote-form'),
  feedback: document.querySelector('.form-feedback'),
};

function populateCategories() {
  const categories = Array.from(new Set(products.map((product) => product.category))).sort();
  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    fragment.append(option);
  });

  selectors.category.append(fragment);
}

function renderProducts(list) {
  selectors.grid.innerHTML = '';

  if (!list.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'No encontramos productos con esos criterios. Intenta ajustar la búsqueda o contáctanos para una recomendación personalizada.';
    selectors.grid.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((product) => {
    const card = selectors.template.content.cloneNode(true);
    card.querySelector('.product-card').dataset.productId = product.id;
    card.querySelector('.product-card__title').textContent = product.name;
    card.querySelector('.product-card__category').textContent = product.category;
    card.querySelector('.product-card__description').textContent = product.description;
    card.querySelector('.product-card__price').textContent = `Precio referencial: ${product.price}`;
    const cta = card.querySelector('.product-card__cta');
    cta.addEventListener('click', () => handleQuoteRequest(product));
    fragment.append(card);
  });

  selectors.grid.append(fragment);
}

function filterProducts() {
  const query = selectors.search.value.trim().toLowerCase();
  const category = selectors.category.value;
  const priceLevel = selectors.price.value;

  const results = products.filter((product) => {
    const matchQuery = !query || [product.name, product.description, product.category].some((value) =>
      value.toLowerCase().includes(query)
    );

    const matchCategory = !category || product.category === category;

    const matchPrice = !priceLevel || (() => {
      const range = priceRanges[priceLevel];
      const [min, max] = product.price
        .replace(/[^0-9\-]/g, '')
        .split('-')
        .map((value) => Number(value));

      if (range.min && (!min || min < range.min)) return false;
      if (range.max && (!max || max > range.max)) return false;
      return true;
    })();

    return matchQuery && matchCategory && matchPrice;
  });

  renderProducts(results);
}

function handleQuoteRequest(product) {
  selectors.productInterest.value = product.name;
  selectors.productInterest.focus({ preventScroll: true });
  document.querySelector('#cotizador').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleFormSubmit(event) {
  event.preventDefault();
  selectors.feedback.textContent = '¡Gracias! Hemos recibido tu solicitud. Te contactaremos muy pronto.';
  event.target.reset();
  selectors.productInterest.focus({ preventScroll: true });
}

function init() {
  populateCategories();
  renderProducts(products);
  selectors.search.addEventListener('input', filterProducts);
  selectors.category.addEventListener('change', filterProducts);
  selectors.price.addEventListener('change', filterProducts);
  selectors.quoteForm.addEventListener('submit', handleFormSubmit);
}

init();
