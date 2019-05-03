from flask import render_template,url_for, flash,redirect,session,request
from project import app
from project.loginForm import LoginForm,LogoutForm
import requests

@app.route('/',methods=['GET','POST'])
def login():
	loginForm=LoginForm()
	print('->',request.method)
	if loginForm.validate_on_submit():
		print(loginForm.username)
		if loginForm.username.data=='vadon' and loginForm.email.data=='1' and loginForm.password.data=='1':
			session['user']=loginForm.username.data
			#print(session.get('user'))
			return redirect(url_for('index'))
	return render_template('login.html',loginForm=loginForm)

@app.route('/index',methods=['GET','POST'])
def index():

	logoutForm=LogoutForm()

	if logoutForm.validate_on_submit():
		session.pop(logoutForm.username.data,None)
		return redirect(url_for('login'))


	if 'user' in session:
		user=session.get('user')
		return render_template('index.html',user=user,logoutForm=logoutForm)
	
	return redirect(url_for('login'))