
export const imageUpload = async(video) => {
    let newImages=[];

    for(const clip of video){
        const formData = new FormData()

        formData.append('file', clip)

        formData.append('cloud_name', "daggokgzh")
        formData.append('upload_preset', "ruzm3rcy")
        
        const res = await fetch('https://api.cloudinary.com/v1_1/daggokgzh/upload',{
            method: "POST",
            body: formData
        })
        const data = await res.json()
        newImages.push({
            public_id: data.public_id,
            url: data.secure_url
        })
    }
    return newImages

} 