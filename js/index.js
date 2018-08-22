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

var burger = document.getElementById('burger');
burger.addEventListener('click', toggleBurger());

var navigation = document.querySelector('.navigation-items');
function toggleBurger()
{
  return function()
  {
    if(navigation.classList.contains('active'))
    {
      navigation.classList.remove('active');
    }
    else
    {
      navigation.classList.add('active');
    }
  }
}

var form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e)
{
  e.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    var email_expression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(name.value.length < 3)
    {
      wrongInput(document.getElementById('name'), "Za krótkie imie");

      return false;
    }
    else
    {
      goodInput(document.getElementById('name'));
    }

    if(!email_expression.test(email.value))
    {
      wrongInput(document.getElementById('email'), "Email niepoprawny");

      return false;
    }
    else
    {
      goodInput(document.getElementById('email'));
    }

    if(subject.value.length < 15)
    {
      wrongInput(document.getElementById('subject'), "Za krótki temat wiadomości");
      return false;
    }
    else
    {
      goodInput(document.getElementById('subject'));
    }

    if(message.value.length < 20)
    {
      wrongInput(document.getElementById('message'), "Treść wiadomości musi mieć długość minimum 20 znaków");
      return false;
    }
    else
    {
      goodInput(document.getElementById('message'));
    }
  
    form.submit();
})

function wrongInput(input, info)
{
  input.classList.remove('good');
  input.classList.add('wrong');
  input.value = "";
  input.placeholder = info;
}

function goodInput(input)
{
  input.classList.remove('wrong');
  input.classList.add('good');
}
