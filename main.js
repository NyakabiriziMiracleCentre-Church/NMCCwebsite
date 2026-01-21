document.addEventListener("DOMContentLoaded", function () {
  // ======= SCRIPTURE ROTATION =======
  const verses = [
    { text: 'Psalms 37:4 – "Delight yourself also in the LORD, and He shall give you the desires of your heart."', version: 'NIV' },
    { text: 'Revelation 3:8 – "I know your works; behold, I have set before you an open door."', version: 'NIV' },
    { text: 'Galatians 2:20 – "The life I now live in the flesh I live by faith in the Son of God."', version: 'NIV' },
    { text: 'Romans 12:10 – "Be kindly affectioned one to another with brotherly love; in honor   prefering one another;."', version: 'KJV' },
    { text: 'Hebrews 13:5 – "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee."', version: 'KJV' },
    { text: 'Ephesians 5:21 – "Submitting to one another in the fear of God."', version: 'NIV' },
    { text: 'Romans 12:1 "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service."', version: 'KJV' },
    { text: '1 John 4:8 NKJV – "He who does not love does not know God."', version: 'NKJV' },
    { text: 'Ecclesiastes 3:5 NIV – "A time to scatter stones and a time to gather them."', version: 'NIV' },
    { text: 'Psalms 76:11 KJV – "Vow, and pay unto the LORD your God: let all that be round about him bring presents unto him that ought to be feared"', version: 'KJV' },
    { text: 'Psalms 50:14 NIV – "Offer unto God thanksgiving; and pay thy vows unto the most High:"', version: 'KJV' },
    { text: 'James 1:19 NKJV – "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:"', version: 'KJV' },
    { text: 'Lamentations 3:26 KJV – "It is good that a man should both hope and quietly wait for the salvation of the Lord."', version: 'KJV' },
    { text: 'Psalms 118:24 – "This is the day the LORD has made; we will rejoice and be glad in it."', version: 'NIV' },
    { text: '1 Thessalonians 5:18 KJV – "In every thing give thanks: for this is the will of God in Christ Jesus concerning you."', version: 'KJV' },
    { text: 'Colossians 3:17 ESV – "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him"', version: 'ESV' },
    { text: 'Matthew 6:33 – "But seek ye first the kingdom of God,and his righteousness; and all these things shall be added unto you."', version: 'KJV' }
  ];

  function randomVerse() {
    return verses[Math.floor(Math.random() * verses.length)].text;
  }

  const scriptureEl = document.getElementById('scriptureText');
  if (scriptureEl) {
    scriptureEl.textContent = randomVerse();
    scriptureEl.classList.add('fade-slide-in'); // make sure CSS exists
    setInterval(() => {
      scriptureEl.textContent = randomVerse();
      scriptureEl.classList.remove('fade-slide-in');
      void scriptureEl.offsetWidth; // trigger reflow
      scriptureEl.classList.add('fade-slide-in');
    }, 15000); // changes every 15 seconds
  }

  const footerEl = document.getElementById('footerVerse');
  if (footerEl) {
    footerEl.textContent = 'Hebrews 13:5 – "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee."';
  }

  // ======= RANDOM BACKGROUND =======
  const backgrounds = [
    'assets/images/bg1.jpg',
    'assets/images/bg2.jpg',
    'assets/images/bg3.jpg',
    'assets/images/bg4.jpg'
  ];

  function setRandomBackground() {
    const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }

  setRandomBackground();
  setInterval(setRandomBackground, 20000); // change every 20 seconds
});
document.addEventListener("DOMContentLoaded", function() {
  // ========= EVENTS BACKGROUND =========
  const bgImages = [
    "images/nature1.jpg",
    "images/nature2.jpg",
    "images/nature3.jpg"
  ];

  let bgIndex = 0;

  function changeBackground() {
    const img = new Image();
    img.src = bgImages[bgIndex];
    img.onload = function() {
      document.body.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }
    img.onerror = function() {
      document.body.style.background = "linear-gradient(#004d00, #000000)";
    }
    bgIndex = (bgIndex + 1) % bgImages.length;
  }

  // Start the first background immediately
  changeBackground();

  // Change background every 20 seconds
  setInterval(changeBackground, 20000);
});
document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     RANDOM SCRIPTURES
  ============================== */
  const verses = [
    "Psalm 37:4 — Delight yourself also in the LORD, and He shall give you the desires of your heart.",
    "Hebrews 13:5 — Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.",
    "Romans 12:10 — Be kindly affectioned one to another with brotherly love; in honor   prefering one another;",
    "Matthew 6:33 — But seek ye first the kingdom of God,and his righteousness; and all these things shall be added unto you."
  ];

  const scriptureEl = document.querySelector(".scripture");
  if (scriptureEl) {
    scriptureEl.textContent =
      verses[Math.floor(Math.random() * verses.length)];
  }

  /* =============================
     FOOTER VERSE (HEBREWS)
  ============================== */
  const footerVerse = document.getElementById("footerVerse");
  if (footerVerse) {
    footerVerse.textContent =
      "Hebrews 13:5 — Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.";
  }

  /* =============================
     GALLERY LOADER
  ============================== */
  const gallery = document.getElementById("galleryContainer");

  if (gallery) {
    fetch("assets/data/images.json")
      .then(res => res.json())
      .then(data => {
        data.gallery.forEach(item => {
          const img = document.createElement("img");
          img.src = item.src;
          img.alt = item.caption;
          img.loading = "lazy";
          gallery.appendChild(img);
        });
      })
      .catch(err => {
        console.error("Gallery load failed:", err);
        gallery.innerHTML = "<p>Gallery unavailable.</p>";
      });
  }

});
<script>
document.addEventListener("DOMContentLoaded", function() {
  const countdownDiv = document.getElementById('eventCountdown');
  if (!countdownDiv) return; // skip if page has no countdown

  fetch('assets/data/events.json')
    .then(res => res.json())
    .then(data => {
      const now = new Date();
      const upcoming = data.events
        .map(e => ({...e, dateObj: new Date(e.date)}))
        .filter(e => e.dateObj > now)
        .sort((a,b) => a.dateObj - b.dateObj);

      if (upcoming.length === 0) {
        countdownDiv.textContent = "No upcoming events";
        return;
      }

      const next = upcoming[0];

      function updateCountdown() {
        const diff = next.dateObj - new Date();
        if(diff <= 0) {
          countdownDiv.textContent = `Happening now: ${next.title}`;
          clearInterval(timer);
          return;
        }
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff / (1000*60*60)) % 24);
        const mins = Math.floor((diff / (1000*60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        countdownDiv.textContent = `${next.title} in ${days}d ${hours}h ${mins}m ${secs}s`;
      }

      updateCountdown();
      const timer = setInterval(updateCountdown, 1000);
    })
    .catch(err => {
      console.error("Failed to load events.json:", err);
      countdownDiv.textContent = "Error loading events";
    });
});
</script>