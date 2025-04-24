const chatData = [
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
    name: "John Mayers",
    time: "3 min ago",
    status: "Accountant",
    messages: [
      { sender: "John Mayers", text: "Hi, how can I help you?" },
      {
        sender: "Tony Stark",
        text: "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
      },
      {
        sender: "John Mayers",
        text: "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
      { sender: "Tony Stark", text: "john.mayers@gmail.com" },
    ],
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
    name: "Tony Stark",
    time: "10 min ago",
    status: "Genius, Billionaire, Playboy, Philanthropist",
    messages: [
      { sender: "Tony Stark", text: "Hi, how can I help you?" },
      {
        sender: "John Mayers",
        text: "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
      },
      {
        sender: "Tony Stark",
        text: "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
      { sender: "John Mayers", text: "tony.stark@gmail.com" },
    ],
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
    name: "S. Johansson",
    time: "3 hours ago",
    status: "Black Widow",
    messages: [
      { sender: "S. Johansson", text: "Hi, how can I assist you?" },
      {
        sender: "Tony Stark",
        text: "Hey, I need some help with the latest mission details.",
      },
      {
        sender: "S. Johansson",
        text: "Sure, I will send you the details shortly.",
      },
    ],
  },
  {
    avatar:
      "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
    name: "Jeremy Renner",
    time: "4 hours ago",
    status: "Hawkeye",
    messages: [
      {
        sender: "Jeremy Renner",
        text: "Hey, I need to talk about the mission tomorrow.",
      },
      { sender: "S. Johansson", text: "Sure, let's discuss it." },
    ],
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
    name: "Anthony Mackie",
    time: "8 hours ago",
    status: "Falcon",
    messages: [
      {
        sender: "Anthony Mackie",
        text: "Hello! Do you need my help with anything?",
      },
      {
        sender: "Tony Stark",
        text: "Yes, we need to prepare for a flight test.",
      },
      { sender: "Anthony Mackie", text: "I'm on it!" },
    ],
  },
  {
    avatar:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
    name: "Chris Evans",
    time: "22 hours ago",
    status: "Captain America",
    messages: [
      {
        sender: "Chris Evans",
        text: "Hey, I need to go over the latest strategy.",
      },
      { sender: "S. Johansson", text: "Sure, let's review the plan." },
    ],
  },
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
    name: "Chris Hemsworth",
    time: "1 day ago",
    status: "Thor the god of thunder",
    messages: [
      {
        sender: "Chris Hemsworth",
        text: "I am ready for the mission, are we all set?",
      },
      {
        sender: "Tony Stark",
        text: "Almost, just need a final check on the equipment.",
      },
    ],
  },
  {
    avatar: "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
    name: "Mark Ruffalo",
    time: "Dec 10",
    status: "The Incredible Hulk",
    messages: [
      {
        sender: "Mark Ruffalo",
        text: "I think we need to talk about some new research.",
      },
      { sender: "Tony Stark", text: "I'll arrange a meeting for that." },
    ],
  },
  {
    avatar:
      "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
    name: "Tom Hiddleston",
    time: "Dec 8",
    status: "Loki",
    messages: [
      {
        sender: "Tom Hiddleston",
        text: "I have some thoughts on our next mission.",
      },
      { sender: "Chris Hemsworth", text: "Let's discuss it." },
    ],
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
    name: "Don Cheadle",
    time: "Dec 6",
    status: "Rhodey",
    messages: [
      { sender: "Don Cheadle", text: "We need to talk about the logistics." },
      { sender: "Tony Stark", text: "I'm on it, let's sort it out." },
    ],
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
    name: "Stan Lee",
    time: "Dec 4",
    status: "The Big Daddy",
    messages: [
      { sender: "Stan Lee", text: "Excelsior!" },
      { sender: "Tony Stark", text: "I miss your energy." },
    ],
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
    name: "S.L. Jackson",
    time: "Dec 2",
    status: "Shield",
    messages: [
      {
        sender: "S.L. Jackson",
        text: "We need to discuss a new mission brief.",
      },
      { sender: "Chris Evans", text: "Let's get to it." },
    ],
  },
];
