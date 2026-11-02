// WEDE5020 Part 3 - Cape Town Coffee Co
const menuData = [
{ id:1, name:"Cape Town Flat White", category:"coffee", price:"R45", image:"images/flat-white.jpg", desc:"Double shot, velvety milk - our signature" },
{ id:2, name:"Cold Brew Tonic", category:"coffee", price:"R50", image:"images/cold-brew.jpg", desc:"Slow brewed 12hrs with tonic water" },
{ id:3, name:"Vegan Banana Bread", category:"food", price:"R35", image:"images/banana-bread.jpg", desc:"Freshly baked daily, vegan friendly" },
{ id:4, name:"Chocolate Croissant", category:"food", price:"R38", image:"images/croissant.jpg", desc:"French butter pastry" }
];

function loadMenu() {
const container = document.getElementById('menu-container');
if(!container) return;
container.innerHTML = menuData.map(item => `
<div class="menu-card" data-category="${item.category}">
<img src="${item.image}" alt="${item.name} - Cape Town Coffee Co" loading="lazy" class="gallery-img">
<h3>${item.name}</h3>
<p>${item.desc}</p>
<span>${item.price}</span>
<button class="btn" onclick="openModal('${item.name}')">Order Now</button>
</div>
`).join('');
}

function setupSearch() {
const search = document.getElementById('searchInput');
const filter = document.getElementById('categoryFilter');
if(search) search.addEventListener('input', () => {
const term = search.value.toLowerCase();
document.querySelectorAll('.menu-card').forEach(c => {
c.style.display = c.innerText.toLowerCase().includes(term) ? 'block' : 'none';
});
});
if(filter) filter.addEventListener('change', (e) => {
const cat = e.target.value;
document.querySelectorAll('.menu-card').forEach(c => {
c.style.display = (cat === 'all' || c.dataset.category === cat) ? 'block' : 'none';
});
});
}

function setupAccordion() {
document.querySelectorAll('.accordion-header').forEach(h => {
h.addEventListener('click', () => {
const c = h.nextElementSibling;
c.style.display = c.style.display === 'block' ? 'none' : 'block';
});
});
}

function openTab(evt, tabName) {
document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
document.getElementById(tabName).style.display = 'block';
evt.currentTarget.classList.add('active');
}

function openModal(name) {
document.getElementById('myModal').style.display = 'block';
document.getElementById('modalText').innerText = `Order: ${name} - Cape Town Coffee Co`;
}
function closeModal() { document.getElementById('myModal').style.display = 'none'; }

function setupLightbox() {
const lb = document.getElementById('lightbox');
if(!lb) return;
document.addEventListener('click', (e) => {
if(e.target.classList.contains('gallery-img')) {
lb.style.display = 'flex';
document.getElementById('lightbox-img').src = e.target.src;
}
});
lb.addEventListener('click', () => lb.style.display = 'none');
}

function setupMap() {
const mapDiv = document.getElementById('map');
if(!mapDiv) return;
const map = L.map('map').setView([-33.9249, 18.4241], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([-33.9249, 18.4241]).addTo(map).bindPopup('Cape Town Coffee Co<br>123 Long Street, Cape Town').openPopup();
}

function validateForm(formId) {
const form = document.getElementById(formId);
if(!form) return;
form.addEventListener('submit', function(e) {
e.preventDefault();
let errors = [];
const name = form.querySelector('[name="name"]').value.trim();
const email = form.querySelector('[name="email"]').value.trim();
const phone = form.querySelector('[name="phone"]').value.trim();
const msg = form.querySelector('[name="message"]').value.trim();
if(name.length < 2) errors.push("Name too short");
if(!/^\S+@\S+\.\S+$/.test(email)) errors.push("Invalid email");
if(phone && !/^\d{10}$/.test(phone.replace(/\s/g,''))) errors.push("Phone must be 10 digits");
if(msg.length < 10) errors.push("Message min 10 chars");
const errDiv = form.querySelector('.form-errors');
if(errors.length > 0) { errDiv.innerHTML = errors.join('<br>'); errDiv.style.display='block'; return; }
errDiv.style.display='none';
fetch(form.action || '#', {method:'POST', body:new FormData(form)}).then(() => {
form.reset();
document.getElementById('formSuccess').style.display='block';
});
});
}

document.addEventListener('DOMContentLoaded', () => {
loadMenu(); setupSearch(); setupAccordion(); setupLightbox(); setupMap();
validateForm('enquiryForm'); validateForm('contactForm');
});