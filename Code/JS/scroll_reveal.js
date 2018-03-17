// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo', { 
  origin: 'right', 
  duration: 2000 
});

sr.reveal('.foo-2', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-3', { 
  viewFactor: 0.5
});

sr.reveal('.foo-4', { 
  duration: 200 
});