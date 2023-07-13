import facebookLogo from "./icon-facebook.svg";
import twitterLogo from "./icon-twitter.svg";
import instagramLogo from "./icon-instagram.svg";
import youtubeLogo from "./icon-youtube.svg";
export const data = [
  {
    name: "facebook",
    logo: facebookLogo,
    username: "@peterkhalil",
    following: {
      name: "followers",
      number: 1404,
      change: 14,
    },
    overview: [
      {
        name: "page views",
        views: 100,
        change: 13,
      },
      {
        name: "likes",
        views: 1500,
        change: 200,
      },
    ],
  },
  {
    name: "twitter",
    logo: twitterLogo,
    username: "@peterkhalil",
    following: {
      name: "followers",
      number: 14664,
      change: 144,
    },
    overview: [
        {
          name: "retweets",
          views: 150,
          change: 50,
        },
        {
          name: "likes",
          views: 500,
          change: 30,
        },
      ],
  },
  {
    name: "instagram",
    logo: instagramLogo,
    username: "@peter3khalil",
    following: {
      name: "followers",
      number: 11050,
      change: 50,
    },
    overview: [
        {
          name: "profile views",
          views: 100000,
          change: 1050,
        },
        {
          name: "likes",
          views: 5200,
          change: 300,
        },
      ],
  },
  {
    name: "youtube",
    logo: youtubeLogo,
    username: "@peterkhalil",
    following: {
      name: "subscribers",
      number: 1220,
      change: -100,
    },
    overview: [
        {
          name: "total views",
          views: 50600,
          change: -18,
        },
        {
          name: "likes",
          views: 8000,
          change: -8,
        },
      ],
  },
];
