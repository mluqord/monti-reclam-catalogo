const products = [
  {
    id: 'hydro-bottle',
    name: 'Termo isotérmico Boreal',
    category: 'Bebidas',
    price: '$189 - $249 MXN',
    priceLevel: 'medium',
    description:
      'Acero inoxidable, doble pared y tapa hermética. Personalizable con grabado láser o serigrafía a color.',
    image: 'https://images.unsplash.com/photo-1526404079166-95997e571754?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(30, 64, 175, 0.82)',
      to: 'rgba(56, 189, 248, 0.55)',
    },
  },
  {
    id: 'eco-notebook',
    name: 'Libreta ecológica Aura',
    category: 'Papelería',
    price: '$110 - $160 MXN',
    priceLevel: 'low',
    description: 'Cubierta de cartón reciclado con banda elástica y pluma de bambú. Ideal para kits de bienvenida.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(22, 101, 52, 0.82)',
      to: 'rgba(134, 239, 172, 0.55)',
    },
  },
  {
    id: 'premium-hoodie',
    name: 'Sudadera premium Atlas',
    category: 'Textil',
    price: '$420 - $560 MXN',
    priceLevel: 'high',
    description:
      'Algodón orgánico y poliéster reciclado, interior afelpado y corte unisex. Branding bordado o parche.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(17, 24, 39, 0.82)',
      to: 'rgba(148, 163, 184, 0.45)',
    },
  },
  {
    id: 'wireless-charger',
    name: 'Cargador inalámbrico Halo',
    category: 'Tecnología',
    price: '$260 - $320 MXN',
    priceLevel: 'medium',
    description: 'Compatible con Qi, superficie antiderrapante y base iluminada para destacar tu logo.',
    image: 'https://images.unsplash.com/photo-1580894897191-fff9a6fd4c90?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(59, 7, 100, 0.8)',
      to: 'rgba(56, 189, 248, 0.6)',
    },
  },
  {
    id: 'stone-mug',
    name: 'Taza cerámica Stoneware',
    category: 'Bebidas',
    price: '$130 - $190 MXN',
    priceLevel: 'low',
    description:
      'Acabado mate con interior esmaltado en color contrastante. Personalización con tampografía de alta definición.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(100, 116, 139, 0.85)',
      to: 'rgba(148, 163, 184, 0.45)',
    },
  },
  {
    id: 'travel-kit',
    name: 'Kit de viaje Nomad',
    category: 'Experiencias',
    price: '$280 - $360 MXN',
    priceLevel: 'medium',
    description:
      'Incluye antifaz, cepillo plegable, botella mini y pouch repelente. Perfecto para activaciones corporativas.',
    image: 'https://images.unsplash.com/photo-1519121785383-3229633bb75b?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(15, 118, 110, 0.82)',
      to: 'rgba(45, 212, 191, 0.55)',
    },
  },
  {
    id: 'desk-plant',
    name: 'Mini suculenta Terra',
    category: 'Bienestar',
    price: '$95 - $140 MXN',
    priceLevel: 'low',
    description: 'Maceta de concreto pigmentado con planta natural y tarjeta con cuidados personalizados.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(22, 101, 52, 0.82)',
      to: 'rgba(190, 242, 100, 0.55)',
    },
  },
  {
    id: 'executive-pen',
    name: 'Pluma ejecutiva Nova',
    category: 'Papelería',
    price: '$210 - $260 MXN',
    priceLevel: 'medium',
    description: 'Cuerpo metálico, tinta alemana y estuche magnético. Personalizable con grabado láser individual.',
    image: 'https://images.unsplash.com/photo-1581067555743-435c511c7c9f?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(30, 64, 175, 0.82)',
      to: 'rgba(37, 99, 235, 0.52)',
    },
  },
  {
    id: 'smart-pack',
    name: 'Mochila inteligente Vertex',
    category: 'Tecnología',
    price: '$680 - $820 MXN',
    priceLevel: 'high',
    description:
      'Puerto USB integrado, compartimento acolchado y material repelente al agua. Ideal para ejecutivos.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(17, 24, 39, 0.86)',
      to: 'rgba(14, 116, 144, 0.5)',
    },
  },
  {
    id: 'spa-set',
    name: 'Set wellness Horizonte',
    category: 'Bienestar',
    price: '$340 - $420 MXN',
    priceLevel: 'high',
    description: 'Incluye vela aromática, spray relajante y sales minerales. Empaque premium listo para regalar.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(180, 83, 9, 0.82)',
      to: 'rgba(249, 115, 22, 0.55)',
    },
  },
  {
    id: 'desktop-set',
    name: 'Set ejecutivo Prisma',
    category: 'Oficina',
    price: '$260 - $320 MXN',
    priceLevel: 'medium',
    description:
      'Incluye base de madera, lapicero metálico y soporte para tarjeta corporativa. Personalización grabada.',
    image: 'https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(30, 41, 59, 0.82)',
      to: 'rgba(148, 163, 184, 0.45)',
    },
  },
  {
    id: 'thermal-bag',
    name: 'Bolsa térmica Fjord',
    category: 'Experiencias',
    price: '$180 - $240 MXN',
    priceLevel: 'medium',
    description: 'Aislante interior, doble compartimento y asas reforzadas. Ideal para kits de bienestar corporativo.',
    image: 'https://images.unsplash.com/photo-1518544889280-441392de8763?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(2, 132, 199, 0.85)',
      to: 'rgba(125, 211, 252, 0.55)',
    },
  },
  {
    id: 'wireless-speaker',
    name: 'Bocina inalámbrica Pulse',
    category: 'Tecnología',
    price: '$320 - $380 MXN',
    priceLevel: 'high',
    description: 'Audio 360°, conexión Bluetooth 5.0 y batería de larga duración. Personalizable con domo iluminado.',
    image: 'https://images.unsplash.com/photo-1514862235028-2c1fb137518e?auto=format&fit=crop&w=900&q=80',
    overlay: {
      from: 'rgba(76, 29, 149, 0.85)',
      to: 'rgba(129, 140, 248, 0.55)',
    },
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
    empty.textContent =
      'No encontramos productos con esos criterios. Intenta ajustar la búsqueda o contáctanos para una recomendación personalizada.';
    selectors.grid.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((product) => {
    const card = selectors.template.content.cloneNode(true);
    card.querySelector('.product-card').dataset.productId = product.id;

    const image = card.querySelector('.product-card__image');
    if (product.image) {
      image.style.setProperty('--product-image', `url('${product.image}')`);
    }
    if (product.overlay) {
      image.style.setProperty('--image-overlay-from', product.overlay.from);
      image.style.setProperty('--image-overlay-to', product.overlay.to);
    }

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
    const matchQuery =
      !query || [product.name, product.description, product.category].some((value) => value.toLowerCase().includes(query));

    const matchCategory = !category || product.category === category;

    const matchPrice =
      !priceLevel ||
      (() => {
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
