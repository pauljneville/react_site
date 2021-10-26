
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { storage, storageRef, uploadBytesResumable, getDownloadURL } from '../firebase.config';
import dogProfile from '../assets/dog-profile.PNG';

const Profile = () => {
    const auth = useAuth();

    const [file, setFile] = useState('');
    const [url, setUrl] = useState('');
    const [localUrl, setLocalUrl] = useState('');
    const [resizedUrl, setResizedUrl] = useState('../assets/dog-profile.PNG');
    const [fallback, setFallback] = useState(false);

    var canvasImage;
    var canvasElement;
    var canvasContext;

    useEffect(
        () => {
            setUrl(auth.user.photoURL);
            // eslint-disable-next-line
            if (!canvasElement) { canvasElement = document.getElementById('imgCanvas'); }
            // eslint-disable-next-line
            if (!canvasContext) { canvasContext = canvasElement.getContext('2d'); }
            // eslint-disable-next-line
            if (!canvasImage) { canvasImage = new Image(); }
            canvasImage.onload = function () {
                console.log('canvasImage is loading');
                // context.drawImage(img, 0, 0, 200, 150);
                var MAX_WIDTH = 237;
                var MAX_HEIGHT = 237;
                var width = canvasImage.width;
                var height = canvasImage.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvasElement.width = width;
                canvasElement.height = height;
                canvasContext.drawImage(canvasImage, 0, 0, width, height);
            };
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (url) {
            console.log('url effect updated');
            setUrl(url);
        }
    }, [url]);


    const handleFirebaseUpload = async (e) => {
        e.preventDefault();

        console.log("start of size reduction");

        const canvas = document.getElementById('imgCanvas');
        const context = canvas.getContext('2d');
        console.log(context);
        var img = new Image();
        img.onload = function () {
            // context.drawImage(img, 0, 0, 200, 150);

            var MAX_WIDTH = 237;
            var MAX_HEIGHT = 237;
            var width = img.width;
            var height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            context.drawImage(img, 0, 0, width, height);

            // UPLOAD TO FIREBASE
            // TODO how to get a file from a canvas....
            var dataURL = canvas.toDataURL('image/jpeg', 0.75);
            console.log(dataURL);

            setResizedUrl(img.src);

            console.log("start of upload");
            if (file === '') {
                console.log(`not an image, the image file is a ${typeof (file)}`);
                return;
            }
            const profileRef = storageRef(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(profileRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // auth.setProfile();
                    // console.log('Uploaded a blob or file!');
                    // console.log(snapshot);
                },
                (error) => {
                    console.log('uploadTask error');
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setUrl(downloadURL);
                        auth.updateProfileURL(downloadURL);
                    });

                    // URL.revokeObjectURL(localUrl);
                }
            );

        };
        img.src = localUrl;
        // setResizedUrl(localUrl);



    }

    const reloadSrc = (e) => {
        if (fallback) {
            e.target.src = dogProfile;
        } else {
            e.target.src = url;
            setFallback(true);
        }
    }

    const handleImageAsFile = async (e) => {
        if (!e.target.files[0]) return;

        setFile(e.target.files[0]);

        try {
            var newUrl = URL.createObjectURL(e.target.files[0]);
            setLocalUrl(newUrl);
            // console.log('newUrl');
            // console.log(newUrl);
            // if (canvasImage === null) { canvasImage = new Image(); }
            // canvasImage.src = newUrl;
            // console.log('canvasImage.src');
            // console.log(canvasImage.src);


            // // img.onload = () => {
            // const canvas = document.getElementById('imgCanvas');
            // console.log(canvas);
            // const context = canvas.getContext('2d');
            // console.log(context);
            // console.log(img);

            // context.drawImage(img, 0, 0, 200, 300);
            // img.src = e.target.files[0].name;
            // //--
            // img.onload = () => {
            //     var MAX_WIDTH = 437;
            //     var MAX_HEIGHT = 437;
            //     var width = img.width;
            //     var height = img.height;

            //     if (width > height) {
            //         if (width > MAX_WIDTH) {
            //             height *= MAX_WIDTH / width;
            //             width = MAX_WIDTH;
            //         }
            //     } else {
            //         if (height > MAX_HEIGHT) {
            //             width *= MAX_HEIGHT / height;
            //             height = MAX_HEIGHT;
            //         }
            //     }
            //     canvas.width = width;
            //     canvas.height = height;
            //     context.drawImage(img, 0, 0, width, height);
            // }
            // img.src = e.target.files[0].name;
        } catch (error) {
            console.log('error resizing image');
            console.log(error);
        }
    }

    // let Drop = (child) =>
    //     <div onDragOver={e => e.preventDefault()}
    //         onDrop={e => {
    //             e.preventDefault()
    //             var image = new Image();
    //             let file = e.dataTransfer.files[0];
    //             let url = URL.createObjectURL(file);
    //             console.log(file.width + ', ' + file.height);
    //             console.log("url: " + url); var img = new Image();
    //             image.src = url;
    //             image.onload = function () {
    //                 console.log(this.width + " " + this.height);
    //                 URL.revokeObjectURL(url);
    //             }
    //         }}
    //     >
    //         Drop Here
    //     </div>

    return (
        <div className="content">
            <h2>Your Lali Profile</h2>
            <div className="auth-form profile">
                <img src={url} alt="Profile" onError={reloadSrc} />
                <img src={resizedUrl} alt="Resized" onError={reloadSrc} />
                <h3>Name: {auth.user.displayName}</h3>
                <h3>Email: {auth.user.email}</h3>

                <canvas key={localUrl} id="imgCanvas" height="200" width="150" />

                <form onSubmit={handleFirebaseUpload}>
                    <input key={url} type="file" onChange={handleImageAsFile} />
                    <button disabled={!file}>upload to firebase</button>
                </form>
                {url !== '' && <p>🥦</p>}
            </div>
            {/* <Drop /> */}
        </div>
    );
}

export default Profile;