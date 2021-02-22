

	

function checkbt() {
	
var msgerrorr = document.querySelector('.msgerrorr');
    
  if(msgerrorr.style.display === 'none') {
      msgerrorr.style.display = 'block';
  } else {
      msgerrorr.style.display = 'none';
  }
	
	const inputError = document.getElementById('emailip');

inputError.addEventListener('keyup', function(ev) {
  const input = ev.target;
  const value = ev.target.value;

  if (value.length <= 4) {
    input.classList.add('-error');

		
  } else {
    input.classList.remove('-error');
  }
 
});
	
}

