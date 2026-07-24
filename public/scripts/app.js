// Header scroll
const header = document.getElementById('site-header');
function onScroll(){
  if(window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Menu drawer
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('menu-drawer');
const backdrop = document.getElementById('menu-backdrop');
const menuLabel = document.getElementById('menu-label');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
function setMenu(open){
  if(open){
    drawer.classList.add('open'); backdrop.classList.add('open');
    document.body.classList.add('menu-open');
    header.classList.add('scrolled');
    menuLabel.textContent = 'Close';
    menuIconOpen.style.display='none'; menuIconClose.style.display='inline';
  } else {
    drawer.classList.remove('open'); backdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
    onScroll();
    menuLabel.textContent = 'Menu';
    menuIconOpen.style.display='inline'; menuIconClose.style.display='none';
  }
}
menuBtn.addEventListener('click', ()=> setMenu(!drawer.classList.contains('open')));
backdrop.addEventListener('click', ()=> setMenu(false));
document.querySelectorAll('#menu-drawer a').forEach(a=> a.addEventListener('click', ()=> setMenu(false)));
window.addEventListener('keydown', e=>{ if(e.key==='Escape') setMenu(false); });

// Fade-in observer
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el = e.target;
      const delay = parseInt(el.dataset.delay||'0',10);
      setTimeout(()=> el.classList.add('is-in'), delay);
      io.unobserve(el);
    }
  });
},{threshold:0.12, rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.mb-fade').forEach(el=> io.observe(el));

// Hash scroll on load
if(location.hash){
  const target = document.querySelector(location.hash);
  if(target) setTimeout(()=> target.scrollIntoView({behavior:'smooth'}), 200);
}

// Contact form — submits to the Cloudflare Pages Function at /api/contact
function wireForm(formId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const original = btn ? btn.innerHTML : '';
    if(btn){ btn.disabled = true; btn.textContent = 'Sending…'; }
    try {
      const res = await fetch('/api/contact', { method:'POST', body: new FormData(form) });
      const data = await res.json();
      if(data.ok){
        form.reset();
        showToast("Thanks — we'll be in touch shortly.");
        if(typeof fbq === 'function') fbq('track', 'Lead');
      } else {
        showToast("Sorry, something went wrong. Please try again or email us directly.");
        console.error('Form error:', data);
      }
    } catch(err){
      showToast("Sorry, something went wrong. Please try again or email us directly.");
      console.error('Form submit failed:', err);
    } finally {
      if(btn){ btn.disabled = false; btn.innerHTML = original; }
    }
  });
}
wireForm('contact-form');
wireForm('contact-page-form');

function showToast(msg){
  let t = document.getElementById('mb-toast');
  if(!t){ t = document.createElement('div'); t.id='mb-toast'; t.className='mb-toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window.__mbtt); window.__mbtt = setTimeout(()=> t.classList.remove('show'), 3200);
}