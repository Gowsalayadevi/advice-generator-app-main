


fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
      const adviseGenerator = document.getElementById("advice")
      adviseGenerator.textContent = '"' + data.slip.advice + '"'
      console.log(data.slip.advice);
    })
      