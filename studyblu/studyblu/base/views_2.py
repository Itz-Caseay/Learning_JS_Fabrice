from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.http import JsonResponse
from .models import Room, Topic, Message, User, Add, Report
from .forms import RoomForm, UserForm, MyUserCreationForm
from django.db.models import Q
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

def login_user_2(request):
    page =('login')
    
    if request.user.is_authenticated:
        return redirect('light-index')
    
    if request.method == 'POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        
        try:
            user=User.objects.get(username=username)
        except:
            messages.info(request, 'user does not exist')
        
        user=authenticate(request, username=username,  password=password)
        if user is not None:
            login(request, user)
            messages.info(request, 'login succesfull')
            return redirect('light-index')

       
            
            
    context={'page':page}
    
    return render(request, 'light/base/login_register.html', context)



        
      
            


@login_required(login_url='login')
def logout_user_2(request):
    logout(request)
    messages.info(request, 'logout succesfull')
    return redirect('light-index')

@login_required(login_url='login')
def edit_user_2(request):
    form=UserForm(instance=request.user)
    if request.method == 'POST':
        form=UserForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
          form.save()
          messages.info(request, 'Account updated succesfully')
          return redirect('light-profile-page', pk=request.user.id)
    context={'form':form}
     
    return render(request, 'light/base/edit-user.html', context)

@login_required(login_url='login')
def settings_2(request):
    form=UserForm(instance=request.user)
    if request.method == 'POST':
        form=UserForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
          form.save()
          return redirect('light-profile-page', pk=request.user.id)
    context={'form':form}
     
    return render(request, 'light/settings.html', context)

   
  



def register_user_2(request):
    form=MyUserCreationForm()
    if request.method=='POST':
        form = MyUserCreationForm(request.POST, request.FILES )
        if form.is_valid():
            user=form.save(commit=False)
            user.username=user.username.lower()
            user.save()
            login(request, user)
            messages.info(request, 'Account created succesfully')
            return redirect('light-index')
        else:
            messages.error(request, 'An Error Occoured During Registration')

            
        
    
    return render(request, 'light/base/signup.html', {'form':form})

def unread_2(request):
    unread=Message.objects.all()
    unreadCount = unread.filter(is_read=False).count()
  
     
    context={'unreadCount':unreadCount}
    return render(request, 'light/base/feed_components.html', context)
    
         
def index_2(request):
    q=request.GET.get('q') if request.GET.get('q') !=None else ''
    db=Room.objects.filter(
        Q(topic__name__icontains=q) |
        Q(title__icontains=q)|
        Q(description__icontains=q)
        # Q(is_read__icontains=q)
        
    ).order_by('-created')
    if request.user.is_authenticated:
        unread=Room.objects.all()
        unread_count={}
        for room in unread:
        
            unread_count[room.id] = Message.objects.filter( is_read=False).count()
    else:
        unread=[0]
        unread_count={}
    # if unread.filter(is_read=False) == True:
    # #  unread.is_read = True
    #  unreadCount = unread.filter(is_read=False).count()


    
        
    
   
        
    
    topics=Topic.objects.all()[:5]
    top=Topic.objects.all()
    room_count=db.count()
    
    room_messages=Message.objects.filter(Q(room__topic__name__icontains=q))[:5]
    
    context={'db':db, 'topics':topics, 'room_count':room_count, 'room_messages':room_messages, 'top':top, 'unread_count':unread_count, 'q':q}
    return render(request, 'light/home.html', context)

def unread_notif_2(request):
    if request.user.is_authenticated:
        unread=Message.objects.all()
        unread_count = unread.filter(is_read=False).count()
        unread_counts = Message.objects.filter(user=request.user, is_read=False).count()
        
    else:
        unread_count = 0

    context={'unread_count':unread_count}
    return render(request, 'light/home.html',context )
    
def mark_read_2(request):
    if request.user.is_authenticated:
        try:
            unread_notifiactions = Message.objects.filter(user=request.user, is_read=False)
            unread_notifiactions.update(is_read=True)
            return JsonResponse({'status':'success'})
        except Exception as e:
            return JsonResponse({'status':'error', 'error':str(e)})
    else:
        return JsonResponse({'status':'error', 'error':'user not authenticated'})

def home_2(request,pk):
    room=Room.objects.get(id=pk)
    room_messages = room.message_set.all().order_by('created')
    participants=room.participants.all().order_by('-date_joined')
    
    room_host=room.host
    
    room.participants.add(room.host)
    joined=room.participants.count()-1 
    
    
    if request.method=='POST':  
        if request.FILES.get('files') is None and request.FILES.get('image') is None  :           
            form=Message.objects.create(
            user=request.user,
            room = room ,
            body=request.POST.get('body'),
            # files=request.FILES.get('files'),
            # image=request.POST.get('image')   
        )
            
        elif request.FILES.get('files') is not None and request.FILES.get('image') is None  :
            form=Message.objects.create(
            user=request.user,
            room = room ,
            body=request.POST.get('body'),
            files=request.FILES.get('files'),
        ) 
        
        elif request.FILES.get('files') is None and request.FILES.get('image') is not None: 
            form=Message.objects.create(
            user=request.user,
            room = room ,
            body=request.POST.get('body'),
            image=request.FILES.get('image'),
        )
            
        
          
            
         
        
            

        # if files:
        #         files=request.FILES.get('files'),    
            
        
       
            
        # else:
        #     room.participants.add(request.user) 
     

             

        return redirect('light-home', pk=room.id)
    
    else:
          if request.GET.get('join') is not None:
            room.participants.add(request.user)
            messages.info(request, 'you joined this room')
          elif request.GET.get('leave') is not None: 
              messages.info(request, 'you left this room')
              room.participants.remove(request.user)
              
          
    

    def read(request, pk):
        m_read=Message.objects.get(id=pk)
        m_read.is_read=True
        m_read.save()
    def unread(request, user):
        return Message.objects.filter(user=user, is_read=False).count()
    def unread_view(request, pk):
        unread_m=unread(request.user)
        return render(request, 'light/base/feed_componets.html', {'unread_m':unread_m})        
            
            
                
        
    
    context= {'room':room, 'room_messages':room_messages, 'room_messages':room_messages, 'participants':participants, 'joined':joined}
    return render(request, 'light/room.html', context)

