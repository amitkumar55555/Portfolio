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
      typeInto('typed-sub', 'Aspiring Software Engineer building practical, real-world web applications with HTML, CSS, and JavaScript, from games and utilities to a scheduling tool used for an actual small business.', 45);
    });
  });

  // Resume is password-protected. Recruiters get the password directly
  // (cover letter / application message / LinkedIn) rather than a public link.
  function requestResumeDownload(event) {
    event.preventDefault();
    const RESUME_PASSWORD = atob('SHRjc29ueUAxMjM=');
    const attempt = window.prompt('This resume is password-protected.\nEnter the password shared with you to download it:');
    if (attempt === null) return;
    if (attempt === RESUME_PASSWORD) {
      const a = document.createElement('a');
      a.href = 'Amit_Kumar_Resume.pdf';
      a.download = 'Amit_Kumar_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      alert('Incorrect password. Please double check the password you were given, or contact amitkumargupta789@gmail.com.');
    }
  }
