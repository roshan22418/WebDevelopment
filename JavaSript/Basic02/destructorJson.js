const tutorialYoutubeChannel = {
    ChannelName:"sikhoWithIIITD",
    ContentList:["JavaScript","DSA in C++","HTML","CSS"],
    targetAudiance:"Begginer",
    Educator:"Roshan and Tarandeep"
}


console.log(tutorialYoutubeChannel.ContentList);  // this thing is too long so we need Object De-structure

const {ContentList:ListSub} = tutorialYoutubeChannel   


console.log(ListSub) 



//Now comes with Json from the API data comes in JSON formate before the Json Formate DaTA COEMS FROM IN xml



// {
//     "Name":"roshan kumar mahto",
//     "MobileNo":7217708385,
//     "GmailId":"roshan22418@iiitd.ac.in",
//     "hosting":"roshan"
// }


// [
//     {},
//     {},
//     {}
// ]

// for the visulization use json formater 