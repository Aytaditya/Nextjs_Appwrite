const conf={
    appwriteUrl:String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId:String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
}// now we dont have to use question marks thsi is a better way to do it

export default conf;