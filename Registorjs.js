const RegistorForm=document.getElementById('RegistorForm');
RegistorForm.addEventListener('submit',function(event)
{
	event.preventDefault();
    const UserName = document.getElementById('UserName').value;
	const Email = document.getElementById('Email').value;
    const Password = document.getElementById('Password').value;
if(UserName && Password)
	{
	console.log("submitting:",UserName,Email);
	alert("Registor successful for"+" "+UserName);

}
else
{
	alert ("please fill in all required fields.");
}
});
