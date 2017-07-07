from django import forms
from models import Profile

class ProfileForm(forms.ModelForm):
	profile_pic = forms.FileField(widget=forms.ClearableFileInput(attrs={'class' : 'form-control-file'}))
	bio = forms.CharField(widget=forms.Textarea(attrs={'class' : 'form-control'}))
	location = forms.CharField(widget=forms.TextInput(attrs={'class' : 'form-control'}))
	birth_date = forms.DateField(widget=forms.DateInput(attrs={'class' : 'form-control'}))

	class Meta:
		model = Profile
		fields = ['profile_pic', 'bio', 'location', 'birth_date'] 