window.addEventListener('load', () => {
    // Check server status
    const status = document.getElementById('status');
    fetch('https://api.mcsrvstat.us/2/ISA.mysrv.us')
      .then(response => response.json())
      .then(data => {
        if (data.online) {
          status.textContent = 'Server is online!';
        } else {
          status.textContent = 'Server is offline :(';
        }
      })
      .catch(error => {
        console.error(error);
        status.textContent = 'Unable to check server status';
      });
      
    // Update server IP address
    const ip = document.getElementById('ip');
    ip.textContent = 'ISA.mysrv.us';
  });
//   This code uses the mcsrvstat API to check the server status and displays the result on the website. It also updates the server IP address for players to join the server. 
  


  
  
  