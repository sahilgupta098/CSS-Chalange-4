document.querySelector('a').addEventListener('click',function(eve){
  eve.preventDefault();
  
  if(document.querySelector('.plan-name').innerHTML == 'Annual Plan'){
    document.querySelector('.plan-name').innerHTML = 'Monthly Plan';
    document.querySelector('.plan-price').innerHTML = '$5.99/month';
  }
  else{
    document.querySelector('.plan-name').innerHTML = 'Annual Plan';
    document.querySelector('.plan-price').innerHTML = '$59.99/year';
  }
});
