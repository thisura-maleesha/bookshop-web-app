const LoginForm=document.getElementById('LoginForm');
LoginForm.addEventListener('submit',function(event)
{
	event.preventDefault();
    const UserName = document.getElementById('UserName').value;
    const Password = document.getElementById('Password').value;
if(UserName && Password)
	{
	console.log("submitting:",UserName,Password);
	alert("login successful for"+" "+UserName);

}
else
{
	alert ("please fill in all required fields.");
}
});

	
