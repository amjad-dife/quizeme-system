var myRecorder = 
{
    objects:{context:null,stream:null,recorder:null},
    init:function() 
        { 
            console.log("iam inside intiate function");
            if (null === myRecorder.objects.context) 
            {
                myRecorder.objects.context = new(window.AudioContext||window.webkitAudioContext);
            }
        },
    start:function() 
        {
            console.log("iam in start function");
            var options = {audio:true,video:false};
            navigator.mediaDevices.getUserMedia(options).then
            (
                function(stream) 
                {  
                    console.log("iam inside the callback function ");
                    myRecorder.objects.stream = stream;
                    console.log(myRecorder.objects.stream);
                    myRecorder.objects.recorder = new Recorder(myRecorder.objects.context.createMediaStreamSource(stream),{numChannels: 1} );
                    myRecorder.objects.recorder.record();
                }
            ).catch(function(err){console.log(err);});
        },
    stop:function(event) 
        {              
            const elElement = event.currentTarget;
            const elParent = elElement.parentNode;
            var listObject = elParent.nextSibling;
            console.log("iam inside stop function");
            let urlStr="";
            if ( null !== myRecorder.objects.stream) 
            {
                myRecorder.objects.stream.getAudioTracks()[0].stop();
              
            }
            if ( null !== myRecorder.objects.recorder) 
            {
              
                //console.log("i am here 2 ");
                myRecorder.objects.recorder.stop();
                // Export the WAV file
                myRecorder.objects.recorder.exportWAV(function(blob) 
                {
                    var url = (window.URL|| window.webkitURL).createObjectURL(blob);
                        

                        // Prepare the playback
                        const audioObject = document.createElement("audio");
                        audioObject.setAttribute("controls","");
                        audioObject.setAttribute("src",url);
                        console.log(audioObject);
                        listObject.appendChild(audioObject);    
                        urlStr = url.toString();
                        console.log(urlStr); 
                });
              
            }
            // return urlStr;
            return urlStr;
        }
};