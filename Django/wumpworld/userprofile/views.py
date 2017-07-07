from django.shortcuts import render
from django.views.generic.edit import UpdateView
from userprofile.models import Profile
from .forms import ProfileForm
from django.views import generic
from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import redirect 

def profile_view(request, username):
    try:
        u = User.objects.get(username=username)
        p = Profile.objects.get(user=u)
    except User.DoesNotExist:
        raise Http404("User does not exist")
    return render(request, 'profile.html', {'u': u})

def profile_edit(request, username): 
    u = User.objects.get(username=username)
    p = Profile.objects.get(user=u)
    form = ProfileForm(request.POST or None, instance=p)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect("/profile/"+username)
        else:
            return HttpResponse('Error!')
    if not request.user.username == username:
        return redirect("/profile/"+username) 
    return render(request, 'edit.html', {'page_title': "Edit Profile", 'cancel_url': "/profile/"+username, 'form': form, 'submit_text': "Save"})

