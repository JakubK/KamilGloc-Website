//Get all Portfolio items and assign click event to them
var portfolioItems = document.querySelectorAll('.portfolio-item');
var portfolioModals = document.querySelectorAll('.portfolio-modal');

var closeButtons = document.querySelectorAll('.close');

var activeModal = -1;

if(portfolioItems.length == portfolioModals.length)
{
  for(var i = 0;i < portfolioItems.length;i++)
  {
    portfolioItems[i].addEventListener('click', showModal(i));
  }

  for(var i = 0;i < closeButtons.length;i++)
  {
    closeButtons[i].addEventListener('click',closeModal(i));
  }
}

document.addEventListener('keydown', closeModal(activeModal));

function showModal(i)
{
  return function()
  {
    console.log('You clicked ' + i);
    for(var j = 0;j < portfolioModals.length;j++)
    {
      if(j != i)
      portfolioModals[j].style.display = 'none';
      else
      {
        portfolioModals[j].style.display = 'block';
        activeModal = j;
      }
    }
  }
}

function closeModal(i)
{
  return function()
  {
    if(activeModal != -1)
    {
      portfolioModals[activeModal].style.display = 'none';
      activeModal = -1;
    }
  }
}