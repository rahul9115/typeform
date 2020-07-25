module.exports = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:  process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    cookiekey: process.env.COOKIE_KEY, 
     mongoURI: process.env.MONGODB_URI,
    absoluteURI:"https://intense-badlands-91337.herokuapp.com"
}