# @login_required(login_url='login')
# def joinuser(request, pk):
#     join=Room.objects.get(id=pk)
   
#     participants=join.participants.all() 
#     if request.method == 'POST':
        
#         join.participants.add(request.user)
#         return redirect('light-home', pk=join.id)
    
  
#     context={ 'participants':participants}
#     return render(request, 'light/room.html', context)
        
@login_required(login_url='login')       
def user_profile_2(request, pk):
    user=User.objects.get(id=pk)
    db=user.room_set.all()
    rooms=Room.objects.all()
    room_messages=user.message_set.all()
    
    topics=Topic.objects.all()
    context={'user':user, 'db':db, 'room_messages':room_messages, 'topics':topics, 'rooms':rooms }
    return render(request, 'light/profile.html' , context)

@login_required(login_url='login')
def account_info_2(request, pk):
    user=User.objects.get(id=pk)
    db=user.room_set.all()
    rooms=Room.objects.all()
    room_messages=user.message_set.all()
    topics=Topic.objects.all()
    context={'user':user, 'db':db, 'room_messages':room_messages, 'topics':topics, 'rooms':rooms }
    return render(request, 'light/account.html' , context)

@login_required(login_url='login')
def create_room_2(request):
    form=RoomForm()
    room=Room.objects.all()
    
    topics=Topic.objects.all()
    if request.method == 'POST':
        topic_name=request.POST.get('topic')
        topic, created= Topic.objects.get_or_create(name=topic_name)
        
        Room.objects.create(
            host=request.user,
            topic=topic,
            title=request.POST.get("title"),
            description=request.POST.get("description"),
            
            
        )
        # form=RoomForm(request.POST)
        # if form.is_valid():
        #     room=form.save(commit=False)
        #     room.host=request.user
        #     room.save()
        messages.info(request, 'Room created succesfully')
        return redirect('light-index')
    context={'form':form, 'topics':topics}
    return render(request, 'light/base/room_form.html', context)

@login_required(login_url='login')
def update_room_2(request, pk):
    room=Room.objects.get(id=pk)
    form=RoomForm(instance=room)
    topics=Topic.objects.all()
    
    
    if request.user!=room.host:
        return HttpResponse(' sorry you are not allowed to update this room')
    
    
    if request.method == 'POST':
        topic_name=request.POST.get('topic')
        topic, created= Topic.objects.get_or_create(name=topic_name)
        room.title=request.POST.get("title")
        room.topic=topic
        room.description=request.POST.get("description")
        room.save()
        messages.info(request, 'Room updated succesfully')
        return redirect('light-home', pk=room.id)
    context={'form':form, 'topics':topics,  'room':room}   
    return render(request, 'light/base/room_form.html', context)

@login_required(login_url='login')
def delete_room_2(request, pk):
    room=Room.objects.get(id=pk)
    if request.user!=room.host:
        return HttpResponse(' sorry you are not allowed delete this room')
    
    if request.method=='POST':
        room.delete()
        messages.info(request, 'Room deleted succesfully')
        return redirect('light-index')
        
    return render(request, 'light/delete.html', {'obj':room})

@login_required(login_url='login')
def user_delete_2(request, pk):
    room=Message.objects.get(id=pk)
    

    if request.user!=room.user:
        return HttpResponse(' sorry you are not allowed delete this ')
    
    if request.method=='POST':
        room.delete()
        messages.info(request, 'Message deleted succesfully')
        return redirect('light-index')
        
    return render(request, 'light/delete.html', {'obj':room})

@login_required(login_url='login')
def delete_account_2(request, pk):
    user=User.objects.get(id=pk)
    
    if request.user != user:
        return HttpResponse(' sorry you are not allowed delete this account ')
    
    if request.method=='POST':
        user.delete()
        
        messages.info(request, 'Message deleted succesfully')
        return redirect('light-index')
        
    return render(request, 'light/delete.html', {'obj':user})

def activity_2(request):
    
    room_messages = Message.objects.all()[:5]
    
    context= {'room_messages':room_messages}
    
    return render(request, 'light/activity.html', context)   

def topics_2(request):
    q=request.GET.get('q') if request.GET.get('q') !=None else ''
    db=Room.objects.filter(
        Q(topic__name__icontains=q) |
        Q(title__icontains=q)|
        Q(description__icontains=q)
    )
 
    topics=Topic.objects.all()
    room_count=db.count()
    room_messages=Message.objects.filter(Q(room__topic__name__icontains=q))[:10]
    context={'db':db, 'topics':topics, 'room_count':room_count, 'room_messages':room_messages  }

    return render(request, 'light/topics.html', context) 

@login_required(login_url='login')
def report_2(request):
    room=Report.objects.all()
    if request.method == 'POST':
        form=Report.objects.create(
            email=request.user.email,
            subject=request.POST.get('subject'),
            body = request.POST.get('body'),
            username=request.user
        )
        messages.info(request, 'Report send succesfully. It will be reviewd by administrator in a short time')
        return redirect('light-report')
    return render(request, 'light/report.html')

def about_2(request):

    return render(request, 'light/about.html')

def light_2(request):
    return render(request, 'light/settings.html')

def ai(request):
    return render(request, 'light/ai.html')

 
    

    


 

    