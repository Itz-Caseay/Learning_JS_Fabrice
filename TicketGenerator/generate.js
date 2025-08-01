// Dom Element
const form=document.getElementById('form')
const ticketslist=document.getElementById('ticket-list')
const tickets=JSON.parse(localStorage.getItem('tickets'))||[]
const usernameid=document.getElementById('user')
const useremail=document.getElementById('user-email')
const username=JSON.parse(localStorage.getItem('username'))
const usermail=JSON.parse(localStorage.getItem('username-email'))
if(usernameid){
usernameid.innerHTML=username
useremail.innerHTML=usermail
}
console.log(tickets, username, useremail)

if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fullname=document.getElementById('fullname').value
    const email=document.getElementById('email').value
    const github=document.getElementById('github').value
    const profilePicInput=document.getElementById('profilePicInput').value
    const ticketId=Math.floor(10000+Math.random()*90000)
    if (!fullname || !email || !github){
      alert('please input all credentials')
    }
    localStorage.setItem('username', JSON.stringify(fullname)) 
    localStorage.setItem('username-email', JSON.stringify(email))
    
    try{
    const ticket={
      'fullname':fullname,
      'email':email,
      'github':github,
      'pic':profilePicInput,
      'ticketId':ticketId,
      'date':new Date().toLocaleString()
    }
    tickets.push(ticket)
    console.log(tickets)
    localStorage.setItem('tickets', JSON.stringify(tickets))
    alert('Ticket booked successfully')
    window.location.href='generated_ticket.html'
  }
  catch(error){console.log(error)}


    
  })
}
else{
  console.log('not main page')
}

window.addEventListener('load', ()=>{
  
  
  tickets.forEach(ticket => {
    const div=document.createElement('div')
    div.className='ticket'
    div.innerHTML=`
      
      <div class="ticket-header">
        <p class="event-name"><img src="./assets/images/logo-full.svg"></p>
        <p class="event-date">${ticket.date} / Austin, TX</p>
      </div>
      <div class="ticket-body">
        <img src="${ticket.pic}" alt="${ticket.fullname}'s Profile" class="profile-pic" />
        <div class="user-info">
          <h3>${ticket.fullname}</h3>
          <p>@${ticket.github}</p>
        </div>
        <div class="ticket-number">#${ticket.ticketId}</div>
      </div>
    
    `
    if(ticketslist){
    ticketslist.appendChild(div)
    }
    
  });
  if(!tickets){
    ticketslist.textContent='No ticket at the momment'
  }

})
