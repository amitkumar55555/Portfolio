function typeInto(elId, text, baseSpeed, done) {
    const el = document.getElementById(elId);
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        el.appendChild(cursor);
        const ch = text[i - 1];
        i++;
        // vary the delay so it feels like a person typing, not a instant reveal
        let delay = baseSpeed + Math.random() * baseSpeed * 0.6;
        if (ch === ',' || ch === '—') delay += baseSpeed * 2;
        if (ch === '.' ) delay += baseSpeed * 3;
        if (ch === ' ') delay += baseSpeed * 0.3;
        setTimeout(step, delay);
      } else if (done) {
        done();
      }
    }
    step();
  }

  window.addEventListener('DOMContentLoaded', () => {
    typeInto('typed-name', 'Amit Kumar', 140, () => {
      typeInto('typed-sub', 'Aspiring Software Engineer building practical, real-world web applications with HTML, CSS, and JavaScript — from games and utilities to a scheduling tool used for an actual small business.', 45);
    });
  });
