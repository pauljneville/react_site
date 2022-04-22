
export const siteLinks = {
    portfolio: { url: "/", label: "Home" },
    dogblog: { url: "/dogblog", label: "Dog Blog" },
    mathblog: { url: "/mathblog", label: "Math Blog " },
    plantpurchase: { url: "/plantpurchase", label: "Plant Purchase" },
    foodbook: { url: "/foodbook", label: "Food Book" },
    dogtrain: { url: "/dogtrain", label: "Dog Train" },
};

export const mathBlogLinks = {
    home: { url: siteLinks.mathblog.url, label: "Home" },
};

export const dogBlogLinks = {
    index: { url: siteLinks.dogblog.url, label: "Index" },
    home: { url: siteLinks.dogblog.url, label: "Home" },
    about: { url: siteLinks.dogblog.url + "/about", label: "About" },
    friends: { url: siteLinks.dogblog.url + "/friends", label: "Friends" },
    signup: { url: siteLinks.dogblog.url + "/signup", label: "Sign-Up" },
    confirm: { url: siteLinks.dogblog.url + "/confirm", label: "Confirm" },
    login: { url: siteLinks.dogblog.url + "/login", label: "Log-In" },
    profile: { url: siteLinks.dogblog.url + "/profile", label: "Profile" },
    create: { url: siteLinks.dogblog.url + "/create", label: "New Blog" },
    details: { url: siteLinks.dogblog.url + "/blogs/:id", label: "Details" },
    blogs: { url: siteLinks.dogblog.url + "/blogs/", label: "Blogs" },
};

export const dogTrainLinks = {
    home: { url: siteLinks.dogtrain.url, label: "Home" },
    training: { url: siteLinks.dogtrain.url + "/training", label: "Training" },
    walking: { url: siteLinks.dogtrain.url + "/walking", label: "Walking" },
    login: { url: siteLinks.dogtrain.url + "/login", label: "Login" },
    signup: { url: siteLinks.dogtrain.url + "/signup", label: "Signup" },
}