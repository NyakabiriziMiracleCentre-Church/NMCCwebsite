fetch('events.json')
  .then(res => res.json())
  .then(data => {
    const now = new Date();
    // Get next event
    const nextEvent = data.events
      .map(e => ({...e, dateObj: new Date(e.date)}))
      .filter(e => e.dateObj > now)
      .sort((a,b) => a.dateObj - b.dateObj)[0];

    if (!nextEvent) {
      document.getElementById('eventCountdown').textContent = "No upcoming events";
      return;
    }

    document.getElementById('nextEventTitle').textContent = nextEvent.title;

    function updateCountdown() {
      const now = new Date();
      const diff = nextEvent.dateObj - now;

      if (diff <= 0) {
        document.getElementById('eventCountdown').textContent = "Event started!";
        return;
      }

      const days = Math.floor(diff / (1000*60*60*24));
      const hours = Math.floor((diff / (1000*60*60)) % 24);
      const mins = Math.floor((diff / (1000*60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      document.getElementById('eventCountdown').textContent =
        `${days}d ${hours}h ${mins}m ${secs}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });